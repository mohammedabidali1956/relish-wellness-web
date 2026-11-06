import { useState } from "react";
import { Link } from "react-router-dom";
import { patientTopicResources } from "@/data/patientResources";

const PatientResourceHub = () => {
  const [activeTopic, setActiveTopic] = useState("all");
  const visibleTopics = activeTopic === "all"
    ? patientTopicResources
    : patientTopicResources.filter((item) => item.id === activeTopic);

  return (
    <div id="resource-pathways" className="mt-8">
      <div className="mb-6 flex flex-col gap-4 border-b border-[#e5dec9] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8a5d24]">
            ANSWER · RANK · PROVE · SELL
          </span>
          <h3 className="mt-2 font-serif text-2xl font-bold text-[#081a2e]">
            Find a useful next step by topic
          </h3>
          <p className="mt-2 leading-relaxed text-[#4a5568]">
            Start with a specific question, read a broader guide, review genuine case evidence where available, or explore the related clinic service.
          </p>
        </div>
        <Link
          to="/contact#appointment-request"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-[#081a2e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#122842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]"
        >
          Book a Clinic Appointment
        </Link>
      </div>

      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter patient resources by topic">
        <button
          type="button"
          onClick={() => setActiveTopic("all")}
          aria-pressed={activeTopic === "all"}
          className={`min-h-10 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            activeTopic === "all"
              ? "border-[#081a2e] bg-[#081a2e] text-white"
              : "border-[#d6cbaf] bg-white text-[#334155] hover:bg-[#f4ede0]"
          }`}
        >
          All priority topics
        </button>
        {patientTopicResources.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveTopic(item.id)}
            aria-pressed={activeTopic === item.id}
            className={`min-h-10 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              activeTopic === item.id
                ? "border-[#081a2e] bg-[#081a2e] text-white"
                : "border-[#d6cbaf] bg-white text-[#334155] hover:bg-[#f4ede0]"
            }`}
          >
            {item.topic}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {visibleTopics.map((item) => (
          <article
            key={item.id}
            className="flex h-full flex-col rounded-2xl border border-[#e5dec9] bg-[#faf6ed] p-5 sm:p-6"
          >
            <h4 className="font-serif text-xl font-bold text-[#081a2e]">
              {item.topic}
            </h4>

            <div className="mt-4 space-y-4">
              {item.answer && (
                <div className="border-l-2 border-[#8a5d24] pl-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#8a5d24]">
                    ANSWER · Patient question
                  </p>
                  <Link
                    to={item.answer.path}
                    className="mt-1 block font-semibold text-[#081a2e] underline decoration-[#c4a46b] underline-offset-2 hover:text-[#8a5d24]"
                  >
                    {item.answer.title}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">
                    {item.answer.summary}
                  </p>
                </div>
              )}

              {item.guide && (
                <div className="border-l-2 border-[#52796f] pl-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#35665a]">
                    RANK · Broader guide
                  </p>
                  <Link
                    to={item.guide.path}
                    className="mt-1 block font-semibold text-[#081a2e] underline decoration-[#9cb5ac] underline-offset-2 hover:text-[#35665a]"
                  >
                    {item.guide.title}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">
                    {item.guide.summary}
                  </p>
                </div>
              )}

              {item.evidence && (
                <div className="border-l-2 border-[#9673a6] pl-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#725281]">
                    PROVE · Individual case evidence
                  </p>
                  <Link
                    to={item.evidence.path}
                    className="mt-1 block font-semibold text-[#081a2e] underline decoration-[#b8a2c3] underline-offset-2 hover:text-[#725281]"
                  >
                    {item.evidence.title}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">
                    {item.evidence.summary}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#64748b]">
                    {item.evidence.note}
                  </p>
                </div>
              )}

              {item.evidenceGap && (
                <p className="rounded-lg border border-dashed border-[#c9bea6] bg-white/70 p-3 text-sm leading-relaxed text-[#64748b]">
                  <span className="font-bold text-[#725281]">PROVE · </span>
                  {item.evidenceGap}
                </p>
              )}
            </div>

            <div className="mt-auto border-t border-[#e5dec9] pt-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#8a5d24]">
                SELL · Existing clinic service
              </p>
              <Link
                to={item.servicePath}
                className="mt-1 inline-flex min-h-11 items-center gap-2 font-semibold text-[#081a2e] underline decoration-[#c4a46b] underline-offset-2 hover:text-[#8a5d24]"
              >
                {item.serviceTitle}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 border-t border-[#e5dec9] pt-6">
        <h4 className="font-semibold text-[#081a2e]">
          More existing patient guides
        </h4>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            to="/blogs/should-i-visit-a-gp-or-physio-for-my-pain"
            className="rounded-lg border border-[#e5dec9] bg-white p-4 text-sm font-semibold text-[#8a5d24] underline underline-offset-2"
          >
            Should I see a general physician or physiotherapist?
          </Link>
          <Link
            to="/blogs/should-i-visit-an-orthopaedician-or-physiotherapist-for-my-pain"
            className="rounded-lg border border-[#e5dec9] bg-white p-4 text-sm font-semibold text-[#8a5d24] underline underline-offset-2"
          >
            Should I see an orthopaedician or physiotherapist?
          </Link>
          <Link
            to="/blogs/how-many-physiotherapy-sessions-needed-manikonda"
            className="rounded-lg border border-[#e5dec9] bg-white p-4 text-sm font-semibold text-[#8a5d24] underline underline-offset-2"
          >
            How many physiotherapy sessions might I need?
          </Link>
          <Link
            to="/blogs/chiropractic-care-or-physiotherapy-for-spine-problems"
            className="rounded-lg border border-[#e5dec9] bg-white p-4 text-sm font-semibold text-[#8a5d24] underline underline-offset-2"
          >
            Chiropractic care or physiotherapy for spine problems?
          </Link>
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-[#64748b]">
        Educational resources do not diagnose an individual. A case study describes one person's experience and does not predict another person's result. Seek medical care for severe, sudden, or concerning symptoms.
      </p>
    </div>
  );
};

export default PatientResourceHub;
