import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const canonicalOrigin = "https://www.drhamidphysio.in";
const priceAsOf = "October 2026"; // The current website price copy was introduced in Git on 25 October 2026.
const homeVisitPriorityAreas = [
  "Kokapet",
  "Gandipet",
  "Narsingi",
  "Jubilee Hills",
  "Banjara Hills",
  "Gachibowli",
  "Financial District",
  "HITEC City",
  "Puppalguda",
  "Lanco Hills",
  "Alkapur Township",
  "Shaikpet",
  "Tolichowki",
];
const clinicReviewDraftUrls = new Set([
  `${canonicalOrigin}/privacy-policy`,
  `${canonicalOrigin}/terms-and-conditions`,
]);

const decodeHtml = (value) => value.replace(/&(#x[\da-f]+|#\d+|[a-z][\da-z]+);/gi, (entity, token) => {
  if (token[0] === "#") {
    const isHex = token[1]?.toLowerCase() === "x";
    const codePoint = Number.parseInt(token.slice(isHex ? 2 : 1), isHex ? 16 : 10);
    try {
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity;
    } catch {
      return entity;
    }
  }

  const namedEntities = {
    amp: "&",
    apos: "'",
    bull: "•",
    copy: "©",
    gt: ">",
    hellip: "…",
    ldquo: "“",
    lsquo: "‘",
    lt: "<",
    mdash: "—",
    nbsp: " ",
    ndash: "–",
    quot: '"',
    rdquo: "”",
    reg: "®",
    rsquo: "’",
  };

  return namedEntities[token.toLowerCase()] || entity;
});

const readAttribute = (attributes, name) => {
  const match = attributes.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
  return decodeHtml(match?.[1] ?? match?.[2] ?? match?.[3] ?? "");
};

const toAbsoluteUrl = (href, canonicalUrl) => {
  if (!href) return "";
  try {
    const resolved = new URL(href, canonicalUrl);
    if (resolved.hostname === "drhamidphysio.in" || resolved.hostname === "www.drhamidphysio.in") {
      resolved.protocol = "https:";
      resolved.hostname = "www.drhamidphysio.in";
    }
    return resolved.href;
  } catch {
    return href;
  }
};

