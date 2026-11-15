import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import StructuredData from "@/components/StructuredData";
import PatientActionGroup from "@/components/PatientActionGroup";
import { localityPages } from "@/data/localityPages";
import { CLINIC_BUSINESS_INFO } from "@/lib/businessInfo";

const pageTitle = "Physiotherapy Areas in Manikonda | Dr Hamid’s Clinic";
const pageDescription = "Dr Hamid’s Physio and Pain Clinic in Manikonda welcomes patients from Lanco Hills, Alkapur Township, Narsingi, Gachibowli, and HITEC City. Check clinic and home-visit options.";
const clinicDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${CLINIC_BUSINESS_INFO.latitude}%2C${CLINIC_BUSINESS_INFO.longitude}`;

const LocationsPage = () => {
  const canonicalUrl = `${CLINIC_BUSINESS_INFO.website}/locations`;

  return (
    <main id="locations-index" className="min-h-screen bg-[#faf6ed] text-[#334155]">
      <StructuredData
        type="service"
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        includeCanonical={false}
      />
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: pageTitle,
            description: pageDescription,
            mainEntity: { "@id": "https://www.drhamidphysio.in/#clinic" },
            inLanguage: "en-IN",
          })}
        </script>
      </Helmet>

      <section id="locations-introduction" className="border-b border-[#e5dec9] bg-gradient-to-b from-[#fffdf8] to-[#f4ede0] px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <PageBreadcrumbs
            items={[{ label: "Home", path: "/" }, { label: "Locations", path: "/locations" }]}
            className="mb-6"
          />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#8a5d24]">
              Clinic service areas
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#081a2e] sm:text-4xl lg:text-5xl">
              Physiotherapy service areas near Manikonda, Hyderabad
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#4a5568] sm:text-lg">
              Dr Hamid’s Physio and Pain Clinic provides one-to-one physiotherapy at its single clinic in Friends Colony, Puppalguda, Manikonda, Hyderabad. Patients from the localities below can request a clinic appointment; home-visit coverage depends on locality and confirmation of the exact address.
            </p>
          </div>
        </div>
      </section>

      <section id="physiotherapy-localities" className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
            Choose your locality
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed">
            Each page explains how to reach the Manikonda clinic, which existing services patients can ask about, and whether home visits are available in that area.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localityPages.map((locality) => (
              <article key={locality.slug} className="rounded-2xl border border-[#e5dec9] bg-white p-5 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#081a2e]">
                  {locality.locality}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">
                  {locality.homeVisitsAvailable
                    ? locality.locality === "Gachibowli"
                      ? "Home visits are available irrespective of distance; confirm your exact address and appointment availability with the clinic."
                      : "Home visits are available in this locality; please confirm your exact address and availability with the clinic."
                    : "Contact the clinic to confirm home-visit coverage for your exact address."}
                </p>
                <Link
                  to={`/locations/${locality.slug}`}
                  className="mt-4 inline-flex min-h-11 items-center font-semibold text-[#8a5d24] underline underline-offset-2"
                >
                  Physiotherapy in {locality.locality}
                  <span className="sr-only">
                    : service details
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="manikonda-clinic-and-home-visits" className="border-y border-[#e5dec9] bg-white px-4 py-10 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <article>
            <h2 className="font-serif text-2xl font-bold text-[#081a2e]">
              Clinic appointments in Manikonda
            </h2>
            <p className="mt-3 leading-relaxed">
              The physical clinic is at {CLINIC_BUSINESS_INFO.fullAddress} Clinic hours are daily, 10:00 AM to 10:00 PM. In-clinic consultation is ₹300; treatment starts from ₹500, and total treatment cost varies according to the treatment plan.
            </p>
            <a href={clinicDirectionsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center rounded-lg border border-[#b08a58] px-4 py-2 font-semibold text-[#081a2e] hover:bg-[#faf6ed]">
              Get directions to the clinic
            </a>
          </article>
          <article>
            <h2 className="font-serif text-2xl font-bold text-[#081a2e]">
              Home visit availability
            </h2>
            <p className="mt-3 leading-relaxed">
              Home visits are available in all five listed localities: Lanco Hills, Alkapur Township, Narsingi, Gachibowli, and HITEC City. Gachibowli visits are available irrespective of distance. The clinic confirms each exact address, clinical suitability, and appointment availability. No home-visit fee is quoted here.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
              <Link to="/services/home-visit-physiotherapy-manikonda" className="text-[#8a5d24] underline underline-offset-2">
                Home-visit service information
              </Link>
              <Link to="/about" className="text-[#8a5d24] underline underline-offset-2">
                About Dr. Mohammed Hamid Ali
              </Link>
              <Link to="/contact" className="text-[#8a5d24] underline underline-offset-2">
                Contact the clinic
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section id="locations-actions" className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <PatientActionGroup
            ariaLabel="Contact and appointment options"
            className="justify-center"
            actions={[
              { kind: "internal", to: "/contact#appointment-request", label: "Request an appointment", primary: true },
              { kind: "external", href: "tel:+917601026596", label: "Call the clinic" },
              { kind: "external", href: "https://wa.me/917601026596?text=Hi%20Dr.%20Hamid%2C%20I%20would%20like%20to%20ask%20about%20physiotherapy%20appointments.", label: "WhatsApp the clinic", target: "_blank" },
            ]}
          />
        </div>
      </section>
    </main>
  );
};

export default LocationsPage;
