import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { CaseStudyKey } from "@/components/CaseStudyCharts";

const DeferredChartContent = lazy(() =>
  import("@/components/CaseStudyCharts").then((module) => ({
    default: module.CaseStudyChartContent,
  })),
);

const sectionIds: Record<CaseStudyKey, string> = {
  cervical: "cervical-case-statistical-charts-heading",
  lumbar: "lumbar-case-statistical-charts-heading",
  medial_meniscus: "medial-meniscus-case-statistical-charts-heading",
};

const sectionTitles: Record<CaseStudyKey, string> = {
  cervical: "Statistical Charts — Cervical Case",
  lumbar: "Statistical Charts — Lumbar Case",
  medial_meniscus: "Statistical Charts — Medial Meniscus Case",
};

const chartCounts: Record<CaseStudyKey, number> = {
  cervical: 5,
  lumbar: 6,
  medial_meniscus: 6,
};

interface DeferredCaseStudyChartsProps {
  caseStudy: CaseStudyKey;
}

const DeferredCaseStudyCharts = ({ caseStudy }: DeferredCaseStudyChartsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={`${caseStudy}-statistical-charts`}
      className="space-y-4"
      aria-labelledby={sectionIds[caseStudy]}
      data-deferred-charts={caseStudy}
    >
      <h3
        id={sectionIds[caseStudy]}
        className="font-serif text-xl font-bold text-[#081a2e]"
      >
        {sectionTitles[caseStudy]}
      </h3>
      {shouldLoad ? (
        <Suspense
          fallback={(
            <div
              className="grid grid-cols-1 gap-4 xl:grid-cols-2"
              aria-hidden="true"
            >
              {Array.from({ length: chartCounts[caseStudy] }, (_, index) => (
                <div
                  key={`${caseStudy}-chart-placeholder-${index}`}
                  className="min-h-[25rem] rounded-xl border border-[#e5dec9] bg-white"
                />
              ))}
            </div>
          )}
        >
          <DeferredChartContent caseStudy={caseStudy} />
        </Suspense>
      ) : (
        <div
          className="grid grid-cols-1 gap-4 xl:grid-cols-2"
          aria-hidden="true"
        >
          {Array.from({ length: chartCounts[caseStudy] }, (_, index) => (
            <div
              key={`${caseStudy}-chart-placeholder-${index}`}
              className="min-h-[25rem] rounded-xl border border-[#e5dec9] bg-white"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default DeferredCaseStudyCharts;
