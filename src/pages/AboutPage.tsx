import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import StructuredData from "@/components/StructuredData";
import { PRACTO_PROFILE_URL } from "@/lib/businessInfo";
import { whatsappUrl } from "@/lib/whatsapp";

const aboutWhatsappUrl = whatsappUrl(
  "Hi Dr Hamid, I would like to enquire about physiotherapy at the Manikonda clinic.",
);

const AboutPage = () => {
  return (
    <main id="about-clinic" className="min-h-screen bg-[#faf6ed] text-[#334155]">
      <StructuredData
        type="about"
        pageTitle="About Dr. Mohammed Hamid Ali | Physiotherapist Manikonda"
        pageDescription="Meet Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics), Telangana State Board Registered physiotherapist with 8+ years of experience in Manikonda, Hyderabad."
        includeCanonical
      />
      <Helmet>
        <meta property="og:title" content="About Dr. Mohammed Hamid Ali | Physiotherapist Manikonda" />
        <meta
          property="og:description"
          content="Learn about Dr. Mohammed Hamid Ali, the clinic’s approach to physiotherapy, services, appointment options and patient resources in Manikonda, Hyderabad."
        />
        <meta property="og:url" content="https://www.drhamidphysio.in/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://www.drhamidphysio.in/images/doctor/dr-hamid-hero.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dr. Mohammed Hamid Ali | Physiotherapist Manikonda" />
        <meta
          name="twitter:description"
          content="Learn about Dr. Mohammed Hamid Ali, the clinic’s approach to physiotherapy, services, appointment options and patient resources in Manikonda, Hyderabad."
        />
        <meta name="twitter:image" content="https://www.drhamidphysio.in/images/doctor/dr-hamid-hero.webp" />
      </Helmet>

      <section id="practitioner-profile" className="border-b border-[#e5dec9] bg-[#fffdf8] py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:px-6">
          <figure className="mx-auto w-full max-w-sm">
            <img
              src="/images/doctor/dr-hamid-hero.webp"
              alt="Dr. Mohammed Hamid Ali, Orthopedic & Pain Physiotherapist, in blue scrubs"
              width="682"
              height="1024"
              className="aspect-[3/4] w-full rounded-2xl border border-[#e5dec9] bg-[#f1e8d7] object-cover object-top shadow-sm"
              loading="lazy"
            />
            <figcaption className="mt-3 text-center text-sm text-[#64748b]">
              Dr. Mohammed Hamid Ali at Dr Hamid’s Physio and PAIN Clinic
            </figcaption>
          </figure>

          <div id="professional-identity" className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a5d24]">Practitioner profile</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#081a2e] sm:text-5xl">
              Dr. Mohammed Hamid Ali | Orthopedic &amp; Pain Physiotherapist | Manikonda
            </h1>
            <p className="mt-4 text-lg font-semibold text-[#334155]">
              Orthopedic &amp; Pain Physiotherapist
            </p>
            <p className="mt-2 font-semibold text-[#334155]">
              Founder &amp; Lead Physiotherapist
            </p>
            <p className="mt-5 text-lg font-semibold leading-relaxed text-[#081a2e]">
              BPT, MPT (Orthopedics) · REGD.NO 0413 · Telangana State Board Registered
            </p>
            <p className="mt-6 font-semibold text-[#081a2e]">Dr Hamid’s Physio and Pain Clinic</p>
            <p className="mt-1 text-[#64748b]">Manikonda, Hyderabad</p>
            <a
              href={PRACTO_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center font-semibold text-[#8a5d24] underline underline-offset-4"
            >
              View Dr. Mohammed Hamid Ali’s Practo profile
            </a>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/#appointment"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#081a2e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#122842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]"
              >
                Book a clinic appointment
              </Link>
              <a
                href="tel:+917601026596"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#b08a58] px-5 py-3 text-sm font-semibold text-[#081a2e] hover:bg-[#faf6ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]"
              >
                Call the clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 md:space-y-10 md:px-6 md:py-16">
        <section id="about-introduction" className="rounded-2xl border border-[#e5dec9] bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
            About Dr Hamid’s Physio and PAIN Clinic
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed">
            Dr. Mohammed Hamid Ali is an Orthopedic &amp; Pain Physiotherapist with BPT and MPT (Orthopedics) qualifications and Telangana State Board registration. He has 8+ years of clinical experience and founded Dr Hamid’s Physio and PAIN Clinic in Manikonda, Hyderabad; the clinic was established in 2021. The clinic helps people seek assessment and rehabilitation for pain, injury, movement and recovery concerns; care depends on each person’s findings, health context and goals.
          </p>
        </section>

        <section id="clinical-approach" className="rounded-2xl border border-[#e5dec9] bg-[#fffdf8] p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
            How does the clinic approach physiotherapy?
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed">
            Physiotherapy starts with the person’s concerns and the activities they want to manage. Assessment and care planning consider symptoms, relevant medical context, movement and function. They guide decisions; they do not replace medical investigations or guarantee that every cause can be identified.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            <li className="rounded-xl border border-[#eee7d8] bg-white p-5">
              <h3 className="font-semibold text-[#081a2e]">Listen and assess</h3>
              <p className="mt-2 leading-relaxed">
                Understand symptoms, concerns, health history and functional limits, then assess relevant movement and everyday tasks.
              </p>
            </li>
            <li className="rounded-xl border border-[#eee7d8] bg-white p-5">
              <h3 className="font-semibold text-[#081a2e]">Consider contributing factors</h3>
              <p className="mt-2 leading-relaxed">
                Look beyond the painful area where appropriate. Several factors may affect pain or movement, and not every condition has one clear cause.
              </p>
            </li>
            <li className="rounded-xl border border-[#eee7d8] bg-white p-5">
              <h3 className="font-semibold text-[#081a2e]">Individualise suitable care</h3>
              <p className="mt-2 leading-relaxed">
                Choose rehabilitation, therapeutic exercise and supportive treatment methods according to clinical findings, patient needs and goals.
              </p>
            </li>
            <li className="rounded-xl border border-[#eee7d8] bg-white p-5">
              <h3 className="font-semibold text-[#081a2e]">Review and support progress</h3>
              <p className="mt-2 leading-relaxed">
                Review the response and adapt care as appropriate. Where useful, discuss self-management, activity, ergonomics and precautions for daily life.
              </p>
            </li>
          </ol>
        </section>

        <section id="clinic-differentiators" className="space-y-6">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a5d24]">Care and practical support</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#081a2e] sm:text-4xl">
              What Makes Dr Hamid’s Physio and Pain Clinic Different?
            </h2>
            <p className="mt-4 leading-relaxed">
              Patients can understand the clinic’s approach, professional credentials and appointment options before deciding whether to enquire.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article id="patient-first-assessment" className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Patient-first understanding and assessment</h3>
              <p className="mt-3 leading-relaxed">
                Care begins by understanding a patient’s symptoms, concerns and functional difficulties. An appropriate physiotherapy assessment helps guide care; other clinicians or investigations may also be needed.
              </p>
            </article>
            <article id="function-focused-care" className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Attention to contributing factors</h3>
              <p className="mt-3 leading-relaxed">
                The approach considers possible factors that contribute to pain or movement difficulty, with the aim of addressing relevant problems and supporting function—not promising a permanent cure.
              </p>
            </article>
            <article id="individualised-physiotherapy" className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Individualised care for the whole person</h3>
              <p className="mt-3 leading-relaxed">
                Plans can take account of the patient’s condition, mobility, strength, daily routines, activity demands and goals. Treatment methods are selected according to individual needs and response.
              </p>
            </article>
            <article id="long-term-self-management" className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Guidance beyond treatment sessions</h3>
              <p className="mt-3 leading-relaxed">
                When relevant, patients can discuss home exercise, self-management, ergonomic or activity guidance, precautions and injury-prevention strategies. These may help with ongoing management; they cannot guarantee that symptoms will not return.
              </p>
            </article>
            <article id="qualified-physiotherapist" className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Qualified, registered physiotherapist</h3>
              <p className="mt-3 leading-relaxed">
                Care is led by Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics), REGD.NO 0413, Telangana State Board Registered, with 8+ years of clinical experience.
              </p>
            </article>
            <article id="transparent-treatment-charges" className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Reasonable, transparent charges</h3>
              <p className="mt-3 leading-relaxed">
                The consultation fee is ₹300. Physiotherapy treatment starts from ₹500. Ask the clinic which charges apply to your assessment and recommended care.
              </p>
            </article>
            <article id="appointment-timings" className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Appointment timings for working schedules</h3>
              <p className="mt-3 leading-relaxed">
                Listed clinic hours are Monday to Sunday, 10:00 AM to 10:00 PM, including late-evening hours. Enquire about a suitable appointment time; availability must be confirmed with the clinic.
              </p>
            </article>
            <article id="home-physiotherapy-visits" className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Home physiotherapy visits</h3>
              <p className="mt-3 leading-relaxed">
                Patients who find travel difficult or inconvenient can enquire about a home visit. The clinic can confirm whether the patient’s location and preferred timing can be accommodated.
              </p>
              <Link className="mt-3 inline-flex font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/home-visit-physiotherapy-manikonda">
                Home-visit physiotherapy details
              </Link>
            </article>
            <article id="female-patient-privacy" className="rounded-xl border border-[#e5dec9] bg-[#fffdf8] p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Privacy and Comfort for Female Patients</h3>
              <p className="mt-3 leading-relaxed">
                A female attendant can be available to support the visit. If the patient prefers, her husband or a male family member may be present. The clinic considers each patient’s privacy, comfort and dignity, and patients can discuss these preferences before treatment.
              </p>
            </article>
          </div>
        </section>

        <section id="clinic-care-model" className="rounded-2xl border border-[#e5dec9] bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
            Individualised one-to-one physiotherapy care
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed">
            The clinic is founder-operated, with individualized one-to-one care. Treatment decisions relate to the patient’s condition, functional needs and progress rather than a standard package. Patients are encouraged to understand their condition, ask questions and take part in rehabilitation. Clinic appointments and home visits can be discussed with the clinic.
          </p>
        </section>

        <section id="clinic-services" className="rounded-2xl border border-[#e5dec9] bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
            Physiotherapy services and clinical areas
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed">
            The clinic’s existing service pages explain care for specific conditions and rehabilitation needs. Explore the topic closest to your concern, then ask the clinic whether an assessment is appropriate.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <section id="spine-neck-back-services" className="rounded-xl border border-[#eee7d8] bg-[#fffdf8] p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Spine, neck and back conditions</h3>
              <ul className="mt-4 space-y-2">
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/neck-pain-physiotherapy-manikonda">Neck pain physiotherapy</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/cervical-spondylosis-physiotherapy-manikonda">Cervical spondylosis physiotherapy</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/back-pain-physiotherapy-manikonda">Back pain physiotherapy</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/sciatica-physiotherapy-manikonda">Sciatica physiotherapy</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/disc-bulge-physiotherapy-manikonda">Disc bulge physiotherapy</Link></li>
              </ul>
            </section>
            <section id="joint-and-musculoskeletal-services" className="rounded-xl border border-[#eee7d8] bg-[#fffdf8] p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Joint pain and musculoskeletal conditions</h3>
              <ul className="mt-4 space-y-2">
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/shoulder-pain-physiotherapy-manikonda">Shoulder pain physiotherapy</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/knee-pain-physiotherapy-manikonda">Knee pain physiotherapy</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/meniscus-injury-physiotherapy-manikonda">Meniscus injury physiotherapy</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/foot-and-ankle-pain-physiotherapy-manikonda">Foot and ankle pain physiotherapy</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/chronic-pain-management-manikonda">Chronic pain management</Link></li>
              </ul>
            </section>
            <section id="sports-and-orthopaedic-rehabilitation" className="rounded-xl border border-[#eee7d8] bg-[#fffdf8] p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Sports and orthopaedic rehabilitation</h3>
              <ul className="mt-4 space-y-2">
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/sports-injury-physiotherapy-manikonda">Sports injury physiotherapy</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/post-surgical-rehabilitation-manikonda">Post-surgical rehabilitation</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/knee-rehabilitation-manikonda">Knee rehabilitation</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/ankle-rehabilitation-manikonda">Ankle rehabilitation</Link></li>
              </ul>
            </section>
            <section id="neurological-and-mobility-rehabilitation" className="rounded-xl border border-[#eee7d8] bg-[#fffdf8] p-5">
              <h3 className="font-serif text-xl font-bold text-[#081a2e]">Neurological and mobility rehabilitation</h3>
              <ul className="mt-4 space-y-2">
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/stroke-physiotherapy-manikonda">Stroke physiotherapy and rehabilitation</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/neurological-physiotherapy-manikonda">Neurological physiotherapy</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/vestibular-rehabilitation-manikonda">Vestibular rehabilitation</Link></li>
                <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/services/therapeutic-exercise-therapy-manikonda">Therapeutic exercise therapy</Link></li>
              </ul>
            </section>
          </div>
        </section>

        <section id="clinical-case-studies" className="rounded-2xl border border-[#e5dec9] bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
            Read anonymised clinical case studies
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed">
            These individual clinical examples present recorded assessments and follow-up. They are not promises of treatment outcomes; one person’s case does not predict another patient’s experience.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/conditions#cervical-clinical-case-study">Cervical case study</Link></li>
            <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/conditions#lumbar-clinical-case-study">Lumbar case study</Link></li>
            <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/conditions#meniscus-clinical-case-study">Medial meniscus case study</Link></li>
          </ul>
          <Link
            to="/conditions#patient-resources"
            className="mt-5 inline-flex min-h-11 items-center font-semibold text-[#081a2e] underline underline-offset-4"
          >
            Browse Patient Resources
          </Link>
        </section>

        <section id="patient-reviews" className="rounded-2xl border border-[#e5dec9] bg-[#fffdf8] p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
            Read patient reviews
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed">
            Read patient feedback about experiences at Dr Hamid’s Physio and PAIN Clinic in Manikonda. Each account is personal, and care and outcomes vary.
          </p>
          <Link
            to="/reviews"
            className="mt-5 inline-flex min-h-11 items-center font-semibold text-[#8a5d24] underline underline-offset-4"
          >
            Read patient reviews
          </Link>
        </section>

        <section id="about-next-steps" className="rounded-2xl bg-[#081a2e] p-6 text-white sm:p-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Ask about an appointment that suits you
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-white/85">
            Contact the clinic to discuss your concern, ask about a suitable clinic appointment, or check whether a home visit can be arranged for your location and preferred time.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/#appointment"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#081a2e] hover:bg-[#fffdf8]"
            >
              Book a clinic appointment
            </Link>
            <a
              href="tel:+917601026596"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Call the clinic
            </a>
            <a
              href={aboutWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
