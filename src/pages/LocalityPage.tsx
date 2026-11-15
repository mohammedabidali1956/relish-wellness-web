import { Helmet } from "react-helmet";
import { Link, Navigate, useParams } from "react-router-dom";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import StructuredData from "@/components/StructuredData";
import { localityPages } from "@/data/localityPages";
import { CLINIC_BUSINESS_INFO, GOOGLE_BUSINESS_PROFILE_URL } from "@/lib/businessInfo";

const clinicDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${CLINIC_BUSINESS_INFO.latitude}%2C${CLINIC_BUSINESS_INFO.longitude}`;
const clinicWhatsAppUrl = "https://wa.me/917601026596?text=Hi%20Dr.%20Hamid%2C%20I%20would%20like%20to%20ask%20about%20physiotherapy%20appointments.";

const LocalityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = localityPages.find((entry) => entry.slug === slug);

  if (!page) return <Navigate to="/locations" replace />;

  const canonicalUrl = `${CLINIC_BUSINESS_INFO.website}/locations/${page.slug}`;
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Locations", path: "/locations" },
    { label: page.locality, path: `/locations/${page.slug}` },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: page.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main id="locality-page" className="min-h-screen bg-[#faf6ed] text-[#334155]" data-locality={page.locality}>
      <StructuredData
        type="service"
        pageTitle={page.title}
        pageDescription={page.description}
        includeCanonical={false}
      />
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: page.title,
            description: page.description,
            mainEntity: { "@id": "https://www.drhamidphysio.in/#clinic" },
            inLanguage: "en-IN",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section id="locality-introduction" className="border-b border-[#e5dec9] bg-gradient-to-b from-[#fffdf8] to-[#f4ede0] px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <PageBreadcrumbs items={breadcrumbItems} className="mb-6" />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#8a5d24]">
              Physiotherapy for {page.locality}
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#081a2e] sm:text-4xl lg:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#4a5568] sm:text-lg">
              {page.introduction}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#5e6b78]">
              Dr. Mohammed Hamid Ali — Orthopedic &amp; Pain Physiotherapist · BPT, MPT (Orthopedics) · REGD.NO 0413 · Telangana State Board Registered · Founder &amp; Lead Physiotherapist.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                data-locality-event="booking_click"
                to="/contact#appointment-request"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#081a2e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#122842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]"
              >
                Request an appointment
              </Link>
              <a
                href={clinicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#b08a58] px-5 py-3 text-sm font-semibold text-[#081a2e] hover:bg-white"
              >
                WhatsApp the clinic
              </a>
              <a
                href="tel:+917601026596"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#d6cbaf] px-5 py-3 text-sm font-semibold text-[#081a2e] hover:bg-white"
              >
                Call the clinic
              </a>
              <a
                href={clinicDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#d6cbaf] px-5 py-3 text-sm font-semibold text-[#081a2e] hover:bg-white"
              >
                Directions to the clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:py-14">
        {page.sections.map((section, sectionIndex) => (
          <section key={section.heading} id={`locality-section-${sectionIndex + 1}`} className="rounded-2xl border border-[#e5dec9] bg-white p-5 sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
              {section.heading}
            </h2>
            <p className="mt-3 leading-relaxed">
              {section.answer}
            </p>
            {section.subsections?.length ? (
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {section.subsections.map((subsection) => (
                  <article key={subsection.heading} className="rounded-xl border border-[#eee7d8] bg-[#fffdf8] p-4 sm:p-5">
                    <h3 className="font-semibold text-[#081a2e]">
                      {subsection.heading}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed">
                      {subsection.body}
                    </p>
                    {subsection.links?.length ? (
                      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        {subsection.links.map((serviceLink) => (
                          <li key={serviceLink.path}>
                            <Link className="font-semibold text-[#8a5d24] underline underline-offset-2" to={serviceLink.path}>
                              {serviceLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}
          </section>
        ))}

        <section id="locality-clinic-details" className="rounded-2xl border border-[#e5dec9] bg-[#fffdf8] p-5 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
            Clinic location, hours, and fees
          </h2>
          <p className="mt-3 leading-relaxed">
            The clinic has one physical location: {CLINIC_BUSINESS_INFO.fullAddress} It is open daily from 10:00 AM to 10:00 PM. Consultation is ₹300; physiotherapy treatment starts from ₹500, and total treatment cost varies according to the treatment plan. Confirm current fees directly with the clinic.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#5e6b78]">
            Estimated road distance from {page.locality}: {page.roadDistance}. The route depends on your exact starting point and destination; use live directions before travelling.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
            <a href={clinicDirectionsUrl} target="_blank" rel="noopener noreferrer" className="text-[#8a5d24] underline underline-offset-2">
              Open Google Maps directions
            </a>
            <a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-[#8a5d24] underline underline-offset-2">
              View the clinic’s Google profile
            </a>
            <Link to="/about" className="text-[#8a5d24] underline underline-offset-2">
              About Dr. Mohammed Hamid Ali
            </Link>
            <Link to="/contact" className="text-[#8a5d24] underline underline-offset-2">
              Contact the clinic
            </Link>
          </div>
        </section>

        <section id="locality-faq" className="rounded-2xl border border-[#e5dec9] bg-white p-5 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
            Frequently asked questions about physiotherapy in {page.locality}
          </h2>
          <div className="mt-5 space-y-4">
            {page.faqs.map((faq) => (
              <article key={faq.question} className="border-t border-[#eee7d8] pt-4">
                <h3 className="font-semibold text-[#081a2e]">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default LocalityPage;
