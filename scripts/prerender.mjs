import { createServer } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
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
  const template = await readFile(path.join(root, "dist/index.html"), "utf8");
  const paths = [
    "/",
    "/about",
    "/services",
    "/reviews",
    "/blogs",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    ...allServices.flatMap(({ slug }) => [`/services/${slug}`, `/${slug}`]),
    ...conditions.map(({ slug }) => `/conditions/${slug}`),
    ...blogPosts.map(({ slug }) => `/blogs/${slug}`),
  ];

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
    const routeCanonical = route === "/" ? "https://www.drhamidphysio.in/" : `https://www.drhamidphysio.in${route}`;
    const canonical = route !== "/" && helmetCanonical === "https://www.drhamidphysio.in/"
      ? routeCanonical
      : helmetCanonical || routeCanonical;
    const cleanHead = head.replace(/<link\b(?=[^>]*\brel="canonical")[^>]*>/gi, "");
    html = html.replace(/<link\b(?=[^>]*\brel="canonical")[^>]*>/gi, "");
    html = html.replace("</head>", `${cleanHead}\n<link rel="canonical" href="${canonical}" />\n</head>`);

    const outputPath = route === "/"
      ? path.join(root, "dist/index.html")
      : path.join(root, "dist", route.slice(1), "index.html");
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }
  const canonicalPaths = [
    "/",
    "/about",
    "/services",
    "/reviews",
    "/blogs",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    ...allServices.map(({ slug }) => `/services/${slug}`),
    ...conditions.map(({ slug }) => `/conditions/${slug}`),
    ...blogPosts.map(({ slug }) => `/blogs/${slug}`),
  ];
  const lastModified = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${canonicalPaths.map((route) => `  <url><loc>https://www.drhamidphysio.in${route === "/" ? "/" : route}</loc><lastmod>${lastModified}</lastmod></url>`).join("\n")}\n</urlset>\n`;
  await writeFile(path.join(root, "public/sitemap.xml"), sitemap);
  await writeFile(path.join(root, "dist/sitemap.xml"), sitemap);
  console.log(`Prerendered ${paths.length} routes.`);
} finally {
  await vite.close();
}
