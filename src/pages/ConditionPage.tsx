import { useParams, Link } from "react-router-dom";
import { conditions } from "@/data/conditions";
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
  Stethoscope
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

const ConditionPage = () => {
  const { slug } = useParams();
  const condition = conditions.find((c) => c.slug === slug);

  if (!condition) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf6ed]">
        <div className="text-center p-8 bg-white border border-[#e5dec9] rounded-2xl max-w-md">
          <h1 className="font-serif text-2xl font-bold mb-4 text-[#081a2e]">Condition Not Found</h1>
          <p className="text-sm text-[#4a5568] mb-6">
            The treatment page you are looking for has been relocated or updated.
          </p>
          <Link to="/">
            <Button className="bg-[#081a2e] hover:bg-[#122842] text-white">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleCall = () => {
    window.location.href = "tel:+917601026596";
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/917601026596?text=Hi%20Dr.%20Hamid%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
        condition.title
      )}%20treatment%20at%20your%20Manikonda%20clinic.`,
      "_blank"
    );
  };

  const canonicalUrl = `https://www.drhamidphysio.in/conditions/${condition.slug}`;

  // Find relevant blogs for internal linking
  const relatedBlogs = blogPosts.filter((post) => {
    if (condition.slug.includes("knee") && post.slug.includes("knee")) return true;
    if (condition.slug.includes("sports") && (post.slug.includes("gym") || post.slug.includes("knee"))) return true;
    return post.slug.includes("physio") || post.slug.includes("pain");
  }).slice(0, 2);

  // Other condition services for internal linking
  const otherConditions = conditions
    .filter((c) => c.slug !== condition.slug && c.slug !== "ultrasound-therapy" && c.slug !== "interferential-therapy-ift")
    .slice(0, 3);

  // JSON-LD MedicalWebPage Schema
  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: `${condition.title} in Manikonda | Dr. Mohammed Hamid Ali, BPT, MPT`,
    description: condition.shortDescription,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Person",
      name: "Dr. Mohammed Hamid Ali",
      jobTitle: "Consultant Physiotherapist",
      hasCredential: "BPT, MPT (Orthopedics)",
      identifier: {
        "@type": "PropertyValue",
        name: "Registration Number",
        value: "0413"
      }
    },
    publisher: {
      "@type": "Physiotherapy",
      name: "Dr. Hamid's Physio and Pain Clinic",
      url: "https://www.drhamidphysio.in",
      telephone: "+917601026596"
    },
    about: {
      "@type": "MedicalCondition",
      name: condition.title
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: condition.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-[#faf6ed]">
      <StructuredData
        type="service"
        pageTitle={`${condition.title} in Manikonda | Dr. Hamid's Physio Clinic`}
        pageDescription={`${condition.shortDescription} Expert treatment in Puppalguda, Manikonda, Hyderabad under Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics).`}
      />

      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${condition.title} in Manikonda | Dr. Hamid's Physio Clinic`} />
        <meta property="og:description" content={condition.shortDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(conditionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative border-b border-[#e5dec9] bg-gradient-to-b from-[#faf6ed] to-[#f4ede0] py-12 md:py-16">
        <div className="container px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-semibold text-[#8a5d24] hover:text-[#5c3e17] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ece5d4] text-[#5c4928] text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#8a5d24]" />
                <span>Manikonda &amp; Puppalguda, Hyderabad</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081a2e] leading-tight">
                {condition.title}{" "}
                <span className="text-[#8a5d24] block sm:inline">in Manikonda</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4a5568] leading-relaxed">
                {condition.overview}
              </p>

              <div className="flex flex-wrap gap-4 pt-3">
                <Button
                  onClick={handleCall}
                  className="bg-[#081a2e] hover:bg-[#122842] text-white px-6 h-12 rounded-lg font-semibold flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 76010 26596</span>
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  className="bg-[#2a5d45] hover:bg-[#1f4734] text-white px-6 h-12 rounded-lg font-semibold flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Doctor</span>
                </Button>
              </div>

              <p className="text-xs text-[#718096] pt-1">
                ⭐ Looking for physiotherapy near me? Walk-in consultations &amp; home visits available across Manikonda.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-[#e5dec9] bg-white shadow-xl">
                <img
                  src={condition.imageSrc}
                  alt={condition.altText}
                  width={640}
                  height={480}
                  className="w-full aspect-[4/3] object-cover object-center"
                />
                <div className="p-4 bg-white border-t border-[#e5dec9] text-center">
                  <p className="text-xs font-bold text-[#081a2e]">
                    Clinical Assessment under Dr. Mohammed Hamid Ali, BPT, MPT
                  </p>
                  <p className="text-[11px] text-[#718096] mt-0.5">
                    Near Friends Colony Park, Puppalguda, Manikonda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Clinical Sections */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="container max-w-5xl mx-auto space-y-16">
          
          {/* Causes & Symptoms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#e5dec9] shadow-xs">
              <h2 className="font-serif text-2xl font-bold text-[#081a2e] mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#8a5d24]" />
                Common Causes &amp; Contributors
              </h2>
              <ul className="space-y-3">
                {condition.causes.map((cause, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#4a5568] leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#8a5d24] mt-2 shrink-0" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#e5dec9] shadow-xs">
              <h2 className="font-serif text-2xl font-bold text-[#081a2e] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#2a5d45]" />
                Symptoms We Evaluate
              </h2>
              <ul className="space-y-3">
                {condition.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#4a5568] leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#2a5d45] mt-2 shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Treatment Approach & How Physio Helps */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#e5dec9] shadow-sm space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
                Evidence-Based Protocol
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081a2e] mt-1 mb-3">
                How Physiotherapy Helps &amp; Our Treatment Approach
              </h2>
              <p className="text-base text-[#4a5568] leading-relaxed">
                {condition.howPhysioHelps}
              </p>
            </div>

            {condition.treatmentApproach && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#f0e7d3]">
                {condition.treatmentApproach.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#faf6ed] border border-[#e5dec9]/70">
                    <div className="w-6 h-6 rounded-full bg-[#081a2e] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-sm font-medium text-[#2d3748] leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            )}

            {condition.expectedRecovery && (
              <div className="p-4 rounded-xl bg-[#f0f7f3] border border-[#c3dfd1] text-xs sm:text-sm text-[#1b4332] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2a5d45] shrink-0" />
                <div>
                  <strong>Expected Recovery Timeline: </strong>
                  <span>{condition.expectedRecovery}</span>
                </div>
              </div>
            )}
          </div>

          {/* Why Choose Dr. Hamid & Service Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#e5dec9] shadow-xs">
              <h2 className="font-serif text-xl font-bold text-[#081a2e] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#8a5d24]" />
                Why Choose Dr. Hamid&apos;s Physio Clinic
              </h2>
              <ul className="space-y-3">
                {(condition.whyChooseDoctor || [
                  "8+ years of musculoskeletal and spinal rehabilitation experience",
                  "Direct 1-on-1 care under Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics)",
                  "Patient-first approach with clear biomechanical explanations",
                  "Over 100+ positive patient reviews across Hyderabad"
                ]).map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#4a5568]">
                    <CheckCircle2 className="w-4 h-4 text-[#2a5d45] mt-1 shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#e5dec9] shadow-xs">
              <h2 className="font-serif text-xl font-bold text-[#081a2e] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#8a5d24]" />
                Clinic Location &amp; Nearby Areas Served
              </h2>
              <p className="text-sm text-[#4a5568] leading-relaxed mb-4">
                Our clinic is conveniently located in Puppalguda, Manikonda, welcoming patients arriving from nearby neighbourhoods across West Hyderabad:
              </p>
              <div className="flex flex-wrap gap-2">
                {(condition.serviceAreas || [
                  "Puppalguda", "Manikonda", "Lanco Hills", "Tolichowki", "Shaikpet",
                  "OU Colony", "Alkapur Township", "Khajaguda", "Narsingi", "Neknampur", "Golconda", "Seven Tombs"
                ]).map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-[#faf6ed] border border-[#e5dec9] text-[#5c4928] text-xs font-medium rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Home Care & When to Visit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fffbf2] p-7 rounded-2xl border border-[#e5dec9]">
              <h2 className="font-serif text-xl font-bold text-[#081a2e] mb-3">
                Home Care &amp; Ergonomic Tips
              </h2>
              <ul className="space-y-2.5">
                {condition.homeCare.map((tip, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#4a5568] flex items-start gap-2">
                    <span className="text-[#8a5d24] font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#fffbf2] p-7 rounded-2xl border border-[#e5dec9]">
              <h2 className="font-serif text-xl font-bold text-[#081a2e] mb-3">
                When to Consult a Physiotherapist
              </h2>
              <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                {condition.whenToVisit}
              </p>
              <div className="mt-5">
                <Button
                  onClick={handleCall}
                  className="bg-[#081a2e] hover:bg-[#122842] text-white text-xs h-10 px-4 rounded-md"
                >
                  Speak with Dr. Hamid: +91 76010 26596
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Accordion (AEO Schema Friendly) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#e5dec9] shadow-xs">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#081a2e] mt-1">
                Questions Regarding {condition.title}
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {condition.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#f0e7d3]">
                  <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-semibold text-[#081a2e] hover:text-[#8a5d24] py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#4a5568] leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Internal Linking: Related Blog Guides */}
          {relatedBlogs.length > 0 && (
            <div className="p-7 rounded-2xl bg-[#faf6ed] border border-[#e5dec9]">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-[#8a5d24]" />
                <h3 className="font-serif text-lg font-bold text-[#081a2e]">
                  Helpful Educational Guides
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedBlogs.map((b) => (
                  <Link
                    key={b.slug}
                    to={`/blogs/${b.slug}`}
                    className="p-4 rounded-xl bg-white border border-[#e5dec9] hover:border-[#8c6b3e] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <p className="text-xs font-bold text-[#8a5d24] uppercase tracking-wider mb-1">
                        {b.category}
                      </p>
                      <h4 className="font-serif text-sm font-bold text-[#081a2e] group-hover:text-[#8a5d24] line-clamp-2">
                        {b.title}
                      </h4>
                    </div>
                    <span className="inline-flex items-center text-xs font-semibold text-[#8a5d24] mt-3 group-hover:translate-x-1 transition-transform">
                      Read article <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Other Conditions We Treat */}
          <div className="pt-6 border-t border-[#e5dec9]">
            <p className="text-xs uppercase tracking-widest font-bold text-[#718096] mb-4">
              Explore Other Specialized Treatments
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherConditions.map((c) => (
                <Link
                  key={c.slug}
                  to={`/conditions/${c.slug}`}
                  className="p-4 rounded-xl bg-white border border-[#e5dec9] hover:border-[#8c6b3e] text-sm font-bold text-[#081a2e] hover:text-[#8a5d24] transition-colors flex items-center justify-between"
                >
                  <span>{c.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#8a5d24]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Book Appointment CTA Card */}
          <div className="p-8 md:p-12 rounded-2xl bg-[#081a2e] text-white text-center space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Ready to Overcome Your Pain?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Schedule your 1-on-1 assessment with Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics) at our Manikonda clinic, or request an in-home physiotherapy session.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-3">
              <Button
                onClick={handleCall}
                className="bg-[#d4a853] hover:bg-[#c29845] text-[#081a2e] font-bold px-7 h-12 rounded-lg"
              >
                Call Clinic (+91 76010 26596)
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="bg-[#2a5d45] hover:bg-[#1f4734] text-white font-bold px-7 h-12 rounded-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ConditionPage;
