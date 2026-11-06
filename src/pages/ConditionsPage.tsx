import { Helmet } from "react-helmet";
import PainPointGuide from "@/components/PainPointGuide";
import StructuredData from "@/components/StructuredData";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import { MEDICAL_REVIEW_DATE, MEDICAL_REVIEWER_SCHEMA } from "@/lib/medicalReview";

const canonicalUrl = "https://www.drhamidphysio.in/conditions";
const pageTitle = "Conditions and Body PAIN Guide in Manikonda | Dr Hamid’s Physio and PAIN Clinic";
const pageDescription = "Explore the interactive body PAIN guide to select a PAIN area and read general information about common conditions and physiotherapy options in Manikonda, Hyderabad.";

const ConditionsPage = () => {
  return (
    <div id="conditions-page" className="min-h-screen bg-[#faf6ed] text-[#1a202c]">
      <StructuredData
        type="service"
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      />

      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: pageTitle,
            description: pageDescription,
            lastReviewed: MEDICAL_REVIEW_DATE,
            reviewedBy: MEDICAL_REVIEWER_SCHEMA,
          })}
        </script>
      </Helmet>

      <section
        id="conditions-page-intro"
        className="border-b border-[#e5dec9] bg-gradient-to-b from-[#faf6ed] to-[#f4ede0] px-4 py-12 md:py-16"
      >
        <div className="container max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
            Conditions and symptom guide
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#081a2e] mt-3">
            Interactive Body PAIN Guide
          </h1>
          <MedicalReviewByline />
          <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
            Select a body area to explore general information about common pain conditions and physiotherapy. The guide is educational and does not replace an individual clinical assessment.
          </p>
        </div>
      </section>


      <section
        id="patient-resources"
        className="border-b border-[#e5dec9] bg-white px-4 py-12 md:py-16"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
              Patient Resources
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081a2e] mt-2">
              Anonymised cervical and lumbar case studies
            </h2>
            <p className="text-[#4a5568] leading-relaxed mt-3">
              These individual clinical experiences describe presentation, assessment, documented care, and progress. Measured findings and patient-reported outcomes are identified separately. Results are individual and are not typical or guaranteed for every patient.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6">

            <article id="cervical-clinical-case-study" className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#081a2e]">What did one anonymised cervical case show?</h2>
              <p className="text-sm leading-relaxed text-[#334155]">One 35-year-old female IT professional with two months of neck pain, stiffness, restricted movement, cervical spondylosis, and C3–C7 disc bulges completed seven individualised conservative physiotherapy sessions over seven days. Her neurological screen was documented as normal, with no neurological symptoms.</p>
              <p className="text-sm leading-relaxed text-[#334155]"><strong>Measured findings:</strong> VAS pain changed from 8/10 to 1/10 and goniometer-measured cervical movement reached the documented full pain-free range. <strong>Patient-reported:</strong> approximately 70–80% overall relief. This describes one patient's experience, not a typical or guaranteed outcome.</p>
              <details className="rounded-xl border border-[#e5dec9] bg-[#faf6ed] p-4">
                <summary className="cursor-pointer font-semibold text-[#081a2e]">View the full case measurements, care, and follow-up</summary>
                <div className="mt-4 space-y-5 text-sm leading-relaxed text-[#334155]">
                  <p>The recorded presentation included early-morning neck pain and stiffness, difficulty turning the neck, painful end-range lateral flexion, discomfort with forward flexion, and cervical muscle tightness and spasm.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[440px] border-collapse text-left">
                      <caption className="mb-2 text-left font-semibold text-[#081a2e]">Cervical range of motion measured by goniometer</caption>
                      <thead><tr><th className="border-b border-[#d6cbaf] p-2">Movement</th><th className="border-b border-[#d6cbaf] p-2">Before</th><th className="border-b border-[#d6cbaf] p-2">After 7 sessions</th></tr></thead>
                      <tbody>
                        <tr><th className="border-b border-[#e5dec9] p-2">Flexion</th><td className="border-b border-[#e5dec9] p-2">20°</td><td className="border-b border-[#e5dec9] p-2">80°</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Extension</th><td className="border-b border-[#e5dec9] p-2">20°</td><td className="border-b border-[#e5dec9] p-2">70°</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Right lateral flexion</th><td className="border-b border-[#e5dec9] p-2">20°</td><td className="border-b border-[#e5dec9] p-2">45°</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Left lateral flexion</th><td className="border-b border-[#e5dec9] p-2">25°</td><td className="border-b border-[#e5dec9] p-2">45°</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Right rotation</th><td className="border-b border-[#e5dec9] p-2">25°</td><td className="border-b border-[#e5dec9] p-2">70°</td></tr>
                        <tr><th className="p-2">Left rotation</th><td className="p-2">30°</td><td className="p-2">70°</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#081a2e]">Assessment and documented care in this case</h3>
                    <p className="mt-1">Assessment included symptom history, pain response during movement, goniometer-measured cervical range of motion, and review of the patient's cervical X-ray and MRI. The neurological screen included C5–C7 reflexes, C5–T1 myotomes, dermatomal sensation, Spurling's test, ULTT, and distraction testing; the neurological screen was normal.</p>
                    <p className="mt-2">The individual programme used therapeutic ultrasound and interferential therapy as adjuncts, cervical isometric exercises within tolerance, gentle traction introduced after suitability and response were assessed, and home exercise and self-management advice. These were choices documented for this patient only; they are not a standard recommendation for every person with neck pain or spondylosis.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#081a2e]">Progress and follow-up</h3>
                    <p className="mt-1">The case record describes VAS pain falling by one point per session, with roughly 10% improvement within sessions as reported by the patient. The patient reported improved functional comfort. Advice included gradual neck mobility and strengthening, comfortable workstation positioning, avoiding prolonged uninterrupted neck flexion, movement breaks, sleep, and recovery. Monthly follow-up for up to three months was advised.</p>
                  </div>
                </div>
              </details>
              <p className="text-xs leading-relaxed text-[#64748b]">An anonymised clinical experience for education. Outcomes vary and require individual assessment. Symptom improvement does not mean cervical spondylosis or disc bulges were cured or reversed. Patient-identifying details are excluded; the source case records consent for publication.</p>
            </article>
            <article id="lumbar-clinical-case-study" className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#081a2e]">What did one anonymised lumbar case show?</h2>
              <p className="text-sm leading-relaxed text-[#334155]">One 39-year-old female IT professional with six months of lower-back pain, left-leg symptoms, lumbar spondylosis, left L4–S1 radiculopathy, and L3–S1 disc bulges completed seven individualised conservative physiotherapy sessions.</p>
              <p className="text-sm leading-relaxed text-[#334155]"><strong>Measured findings:</strong> VAS pain changed from 9/10 to 1/10, lumbar MMT from 2+/5 to 5/5, and the antalgic gait and left-leg numbness were documented as resolved. <strong>Patient-reported:</strong> 89% overall relief; EQ VAS changed from 35/100 to 85/100. This is one patient's experience, not a typical or guaranteed outcome.</p>
              <details className="rounded-xl border border-[#e5dec9] bg-[#faf6ed] p-4">
                <summary className="cursor-pointer font-semibold text-[#081a2e]">View the full case measurements, assessment, care, and follow-up</summary>
                <div className="mt-4 space-y-5 text-sm leading-relaxed text-[#334155]">
                  <p>Recorded symptoms included chronic lower-back pain radiating into the left leg, morning stiffness, pins and needles and numbness in the left leg, and difficulty walking. Initial gait was antalgic. The MRI described disc bulges at L3–L4, L4–L5, and L5–S1.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[440px] border-collapse text-left">
                      <caption className="mb-2 text-left font-semibold text-[#081a2e]">Recorded measures before and after seven sessions</caption>
                      <thead><tr><th className="border-b border-[#d6cbaf] p-2">Measure</th><th className="border-b border-[#d6cbaf] p-2">Before</th><th className="border-b border-[#d6cbaf] p-2">After</th></tr></thead>
                      <tbody>
                        <tr><th className="border-b border-[#e5dec9] p-2">Pain (VAS)</th><td className="border-b border-[#e5dec9] p-2">9/10</td><td className="border-b border-[#e5dec9] p-2">1/10</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Lumbar range of motion</th><td className="border-b border-[#e5dec9] p-2">50% of normal</td><td className="border-b border-[#e5dec9] p-2">Restored to documented normal values</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Lumbar MMT</th><td className="border-b border-[#e5dec9] p-2">2+/5</td><td className="border-b border-[#e5dec9] p-2">5/5</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Gait</th><td className="border-b border-[#e5dec9] p-2">Antalgic</td><td className="border-b border-[#e5dec9] p-2">Normal, pain-free walking</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Left-leg numbness</th><td className="border-b border-[#e5dec9] p-2">Present</td><td className="border-b border-[#e5dec9] p-2">Resolved as documented</td></tr>
                        <tr><th className="p-2">EQ VAS (patient-rated)</th><td className="p-2">35/100</td><td className="p-2">85/100</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[440px] border-collapse text-left">
                      <caption className="mb-2 text-left font-semibold text-[#081a2e]">Lumbar range of motion measured by goniometer</caption>
                      <thead><tr><th className="border-b border-[#d6cbaf] p-2">Movement</th><th className="border-b border-[#d6cbaf] p-2">Before</th><th className="border-b border-[#d6cbaf] p-2">After 7 sessions</th></tr></thead>
                      <tbody>
                        <tr><th className="border-b border-[#e5dec9] p-2">Flexion</th><td className="border-b border-[#e5dec9] p-2">30°</td><td className="border-b border-[#e5dec9] p-2">60°</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Extension</th><td className="border-b border-[#e5dec9] p-2">15°</td><td className="border-b border-[#e5dec9] p-2">35°</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Right lateral flexion</th><td className="border-b border-[#e5dec9] p-2">10°</td><td className="border-b border-[#e5dec9] p-2">20°</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Left lateral flexion</th><td className="border-b border-[#e5dec9] p-2">10°</td><td className="border-b border-[#e5dec9] p-2">20°</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Right rotation</th><td className="border-b border-[#e5dec9] p-2">8°</td><td className="border-b border-[#e5dec9] p-2">18°</td></tr>
                        <tr><th className="p-2">Left rotation</th><td className="p-2">8°</td><td className="p-2">18°</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[440px] border-collapse text-left">
                      <caption className="mb-2 text-left font-semibold text-[#081a2e]">EQ-5D-5L patient-reported dimensions</caption>
                      <thead><tr><th className="border-b border-[#d6cbaf] p-2">Dimension</th><th className="border-b border-[#d6cbaf] p-2">Before</th><th className="border-b border-[#d6cbaf] p-2">After</th></tr></thead>
                      <tbody>
                        <tr><th className="border-b border-[#e5dec9] p-2">Mobility</th><td className="border-b border-[#e5dec9] p-2">4</td><td className="border-b border-[#e5dec9] p-2">1</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Self-care</th><td className="border-b border-[#e5dec9] p-2">3</td><td className="border-b border-[#e5dec9] p-2">1</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Usual activities</th><td className="border-b border-[#e5dec9] p-2">4</td><td className="border-b border-[#e5dec9] p-2">1</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Pain / discomfort</th><td className="border-b border-[#e5dec9] p-2">4</td><td className="border-b border-[#e5dec9] p-2">2</td></tr>
                        <tr><th className="border-b border-[#e5dec9] p-2">Anxiety / depression</th><td className="border-b border-[#e5dec9] p-2">3</td><td className="border-b border-[#e5dec9] p-2">1</td></tr>
                        <tr><th className="p-2">Health state code</th><td className="p-2">43443</td><td className="p-2">11121</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#081a2e]">Assessment and documented care in this case</h3>
                    <p className="mt-1">MRI documented L3–L4, L4–L5, and L5–S1 disc bulges. Initial neurological findings included left L4, L5, and S1 myotomal deficits, altered sensation and paraesthesia in left L5 and S1 dermatomes, and a diminished left Achilles reflex; patellar reflexes were intact and symmetrical. Left SLR at 45° and the slump test reproduced symptoms; femoral nerve traction was negative.</p>
                    <p className="mt-2">The seven-session programme documented deep heat, interferential therapy, and mechanical lumbar traction adjusted from 20 kg to 25 kg according to tolerance. Progressive lumbar and core strengthening began after about 40% symptom reduction. These interventions describe this individual case only and are not treatment recommendations for every patient.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#081a2e]">Self-management and follow-up</h3>
                    <p className="mt-1">The home programme documented multifidus and transversus abdominis co-activation (bird-dog and modified planks), pain-free-range sciatic nerve sliders, and prone extension only as a symptom-modifying option if central lumbar stiffness returned. Workstation and activity advice was also provided. A four-week reassessment was planned.</p>
                    <p className="mt-2">The case record reports return to full work capacity, resolution of night-time leg pain, and sleep returning to normal. EQ VAS increased by 50 points, from 35 to 85. EQ-5D-5L dimension scores changed as shown in the table; these are patient-reported measures.</p>
                  </div>
                </div>
              </details>
              <p className="text-xs leading-relaxed text-[#64748b]">An anonymised clinical experience for education. Outcomes vary and require individual assessment. Symptom improvement does not mean lumbar spondylosis or disc bulges were cured or reversed. Patient-identifying details are excluded; the source case records consent for publication.</p>
            </article>
          </div>
        </div>
      </section>

      <PainPointGuide />
    </div>
  );
};

export default ConditionsPage;
