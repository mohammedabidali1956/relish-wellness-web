import { Link } from "react-router-dom";
import { patientTopicResources } from "@/data/patientResources";

const ServicePatientResources = ({ serviceSlug }: { serviceSlug: string }) => {
  const topic = patientTopicResources.find((item) => item.servicePath.endsWith(serviceSlug));
  if (!topic) return null;

  return (
    <section
      id="related-patient-resources"
      className="mt-8 rounded-2xl border border-[#e5dec9] bg-white p-5 sm:p-6"
      aria-labelledby="related-patient-resources-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8a5d24]">
            Patient resources · {topic.topic}
          </span>
          <h2 id="related-patient-resources-heading" className="mt-2 font-serif text-xl font-bold text-[#081a2e]">
            Explore related questions and evidence
          </h2>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {topic.answer && (
              <Link className="font-semibold text-[#8a5d24] underline underline-offset-2" to={topic.answer.path}>
                Patient question: {topic.answer.title}
              </Link>
            )}
            {topic.guide && (
              <Link className="font-semibold text-[#8a5d24] underline underline-offset-2" to={topic.guide.path}>
                Broader guide: {topic.guide.title}
              </Link>
            )}
            {topic.evidence && (
              <div>
                <Link className="font-semibold text-[#8a5d24] underline underline-offset-2" to={topic.evidence.path}>
                  Case evidence: {topic.evidence.title}
                </Link>
                <p className="mt-1 text-xs leading-relaxed text-[#64748b]">
                  {topic.evidence.summary} {topic.evidence.note}
                </p>
              </div>
            )}
            {topic.evidenceGap && (
              <p className="text-[#64748b]">
                {topic.evidenceGap}
              </p>
            )}
          </div>
        </div>
        <Link
          to="/conditions#patient-resources"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg border border-[#d6cbaf] px-4 py-2 text-sm font-semibold text-[#081a2e] hover:bg-[#faf6ed]"
        >
          Browse Patient Resources
        </Link>
      </div>
    </section>
  );
};

export default ServicePatientResources;
