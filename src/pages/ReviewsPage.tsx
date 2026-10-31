import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ExternalLink, MapPin } from "lucide-react";
import { GOOGLE_BUSINESS_PROFILE_URL, PRACTO_PROFILE_URL } from "@/lib/businessInfo";

const ReviewsPage = () => {
  const canonicalUrl = "https://www.drhamidphysio.in/reviews";

  return (
    <section id="clinic-reviews" className="min-h-screen bg-[#faf6ed] px-4 py-14 md:py-20">
      <Helmet>
        <title>Clinic Reviews | Dr Hamid’s Physio and PAIN Clinic</title>
        <meta name="description" content="Open the clinic’s Google profile to view patient reviews for Dr Hamid’s Physio and PAIN Clinic in Manikonda, Hyderabad." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Clinic Reviews | Dr Hamid’s Physio and PAIN Clinic" />
        <meta property="og:description" content="View patient reviews on the clinic’s Google profile." />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <div className="mx-auto max-w-4xl rounded-2xl border border-[#e5dec9] bg-white p-6 shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#8a5d24]">Patient feedback</p>
        <h1 className="mt-3 font-serif text-3xl font-bold text-[#081a2e] sm:text-4xl">Reviews for the clinic</h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-[#4a5568]">
          Patient reviews are hosted on third-party profiles. Open the original profile to read the current reviews and ratings.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-16 items-center justify-between rounded-xl border border-[#e5dec9] bg-[#faf6ed] p-5 font-semibold text-[#081a2e] hover:border-[#8a5d24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]">
            <span className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#8a5d24]" aria-hidden="true" />Google Business Profile</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={PRACTO_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-16 items-center justify-between rounded-xl border border-[#e5dec9] bg-[#faf6ed] p-5 font-semibold text-[#081a2e] hover:border-[#8a5d24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]">
            <span>Practo profile</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 border-t border-[#e5dec9] pt-6">
          <p className="text-sm leading-relaxed text-[#4a5568]">Dr Hamid’s Physio and Pain Clinic is in Manikonda, Hyderabad.</p>
          <Link to="/contact" className="mt-4 inline-flex rounded-md bg-[#081a2e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#122842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]">Contact the clinic</Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
