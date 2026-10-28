import { Helmet } from "react-helmet";
import PainPointGuide from "@/components/PainPointGuide";
import StructuredData from "@/components/StructuredData";

const canonicalUrl = "https://www.drhamidphysio.in/conditions";
const pageTitle = "Conditions and Body Pain Guide in Manikonda | Dr Hamid’s Physio and Pain Clinic";
const pageDescription = "Explore the interactive body pain guide to select a pain area and read general information about common conditions and physiotherapy options in Manikonda, Hyderabad.";

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
            Interactive Body Pain Guide
          </h1>
          <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
            Select a body area to explore general information about common pain conditions and physiotherapy. The guide is educational and does not replace an individual clinical assessment.
          </p>
        </div>
      </section>

      <PainPointGuide />
    </div>
  );
};

export default ConditionsPage;
