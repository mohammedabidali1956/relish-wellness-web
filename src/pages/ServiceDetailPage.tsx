import { openWhatsApp } from "@/lib/whatsapp";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getServiceBySlug, allServices, primaryServices } from "@/data/services";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MapPin,
  Calendar,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Award,
  Stethoscope,
  Clock,
  Sparkles,
  Home,
  Building2,
  Check,
  Activity,
  Layers,
  HeartHandshake
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { scrollToAppointmentSection } from "@/lib/navigation";
import { trackAnalyticsEvent } from "@/lib/analytics";

import NotFound from "@/pages/NotFound";

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFound />;
  }

  const handleCall = () => {
    trackAnalyticsEvent("phone_call_click");
    window.location.href = "tel:+917601026596";
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Dr. Hamid, I would like to book a consultation for ${service.title} at your Manikonda clinic.`
    );
    openWhatsApp(decodeURIComponent(text));
  };

  const canonicalUrl = `https://www.drhamidphysio.in/services/${service.slug}`;

  // Find 3 closely related services in same or complementary category
  const relatedServices = (() => {
    const selectedServices = (service.relatedServiceSlugs ?? []).flatMap((relatedSlug) => {
      const relatedService = getServiceBySlug(relatedSlug);
      return relatedService && relatedService.slug !== service.slug ? [relatedService] : [];
    });

    const additionalServices = allServices
      .filter((s) => s.slug !== service.slug)
      .filter((s) => !selectedServices.some((selected) => selected.slug === s.slug))
      .sort((a, b) => {
        const aCatMatch = a.category === service.category ? -1 : 1;
        const bCatMatch = b.category === service.category ? -1 : 1;
        return aCatMatch - bCatMatch;
      })
      .slice(0, Math.max(0, 3 - selectedServices.length));

    return [...selectedServices, ...additionalServices];
  })();

  // Find relevant blogs for internal linking
  const relatedBlogs = (() => {
    const serviceTitle = service.title.toLowerCase();
    let relevantTopics: string[] = [];

    if (service.category === "Spine & Back") {
      relevantTopics = ["back", "sciatica", "disc bulge", "desk"];
    } else if (serviceTitle.includes("neck") || service.category === "Neck & Cervical") {
      relevantTopics = ["neck"];
    } else if (serviceTitle.includes("knee") || service.category === "Knee") {
      relevantTopics = ["knee"];
    } else if (service.category === "Other Joints & Pain") {
      relevantTopics = ["heel", "plantar", "foot", "ankle"];
    } else if (serviceTitle.includes("sport")) {
      relevantTopics = ["sports", "gym", "exercise"];
    }

    return blogPosts
      .filter((b) => {
        const articleText = `${b.title} ${b.slug} ${b.category}`.toLowerCase();
        return relevantTopics.some((topic) => articleText.includes(topic));
      })
      .slice(0, 2);
  })();

  // Schema.org MedicalWebPage + Physiotherapy + FAQPage JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: service.metaTitle,
        description: service.metaDescription,
        headline: service.h1,
        inLanguage: "en-IN",
        about: {
          "@type": "MedicalCondition",
          name: service.title,
          possibleTreatment: [
            {
              "@type": "MedicalTherapy",
              name: "Evidence-Based Physiotherapy and Active Rehabilitation"
            }
          ]
        },
        author: {
          "@type": "Person",
          name: "Dr. Mohammed Hamid Ali",
          jobTitle: "Physiotherapist",
          worksFor: {
            "@type": "MedicalClinic",
            name: "Dr Hamid’s Physio and Pain Clinic"
          }
        },
        publisher: {
          "@type": "MedicalClinic",
          name: "Dr Hamid’s Physio and Pain Clinic",
          url: "https://www.drhamidphysio.in",
          logo: "https://www.drhamidphysio.in/images/logo/logo-main.webp",
          telephone: "+917601026596",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park, Puppalguda",
            addressLocality: "Manikonda, Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500089",
            addressCountry: "IN"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "Physiotherapy",
        "@id": "https://www.drhamidphysio.in/#clinic",
        name: "Dr Hamid’s Physio and Pain Clinic",
        image: "https://www.drhamidphysio.in/images/doctor/dr-hamid-hero.webp",
        telephone: "+917601026596",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park, Puppalguda",
          addressLocality: "Manikonda, Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500089",
          addressCountry: "IN"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "17.4011",
          longitude: "78.3789"
        },
        areaServed: service.serviceAreas.map((area) => ({
          "@type": "AdministrativeArea",
          name: area
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "10:00",
            closes: "22:00"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#faf6ed] min-h-screen">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://www.drhamidphysio.in${service.imageSrc}`} />
        <link rel="preload" as="image" href={service.imageSrc} fetchPriority="high" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.metaTitle} />
        <meta name="twitter:description" content={service.metaDescription} />
        <meta name="twitter:image" content={`https://www.drhamidphysio.in${service.imageSrc}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Top Breadcrumb Header */}
      <nav aria-label="Breadcrumb" className="bg-[#f4ede0] border-b border-[#e5dec9] py-3 text-xs sm:text-sm text-[#4a5568]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto">
          <Link to="/" className="hover:text-[#081a2e] flex items-center gap-1 shrink-0">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link to="/services" className="hover:text-[#081a2e] shrink-0">
            Services
          </Link>
          <span>/</span>
          <span className="text-[#8a5d24] font-medium truncate">{service.title}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-10 sm:py-14 md:py-16 border-b border-[#e5dec9] bg-gradient-to-b from-[#faf6ed] to-[#f6f0e2]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#f4ede0] border border-[#e5dec9] px-3 py-1 rounded-full text-xs font-semibold text-[#8a5d24]">
                <MapPin className="w-3.5 h-3.5 text-[#8a5d24]" />
                <span>Manikonda &amp; Puppalguda Clinic • Home Physiotherapy Visits</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081a2e] tracking-tight leading-[1.15]">
                {service.h1}
              </h1>

              <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
                {service.shortDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <Button
                  onClick={handleCall}
                  className="bg-[#081a2e] hover:bg-[#122842] text-white font-semibold px-6 py-6 rounded-xl flex items-center justify-center gap-2 text-base shadow-md transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-5 h-5 text-[#8a5d24]" />
                  <span>Call +91 76010 26596</span>
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="border-emerald-600 text-emerald-800 hover:bg-emerald-50 font-semibold px-6 py-6 rounded-xl flex items-center justify-center gap-2 text-base bg-white/90 shadow-xs transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </div>

              <p className="text-xs text-[#64748b]">
                📍 Opp: HDFC Bank ATM, near Friends Colony Park, Puppalguda, Manikonda. Contact the clinic to ask about appointment availability.
              </p>
            </div>

            {/* Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#e5dec9] shadow-lg bg-white p-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#e5dec9]/40">
                  <img
                    src={service.imageSrc}
                    alt={service.altText}
                    width={640}
                    height={480}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="p-4 bg-white space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#8a5d24]">
                    <span>{service.category}</span>
                    <span>Service information</span>
                  </div>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    This page is general information. Suitability and progress depend on an individual assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 max-w-6xl px-4 sm:px-6">
          <section id="health-information-disclaimer" className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
            <h2 className="font-semibold">Health information</h2>
            <p className="mt-2">This page provides general information and is not a diagnosis or individual treatment plan. Suitability and progress vary. Follow your treating clinician’s or surgeon’s instructions, especially after an injury or operation, and seek urgent medical care for sudden severe or concerning symptoms.</p>
          </section>
        </div>
      </section>

      {/* Main Educational Long-Form Content Area */}
      <section id="service-details" className="py-12 sm:py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Primary Article Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Section 1: What It Is */}
              <article className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8a5d24]">
                  <BookOpen className="w-4 h-4" />
                  <span>Clinical Overview &amp; Definition</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081a2e]">
                  What is {service.title}?
                </h2>
                <div className="text-base sm:text-lg text-[#334155] leading-relaxed space-y-4">
                  <p>{service.whatItIs}</p>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-[#faf6ed] border border-[#e5dec9] space-y-2">
                  <h3 className="text-sm font-bold text-[#081a2e] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#8a5d24]" />
                    <span>How Targeted Physiotherapy Restores Function</span>
                  </h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed">
                    {service.howPhysioHelps}
                  </p>
                  {service.evidenceSources && (
                    <div className="border-t border-[#e5dec9] pt-3">
                      <h3 className="text-xs font-bold uppercase tracking-wide text-[#081a2e]">Guidance and further reading</h3>
                      <ul className="mt-2 space-y-1">
                        {service.evidenceSources.map((source) => (
                          <li key={source.url}>
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-[#8a5d24] underline-offset-2 hover:underline"
                            >
                              {source.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>

              {/* Section 2: Causes & Symptoms Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Causes */}
                <div className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-7 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 text-[#081a2e]">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#8a5d24]">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <h2 className="font-serif text-xl font-bold">Common Causes</h2>
                  </div>
                  <p className="text-xs text-[#64748b]">
                    Primary mechanical, postural, and physiological factors observed in our Manikonda clinic:
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#334155]">
                    {service.causes.map((cause, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8a5d24] mt-2 shrink-0" />
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Symptoms */}
                <div className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-7 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 text-[#081a2e]">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700">
                      <Activity className="w-4 h-4" />
                    </div>
                    <h2 className="font-serif text-xl font-bold">Frequent Symptoms</h2>
                  </div>
                  <p className="text-xs text-[#64748b]">
                    Signs and functional limitations indicating need for physical therapy:
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#334155]">
                    {service.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 3: Diagnostic Assessment Process */}
              <div className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8a5d24]">
                  <Stethoscope className="w-4 h-4" />
                  <span>Step-by-Step Clinical Assessment</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081a2e]">
                  Our Diagnostic Evaluation in Manikonda
                </h2>
                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  An assessment may include discussion of your symptoms and goals, plus movement checks selected for your individual needs.
                </p>

                <div className="space-y-3">
                  {service.assessmentProcess.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-[#faf6ed]/70 border border-[#e5dec9]/80 transition-colors hover:bg-[#faf6ed]"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#081a2e] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Treatment Approach & Recovery */}
              <div className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8a5d24]">
                  <Layers className="w-4 h-4" />
                  <span>Multimodal Treatment Protocol</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081a2e]">
                  Evidence-Based Treatment Approach
                </h2>
                <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed">
                  We integrate hands-on manual mobilizations, targeted electro-physical modalities, and progressive active exercise therapy:
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {service.treatmentApproach.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf6ed]/50 border border-[#e5dec9]">
                      <CheckCircle2 className="w-5 h-5 text-[#8a5d24] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-[#1e293b]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-[#081a2e] to-[#122842] text-white space-y-2">
                  <div className="flex items-center gap-2 text-[#e5dec9] text-xs font-bold uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>Recovery and progress</span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-100">
                    {service.expectedRecovery}
                  </p>
                </div>
              </div>

              {/* Section 5: Home Care & Red Flags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-[#e5dec9] rounded-2xl p-6 shadow-xs space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#081a2e] flex items-center gap-2">
                    <Home className="w-5 h-5 text-[#8a5d24]" />
                    <span>Home Care &amp; Ergonomics</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4a5568]">
                    {service.homeCare.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-[#e5dec9] rounded-2xl p-6 shadow-xs space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#081a2e] flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-rose-600" />
                    <span>When to Consult Dr. Hamid</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                    {service.whenToVisit}
                  </p>
                  <Button
                    onClick={handleCall}
                    size="sm"
                    className="w-full bg-[#081a2e] hover:bg-[#122842] text-white text-xs mt-2"
                  >
                    Schedule Assessment Today
                  </Button>
                </div>
              </div>

              {/* Section 6: Comprehensive FAQs (AEO & E-E-A-T) */}
              <div className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8a5d24]">
                  <HelpCircle className="w-4 h-4" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081a2e]">
                  Patient Questions &amp; Answers
                </h2>
                <p className="text-sm text-[#4a5568]">
                  Clear clinical answers by Dr. Mohammed Hamid Ali to help you make informed decisions about your rehabilitation.
                </p>

                <Accordion type="single" collapsible className="w-full space-y-3">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border border-[#e5dec9] rounded-xl px-4 py-1 data-[state=open]:bg-[#faf6ed]/50 data-[state=open]:border-[#8a5d24]"
                    >
                      <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-semibold text-[#081a2e] hover:text-[#8a5d24] py-3.5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base text-[#4a5568] leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Related Health Articles (Internal Linking) */}
              {relatedBlogs.length > 0 && (
                <div className="bg-white border border-[#e5dec9] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#081a2e] flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#8a5d24]" />
                    <span>Related Clinical Articles</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedBlogs.map((blog) => (
                      <Link
                        key={blog.slug}
                        to={`/blogs/${blog.slug}`}
                        className="group p-4 rounded-xl border border-[#e5dec9] hover:border-[#8a5d24] hover:bg-[#faf6ed]/40 transition-all block"
                      >
                        <h4 className="font-semibold text-sm text-[#081a2e] group-hover:text-[#8a5d24] transition-colors mb-1.5">
                          {blog.title}
                        </h4>
                        <p className="text-xs text-[#64748b] line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center text-xs font-semibold text-[#8a5d24] mt-2.5">
                          <span>Read clinical guide</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Doctor Credibility Card */}
              <div className="bg-white border border-[#e5dec9] rounded-2xl p-6 shadow-sm space-y-5 sticky top-24">
                <div className="text-center pb-4 border-b border-[#e5dec9]">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#8a5d24] mb-3 shadow-xs bg-[#f4ede0]">
                    <img
                      src="/images/doctor/dr-hamid-hero.webp"
                      alt="Dr. Mohammed Hamid Ali, physiotherapist"
                      width={682}
                      height={1024}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#081a2e]">
                    Dr. Mohammed Hamid Ali
                  </h3>
                  <p className="text-xs font-semibold text-[#8a5d24]">Physiotherapy clinic in Manikonda</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#081a2e]">
                    Ask about this service
                  </h4>
                  <p className="text-xs leading-relaxed text-[#4a5568]">Contact the clinic to discuss appointment options and whether the listed service may be appropriate for you.</p>
                </div>

                {/* Booking Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <Button
                    onClick={handleCall}
                    className="w-full bg-[#081a2e] hover:bg-[#122842] text-white font-semibold py-5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4 text-[#8a5d24]" />
                    <span>Call +91 76010 26596</span>
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-800 hover:bg-emerald-50 font-semibold py-5 rounded-xl flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Book via WhatsApp</span>
                  </Button>
                </div>

                {/* Local Service Area List */}
                <div className="pt-4 border-t border-[#e5dec9] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#081a2e] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8a5d24]" />
                    <span>Areas Served for Clinic &amp; Home:</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {service.serviceAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-[#faf6ed] border border-[#e5dec9] text-[#4a5568] px-2 py-0.5 rounded-md"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clinic Location Box */}
                <div className="p-3.5 rounded-xl bg-[#faf6ed] border border-[#e5dec9] text-xs text-[#4a5568] space-y-1">
                  <p className="font-semibold text-[#081a2e]">Clinic Address:</p>
                  <p>4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park, Puppalguda, Manikonda, Hyderabad 500089.</p>
                  <p className="pt-1 text-[#8a5d24] font-medium">🕒 Mon – Sun: 10:00 AM – 10:00 PM</p>
                </div>

                {/* Related Category Services */}
                <div className="pt-4 border-t border-[#e5dec9] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#081a2e]">
                    Related Specialized Care:
                  </h4>
                  <div className="space-y-1.5">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.slug}
                        to={`/services/${rel.slug}`}
                        className="text-xs text-[#334155] hover:text-[#8a5d24] flex items-center justify-between p-2 rounded-lg hover:bg-[#faf6ed] transition-colors"
                      >
                        <span className="truncate">{rel.title}</span>
                        <ArrowRight className="w-3 h-3 shrink-0 ml-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom Sticky Action Bar on Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e5dec9] p-3 shadow-xl">
        <div className="flex gap-2 max-w-md mx-auto">
          <Button
            onClick={handleCall}
            className="flex-1 bg-[#081a2e] hover:bg-[#122842] text-white text-xs font-semibold py-5 rounded-xl flex items-center justify-center gap-1.5"
          >
            <Phone className="w-4 h-4 text-[#8a5d24]" />
            <span>Call Clinic</span>
          </Button>
          <Button
            onClick={handleWhatsApp}
            variant="outline"
            className="flex-1 border-emerald-600 text-emerald-800 hover:bg-emerald-50 text-xs font-semibold py-5 rounded-xl flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
