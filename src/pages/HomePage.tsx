import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  Star,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Award,
  Users,
  Compass
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import StickyCTA from "@/components/StickyCTA";
import PainPointGuide from "@/components/PainPointGuide";
import AppointmentForm from "@/components/AppointmentForm";
import ContactMap from "@/components/ContactMap";
import { conditions } from "@/data/conditions";
import { blogPosts } from "@/data/blogPosts";

// Medical SVG icons styled to match reference image cards
const NeckIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-[#a06b32]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 10a8 8 0 0 0-8 8v6a8 8 0 0 0 16 0v-6a8 8 0 0 0-8-8z" />
    <path d="M24 28c-4 2-8 7-8 14v4h32v-4c0-7-4-12-8-14" />
    <path d="M29 34h6" />
    <path d="M29 39h6" />
    <path d="M32 14v4" />
  </svg>
);

const SpineBackIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-[#a06b32]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 16c-3 3-5 8-5 14v16h26V30c0-6-2-11-5-14" />
    <circle cx="32" cy="18" r="2" fill="currentColor" />
    <circle cx="32" cy="24" r="2" fill="currentColor" />
    <circle cx="32" cy="30" r="2" fill="currentColor" />
    <circle cx="32" cy="36" r="2" fill="currentColor" />
    <circle cx="32" cy="42" r="2" fill="currentColor" />
    <path d="M28 24h8M28 30h8M28 36h8" strokeWidth="2" />
  </svg>
);

const KneeIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-[#a06b32]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 12c2 8 4 14 4 20 0 6-2 12-4 20" />
    <path d="M40 12c-2 8-4 14-4 20 0 6 2 12 4 20" />
    <ellipse cx="32" cy="32" rx="7" ry="9" strokeWidth="2.5" />
    <path d="M30 29c1-1 3-1 4 0" />
  </svg>
);

const RunningAthleteIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-[#a06b32]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="38" cy="14" r="5" />
    <path d="M28 26l8-4 6 7 7 2" />
    <path d="M34 23l-7 11 8 4-3 12" />
    <path d="M27 34l-9 4-4-5" />
  </svg>
);

const RehabBedIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-[#a06b32]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="22" cy="22" r="4" />
    <path d="M16 34c4-3 9-4 15-4h18" />
    <path d="M14 38h38v4H14z" fill="currentColor" fillOpacity="0.1" />
    <path d="M18 42v10M48 42v10" />
    <path d="M34 22c2 3 5 5 8 5" />
  </svg>
);

const ApartmentBuildingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-[#a06b32]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Base ground line */}
    <path d="M8 54h48" />
    {/* Luxury high-rise residential apartment tower */}
    <rect x="18" y="12" width="28" height="42" rx="2" strokeWidth="2.5" />
    {/* Architectural penthouse crown & spire */}
    <path d="M25 12V7h14v5" strokeWidth="2" />
    <path d="M32 7V4" strokeWidth="2" />
    {/* Symmetrical luxury apartment balcony / window suites */}
    <rect x="23" y="17" width="6" height="5" rx="0.5" strokeWidth="1.8" />
    <rect x="35" y="17" width="6" height="5" rx="0.5" strokeWidth="1.8" />
    <rect x="23" y="26" width="6" height="5" rx="0.5" strokeWidth="1.8" />
    <rect x="35" y="26" width="6" height="5" rx="0.5" strokeWidth="1.8" />
    <rect x="23" y="35" width="6" height="5" rx="0.5" strokeWidth="1.8" />
    <rect x="35" y="35" width="6" height="5" rx="0.5" strokeWidth="1.8" />
    {/* Grand entrance / lobby canopy */}
    <path d="M28 54v-8h8v8" strokeWidth="2" />
    <path d="M26 46h12" strokeWidth="2" />
  </svg>
);

