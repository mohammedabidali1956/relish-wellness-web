import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import { readFileSync } from "node:fs";
import path from "path";
import { componentTagger } from "lovable-tagger";
import remarkGfm from "remark-gfm";

type MdxNode = {
  type: string;
  depth?: number;
  name?: string;
  value?: string;
  children?: MdxNode[];
  attributes?: Array<{
    type: string;
    name: string;
    value: string | null | { type: string; value: string };
  }>;
};

type ChartAsset = { src: string; width: number; height: number };
const chartAssets = JSON.parse(
  readFileSync(path.resolve(__dirname, "src/data/patientResources/frozen-shoulder-chart-assets.json"), "utf8"),
) as Record<string, ChartAsset>;

const setMdxAttribute = (node: MdxNode, name: string, value: string | { type: string; value: string }) => {
  const existing = node.attributes?.find((attribute) => attribute.name === name);
  if (existing) existing.value = value;
  else node.attributes = [...(node.attributes ?? []), { type: "mdxJsxAttribute", name, value }];
};

const visualStatisticsHeadings = new Set([
  "Pain at Rest — Visual Statistics",
  "Activity / Night Pain — Visual Statistics",
  "SPADI — Visual Statistics",
  "Active Flexion — Visual Statistics",
  "Active Abduction — Visual Statistics",
  "Active External Rotation — Visual Statistics",
  "Passive Flexion — Visual Statistics",
]);

const stripFrozenShoulderFrontmatter = {
  name: "strip-frozen-shoulder-frontmatter",
  enforce: "pre" as const,
  transform(source: string, id: string) {
    if (!id.includes("frozen-shoulder-case-study.mdx")) return null;
    return source.replace(/^---\r?\n[\s\S]*?^---\r?\n/m, "");
  },
};

const groupFrozenShoulderCharts = () => (tree: MdxNode) => {
  const nodes = tree.children ?? [];
  const hasFrozenShoulderCharts = nodes.some((node) => {
    const headingText = node.children?.map((child) => child.value ?? "").join("").trim();
    return node.type === "heading" && node.depth === 4 && visualStatisticsHeadings.has(headingText ?? "");
  });
  if (!hasFrozenShoulderCharts) return;

  let groups = 0;
  let mappedImages = 0;

  for (let index = 0; index < nodes.length; index += 1) {
    const heading = nodes[index];
    const headingText = heading.children?.map((child) => child.value ?? "").join("").trim();
    if (heading.type !== "heading" || heading.depth !== 4 || !visualStatisticsHeadings.has(headingText ?? "")) continue;

    const figures = nodes.slice(index + 1, index + 4);
    if (figures.length !== 3 || figures.some((figure) => figure.type !== "mdxJsxFlowElement" || figure.name !== "figure")) {
      throw new Error(`Expected three chart figures after “${headingText}”.`);
    }

    nodes.splice(index + 1, 3, {
      type: "mdxJsxFlowElement",
      name: "div",
      attributes: [{ type: "mdxJsxAttribute", name: "className", value: "case-study-chart-grid" }],
      children: figures,
    });
    groups += 1;
  }

  if (groups !== 7) throw new Error(`Expected seven frozen shoulder chart groups; found ${groups}.`);

  const mapChartImages = (node: MdxNode) => {
    if (node.type.startsWith("mdxJsx") && node.name === "img") {
      const placeholder = node.attributes?.find((attribute) => attribute.name === "src")?.value;
      const asset = typeof placeholder === "string" ? chartAssets[placeholder] : undefined;
      if (!asset) throw new Error(`Unmapped frozen shoulder chart placeholder: ${String(placeholder)}`);

      setMdxAttribute(node, "src", asset.src);
      setMdxAttribute(node, "width", String(asset.width));
      setMdxAttribute(node, "height", String(asset.height));
      setMdxAttribute(node, "loading", "lazy");
      setMdxAttribute(node, "decoding", "async");
      mappedImages += 1;
    }

    node.children?.forEach(mapChartImages);
  };

  tree.children?.forEach(mapChartImages);
  if (mappedImages !== 23) throw new Error(`Expected 23 mapped chart images; found ${mappedImages}.`);
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    stripFrozenShoulderFrontmatter,
    {
      enforce: "pre",
      ...mdx({ remarkPlugins: [remarkGfm, groupFrozenShoulderCharts] }),
    },
    react({ include: /\.(?:[jt]sx?|mdx)$/ }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
