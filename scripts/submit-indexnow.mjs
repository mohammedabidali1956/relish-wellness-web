import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const host = "www.drhamidphysio.in";
const origin = `https://${host}`;
const endpoint = "https://api.indexnow.org/indexnow";
const sitemapPath = path.join(root, "public", "sitemap.xml");
const distPath = path.join(root, "dist");
const keyFilePattern = /^([a-f0-9]{32})\.txt$/;

const fail = (message) => {
  console.error(`IndexNow: ${message}`);
  process.exitCode = 1;
};

const decodeXml = (value) => value
  .replaceAll("&amp;", "&")
  .replaceAll("&lt;", "<")
  .replaceAll("&gt;", ">")
  .replaceAll("&quot;", '"')
  .replaceAll("&apos;", "'");

const getOptionValues = (args, option) => {
  const values = [];
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] === option) {
      const value = args[index + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`${option} requires a URL value.`);
      }
      values.push(value);
      index += 1;
    }
  }
  return values;
};

const canonicalUrlOrError = (value) => {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`Invalid URL: ${value}`);
  }

  if (
    url.protocol !== "https:" ||
    url.hostname !== host ||
    url.port ||
    url.username ||
    url.password ||
    url.search ||
    url.hash
  ) {
    throw new Error(`URL must be a canonical HTTPS URL on ${host} without query or fragment: ${value}`);
  }
  if (url.href !== value) throw new Error(`URL is not in canonical form: ${value}`);

  return url.href;
};

const getPrerenderedPage = (url) => {
  const pathname = new URL(url).pathname;
  const routePath = pathname === "/" ? "index.html" : `${pathname.slice(1)}/index.html`;
  return path.join(distPath, routePath);
};

const verifyPrerenderedCanonical = async (url, allowMissing = false) => {
  const htmlPath = getPrerenderedPage(url);
  let html;
  try {
    html = await readFile(htmlPath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      // A URL absent from generated output may be a deleted URL supplied explicitly.
      if (allowMissing) return;
      throw new Error(`No generated production HTML found for sitemap URL ${url}; run the production build first.`);
    }
    throw error;
  }

  const canonicals = [...html.matchAll(/<link\b[^>]*\brel=["']canonical["'][^>]*>/gi)];
  if (canonicals.length !== 1 || !canonicals[0][0].includes(`href="${url}"`) && !canonicals[0][0].includes(`href='${url}'`)) {
    throw new Error(`Generated HTML is missing a unique self-canonical for ${url}`);
  }

  const noindex = [...html.matchAll(/<meta\b[^>]*>/gi)].some(([tag]) => {
    const name = tag.match(/\bname=["']([^"']+)["']/i)?.[1]?.toLowerCase() || "";
    const content = tag.match(/\bcontent=["']([^"']+)["']/i)?.[1]?.toLowerCase() || "";
    return /^(robots|googlebot(?:-[\w-]+)?|bingbot)$/.test(name) && /(?:^|[\s,])(?:noindex|none)(?:$|[\s,])/.test(content);
  });
  if (noindex) throw new Error(`Generated HTML is marked noindex: ${url}`);
};

try {
  const args = process.argv.slice(2);
  const singleUrls = getOptionValues(args, "--url");
  const bulk = args.includes("--all");
  const dryRun = args.includes("--dry-run");
  const unknownArgs = args.filter((arg, index) =>
    arg !== "--all" && arg !== "--url" && arg !== "--dry-run" && args[index - 1] !== "--url"
  );

  if (unknownArgs.length) throw new Error(`Unknown argument(s): ${unknownArgs.join(" ")}`);
  if (bulk === (singleUrls.length > 0)) {
    throw new Error("Choose exactly one mode: --all for the sitemap, or one or more --url <canonical-url> values.");
  }

  const keyFiles = await (await import("node:fs/promises")).readdir(path.join(root, "public"));
  const keyFileName = keyFiles.find((name) => keyFilePattern.test(name));
  if (!keyFileName) throw new Error("No public 32-character hexadecimal IndexNow key file was found.");

  const key = keyFileName.slice(0, -4);
  const keyContent = await readFile(path.join(root, "public", keyFileName), "utf8");
  if (!/^[a-f0-9]{32}$/.test(key) || keyContent !== key) {
    throw new Error(`Invalid key file ${keyFileName}: filename and exact file contents must be the same 32-character lowercase hexadecimal key.`);
  }

  let urls;
  if (bulk) {
    const sitemap = await readFile(sitemapPath, "utf8");
    if (!/<urlset\b[^>]*xmlns=["']http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9["']/i.test(sitemap)) {
      throw new Error("Sitemap is missing a valid sitemap.org urlset root.");
    }
    urls = [...sitemap.matchAll(/<loc>\s*([\s\S]*?)\s*<\/loc>/gi)]
      .map(([, value]) => canonicalUrlOrError(decodeXml(value.trim())))
      .filter((url, index, all) => all.indexOf(url) === index);
    if (!urls.length) throw new Error("No valid canonical URLs found in public/sitemap.xml.");
  } else {
    urls = [...new Set(singleUrls.map(canonicalUrlOrError))];
  }

  for (const url of urls) await verifyPrerenderedCanonical(url, !bulk);

  const payload = {
    host,
    key,
    keyLocation: `${origin}/${keyFileName}`,
    urlList: urls,
  };
  if (dryRun) {
    console.log(`Dry run: validated ${urls.length} canonical URL(s); no request was sent.`);
    console.log(`Key verification URL: ${payload.keyLocation}`);
    process.exit(0);
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const responseText = await response.text();
  console.log(`IndexNow HTTP ${response.status} ${response.statusText}`);
  console.log(responseText || "(empty response body)");
  console.log(`URLs submitted: ${urls.length}`);

  if (response.status === 429) {
    fail("Rate limit reached. Wait before retrying; do not repeatedly resubmit the same URLs.");
  } else if (!response.ok) {
    fail(`Submission failed. Check the key, key file accessibility, and URL validity. HTTP ${response.status}.`);
  }
} catch (error) {
  fail(error.message);
}
