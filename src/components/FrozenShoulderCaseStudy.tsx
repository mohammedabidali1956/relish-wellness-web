import {
  Children,
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import frozenShoulderSeo from "@/data/patientResources/frozenShoulderSeo";
import FrozenShoulderArticle from "@/data/patientResources/frozen-shoulder-case-study.mdx";

const clinicHomepage = frozenShoulderSeo.internalLinkOptions.find((link) => link.label === "Clinic homepage");
const servicesPage = frozenShoulderSeo.internalLinkOptions.find((link) => link.label === "Existing services page");
const homepagePath = clinicHomepage ? new URL(clinicHomepage.url).pathname : "/";
const servicesPath = servicesPage ? new URL(servicesPage.url).pathname : "/services";

const getTextContent = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return getTextContent(node.props.children);
  return "";
};

const getTableRows = (children: ReactNode): ReactElement<{ children?: ReactNode }>[] =>
  Children.toArray(children).filter(
    (child): child is ReactElement<{ children?: ReactNode }> => isValidElement(child) && child.type === "tr",
  );

const getTableHeaders = (children: ReactNode): string[] => {
  const sections = Children.toArray(children).filter(isValidElement<{ children?: ReactNode }>);
  const head = sections.find((section) => section.type === "thead");
  const headerRow = head ? getTableRows(head.props.children)[0] : getTableRows(children)[0];

  return headerRow
    ? Children.toArray(headerRow.props.children)
        .filter((cell) => isValidElement<{ children?: ReactNode }>(cell) && cell.type === "th")
        .map((cell) => getTextContent((cell as ReactElement<{ children?: ReactNode }>).props.children))
    : [];
};

const addMobileLabels = (row: ReactElement<{ children?: ReactNode }>, headers: string[]) => {
  let columnIndex = 0;
  const cells = Children.map(row.props.children, (cell) => {
    if (!isValidElement(cell) || cell.type !== "td") return cell;

    const labeledCell = cloneElement(cell as ReactElement<{ "data-label"?: string }>, {
      "data-label": headers[columnIndex] ?? "",
    });
    columnIndex += 1;
    return labeledCell;
  });

  return cloneElement(row, { children: cells });
};

const ResponsiveArticleTable = ({ children }: ComponentPropsWithoutRef<"table">) => {
  const headers = getTableHeaders(children);
  const isGlanceTable = headers.length === 2 && headers[0]?.trim().toLowerCase() === "parameter";
  const labeledChildren = Children.map(children, (section) => {
    if (!isValidElement<{ children?: ReactNode }>(section)) return section;
    if (section.type === "tr") return addMobileLabels(section, headers);

    const rows = Children.map(section.props.children, (row) =>
      isValidElement<{ children?: ReactNode }>(row) && row.type === "tr"
        ? addMobileLabels(row, headers)
        : row,
    );
    return cloneElement(section, { children: rows });
  });

  return (
    <div className={`case-study-table-wrap${isGlanceTable ? " case-study-glance-wrap" : ""}`}>
      <table className={`case-study-responsive-table${isGlanceTable ? " case-study-glance-table" : ""}`}>
        {labeledChildren}
      </table>
    </div>
  );
};

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

const getHeadingClass = (children: ReactNode) => {
  const heading = getTextContent(children).trim().toLowerCase();
  if (heading === "quick answer") return "case-study-quick-answer";
  if (heading === "case at a glance") return "case-study-glance-heading";
  if (heading === "clinical timeline") return "case-study-timeline-heading";
  return "";
};

const mdxComponents = {
  a: ArticleLink,
  div: ArticleDiv,
  h1: ({ children }: ComponentPropsWithoutRef<"h1">) => (
    <h1 id="frozen-shoulder-case-study-title" className="case-study-title font-serif !text-3xl font-bold text-[#081a2e] sm:!text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
    <h2 className={`case-study-section-heading mt-10 font-serif !text-2xl font-bold text-[#081a2e] sm:!text-3xl ${getHeadingClass(children)}`}>
      {children}
    </h2>
  ),
  h3: ({ children }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className={`case-study-subsection-heading mt-7 font-serif !text-xl font-bold text-[#081a2e] sm:!text-2xl ${getHeadingClass(children)}`}>
      {children}
    </h3>
  ),
  h4: ({ children }: ComponentPropsWithoutRef<"h4">) => (
    <h4 className="mt-6 font-semibold text-[#081a2e]">
      {children}
    </h4>
  ),
  table: ResponsiveArticleTable,
};

const FrozenShoulderCaseStudy = () => (
  <section
    id="frozen-shoulder-case-study"
    className="mt-8"
    aria-labelledby="frozen-shoulder-case-study-title"
  >
    <article className="min-w-0 rounded-2xl border border-[#e5dec9] bg-white p-5 shadow-xs sm:p-8">
      <div className="case-study-article-content prose min-w-0 max-w-none prose-headings:text-[#081a2e] prose-p:text-[#334155] prose-strong:text-[#081a2e] prose-li:text-[#334155] prose-a:text-[#8a5d24]">
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