const htmlToMarkdown = (sourceHtml, canonicalUrl) => {
  let html = sourceHtml
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<(script|style|svg|noscript|header|nav|footer)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, " ")
    .replace(/<input\b[^>]*\/?>/gi, " ")
    .replace(/<textarea\b[^>]*>[\s\S]*?<\/textarea\s*>/gi, " ")
    .replace(/<select\b[^>]*>[\s\S]*?<\/select\s*>/gi, " ");

  const hiddenElementPattern = /<([a-z][\w:-]*)\b(?=[^>]*(?:\shidden(?:\s|=|>)|\saria-hidden\s*=\s*["']true["']))[^>]*>[\s\S]*?<\/\1\s*>/gi;
  let previousHtml;
  do {
    previousHtml = html;
    html = html.replace(hiddenElementPattern, " ");
  } while (html !== previousHtml);

  let markdown = "";
  const linkStack = [];
  const tokenPattern = /<\/?([a-z][\w:-]*)\b([^>]*)>|([^<]+)|</gi;
  let token;

  while ((token = tokenPattern.exec(html))) {
    if (token[3]) {
      markdown += decodeHtml(token[3]);
      continue;
    }

    if (!token[1]) {
      markdown += "<";
      continue;
    }

    const rawTag = token[0];
    const tagName = token[1].toLowerCase();
    const isClosing = rawTag.startsWith("</");
    const attributes = token[2] || "";

    if (!isClosing) {
      if (/^h[1-6]$/.test(tagName)) markdown += `\n\n${"#".repeat(Number(tagName[1]))} `;
      else if (["p", "div", "section", "article", "main", "aside", "figure", "figcaption", "details"].includes(tagName)) markdown += "\n\n";
      else if (["ul", "ol"].includes(tagName)) markdown += "\n";
      else if (tagName === "li") markdown += "\n- ";
      else if (tagName === "br") markdown += "\n";
      else if (tagName === "hr") markdown += "\n\n---\n\n";
      else if (["strong", "b"].includes(tagName)) markdown += "**";
      else if (["em", "i"].includes(tagName)) markdown += "*";
      else if (tagName === "code") markdown += "`";
      else if (tagName === "a") {
        linkStack.push(toAbsoluteUrl(readAttribute(attributes, "href"), canonicalUrl));
        if (linkStack.at(-1)) markdown += "[";
      } else if (tagName === "img") {
        const alt = readAttribute(attributes, "alt");
        const src = toAbsoluteUrl(readAttribute(attributes, "src"), canonicalUrl);
        if (alt && src) markdown += `![${alt}](${src})`;
      } else if (tagName === "tr") markdown += "\n";
      else if (["td", "th"].includes(tagName)) markdown += " | ";
      continue;
    }

    if (/^h[1-6]$/.test(tagName)) markdown += "\n\n";
    else if (["p", "div", "section", "article", "main", "aside", "figure", "figcaption", "details", "ul", "ol", "li", "tr"].includes(tagName)) markdown += "\n";
    else if (["strong", "b"].includes(tagName)) markdown += "**";
    else if (["em", "i"].includes(tagName)) markdown += "*";
    else if (tagName === "code") markdown += "`";
    else if (tagName === "a") {
      const href = linkStack.pop();
      if (href) markdown += `](${href})`;
    }
  }

  return markdown
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
};

const metadataContent = (head, name) => {
  const tag = [...head.matchAll(/<meta\b([^>]*)>/gi)]
    .map(([, attributes]) => attributes)
    .find((attributes) => readAttribute(attributes, "name").toLowerCase() === name.toLowerCase());
  return tag ? readAttribute(tag, "content") : "";
};

const markdownRoute = (route) => `/markdown${route === "/" ? "/index.md" : `${route}.md`}`;

const createMarkdownPage = ({ canonicalUrl, title, description, body }) => {
  const metadata = [
    `Canonical HTML URL: <${canonicalUrl}>`,
    title ? `Page title: ${title}` : "",
    description ? `Page description: ${description}` : "",
  ].filter(Boolean).join("\n\n");
  return `<!-- Generated during the production build from the prerendered public page. -->\n\n${metadata}\n\n---\n\n${body}\n`;
};

const datePricing = (markdown) => markdown
  .replace(
    /Consultation fee: ₹300\. Physiotherapy treatment starts from ₹500; the total cost varies by treatment\./g,
    `As of ${priceAsOf}, consultation fee: ₹300. Physiotherapy treatment starts from ₹500; the total cost varies by treatment.`,
  )
  .replace(
    /The website currently lists a consultation fee of ₹300 and physiotherapy treatment from ₹500, with total treatment cost varying by treatment\./g,
    `As of ${priceAsOf}, the website lists a consultation fee of ₹300 and physiotherapy treatment from ₹500, with total treatment cost varying by treatment.`,
  );

const vite = await createServer({
  configFile: path.join(root, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const { renderRoute } = await vite.ssrLoadModule("/src/entry-server.tsx");
  const { allServices } = await vite.ssrLoadModule("/src/data/services/index.ts");
  const { blogPosts } = await vite.ssrLoadModule("/src/data/blogPosts.ts");
  const { conditions } = await vite.ssrLoadModule("/src/data/conditions.ts");
  const {
    FACEBOOK_PROFILE_URL,
    GOOGLE_BUSINESS_PROFILE_URL,
    INSTAGRAM_PROFILE_URL,
    PRACTO_PROFILE_URL,
    YOUTUBE_CHANNEL_URL,
  } = await vite.ssrLoadModule("/src/lib/businessInfo.ts");
  const template = await readFile(path.join(root, "dist/index.html"), "utf8");
  const paths = [
    "/",
    "/about",
    "/services",
    "/conditions",
    "/reviews",
    "/blogs",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    ...allServices.flatMap(({ slug }) => [`/services/${slug}`, `/${slug}`]),
    ...conditions.map(({ slug }) => `/conditions/${slug}`),
    ...blogPosts.map(({ slug }) => `/blogs/${slug}`),
  ];
  const indexableCanonicalUrls = new Set();
  const indexablePages = new Map();

  for (const route of paths) {
    const { appHtml, head } = renderRoute(route);
    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    const hasHelmetTitle = /<title[^>]*>\s*[^<\s][\s\S]*?<\/title>/i.test(head);
    const hasHelmetDescription = /<meta\b(?=[^>]*\bname="description")/i.test(head);
    if (hasHelmetTitle) html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/i, "");
    if (hasHelmetDescription) html = html.replace(/<meta\b(?=[^>]*\bname="description")[^>]*>/i, "");
    const canonicalTag = [...head.matchAll(/<link\b[^>]*>/gi)]
      .map(([tag]) => tag)
      .find((tag) => /\brel="canonical"/i.test(tag));
    const helmetCanonical = canonicalTag?.match(/\bhref="([^"]+)"/i)?.[1];
    const routeCanonical = route === "/" ? `${canonicalOrigin}/` : `${canonicalOrigin}${route}`;
    const canonical = route !== "/" && helmetCanonical === "https://www.drhamidphysio.in/"
      ? routeCanonical
      : helmetCanonical || routeCanonical;
    const robotsMetaTags = [...`${template}\n${head}`.matchAll(/<meta\b[^>]*>/gi)]
      .map(([tag]) => tag);
    const isNoindex = robotsMetaTags.some((tag) => {
      const name = tag.match(/\bname=["']([^"']+)["']/i)?.[1]?.toLowerCase();
      const content = tag.match(/\bcontent=["']([^"']+)["']/i)?.[1]?.toLowerCase() || "";
      return /^(robots|googlebot(?:-[\w-]+)?|bingbot)$/.test(name || "")
        && /(?:^|[,\s])(?:noindex|none)(?:$|[,\s])/.test(content);
    });
    const currentRouteUrl = route === "/"
      ? `${canonicalOrigin}/`
      : `${canonicalOrigin}${route}`;
    if (canonical === currentRouteUrl && !isNoindex) {
      indexableCanonicalUrls.add(canonical);
      indexablePages.set(canonical, {
        route,
        canonicalUrl: canonical,
        title: decodeHtml(head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || ""),
        description: metadataContent(head, "description"),
        body: htmlToMarkdown(appHtml, canonical),
      });
    }
    const cleanHead = head.replace(/<link\b(?=[^>]*\brel="canonical")[^>]*>/gi, "");
    html = html.replace(/<link\b(?=[^>]*\brel="canonical")[^>]*>/gi, "");
    html = html.replace("</head>", `${cleanHead}\n<link rel="canonical" href="${canonical}" />\n</head>`);

    const outputPath = route === "/"
      ? path.join(root, "dist/index.html")
      : path.join(root, "dist", route.slice(1), "index.html");
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }
  const escapeXml = (value) => value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
  const sitemapEntries = [...indexableCanonicalUrls]
    .sort()
    .map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`)
    .join("\n");
  // Do not infer lastmod from build time; reliable per-URL content modification dates are not tracked for every page.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
  await writeFile(path.join(root, "public/sitemap.xml"), sitemap);
  await writeFile(path.join(root, "dist/sitemap.xml"), sitemap);

  const markdownPages = [...indexablePages.values()]
    .filter(({ canonicalUrl }) => !clinicReviewDraftUrls.has(canonicalUrl))
    .sort((left, right) => left.canonicalUrl.localeCompare(right.canonicalUrl))
    .map((page) => ({ ...page, markdown: datePricing(createMarkdownPage(page)) }));
  const markdownByCanonicalUrl = new Map(markdownPages.map((page) => [page.canonicalUrl, page]));

  for (const page of markdownPages) {
    const routeFile = page.route === "/" ? "index.md" : `${page.route.slice(1)}.md`;
    const markdownPath = path.join(root, "dist", "markdown", ...routeFile.split("/"));
    await mkdir(path.dirname(markdownPath), { recursive: true });
    await writeFile(markdownPath, page.markdown);
  }

  const markdownLink = (canonicalUrl) => {
    const page = markdownByCanonicalUrl.get(canonicalUrl);
    return page ? ` · [Markdown](${canonicalOrigin}${markdownRoute(page.route)})` : "";
  };
  const canonicalPage = (route) => indexablePages.get(route === "/" ? `${canonicalOrigin}/` : `${canonicalOrigin}${route}`);
  const mainPageLinks = [
    ["Home", "/"],
    ["About the clinic", "/about"],
    ["Services", "/services"],
    ["Conditions", "/conditions"],
    ["Reviews", "/reviews"],
    ["Articles", "/blogs"],
    ["Contact", "/contact"],
  ].map(([label, route]) => {
    const page = canonicalPage(route);
    if (!page) return "";
    return `- [${label}](${page.canonicalUrl})${markdownLink(page.canonicalUrl)}`;
  }).filter(Boolean);

  const privacyPage = canonicalPage("/privacy-policy");
  const termsPage = canonicalPage("/terms-and-conditions");
  const legalPageLinks = [
    privacyPage && `- [Privacy Policy (clinic-review draft)](${privacyPage.canonicalUrl})`,
    termsPage && `- [Terms & Conditions (clinic-review draft)](${termsPage.canonicalUrl})`,
  ].filter(Boolean);

  const serviceLinks = allServices.map((service) => {
    const canonicalUrl = `${canonicalOrigin}/services/${service.slug}`;
    return `- [${service.title}](${canonicalUrl})${markdownLink(canonicalUrl)}`;
  });
  const conditionLinks = conditions.map((condition) => {
    const canonicalUrl = `${canonicalOrigin}/conditions/${condition.slug}`;
    return `- [${condition.title}](${canonicalUrl})${markdownLink(canonicalUrl)}`;
  });
  const blogLinks = blogPosts.map((post) => {
    const canonicalUrl = `${canonicalOrigin}/blogs/${post.slug}`;
    return `- [${post.title}](${canonicalUrl})${markdownLink(canonicalUrl)}`;
  });

  const aboutPageMarkdown = markdownByCanonicalUrl.get(`${canonicalOrigin}/about`)?.markdown || "";
  const contactPageMarkdown = markdownByCanonicalUrl.get(`${canonicalOrigin}/contact`)?.markdown || "";
  const servicesPageMarkdown = markdownByCanonicalUrl.get(`${canonicalOrigin}/services`)?.markdown || "";
  const practitionerCredentials = aboutPageMarkdown.split("\n").find((line) => /BPT.*MPT.*Registration No\./i.test(line));
  const clinicalExperience = aboutPageMarkdown.match(/8\+ years of clinical experience/i)?.[0];
  const clinicEstablished = aboutPageMarkdown.match(/established in 2021/i)?.[0];
  const careModel = aboutPageMarkdown.match(/founder-operated, with individualized one-to-one care/i)?.[0];
  const clinicPhone = contactPageMarkdown.match(/\+91\s*76010\s*26596/)?.[0]?.replace(/\s+/g, " ");
  const clinicAddress = contactPageMarkdown.match(/4-3\/81,[^\n]+/)?.[0];
  const priceLine = servicesPageMarkdown.match(/As of [^\n]*consultation fee: ₹300[^\n]*/i)?.[0];

  if (!practitionerCredentials || !clinicalExperience || !clinicEstablished || !careModel || !clinicPhone || !clinicAddress || !priceLine) {
    throw new Error("Could not derive required clinic facts from the prerendered About, Contact, and Services pages.");
  }

  const llmsText = [
    "# Dr Hamid’s Physio and Pain Clinic",
    "",
    "Dr Hamid’s Physio and Pain Clinic in Manikonda, Hyderabad provides physiotherapy for back and neck pain, joint and sports injuries, post-surgery rehabilitation, and neurological rehabilitation.",
    "",
    "## Clinic information",
    "",
    `- Website: ${canonicalOrigin}/`,
    "- Location: Puppalguda, Manikonda, Hyderabad, Telangana, India.",
    `- Address: ${clinicAddress}`,
    `- Phone: ${clinicPhone}`,
    `- Google Business Profile: ${GOOGLE_BUSINESS_PROFILE_URL}`,
    `- Practitioner: ${practitionerCredentials}`,
    `- Clinical experience: ${clinicalExperience}.`,
    `- Clinic established: ${clinicEstablished.replace(/^established in /i, "")}.`,
    `- Care model: ${careModel}.`,
    `- Listed prices: ${priceLine}`,
    `- Home visits: generally targeted within an approximate 15 km radius of Manikonda; actual availability depends on the patient’s address and should be confirmed with the clinic. Priority target areas include ${homeVisitPriorityAreas.join(", ")}, along with the clinic’s other existing nearby areas. This is not a claim that each location is exactly within 15 km by road.`,
    `- Instagram: ${INSTAGRAM_PROFILE_URL}`,
    `- Facebook: ${FACEBOOK_PROFILE_URL}`,
    `- YouTube: ${YOUTUBE_CHANNEL_URL}`,
    `- Practo: ${PRACTO_PROFILE_URL}`,
    "",
    "## Main pages",
    "",
    ...mainPageLinks,
    ...legalPageLinks,
    "",
    "## Services",
    "",
    ...serviceLinks,
    "",
    "## Conditions and patient resources",
    "",
    ...conditionLinks,
    "",
    "## Blog articles",
    "",
    ...blogLinks,
    "",
    "## Full content and format notes",
    "",
    `- Full text for eligible public pages: [llms-full.txt](${canonicalOrigin}/llms-full.txt)`,
    `- AI discovery notes: [ai.txt](${canonicalOrigin}/ai.txt)`,
    `- XML sitemap: ${canonicalOrigin}/sitemap.xml`,
    "- Linked Markdown copies are generated at build time from eligible prerendered canonical HTML pages. The two pages labeled “clinic-review draft” above remain linked as HTML only; their draft text is not copied into Markdown files.",
    "- The website’s health information is general education, not an individual diagnosis or medical advice.",
    "",
  ].join("\n");

  const llmsFullText = [
    "# Full text of eligible public pages",
    "",
    `Markdown copies are generated at build time from prerendered canonical HTML pages. Prices shown below are dated as of ${priceAsOf}. Pages labeled “clinic-review draft” are omitted from this file.`,
    "",
    ...markdownPages.map((page) => page.markdown),
  ].join("\n\n---\n\n");

  const aiText = [
    "# AI-readable site information",
    "",
    `Canonical website: ${canonicalOrigin}/`,
    `Site summary and page directory: ${canonicalOrigin}/llms.txt`,
    `Full text of eligible public pages: ${canonicalOrigin}/llms-full.txt`,
    `XML sitemap of canonical indexable HTML pages: ${canonicalOrigin}/sitemap.xml`,
    "",
    "The Markdown copies are generated during the production build from prerendered public HTML. They are publicly accessible, carry an HTTP X-Robots-Tag: noindex, follow header, and are excluded from the XML sitemap. Normal canonical HTML pages remain the authoritative indexable versions.",
    "The clinic’s educational content does not replace an individual health assessment or medical advice. Follow the canonical page links for the current published HTML content.",
    "",
  ].join("\n");

  const discoveryFiles = new Map([
    ["llms.txt", llmsText],
    ["llms-full.txt", llmsFullText],
    ["ai.txt", aiText],
  ]);
  for (const [fileName, content] of discoveryFiles) {
    await writeFile(path.join(root, "public", fileName), content);
    await writeFile(path.join(root, "dist", fileName), content);
  }

  console.log(`Prerendered ${paths.length} routes; sitemap contains ${indexableCanonicalUrls.size} canonical indexable URLs; generated ${markdownPages.length} Markdown pages.`);
} finally {
  await vite.close();
}
