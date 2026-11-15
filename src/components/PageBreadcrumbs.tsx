import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export interface PageBreadcrumbItem {
  label: string;
  path: string;
}

interface PageBreadcrumbsProps {
  items: PageBreadcrumbItem[];
  className?: string;
}

const canonicalOrigin = "https://www.drhamidphysio.in";

const PageBreadcrumbs = ({ items, className = "" }: PageBreadcrumbsProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${canonicalOrigin}${item.path}`,
    })),
  };

  return (
    <div className={`page-breadcrumbs ${className}`}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb">
        <ol className="flex min-w-0 flex-wrap items-center gap-2 text-xs text-[#5e6b78] sm:text-sm">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li key={item.path} className="flex min-w-0 items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true">/</span>
                )}
                {isCurrent ? (
                  <span aria-current="page" className="truncate font-medium text-[#72521f]">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.path} className="shrink-0 hover:text-[#081a2e] hover:underline">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumbs;