const HomePage = () => {
  // 6 Horizontal Highlight Cards matching reference image exactly
  const heroHighlightCards = [
    {
      title: "Neck Pain Treatment",
      slug: "neck-pain",
      icon: <NeckIcon />,
      hint: "Cervical care & text neck"
    },
    {
      title: "Back Pain Treatment",
      slug: "back-pain",
      icon: <SpineBackIcon />,
      hint: "Sciatica & disc decompression"
    },
    {
      title: "Knee Pain Treatment",
      slug: "knee-pain",
      icon: <KneeIcon />,
      hint: "Stair pain & arthritis care"
    },
    {
      title: "Sports Injuries Rehab",
      slug: "sports-injuries",
      icon: <RunningAthleteIcon />,
      hint: "Sprains, tears & return-to-play"
    },
    {
      title: "Post-Surgery Rehab",
      slug: "post-surgery-rehab",
      icon: <RehabBedIcon />,
      hint: "TKR, THR & fracture protocol"
    },
    {
      title: "Home Physiotherapy Visits",
      slug: "home-visit-services",
      icon: <ApartmentBuildingIcon />,
      hint: "Apartment & in-home physio in Manikonda"
    },
  ];

  const primaryConditionServices = conditions.filter(
    (c) => c.slug !== "ultrasound-therapy" && c.slug !== "interferential-therapy-ift"
  );

  const supportiveModalities = conditions.filter(
    (c) => c.slug === "ultrasound-therapy" || c.slug === "interferential-therapy-ift"
  );

  const testimonials = [
    {
      quote:
        "After months of back pain and numbness, I found relief after just 5 sessions at Dr. Hamid's clinic in Manikonda. Dr. Hamid took the time to assess the exact spinal cause and demonstrated targeted exercises that worked.",
      author: "Srikishan S.",
      location: "Puppalguda, Manikonda"
    },
    {
      quote:
        "My mother was suffering from severe knee pain on stairs. Alhamdulillah, Dr. Hamid's physiotherapy sessions gave her 70% relief and improved her walking balance without surgery.",
      author: "Sania M.",
      location: "Manikonda"
    },
    {
      quote:
        "Very humble, punctual and scientifically sound doctor. He explained my shoulder impingement clearly and created an exercise schedule that healed my arm in 2 weeks. Highly recommended!",
      author: "Abdul B.",
      location: "Gachibowli"
    },
  ];

  const scrollToAppointment = () => {
    const el = document.getElementById("appointment");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDirections = () => {
    window.open("https://maps.app.goo.gl/zGixCFnPJbKzKxy17", "_blank");
  };

  return (
    <div className="pb-16 md:pb-0 bg-[#faf6ed] text-[#1a202c]">
      <StructuredData type="homepage" />

      {/* =========================================================
          1. HERO SECTION (EXACT MATCH TO REFERENCE DESIGN)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf6ed] via-[#f7f2e5] to-[#f4ede0] pt-8 sm:pt-12 pb-16 lg:pb-24 border-b border-[#e5dec9]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ece5d4] border border-[#dfd6be] text-[#5c4928] text-xs sm:text-sm font-medium shadow-2xs">
                <MapPin className="w-4 h-4 text-[#8a5d24] shrink-0" />
                <span>Physiotherapy in Manikonda, Hyderabad</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.65rem] font-bold text-[#081a2e] tracking-tight leading-[1.12]">
                Expert Care <br />
                for Your Pain &amp; Recovery
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-[#4a5568] leading-relaxed max-w-xl font-normal">
                Helping you move better, feel stronger and live an active life with personalized physiotherapy treatment under Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics).
              </p>

              {/* Two CTA Buttons Side by Side */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  size="lg"
                  onClick={scrollToAppointment}
                  className="bg-[#081a2e] hover:bg-[#122842] text-white px-7 py-3.5 h-13 text-base font-semibold rounded-lg shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDirections}
                  className="border-[#8c6b3e] text-[#553b1b] hover:bg-[#ece2cc] hover:text-[#33220e] px-7 py-3.5 h-13 text-base font-semibold rounded-lg bg-transparent transition-all cursor-pointer"
                >
                  Get Directions
                </Button>
              </div>

              {/* Key Credibility Micro-signals */}
              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#4a5568] border-t border-[#e2d8c0]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2a5d45]" />
                  <span>8+ Years Clinical Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#c28e28] fill-[#c28e28]" />
                  <span>100+ 5-Star Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2a5d45]" />
                  <span>Home Physiotherapy Visits in Manikonda &amp; Puppalguda</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Doctor Image with Spine Model */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#fbf7ee] to-[#ede2cd]">
                <img
                  src="/images/doctor/dr-hamid-actual.png"
                  alt="Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics) - Consultant Physiotherapist holding anatomical spine model at Dr. Hamid's Physio Clinic Manikonda"
                  className="w-full h-auto aspect-[3/4] object-cover object-top drop-shadow-sm"
                  loading="eager"
                />
                
                {/* Subtle overlay badge for credentials */}
                <div className="absolute bottom-3 right-3 bg-[#081a2e]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg text-xs font-medium shadow-md">
                  Dr. Mohammed Hamid Ali, BPT, MPT
                </div>
              </div>
            </div>

          </div>

          {/* =========================================================
              HORIZONTAL 6-CARD ROW (EXACT MATCH TO REFERENCE)
          ========================================================= */}
          <div className="mt-14 lg:mt-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
              {heroHighlightCards.map((card) => (
                <Link
                  key={card.slug}
                  to={`/conditions/${card.slug}`}
                  className="group flex flex-col items-center text-center p-5 rounded-2xl bg-[#fffbf2]/90 hover:bg-white border border-[#e5dec9] hover:border-[#8c6b3e]/60 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-full bg-[#f6eddb] group-hover:bg-[#efe3c8] flex items-center justify-center mb-3 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#081a2e] group-hover:text-[#8a5d24] transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <span className="text-[11px] text-[#718096] mt-1 line-clamp-1 group-hover:text-[#4a5568]">
                    {card.hint}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          2. LOCAL SEO & "PHYSIOTHERAPY NEAR ME" QUICK BANNER
      ========================================================= */}
      <section className="bg-[#f0e7d3] border-b border-[#dfd4bc] py-5 px-4">
        <div className="container flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[#443621]">
            <Compass className="w-4 h-4 text-[#8a5d24] shrink-0" />
            <span className="font-semibold">Local Physiotherapy Centers Near You:</span>
            <span className="text-[#5c4a30]">
              Serving Manikonda, Puppalguda, Alkapur Township, Shaikpet, Narsingi, Kokapet, Financial District &amp; Gachibowli.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+917601026596"
              className="font-bold text-[#081a2e] hover:text-[#8a5d24] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 76010 26596</span>
            </a>
            <span className="text-[#8a5d24]">•</span>
            <span className="text-[#2a5d45] font-semibold">Home Physiotherapy Visits Available</span>
          </div>
        </div>
      </section>

      {/* Interactive Body Symptom Map Guide */}
      <PainPointGuide />

      {/* =========================================================
          3. HIGH-INTENT CONDITION SERVICES
      ========================================================= */}
      <section id="conditions" className="py-16 md:py-24 px-4 bg-white border-b border-[#e5dec9]">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
              High-Intent Clinical Treatments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#081a2e] mt-2 mb-4">
              Condition-Based Physiotherapy Services in Manikonda
            </h2>
            <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed">
              We focus on diagnosing the root biomechanical cause of your pain rather than masking symptoms with machines. Each treatment protocol is customized to your body, daily routine, and personal recovery goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {primaryConditionServices.map((service) => (
              <article
                key={service.slug}
                className="group flex flex-col bg-[#fffbf2] border border-[#e5dec9] rounded-2xl overflow-hidden hover:border-[#8c6b3e] hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                  <img
                    src={service.imageSrc}
                    alt={service.altText}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#081a2e]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    Manikonda Clinic &amp; Home Visit
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl font-bold text-[#081a2e] mb-2 group-hover:text-[#8a5d24] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed line-clamp-3 mb-5 flex-grow">
                    {service.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-[#e2d8c0]/60 flex items-center justify-between">
                    <Link
                      to={`/conditions/${service.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-[#8a5d24] hover:text-[#5c3e17] transition-colors"
                    >
                      <span>Explore Treatment &amp; FAQs</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. SUPPORTING THERAPIES & MODALITIES (DISCREET / SECONDARY)
      ========================================================= */}
      <section className="py-14 px-4 bg-[#fbf8f0] border-b border-[#e5dec9]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#718096]">
                Secondary Modalities
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081a2e] mt-1">
                Supporting Therapies &amp; Modalities
              </h2>
              <p className="text-sm text-[#4a5568] mt-1 max-w-2xl">
                Ultrasound and Interferential Therapy (IFT) are used selectively as soothing adjuncts to alleviate acute inflammation and muscle spasms, supporting active exercise and manual therapy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {supportiveModalities.map((modality) => (
              <div
                key={modality.slug}
                className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-xl border border-[#e5dec9] bg-white shadow-2xs hover:border-[#8c6b3e]/60 transition-colors"
              >
                <img
                  src={modality.imageSrc}
                  alt={modality.altText}
                  className="w-24 h-24 rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-bold text-base text-[#081a2e]">
                    {modality.title}
                  </h3>
                  <p className="text-xs text-[#4a5568] mt-1 line-clamp-2">
                    {modality.shortDescription}
                  </p>
                  <Link
                    to={`/conditions/${modality.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-[#8a5d24] hover:underline mt-2.5"
                  >
                    <span>Read modality overview</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. ABOUT DR. MOHAMMED HAMID ALI, BPT (E-E-A-T CREDIBILITY)
      ========================================================= */}
      <section id="patient-info" className="py-16 md:py-24 px-4 bg-white border-b border-[#e5dec9]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-[#e5dec9] bg-gradient-to-b from-[#fbf7ee] to-[#ede2cd] shadow-lg">
                <img
                  src="/images/doctor/dr-hamid-actual.png"
                  alt="Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics) - Consultant Physiotherapist Manikonda"
                  className="w-full aspect-[3/4] object-cover object-top drop-shadow-sm"
                  loading="lazy"
                />
                <div className="p-6 bg-white border-t border-[#e5dec9]">
                  <h3 className="font-serif text-xl font-bold text-[#081a2e]">
                    Dr. Mohammed Hamid Ali
                  </h3>
                  <p className="text-sm font-medium text-[#8a5d24]">
                    BPT, MPT (Orthopedics) · Regd. No. 0413 · 8+ Years Experience
                  </p>
                  <p className="text-xs text-[#718096] mt-2">
                    Consultant Physiotherapist &amp; Founder, Dr. Hamid&apos;s Physio and Pain Clinic
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Bio & Treatment Philosophy */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
                Doctor Bio &amp; Clinical Credentials
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#081a2e]">
                Dedicated to Your Pain Relief &amp; Lasting Movement Health
              </h2>

              <p className="text-base text-[#4a5568] leading-relaxed">
                Dr. Mohammed Hamid Ali is a certified physiotherapist with over eight years of rigorous clinical practice in Hyderabad. Specializing in spinal biomechanics, joint preservation, post-surgical recovery, and sports rehabilitation, his patient-first methodology eliminates guesswork through detailed physical examination and clear communication.
              </p>

              <p className="text-base text-[#4a5568] leading-relaxed">
                Rather than rushing patients into passive cycles of machines or unnecessary diagnostic imaging, Dr. Hamid designs individualized exercise programs that empower you to understand your condition, recover functional confidence, and prevent future recurrences.
              </p>

              {/* 3 Credential Badges */}
              <div className="grid grid-cols-3 gap-3 pt-3">
                <div className="p-4 rounded-xl bg-[#faf6ed] border border-[#e5dec9] text-center">
                  <Award className="w-5 h-5 text-[#8a5d24] mx-auto mb-1" />
                  <p className="font-bold text-[#081a2e] text-sm">BPT, MPT</p>
                  <p className="text-[11px] text-[#718096]">Orthopedics Specialist</p>
                </div>
                <div className="p-4 rounded-xl bg-[#faf6ed] border border-[#e5dec9] text-center">
                  <Clock className="w-5 h-5 text-[#8a5d24] mx-auto mb-1" />
                  <p className="font-bold text-[#081a2e] text-sm">8+ Years</p>
                  <p className="text-[11px] text-[#718096]">Clinical Experience</p>
                </div>
                <div className="p-4 rounded-xl bg-[#faf6ed] border border-[#e5dec9] text-center">
                  <ShieldCheck className="w-5 h-5 text-[#8a5d24] mx-auto mb-1" />
                  <p className="font-bold text-[#081a2e] text-sm">Regd. No. 0413</p>
                  <p className="text-[11px] text-[#718096]">Licensed Therapist</p>
                </div>
              </div>

              {/* Direct Booking Links */}
              <div className="pt-3 flex flex-wrap gap-4 items-center">
                <Button
                  onClick={scrollToAppointment}
                  className="bg-[#081a2e] hover:bg-[#122842] text-white px-6 h-11 rounded-lg"
                >
                  Book with Dr. Hamid
                </Button>
                <a
                  href="https://wa.me/917601026596?text=Hi%20Dr.%20Hamid%2C%20I%20would%20like%20to%20consult%20you%20regarding%20physiotherapy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2a5d45] hover:text-[#183d2c]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Doctor Directly</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          6. PATIENT REVIEWS & REAL EVIDENCE
      ========================================================= */}
      <section className="py-16 md:py-24 px-4 bg-[#faf6ed] border-b border-[#e5dec9]">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
                Verified Patient Experiences
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#081a2e] mt-1">
                What Manikonda Patients Say
              </h2>
            </div>
            <Link
              to="/reviews"
              className="inline-flex items-center text-sm font-semibold text-[#8a5d24] hover:underline"
            >
              <span>View all 50+ Google Reviews</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#e5dec9] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-[#c28e28] fill-[#c28e28]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#4a5568] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#f0e7d3]">
                  <p className="font-bold text-[#081a2e] text-sm">{t.author}</p>
                  <p className="text-xs text-[#718096]">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          7. HEALTH BLOGS & RECOVERY GUIDES (INTERNAL LINKING SUPPORT)
      ========================================================= */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-[#e5dec9]">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
                Educational Articles
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#081a2e] mt-1">
                Knee Pain, Spine &amp; Exercise Recovery Guides
              </h2>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center text-sm font-semibold text-[#8a5d24] hover:underline"
            >
              <span>Browse Blog Hub</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="flex flex-col rounded-2xl border border-[#e5dec9] bg-[#fffbf2] overflow-hidden hover:shadow-lg transition-all group"
              >
                <Link to={`/blogs/${post.slug}`} className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-[#718096] mb-2">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#081a2e] group-hover:text-[#8a5d24] transition-colors line-clamp-2 mb-2">
                    <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-[#4a5568] line-clamp-2 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="text-xs font-bold text-[#8a5d24] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          8. APPOINTMENT & GOOGLE MAPS SECTION
      ========================================================= */}
      <section id="appointment" className="py-16 md:py-24 px-4 bg-[#faf6ed]">
        <div id="contact" className="container">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
              Start Your Recovery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#081a2e] mt-1 mb-3">
              Book Your Physiotherapy Appointment in Manikonda
            </h2>
            <p className="text-[#4a5568] text-base leading-relaxed">
              Appointments available Mon – Sun: 10:00 AM – 10:00 PM. Clinic visits and personalized home physiotherapy visits available across Puppalguda, Manikonda, and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AppointmentForm />
            <ContactMap
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.7!2d78.390221!3d17.3989817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c8eb026f65%3A0x5e83196a16a5e123!2sDr.%20Hamid's%20Physio%20%26%20Pain%20Clinic!5e0!3m2!1sen!2sin!4v1727624000000"
              externalMapUrl="https://maps.app.goo.gl/zGixCFnPJbKzKxy17"
              className="h-full min-h-[380px]"
            />
          </div>
        </div>
      </section>

      <StickyCTA />
    </div>
  );
};

export default HomePage;
