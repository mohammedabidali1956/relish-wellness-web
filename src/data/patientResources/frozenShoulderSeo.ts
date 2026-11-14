import seoAndLinkingSource from "./frozen-shoulder-seo-and-linking.json?raw";

export type FrozenShoulderSeo = {
  title: string;
  metaDescription: string;
  internalLinkOptions: Array<{ label: string; url: string }>;
};

const frozenShoulderSeo = JSON.parse(seoAndLinkingSource) as FrozenShoulderSeo;

export default frozenShoulderSeo;
