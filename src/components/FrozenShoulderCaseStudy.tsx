import type { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import frozenShoulderSeo from "@/data/patientResources/frozenShoulderSeo";
import FrozenShoulderArticle from "@/data/patientResources/frozen-shoulder-case-study.mdx";

const clinicHomepage = frozenShoulderSeo.internalLinkOptions.find((link) => link.label === "Clinic homepage");
const servicesPage = frozenShoulderSeo.internalLinkOptions.find((link) => link.label === "Existing services page");
const homepagePath = clinicHomepage ? new URL(clinicHomepage.url).pathname : "/";
const servicesPath = servicesPage ? new URL(servicesPage.url).pathname : "/services";

const ArticleDiv = ({ className, children, ...props }: ComponentPropsWithoutRef<"div">) => {
  if (className === "case-study-chart-grid") {
    return (
      <div className="my-4 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
        {children}
      </div>
    );
  }

  return <div className={className} {...props}>{children}</div>;
};

const ArticleLink = ({ href, children, ...props }: ComponentPropsWithoutRef<"a">) => {
  if (clinicHomepage && href === clinicHomepage.url) {
    return <Link to={homepagePath}>{children}</Link>;
  }

  return <a href={href} {...props}>{children}</a>;
};

const mdxComponents = {
  a: ArticleLink,
  div: ArticleDiv,
  h1: ({ children }: ComponentPropsWithoutRef<"h1">) => (
    <h1 id="frozen-shoulder-case-study-title" className="font-serif !text-3xl font-bold text-[#081a2e] sm:!text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-10 font-serif !text-2xl font-bold text-[#081a2e] sm:!text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-7 font-serif !text-xl font-bold text-[#081a2e] sm:!text-2xl">
      {children}
    </h3>
  ),
  h4: ({ children }: ComponentPropsWithoutRef<"h4">) => (
    <h4 className="mt-6 font-semibold text-[#081a2e]">
      {children}
    </h4>
  ),
  table: ({ children }: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-[#e5dec9]">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        {children}
      </table>
    </div>
  ),
  th: ({ children }: ComponentPropsWithoutRef<"th">) => (
    <th className="border-b border-[#d6cbaf] bg-[#faf6ed] px-3 py-2 text-left font-semibold text-[#081a2e]">
      {children}
    </th>
  ),
  td: ({ children }: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-[#e5dec9] px-3 py-2 text-[#334155]">
      {children}
    </td>
  ),
};

const FrozenShoulderCaseStudy = () => (
  <section
    id="frozen-shoulder-case-study"
    className="mt-8"
    aria-labelledby="frozen-shoulder-case-study-title"
  >
    <article className="rounded-2xl border border-[#e5dec9] bg-white p-5 shadow-xs sm:p-8">
      <div className="case-study-article-content prose max-w-none prose-headings:text-[#081a2e] prose-p:text-[#334155] prose-strong:text-[#081a2e] prose-li:text-[#334155] prose-a:text-[#8a5d24]">
        <FrozenShoulderArticle components={mdxComponents} />
      </div>

      {servicesPage && (
        <nav
          id="frozen-shoulder-related-links"
          className="mt-8 border-t border-[#e5dec9] pt-5"
          aria-label="Related clinic pages"
        >
          <Link className="font-semibold text-[#8a5d24] underline underline-offset-2" to={servicesPath}>
            {servicesPage.label}
          </Link>
        </nav>
      )}
    </article>
  </section>
);

export default FrozenShoulderCaseStudy;
