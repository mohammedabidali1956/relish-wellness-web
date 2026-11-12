import { ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  clinicReviewCategories,
  clinicReviews,
} from "@/data/clinicReviews";
import {
  CLINIC_BUSINESS_INFO,
  CLINIC_BUSINESS_SCHEMA_ID,
  GOOGLE_BUSINESS_PROFILE_URL,
  PRACTO_PROFILE_URL,
} from "@/lib/businessInfo";

const canonicalUrl = "https://www.drhamidphysio.in/reviews";
const whatsappUrl = "https://wa.me/" + CLINIC_BUSINESS_INFO.telephone.replace("+", "") + "?text=Hi%20Dr.%20Hamid%2C%20I%20would%20like%20to%20enquire%20about%20physiotherapy%20services";
const reviewStructuredData = {
  "@context": "https://schema.org",
  "@graph": clinicReviews.map((review) => ({
    "@type": "Review",
    "@id": `${canonicalUrl}#review-${review.id}`,
    itemReviewed: {
      "@type": "MedicalClinic",
      "@id": CLINIC_BUSINESS_SCHEMA_ID,
      name: CLINIC_BUSINESS_INFO.name,
    },
    author: {
      "@type": "Person",
      name: review.reviewer,
    },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
  })),
};

const ReviewsPage = () => {
  return (
    <main id="clinic-reviews" className="min-h-screen bg-[#faf6ed] text-[#334155]">
      <Helmet>
        <title>Patient Reviews | Dr Hamid’s Physio, Manikonda</title>
        <script type="application/ld+json">{JSON.stringify(reviewStructuredData)}</script>
        <meta
          name="description"
          content="Read patient reviews of Dr Hamid’s physiotherapy care in Manikonda, Hyderabad. Browse feedback by condition and contact the clinic."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Patient Reviews | Dr Hamid’s Physio, Manikonda" />
        <meta
          property="og:description"
          content="Read patient feedback about Dr Hamid’s Physio and PAIN Clinic in Manikonda, Hyderabad."
        />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <section id="reviews-introduction" className="border-b border-[#e5dec9] bg-[#fffdf8] py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a5d24]">Patient feedback</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight text-[#081a2e] sm:text-5xl">
            Patient Reviews of Dr Hamid’s Physio and PAIN Clinic in Manikonda
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            Read patient feedback from people who have experienced care at Dr Hamid’s Physio and PAIN Clinic in Manikonda, Hyderabad. Each person’s experience is individual, and treatment outcomes may vary.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#081a2e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#122842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]"
            >
              View the clinic’s Google profile
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/#appointment"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#b08a58] px-5 py-3 text-sm font-semibold text-[#081a2e] hover:bg-[#faf6ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]"
            >
              Book a clinic appointment
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <a className="text-[#8a5d24] underline underline-offset-4" href={"tel:" + CLINIC_BUSINESS_INFO.telephone}>
              Call the clinic
            </a>
            <a className="text-[#8a5d24] underline underline-offset-4" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Enquire on WhatsApp
            </a>
            <a className="text-[#8a5d24] underline underline-offset-4" href={PRACTO_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              View the Practo profile
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 md:px-6 md:py-16">
        {clinicReviewCategories.map((category) => {
          const categoryReviews = clinicReviews.filter((review) => review.categoryId === category.id);

          return (
            <section
              key={category.id}
              id={"reviews-" + category.id}
              className="scroll-mt-24"
              aria-labelledby={"reviews-" + category.id + "-heading"}
            >
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2
                    id={"reviews-" + category.id + "-heading"}
                    className="font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl"
                  >
                    {category.title}
                  </h2>
                  <p className="mt-2 text-sm text-[#64748b]">
                    {categoryReviews.length} {categoryReviews.length === 1 ? "review" : "reviews"} in this section
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {categoryReviews.map((review) => (
                  <article
                    key={review.id}
                    id={"review-" + review.id}
                    className="flex h-full flex-col rounded-2xl border border-[#e5dec9] bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-[#081a2e]">{review.reviewer}</p>
                        <p className="mt-1 text-sm text-[#64748b]">{review.condition}</p>
                      </div>
                      <div className="text-right">
                        <p aria-label="5 out of 5 stars" className="whitespace-nowrap text-lg tracking-wide text-[#b17a2b]">
                          <span aria-hidden="true">★★★★★</span>
                        </p>
                        <p className="mt-1 text-xs text-[#64748b]">Date shown: {review.relativeDate}</p>
                      </div>
                    </div>

                    <blockquote className="mt-5 flex-1 whitespace-pre-line leading-relaxed text-[#334155]">
                      {review.text}
                    </blockquote>

                    {review.perspective && (
                      <p className="mt-4 text-xs font-medium text-[#64748b]">{review.perspective}</p>
                    )}

                    {review.serviceLinks.length > 0 && (
                      <div className="mt-5 border-t border-[#eee7d8] pt-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Related clinic service</p>
                        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                          {review.serviceLinks.map((service) => (
                            <li key={service.path}>
                              <Link
                                className="text-sm font-semibold text-[#8a5d24] underline underline-offset-4"
                                to={service.path}
                              >
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <section
          id="separate-clinical-case-studies"
          className="rounded-2xl border border-[#e5dec9] bg-white p-6 sm:p-8"
          aria-labelledby="separate-clinical-case-studies-heading"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-[#8a5d24]">Separate clinical evidence</p>
          <h2 id="separate-clinical-case-studies-heading" className="mt-2 font-serif text-2xl font-bold text-[#081a2e] sm:text-3xl">
            Anonymised case studies are separate from patient reviews
          </h2>
          <p className="mt-4 max-w-4xl leading-relaxed">
            The case studies document individual assessments and follow-up; they are not testimonials and are not linked to the reviewers above. One person’s case does not predict another patient’s outcome.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/conditions#cervical-clinical-case-study">Cervical clinical case study</Link></li>
            <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/conditions#lumbar-clinical-case-study">Lumbar clinical case study</Link></li>
            <li><Link className="font-semibold text-[#8a5d24] underline underline-offset-4" to="/conditions#meniscus-clinical-case-study">Medial meniscus clinical case study</Link></li>
          </ul>
        </section>

        <section id="reviews-next-step" className="rounded-2xl bg-[#081a2e] p-6 text-white sm:p-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Ask the clinic about your physiotherapy options
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-white/85">
            Contact Dr Hamid’s Physio and PAIN Clinic in Manikonda to ask about an appointment or whether a home visit is available for your address.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/#appointment"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#081a2e] hover:bg-[#fffdf8]"
            >
              Book a clinic appointment
            </Link>
            <Link
              to="/services/home-visit-physiotherapy-manikonda"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Home-visit service details
            </Link>
            <a
              href={"tel:" + CLINIC_BUSINESS_INFO.telephone}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Call the clinic
            </a>
            <a
              href={whatsappUrl}
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

export default ReviewsPage;
