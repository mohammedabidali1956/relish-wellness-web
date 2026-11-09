import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PainPointGuide from "@/components/PainPointGuide";
import StructuredData from "@/components/StructuredData";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import { MEDICAL_REVIEW_DATE, MEDICAL_REVIEWER_SCHEMA } from "@/lib/medicalReview";
import PatientResourceHub from "@/components/PatientResourceHub";
import CaseStudyCharts from "@/components/CaseStudyCharts";

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
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a className="inline-flex min-h-11 items-center rounded-lg bg-[#081a2e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#122842]" href="#patient-resources">
              Browse Patient Resources
            </a>
            <a className="inline-flex min-h-11 items-center rounded-lg border border-[#d6cbaf] bg-white px-4 py-2 text-sm font-semibold text-[#081a2e] hover:bg-[#f4ede0]" href="#interactive-body-pain-guide">
              Open the interactive body guide
            </a>
          </div>
        </div>
      </section>

      <PainPointGuide />

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
              Answers, guides, and genuine case evidence
            </h2>
            <p className="text-[#4a5568] leading-relaxed mt-3">
              Browse existing patient questions and in-depth guides by topic, then explore the relevant clinic service. The interactive Body PAIN Guide is available above.
            </p>
          </div>

          <PatientResourceHub />

          <div className="mt-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#725281]">
              PROVE · Individual clinical experiences
            </span>
            <h3 className="mt-2 font-serif text-2xl font-bold text-[#081a2e]">
              Clinical case studies and outcome charts
            </h3>
            <p className="mt-3 leading-relaxed text-[#4a5568]">
              Explore three separate, anonymised cases. Measured findings and patient-reported outcomes are identified separately; one person's progress does not predict another person's result.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6">

            <article id="cervical-clinical-case-study" className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#081a2e]">What did one anonymised cervical case show?</h2>
              <p className="text-sm leading-relaxed text-[#334155]">One 35-year-old female IT professional with two months of neck pain, stiffness, restricted movement, cervical spondylosis, and C3–C7 disc bulges completed seven individualised conservative physiotherapy sessions over seven days. Her neurological screen was documented as normal, with no neurological symptoms.</p>
              <p className="text-sm leading-relaxed text-[#334155]"><strong>Measured findings:</strong> VAS pain changed from 8/10 to 1/10 and goniometer-measured cervical movement reached the documented full pain-free range. <strong>Patient-reported:</strong> approximately 70–80% overall relief. This describes one patient's experience, not a typical or guaranteed outcome.</p>
              <CaseStudyCharts caseStudy="cervical" />
              <details className="rounded-xl border border-[#e5dec9] bg-[#faf6ed] p-4">
                <summary className="cursor-pointer font-semibold text-[#081a2e]">View the full case measurements, care, and follow-up</summary>
                <div className="mt-4 space-y-5 text-sm leading-relaxed text-[#334155]">
                  <p>The recorded presentation included early-morning neck pain and stiffness, difficulty turning the neck, painful end-range lateral flexion, discomfort with forward flexion, and cervical muscle tightness and spasm.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[440px] border-collapse text-left">
                      <caption className="mb-2 text-left font-semibold text-[#081a2e]">Cervical range of motion measured by goniometer</caption>
                      <thead><tr><th className="border-b border-[#d6cbaf] p-2">Movement</th><th className="border-b border-[#d6cbaf] p-2">Before</th><th className="border-b border-[#d6cbaf] p-2">After 7 sessions</th></tr></thead>
                      <tbody>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Flexion</th>
                          <td className="border-b border-[#e5dec9] p-2">20°</td>
                          <td className="border-b border-[#e5dec9] p-2">80°</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Extension</th>
                          <td className="border-b border-[#e5dec9] p-2">20°</td>
                          <td className="border-b border-[#e5dec9] p-2">70°</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Right lateral flexion</th>
                          <td className="border-b border-[#e5dec9] p-2">20°</td>
                          <td className="border-b border-[#e5dec9] p-2">45°</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Left lateral flexion</th>
                          <td className="border-b border-[#e5dec9] p-2">25°</td>
                          <td className="border-b border-[#e5dec9] p-2">45°</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Right rotation</th>
                          <td className="border-b border-[#e5dec9] p-2">25°</td>
                          <td className="border-b border-[#e5dec9] p-2">70°</td>
                        </tr>
                        <tr>
                          <th className="p-2">Left rotation</th>
                          <td className="p-2">30°</td>
                          <td className="p-2">70°</td>
                        </tr>
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
              <p className="text-sm leading-relaxed text-[#334155]">
                For general information about neck pain, read the <Link to="/blogs/neck-pain-after-waking-up" className="font-semibold text-[#8a5d24] underline underline-offset-2">neck pain question guide</Link> or explore the existing <Link to="/services/neck-pain-physiotherapy-manikonda" className="font-semibold text-[#8a5d24] underline underline-offset-2">Neck Pain Physiotherapy service</Link>.
              </p>
              <p className="text-xs leading-relaxed text-[#64748b]">An anonymised clinical experience for education. Outcomes vary and require individual assessment. Symptom improvement does not mean cervical spondylosis or disc bulges were cured or reversed. Patient-identifying details are excluded; the source case records consent for publication.</p>
            </article>
            <article id="lumbar-clinical-case-study" className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#081a2e]">What did one anonymised lumbar case show?</h2>
              <p className="text-sm leading-relaxed text-[#334155]">One 39-year-old female IT professional with six months of lower-back pain, left-leg symptoms, lumbar spondylosis, left L4–S1 radiculopathy, and L3–S1 disc bulges completed seven individualised conservative physiotherapy sessions.</p>
              <p className="text-sm leading-relaxed text-[#334155]"><strong>Measured findings:</strong> VAS pain changed from 9/10 to 1/10, lumbar MMT from 2+/5 to 5/5, and the antalgic gait and left-leg numbness were documented as resolved. <strong>Patient-reported:</strong> 89% overall relief; EQ VAS changed from 35/100 to 85/100. This is one patient's experience, not a typical or guaranteed outcome.</p>
              <CaseStudyCharts caseStudy="lumbar" />
              <details className="rounded-xl border border-[#e5dec9] bg-[#faf6ed] p-4">
                <summary className="cursor-pointer font-semibold text-[#081a2e]">View the full case measurements, assessment, care, and follow-up</summary>
                <div className="mt-4 space-y-5 text-sm leading-relaxed text-[#334155]">
                  <p>Recorded symptoms included chronic lower-back pain radiating into the left leg, morning stiffness, pins and needles and numbness in the left leg, and difficulty walking. Initial gait was antalgic. The MRI described disc bulges at L3–L4, L4–L5, and L5–S1.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[440px] border-collapse text-left">
                      <caption className="mb-2 text-left font-semibold text-[#081a2e]">Recorded measures before and after seven sessions</caption>
                      <thead><tr><th className="border-b border-[#d6cbaf] p-2">Measure</th><th className="border-b border-[#d6cbaf] p-2">Before</th><th className="border-b border-[#d6cbaf] p-2">After</th></tr></thead>
                      <tbody>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Pain (VAS)</th>
                          <td className="border-b border-[#e5dec9] p-2">9/10</td>
                          <td className="border-b border-[#e5dec9] p-2">1/10</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Lumbar range of motion</th>
                          <td className="border-b border-[#e5dec9] p-2">50% of normal</td>
                          <td className="border-b border-[#e5dec9] p-2">Restored to documented normal values</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Lumbar MMT</th>
                          <td className="border-b border-[#e5dec9] p-2">2+/5</td>
                          <td className="border-b border-[#e5dec9] p-2">5/5</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Gait</th>
                          <td className="border-b border-[#e5dec9] p-2">Antalgic</td>
                          <td className="border-b border-[#e5dec9] p-2">Normal, pain-free walking</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Left-leg numbness</th>
                          <td className="border-b border-[#e5dec9] p-2">Present</td>
                          <td className="border-b border-[#e5dec9] p-2">Resolved as documented</td>
                        </tr>
                        <tr>
                          <th className="p-2">EQ VAS (patient-rated)</th>
                          <td className="p-2">35/100</td>
                          <td className="p-2">85/100</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[440px] border-collapse text-left">
                      <caption className="mb-2 text-left font-semibold text-[#081a2e]">Lumbar range of motion measured by goniometer</caption>
                      <thead><tr><th className="border-b border-[#d6cbaf] p-2">Movement</th><th className="border-b border-[#d6cbaf] p-2">Before</th><th className="border-b border-[#d6cbaf] p-2">After 7 sessions</th></tr></thead>
                      <tbody>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Flexion</th>
                          <td className="border-b border-[#e5dec9] p-2">30°</td>
                          <td className="border-b border-[#e5dec9] p-2">60°</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Extension</th>
                          <td className="border-b border-[#e5dec9] p-2">15°</td>
                          <td className="border-b border-[#e5dec9] p-2">35°</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Right lateral flexion</th>
                          <td className="border-b border-[#e5dec9] p-2">10°</td>
                          <td className="border-b border-[#e5dec9] p-2">20°</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Left lateral flexion</th>
                          <td className="border-b border-[#e5dec9] p-2">10°</td>
                          <td className="border-b border-[#e5dec9] p-2">20°</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Right rotation</th>
                          <td className="border-b border-[#e5dec9] p-2">8°</td>
                          <td className="border-b border-[#e5dec9] p-2">18°</td>
                        </tr>
                        <tr>
                          <th className="p-2">Left rotation</th>
                          <td className="p-2">8°</td>
                          <td className="p-2">18°</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[440px] border-collapse text-left">
                      <caption className="mb-2 text-left font-semibold text-[#081a2e]">EQ-5D-5L patient-reported dimensions</caption>
                      <thead><tr><th className="border-b border-[#d6cbaf] p-2">Dimension</th><th className="border-b border-[#d6cbaf] p-2">Before</th><th className="border-b border-[#d6cbaf] p-2">After</th></tr></thead>
                      <tbody>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Mobility</th>
                          <td className="border-b border-[#e5dec9] p-2">4</td>
                          <td className="border-b border-[#e5dec9] p-2">1</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Self-care</th>
                          <td className="border-b border-[#e5dec9] p-2">3</td>
                          <td className="border-b border-[#e5dec9] p-2">1</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Usual activities</th>
                          <td className="border-b border-[#e5dec9] p-2">4</td>
                          <td className="border-b border-[#e5dec9] p-2">1</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Pain / discomfort</th>
                          <td className="border-b border-[#e5dec9] p-2">4</td>
                          <td className="border-b border-[#e5dec9] p-2">2</td>
                        </tr>
                        <tr>
                          <th className="border-b border-[#e5dec9] p-2">Anxiety / depression</th>
                          <td className="border-b border-[#e5dec9] p-2">3</td>
                          <td className="border-b border-[#e5dec9] p-2">1</td>
                        </tr>
                        <tr>
                          <th className="p-2">Health state code</th>
                          <td className="p-2">43443</td>
                          <td className="p-2">11121</td>
                        </tr>
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
              <p className="text-sm leading-relaxed text-[#334155]">
                For general information about lower-back pain, read the <Link to="/blogs/why-does-my-lower-back-hurt-10-common-causes" className="font-semibold text-[#8a5d24] underline underline-offset-2">lower-back pain guide</Link> or explore the existing <Link to="/services/back-pain-physiotherapy-manikonda" className="font-semibold text-[#8a5d24] underline underline-offset-2">Back Pain Physiotherapy service</Link>.
              </p>
              <p className="text-xs leading-relaxed text-[#64748b]">An anonymised clinical experience for education. Outcomes vary and require individual assessment. Symptom improvement does not mean lumbar spondylosis or disc bulges were cured or reversed. Patient-identifying details are excluded; the source case records consent for publication.</p>
            </article>

            <article id="meniscus-clinical-case-study" className="space-y-5 rounded-2xl border border-[#e5dec9] bg-white p-6 shadow-xs sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-[#081a2e]">What did one anonymised medial meniscus case show?</h2>
              <p className="text-sm leading-relaxed text-[#334155]">
                A 36-year-old female IT professional presented ten weeks after a badminton-related twisting injury. MRI described a horizontal cleavage tear of the posterior horn of the medial meniscus, without a displaced fragment or bucket-handle component. Following eight supervised physiotherapy sessions over three weeks, her activity VAS changed from 7/10 to 2/10 and Lysholm Knee Score from 58 to 86. This is one person's experience, not a typical or guaranteed result.
              </p>

              <div>
                <h3 className="font-semibold text-[#081a2e]">Presentation and clinical findings</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#334155]">
                  Reported difficulties included medial knee pain during stair descent, squatting and twisting, intermittent catching without true locking, swelling after activity, and reduced comfortable extension and deep flexion. Baseline findings included a mild antalgic gait, stroke test grade 2+ effusion, mid-patellar girth 1.5 cm greater than the other side, flexion to 95° with painful end-range, a 5° extension deficit, and quadriceps MMT 3+/5. The neurological screen was normal.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#081a2e]">Outcome measures and follow-up</h3>
                <div className="mt-2 overflow-x-auto rounded-lg border border-[#e5dec9]">
                  <table className="w-full min-w-[900px] border-collapse text-left text-xs sm:text-sm">
                    <caption className="sr-only">Medial meniscus case outcomes at baseline and follow-up</caption>
                    <thead className="bg-[#f4ede0]">
                      <tr>
                        <th scope="col" className="border-b border-[#d6cbaf] p-2">Measure</th>
                        <th scope="col" className="border-b border-[#d6cbaf] p-2">Baseline</th>
                        <th scope="col" className="border-b border-[#d6cbaf] p-2">After 8 sessions</th>
                        <th scope="col" className="border-b border-[#d6cbaf] p-2">4 weeks after supervised care</th>
                        <th scope="col" className="border-b border-[#d6cbaf] p-2">3 months from baseline</th>
                        <th scope="col" className="border-b border-[#d6cbaf] p-2">6 months from baseline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">VAS during activity</th>
                        <td className="border-b border-[#e5dec9] p-2">7/10</td>
                        <td className="border-b border-[#e5dec9] p-2">2/10</td>
                        <td className="border-b border-[#e5dec9] p-2">1/10</td>
                        <td className="border-b border-[#e5dec9] p-2">1/10</td>
                        <td className="border-b border-[#e5dec9] p-2">1/10</td>
                      </tr>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">VAS at rest</th>
                        <td className="border-b border-[#e5dec9] p-2">5/10</td>
                        <td className="border-b border-[#e5dec9] p-2">1/10</td>
                        <td className="border-b border-[#e5dec9] p-2">0/10</td>
                        <td className="border-b border-[#e5dec9] p-2">0/10</td>
                        <td className="border-b border-[#e5dec9] p-2">0/10</td>
                      </tr>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">Lysholm Knee Score</th>
                        <td className="border-b border-[#e5dec9] p-2">58 (poor)</td>
                        <td className="border-b border-[#e5dec9] p-2">86 (good)</td>
                        <td className="border-b border-[#e5dec9] p-2">88 (good)</td>
                        <td className="border-b border-[#e5dec9] p-2">90 (good)</td>
                        <td className="border-b border-[#e5dec9] p-2">92 (good)</td>
                      </tr>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">Knee flexion</th>
                        <td className="border-b border-[#e5dec9] p-2">95°</td>
                        <td className="border-b border-[#e5dec9] p-2">130°</td>
                        <td className="border-b border-[#e5dec9] p-2">132°</td>
                        <td className="border-b border-[#e5dec9] p-2">135°</td>
                        <td className="border-b border-[#e5dec9] p-2">135°</td>
                      </tr>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">Extension deficit</th>
                        <td className="border-b border-[#e5dec9] p-2">5°</td>
                        <td className="border-b border-[#e5dec9] p-2">0°</td>
                        <td className="border-b border-[#e5dec9] p-2">0°</td>
                        <td className="border-b border-[#e5dec9] p-2">0°</td>
                        <td className="border-b border-[#e5dec9] p-2">0°</td>
                      </tr>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">Stroke test effusion</th>
                        <td className="border-b border-[#e5dec9] p-2">Grade 2+</td>
                        <td className="border-b border-[#e5dec9] p-2">Trace</td>
                        <td className="border-b border-[#e5dec9] p-2">0</td>
                        <td className="border-b border-[#e5dec9] p-2">0</td>
                        <td className="border-b border-[#e5dec9] p-2">0</td>
                      </tr>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">Mid-patellar girth difference</th>
                        <td className="border-b border-[#e5dec9] p-2">+1.5 cm</td>
                        <td className="border-b border-[#e5dec9] p-2">0 cm</td>
                        <td className="border-b border-[#e5dec9] p-2">0 cm</td>
                        <td className="border-b border-[#e5dec9] p-2">0 cm</td>
                        <td className="border-b border-[#e5dec9] p-2">0 cm</td>
                      </tr>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">Quadriceps MMT</th>
                        <td className="border-b border-[#e5dec9] p-2">3+/5</td>
                        <td className="border-b border-[#e5dec9] p-2">4+/5</td>
                        <td className="border-b border-[#e5dec9] p-2">4+/5</td>
                        <td className="border-b border-[#e5dec9] p-2">5-/5</td>
                        <td className="border-b border-[#e5dec9] p-2">5/5</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-2">GROC (scale anchors not provided in source)</th>
                        <td className="p-2">—</td>
                        <td className="p-2">+5</td>
                        <td className="p-2">+5</td>
                        <td className="p-2">+6</td>
                        <td className="p-2">+6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  Effusion categories and MMT grades are ordinal findings; they are shown as recorded and are not plotted as continuous values. GROC scale anchors were not provided in the case PDF.
                </p>
              </div>

              <CaseStudyCharts caseStudy="medial_meniscus" />

              <div>
                <h3 className="font-semibold text-[#081a2e]">Physiotherapy programme</h3>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#334155]">
                  <li>Sessions 1–3 focused on load education, effusion strategies, restoring extension, quadriceps isometrics, and comfortable closed-chain movement.</li>
                  <li>Sessions 4–6 progressed mini-squats, step-ups, hip strengthening, single-leg balance, and squatting within available depth when the recorded progression criteria were met.</li>
                  <li>Sessions 7–8 progressed step-down control and return-to-activity criteria and finalised the home exercise programme.</li>
                </ul>
                <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                  The case notes identify progressive exercise and load management as the programme core. Ultrasound or interferential therapy, when used, were occasional comfort adjuncts.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#081a2e]">Functional performance observations</h3>
                <div className="mt-2 overflow-x-auto rounded-lg border border-[#e5dec9]">
                  <table className="w-full min-w-[650px] border-collapse text-left text-xs sm:text-sm">
                    <caption className="sr-only">Functional observations at baseline, after eight sessions, and at six months</caption>
                    <thead className="bg-[#f4ede0]">
                      <tr>
                        <th scope="col" className="border-b border-[#d6cbaf] p-2">Task</th>
                        <th scope="col" className="border-b border-[#d6cbaf] p-2">Baseline</th>
                        <th scope="col" className="border-b border-[#d6cbaf] p-2">After 8 sessions</th>
                        <th scope="col" className="border-b border-[#d6cbaf] p-2">6-month review</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">Single-leg squat</th>
                        <td className="border-b border-[#e5dec9] p-2">Unable due to pain/apprehension</td>
                        <td className="border-b border-[#e5dec9] p-2">45° depth; mild pelvic drop</td>
                        <td className="border-b border-[#e5dec9] p-2">70° depth; excellent control</td>
                      </tr>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">Step-down</th>
                        <td className="border-b border-[#e5dec9] p-2">Failed 10 cm step; dynamic valgus</td>
                        <td className="border-b border-[#e5dec9] p-2">Passed 15 cm; neutral alignment</td>
                        <td className="border-b border-[#e5dec9] p-2">Passed 20 cm; controlled eccentric lowering</td>
                      </tr>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">Stair climbing</th>
                        <td className="border-b border-[#e5dec9] p-2">Step-to-step pattern required</td>
                        <td className="border-b border-[#e5dec9] p-2">Reciprocal; mild stiffness</td>
                        <td className="border-b border-[#e5dec9] p-2">Asymptomatic reciprocal descent</td>
                      </tr>
                      <tr>
                        <th scope="row" className="border-b border-[#e5dec9] p-2">Walking tolerance</th>
                        <td className="border-b border-[#e5dec9] p-2">Under 15 min before reactive swelling</td>
                        <td className="border-b border-[#e5dec9] p-2">45+ min pain-free</td>
                        <td className="border-b border-[#e5dec9] p-2">Unrestricted</td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-2">Return to badminton</th>
                        <td className="p-2">Unable to play</td>
                        <td className="p-2">Light footwork drills (15 min)</td>
                        <td className="p-2">Full competitive match play, unrestricted</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  These are clinical performance observations, not laboratory kinematic measurements. Step-down heights differed between visits and are not directly comparable repeated scores. Baseline single-leg squat depth was not measured because the patient could not perform the task.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#081a2e]">Progress, discussion, and limitations</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#334155]">
                  After eight supervised sessions, the patient resumed desk work and began a graded return to activity. The case records maintained gains at four weeks, three months, and six months, when the patient reported unrestricted return to competitive badminton. The decision for conservative care applied to this patient's symptoms and the absence of true locking or a displaced fragment; it is not a recommendation for every meniscus tear.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                  This is a single-patient case without a comparison group. The observed changes do not establish that physiotherapy alone caused every improvement or predict outcomes for others. Long-term structural MRI change was not assessed. Evidence from trials of predominantly degenerative tears does not automatically apply to this younger patient with a traumatic tear.
                </p>
              </div>

              <div className="rounded-lg border border-[#e5dec9] bg-[#faf6ed] p-4">
                <h3 className="font-semibold text-[#081a2e]">Conclusion</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#334155]">
                  In this case, eight supervised sessions were followed by changes in pain, knee movement, strength grades, and recorded function. Improvement continued during follow-up. Individual assessment remains essential; these outcomes are not guaranteed.
                </p>
              </div>

              <p className="text-xs leading-relaxed text-[#64748b]">
                This anonymised case is for education and does not replace medical assessment or establish a treatment recommendation. The source PDF records written consent specifically covering online publication of this anonymised case and its outcomes.
              </p>
              <p className="text-sm leading-relaxed text-[#334155]">
                For general knee information, explore the existing <Link to="/services/meniscus-injury-physiotherapy-manikonda" className="font-semibold text-[#8a5d24] underline underline-offset-2">Meniscus Injury Physiotherapy service</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConditionsPage;
