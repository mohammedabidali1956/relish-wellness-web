import React from "react";
import { preloadBlogPostContent } from "@/data/blogPosts";

type PageModule = { default: React.ComponentType };
type PreloadablePage = React.ComponentType & {
  preload: () => Promise<PageModule>;
};

const lazyPage = (loadPage: () => Promise<PageModule>): PreloadablePage => {
  let pageModule: PageModule | undefined;
  let pagePromise: Promise<PageModule> | undefined;
  const preload = () => {
    if (pageModule) return Promise.resolve(pageModule);
    if (!pagePromise) {
      pagePromise = loadPage()
        .then((loadedPage) => {
          pageModule = loadedPage;
          return loadedPage;
        })
        .catch((error) => {
          pagePromise = undefined;
          throw error;
        });
    }
    return pagePromise;
  };
  const Page = (() => {
    if (!pageModule) throw preload();
    return React.createElement(pageModule.default);
  }) as unknown as PreloadablePage;
  Page.preload = preload;
  return Page;
};

export const AboutPage = lazyPage(() => import("@/pages/AboutPage"));
export const ServicesPage = lazyPage(() => import("@/pages/ServicesPage"));
export const ReviewsPage = lazyPage(() => import("@/pages/ReviewsPage"));
export const BlogsPage = lazyPage(() => import("@/pages/BlogsPage"));
export const BlogPostPage = lazyPage(() => import("@/pages/BlogPostPage"));
export const ConditionsPage = lazyPage(() => import("@/pages/ConditionsPage"));
export const ConditionPage = lazyPage(() => import("@/pages/ConditionPage"));
export const ServiceDetailPage = lazyPage(() => import("@/pages/ServiceDetailPage"));
export const ContactPage = lazyPage(() => import("@/pages/ContactPage"));
export const PrivacyPolicyPage = lazyPage(() => import("@/pages/PrivacyPolicyPage"));
export const TermsAndConditionsPage = lazyPage(() => import("@/pages/TermsAndConditionsPage"));
export const NotFound = lazyPage(() => import("@/pages/NotFound"));

export async function preloadRoute(url: string): Promise<void> {
  const pathname = new URL(url, "https://www.drhamidphysio.in").pathname;
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return;

  const [section, slug] = segments;
  if (segments.length === 1) {
    switch (section) {
      case "about": return void (await AboutPage.preload());
      case "services": return void (await ServicesPage.preload());
      case "conditions": return void (await ConditionsPage.preload());
      case "reviews": return void (await ReviewsPage.preload());
      case "blogs": return void (await BlogsPage.preload());
      case "contact": return void (await ContactPage.preload());
      case "privacy-policy": return void (await PrivacyPolicyPage.preload());
      case "terms-and-conditions": return void (await TermsAndConditionsPage.preload());
      default: return void (await ServiceDetailPage.preload());
    }
  }

  if (segments.length === 2) {
    switch (section) {
      case "services": return void (await ServiceDetailPage.preload());
      case "conditions": return void (await ConditionPage.preload());
      case "blogs":
        await Promise.all([
          BlogPostPage.preload(),
          preloadBlogPostContent(decodeURIComponent(slug)),
        ]);
        return;
    }
  }

  await NotFound.preload();
}
