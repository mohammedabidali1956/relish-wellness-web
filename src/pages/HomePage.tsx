import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  CheckCircle2,
  Compass
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import StickyCTA from "@/components/StickyCTA";
import AppointmentForm from "@/components/AppointmentForm";
import ContactMap from "@/components/ContactMap";
import { getRecentPosts } from "@/data/blogPosts";
import { GOOGLE_BUSINESS_PROFILE_URL, PRACTO_PROFILE_URL } from "@/lib/businessInfo";

// Full review wording and five-star ratings transcribed from the supplied Google profile screenshots.
const googleReviews = [
  {
    reviewer: "Aisha Quadri",
    text: "He is a good doctor . Liked the service hear . Mostly it is affordable for every one .",
    rating: 5,
  },
  {
    reviewer: "syed waheed multani",
    text: "I highly appreciate the physiotherapy services provided by Dr. Hamid. His professional expertise is complemented by his exceptionally humble, courteous, and compassionate approach towards patients. He listens attentively, explains the treatment process clearly, and provides care with patience and genuine concern for the patient’s well-being.\n\nHis reassuring manner and systematic approach to physiotherapy create a strong sense of confidence and comfort during the course of treatment. I sincerely recommend visiting his clinic, particularly for those seeking professional physiotherapy with compassionate care and a positive outlook towards recovery. Patients can approach the clinic with confidence and trust in his dedicated services.",
    rating: 5,
  },
  {
    reviewer: "shameer",
    text: "I had an exceptional experience at Dr. Hamid’s Physio & Pain Clinic. The doctor is not only highly skilled but also very approachable. He patiently listens to every concern, explains the treatment clearly, and ensures that I feel comfortable throughout the process. His well-mannered approach and genuine care made my recovery journey smooth and reassuring. I would strongly recommend this clinic to anyone seeking effective and compassionate physiotherapy care",
    rating: 5,
  },
  {
    reviewer: "salim riyaz",
    text: "I took frozen shoulder treatment and recovered completely recommended for everyone thanks dr hamid sir best physio in manikonda",
    rating: 5,
  },
  {
    reviewer: "Dr. Haleem Khan Khan",
    text: "Very efficient doctor.. he understands and listens carefully.. treats accordingly.. very happy that my treatment went smoothly.. thank you Dr Hamid",
    rating: 5,
  },
  {
    reviewer: "Irfan Shaik",
    text: "Very much satisfied with the way treatment has been done with care and transparency. Found this place when I was suffering from severe neck stiffness and right shoulder pain and walked away with utmost relief and comfort. Highly recommended! Dr.Hamid is exceptionally professional both in physio and hospitality.",
    rating: 5,
  },
  {
    reviewer: "shravaniAS AS",
    text: "He is a good physiotherapist doctor. He will do treatment with lots of patients. Understands exact problem and gave good treatment to me Gives good suggestions for better improvement.",
    rating: 5,
  },
  {
    reviewer: "Raghav reddy",
    text: "Excellent physiotherapy and pain relief clinic! My wife had a very good experience at Dr. Hamid’s Physio & Pain Clinic. Dr. Hamid is professional, knowledgeable, and takes the time to understand the problem before starting treatment. The treatment was explained clearly, and I noticed good improvement with the sessions.",
    rating: 5,
  },
] as const;

const homepageServiceIcons = [
  {
    label: "Neck Pain",
    href: "/services/neck-pain-physiotherapy-manikonda",
    src: "/images/services/circular-icons/neck-pain.webp",
    alt: "Neck pain physiotherapy service",
  },
  {
    label: "Back Pain",
    href: "/services/back-pain-physiotherapy-manikonda",
    src: "/images/services/circular-icons/back-pain.webp",
    alt: "Back pain physiotherapy service",
  },
  {
    label: "Shoulder Pain",
    href: "/services/shoulder-pain-physiotherapy-manikonda",
    src: "/images/services/circular-icons/shoulder.webp",
    alt: "Shoulder pain physiotherapy service",
  },
  {
    label: "Knee Pain",
    href: "/services/knee-pain-physiotherapy-manikonda",
    src: "/images/services/circular-icons/knee.webp",
    alt: "Knee pain physiotherapy service",
  },
  {
    label: "Sciatica",
    href: "/services/sciatica-physiotherapy-manikonda",
    src: "/images/services/circular-icons/sciatica.webp",
    alt: "Sciatica physiotherapy service",
  },
  {
    label: "Home Visits",
    href: "/services/home-visit-physiotherapy-manikonda",
    src: "/images/services/circular-icons/home-visits.webp",
    alt: "Home visit physiotherapy service",
  },
  {
    label: "Sports Injury Rehabilitation",
    href: "/services/sports-injury-physiotherapy-manikonda",
    src: "/images/services/circular-icons/sports-injury-rehab.webp",
    alt: "Sports injury rehabilitation service",
  },
  {
    label: "Post-Surgery Rehabilitation",
    href: "/services/post-surgical-rehabilitation-manikonda",
    src: "/images/services/circular-icons/post-surgery-rehab.webp",
    alt: "Post-surgery rehabilitation service",
  },
  {
    label: "Stroke and Neurological Rehabilitation",
    href: "/services/stroke-physiotherapy-manikonda",
    src: "/images/services/circular-icons/stroke-neuro-rehab.webp",
    alt: "Stroke and neurological rehabilitation service",
  },
  {
    label: "Gym Injuries",
    href: "/services/gym-injuries-physiotherapy-manikonda",
    src: "/images/services/circular-icons/gym-injuries.webp",
    alt: "Gym injury physiotherapy services",
  },
] as const;

const neighborhoodAreas = [
  { name: "Puppalguda", detail: "Primary Clinic", travel: "Walk-in / 2 min" },
  { name: "Manikonda", detail: "Primary Location", travel: "Local / 3–5 min" },
  { name: "Lanco Hills", detail: "Via Main Road", travel: "~5 min drive" },
  { name: "Tolichowki", detail: "Via Shaikpet", travel: "~10 min drive" },
  { name: "Shaikpet", detail: "Via Dargah Road", travel: "~7 min drive" },
  { name: "OU Colony", detail: "Via Manikonda Rd", travel: "~6 min drive" },
  { name: "Alkapur Township", detail: "Direct Access", travel: "~5 min drive" },
  { name: "Khajaguda", detail: "Via Lake Road", travel: "~8 min drive" },
  { name: "Narsingi", detail: "Puppalguda Junc.", travel: "~8 min drive" },
  { name: "Neknampur", detail: "Via Neknampur Rd", travel: "~6 min drive" },
  { name: "Golconda", detail: "Direct Route", travel: "~12 min drive" },
  { name: "Seven Tombs", detail: "Via Shaikpet", travel: "~10 min drive" },
] as const;

const ServiceAreasSection = () => (
  <section id="service-areas" className="py-10 px-4 bg-white border-b border-[#e5dec9]">
    <div className="container">
      <div className="bg-white/80 border border-[#e5dec9] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8a5d24] uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#8a5d24]" />
              <span>Neighbourhood Accessibility</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#081a2e]">
              Home physiotherapy in Hyderabad: areas we visit
            </h2>
          </div>
          <span className="text-xs text-[#718096] bg-[#faf6ed] border border-[#e5dec9] px-3 py-1.5 rounded-full font-medium self-start sm:self-auto">
            📍 Physio Clinic in Manikonda
          </span>
        </div>

        <p className="text-sm text-[#4a5568] leading-relaxed mb-4">
          The clinic is at <strong>4-3/81, opposite HDFC Bank ATM, near Friends Colony Park, Puppalguda, Manikonda</strong>. Existing nearby areas include Puppalguda, Manikonda, Lanco Hills, Tolichowki, Shaikpet, OU Colony, Alkapur Township, Khajaguda, Narsingi, Neknampur, Golconda and Seven Tombs.
        </p>
        <p className="text-sm text-[#4a5568] leading-relaxed mb-6">
          Home-visit enquiries are generally targeted within an approximate 15 km radius of Manikonda. Priority areas include Kokapet, Gandipet, Narsingi, Jubilee Hills, Banjara Hills, Gachibowli, the Financial District, HITEC City, Puppalguda, Lanco Hills, Alkapur Township, Shaikpet and Tolichowki. Availability depends on the exact address; contact the clinic to confirm. This is not a road-distance guarantee.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {neighborhoodAreas.map((area) => (
            <div key={area.name} className="bg-[#faf6ed] border border-[#e5dec9] rounded-xl p-3 text-center">
              <p className="font-bold text-[#081a2e] text-xs sm:text-sm">
                {area.name}
              </p>
              <p className="text-[11px] text-[#8a5d24] font-medium mt-0.5">
                {area.detail}
              </p>
              <p className="text-[10px] text-[#718096] mt-1">
                {area.travel}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-[#e5dec9] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5c4928]">
          <span>
            <em>Home Physiotherapy Visits:</em> Contact the clinic to confirm coverage and availability for your address.
          </span>
          <a
            href={GOOGLE_BUSINESS_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#081a2e] hover:text-[#8a5d24] inline-flex items-center gap-1 transition-colors"
          >
            <span>Open Directions on Google Maps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  const reviewCarouselOptions = React.useMemo(
    () => ({ align: "center" as const, loop: true }),
    []
  );
  const [reviewCarouselRef, reviewCarouselApi] = useEmblaCarousel(reviewCarouselOptions);
  const [selectedReviewIndex, setSelectedReviewIndex] = React.useState(0);
  const [isDocumentVisible, setIsDocumentVisible] = React.useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [isReviewPointerDown, setIsReviewPointerDown] = React.useState(false);
  const [reviewAutoplayResetKey, setReviewAutoplayResetKey] = React.useState(0);

  React.useEffect(() => {
    if (!reviewCarouselApi) {
      return;
    }

    const updateSelectedReview = () => {
      setSelectedReviewIndex(reviewCarouselApi.selectedScrollSnap());
    };

    updateSelectedReview();
    reviewCarouselApi.on("select", updateSelectedReview);
    reviewCarouselApi.on("reInit", updateSelectedReview);

    return () => {
      reviewCarouselApi.off("select", updateSelectedReview);
      reviewCarouselApi.off("reInit", updateSelectedReview);
    };
  }, [reviewCarouselApi]);

  React.useEffect(() => {
    const updateDocumentVisibility = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    updateDocumentVisibility();
    document.addEventListener("visibilitychange", updateDocumentVisibility);
    return () => document.removeEventListener("visibilitychange", updateDocumentVisibility);
  }, []);

  React.useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  React.useEffect(() => {
    if (
      !reviewCarouselApi ||
      !isDocumentVisible ||
      prefersReducedMotion ||
      isReviewPointerDown
    ) {
      return;
    }

    const autoplayTimer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        reviewCarouselApi.scrollNext();
      }
    }, 3000);

    return () => window.clearInterval(autoplayTimer);
  }, [
    reviewCarouselApi,
    reviewAutoplayResetKey,
    isDocumentVisible,
    prefersReducedMotion,
    isReviewPointerDown,
  ]);

  const navigateReviewCarousel = (direction: "previous" | "next") => {
    setReviewAutoplayResetKey((currentKey) => currentKey + 1);
    if (direction === "previous") {
      reviewCarouselApi?.scrollPrev(prefersReducedMotion);
    } else {
      reviewCarouselApi?.scrollNext(prefersReducedMotion);
    }
  };

  const scrollToAppointment = () => {
    const el = document.getElementById("appointment");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDirections = () => {
    window.open(GOOGLE_BUSINESS_PROFILE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pb-16 md:pb-0 bg-[#faf6ed] text-[#1a202c]">
      <Helmet>
        <title>Physio in Manikonda | Dr Hamid’s Physio and Pain Clinic</title>
        <meta name="description" content="Physiotherapy for back, neck, knee pain and more in Manikonda, Hyderabad. Clinic and home visits; open daily 10 AM to 10 PM. Rated 5.0 on Google from 100+ patient reviews." />
        <meta property="og:title" content="Physio in Manikonda | Dr Hamid’s Physio and Pain Clinic" />
        <meta property="og:url" content="https://www.drhamidphysio.in/" />
        <link rel="preload" as="image" href="/images/doctor/dr-hamid-transparent.webp" fetchPriority="high" />
      </Helmet>
      <StructuredData type="homepage" />

      {/* =========================================================
          1. HERO SECTION (EXACT MATCH TO REFERENCE DESIGN)
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf6ed] via-[#f7f2e5] to-[#f4ede0] pt-8 sm:pt-12 pb-16 lg:pb-24 border-b border-[#e5dec9]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-9 lg:gap-4 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ece5d4] border border-[#dfd6be] text-[#5c4928] text-xs sm:text-sm font-medium shadow-2xs">
                <MapPin className="w-4 h-4 text-[#8a5d24] shrink-0" />
                <span>Physiotherapy in Manikonda, Hyderabad</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.65rem] font-bold text-[#081a2e] tracking-tight leading-[1.12]">
                Trusted Physiotherapy in Manikonda, Hyderabad
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-[#4a5568] leading-relaxed max-w-xl font-normal">
                Physiotherapy for back, neck and knee pain, and <Link to="/services" style={{ color: "blue", textDecoration: "underline" }}>
                  more
                </Link>, including sports injuries and post-surgery rehabilitation. One-to-one sessions with Dr. Mohammed Hamid Ali, BPT, MPT (Ortho), with 8+ years’ experience. Clinic and home visits around Manikonda; home-visit availability depends on your address. Open daily from 10 AM to 10 PM.
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

              <p className="pt-3 text-sm font-semibold text-[#5c4928]">
                ⭐️⭐️⭐️⭐️⭐️ 5.0 on Google, 100+ patient reviews
              </p>

              {/* Clinic service information */}
              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#4a5568] border-t border-[#e2d8c0]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2a5d45]" />
                  <span>Home Physiotherapy Visits in Manikonda &amp; Puppalguda</span>
                </div>
              </div>
            </div>

            {/* Transparent portrait blends into the shared hero background without a separate image card. */}
            <div className="relative lg:col-span-5 flex min-h-[19rem] items-end justify-center lg:min-h-[32rem] lg:justify-end">
              <div
                aria-hidden="true"
                className="absolute bottom-5 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#e9dfc9]/75 sm:h-72 sm:w-72 lg:bottom-8 lg:left-auto lg:right-[-1rem] lg:h-[26rem] lg:w-[26rem] lg:translate-x-0"
              />
              <img
                src="/images/doctor/dr-hamid-transparent.webp"
                alt="Dr. Mohammed Hamid Ali holding an anatomical spine model"
                width={682}
                height={1024}
                className="relative z-10 h-[19rem] w-auto max-w-full object-contain object-bottom drop-shadow-xl sm:h-[25rem] lg:h-[32rem]"
                loading="eager"
                {...{ fetchpriority: "high" }}
              />
            </div>

          </div>

          {/* =========================================================
              RESPONSIVE 5+5 SERVICE ICON GRID
          ========================================================= */}
          <section id="featured-services" className="mt-14 lg:mt-20" aria-labelledby="featured-services-heading">
            <h2 id="featured-services-heading" className="mb-5 text-center font-serif text-xl sm:text-2xl font-bold text-[#081a2e]">
              Physiotherapy services in Manikonda, Hyderabad
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
              {homepageServiceIcons.map((icon) => (
                <Link
                  key={icon.label}
                  to={icon.href}
                  aria-label={`Explore ${icon.label} physiotherapy`}
                  className="group flex min-h-11 min-w-0 items-center justify-center rounded-full p-1 transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6b3e] focus-visible:ring-offset-2"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full max-w-32 sm:max-w-36 md:max-w-40"
                  />
                </Link>
              ))}
            </div>
          </section>

        </div>
      </section>

      {/* =========================================================
          2. LOCAL SEO & "PHYSIOTHERAPY NEAR ME" QUICK BANNER
      ========================================================= */}
      <section className="bg-[#f0e7d3] border-b border-[#dfd4bc] py-5 px-4">
        <div className="container flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[#443621]">
            <Compass className="w-4 h-4 text-[#8a5d24] shrink-0" />
            <span className="font-semibold">Physiotherapy Clinic Near You:</span>
            <span className="text-[#5c4a30]">
              Primary Clinic in Puppalguda, Manikonda — Accessible for patients from Lanco Hills, Tolichowki, Shaikpet, OU Colony, Alkapur Township, Khajaguda, Narsingi, Neknampur, Golconda &amp; Seven Tombs.
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
            <span className="text-[#2a5d45] font-semibold">Home Physiotherapy Visits in Manikonda</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. CONDITIONS GUIDE LINK
      ========================================================= */}
      <section id="conditions" className="py-16 md:py-24 px-4 bg-white border-b border-[#e5dec9]">
        <div className="container max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
            Body Map
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#081a2e] mt-2 mb-4">
            Conditions we treat: back, neck, knee, shoulder, sciatica pain and <Link to="/services" style={{ color: "blue", textDecoration: "underline" }}>
              more
            </Link>
          </h2>
          <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Choose an area on the interactive body map to read general information about common pain conditions and physiotherapy options.
          </p>
          <Link
            to="/conditions"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b1d33] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#132c4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24] focus-visible:ring-offset-2"
          >
            <span>In Pain? Explore the Body Map</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          4. ABOUT DR. MOHAMMED HAMID ALI (E-E-A-T CREDIBILITY)
      ========================================================= */}
      <section id="patient-info" className="py-16 md:py-24 px-4 bg-white border-b border-[#e5dec9]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-[#e5dec9] bg-gradient-to-b from-[#fbf7ee] to-[#ede2cd] shadow-lg">
                <img
                  src="/images/doctor/dr-hamid-hero.webp"
                  alt="Dr. Mohammed Hamid Ali, physiotherapist"
                  width={682}
                  height={1024}
                  className="w-full aspect-[3/4] object-cover object-top drop-shadow-sm"
                  loading="lazy"
                />
                <div className="p-6 bg-white border-t border-[#e5dec9]">
                  <h3 className="font-serif text-xl font-bold text-[#081a2e]">
                    Dr. Mohammed Hamid Ali
                  </h3>
                  <p className="text-sm font-medium text-[#8a5d24]">
                    BPT, MPT (Ortho) · Regd. No. 0413 · 8+ years’ clinical experience
                  </p>
                  <p className="text-xs text-[#718096] mt-2">
                    Consultant Physiotherapist &amp; Founder, Dr Hamid’s Physio and Pain Clinic
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Bio & Treatment Philosophy */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">About the clinic</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#081a2e]">
                About Dr Hamid’s Physio and Pain Clinic
              </h2>

              <p className="text-base text-[#4a5568] leading-relaxed">
                Dr Hamid’s Physio and Pain Clinic was established in 2021 and is led by its founder, Dr. Mohammed Hamid Ali. The clinic provides individualized, one-to-one physiotherapy and rehabilitation in Manikonda, Hyderabad.
              </p>

              <p className="text-base text-[#4a5568] leading-relaxed">
                Visit the services page to review the clinic’s listed services, or contact the clinic to ask whether an appointment or home visit is suitable for your needs.
              </p>
              <a
                href={PRACTO_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm font-semibold text-[#8a5d24] hover:underline"
              >
                View Dr. Mohammed Hamid Ali’s professional profile on Practo
              </a>

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
          5. PATIENT REVIEWS & REAL EVIDENCE
      ========================================================= */}
      <section
        id="google-reviews"
        className="py-16 md:py-24 px-4 bg-[#faf6ed] border-b border-[#e5dec9]"
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
                Google reviews
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#081a2e] mt-1">
                Rated 5.0 on Google: what patients say
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4a5568]">
                Selected excerpts from reviews posted on the clinic’s Google Business Profile.
              </p>
            </div>
            <a
              href={GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-[#8a5d24] hover:underline"
            >
              <span>Read more reviews on Google</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="relative">
            <div
              ref={reviewCarouselRef}
              className="overflow-hidden px-1"
              role="region"
              aria-roledescription="carousel"
              aria-label="Selected Google review carousel"
              aria-keyshortcuts="ArrowLeft ArrowRight"
              aria-live="off"
              tabIndex={0}
              onKeyDownCapture={(event) => {
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  navigateReviewCarousel("previous");
                }
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  navigateReviewCarousel("next");
                }
              }}
              onPointerDown={() => setIsReviewPointerDown(true)}
              onPointerUp={() => setIsReviewPointerDown(false)}
              onPointerCancel={() => setIsReviewPointerDown(false)}
            >
              <div className="flex touch-pan-y">
                {googleReviews.map((review, index) => (
                  <div
                    key={review.reviewer}
                    className={`min-w-0 shrink-0 grow-0 basis-[82%] px-2 transition-transform duration-500 ease-out motion-reduce:transition-none sm:basis-[80%] ${
                      selectedReviewIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-[0.97] opacity-75"
                    }`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Review ${index + 1} of ${googleReviews.length}`}
                    aria-hidden={selectedReviewIndex !== index}
                    data-active={selectedReviewIndex === index}
                  >
                    <article className="flex min-h-56 flex-col rounded-2xl border border-[#e5dec9] bg-white p-6 shadow-sm md:p-8">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#718096]">
                          Google review
                        </span>
                        <div
                          className="flex shrink-0 items-center gap-0.5 text-[#c28e28]"
                          role="img"
                          aria-label={`${review.rating} out of 5 stars`}
                        >
                          {Array.from({ length: review.rating }, (_, starIndex) => (
                            <Star key={starIndex} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="mt-5 flex-1 whitespace-pre-line text-sm leading-relaxed text-[#4a5568] sm:text-base">
                        “{review.text}”
                      </blockquote>
                      <p className="mt-6 border-t border-[#e5dec9] pt-4 text-sm font-semibold text-[#081a2e]">
                        {review.reviewer}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          6. HEALTH BLOGS & RECOVERY GUIDES (INTERNAL LINKING SUPPORT)
      ========================================================= */}
      <section className="py-16 md:py-24 px-4 bg-white border-b border-[#e5dec9]">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
                Educational Articles
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#081a2e] mt-1">
                Physiotherapy guides: knee, spine and exercise
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
            {getRecentPosts(3).map((post) => (
              <article
                key={post.id}
                className="flex flex-col rounded-2xl border border-[#e5dec9] bg-[#fffbf2] overflow-hidden hover:shadow-lg transition-all group"
              >
                <Link to={`/blogs/${post.slug}`} className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={post.imageUrl}
                    srcSet={post.imageSrcSet}
                    sizes={post.imageSizes}
                    alt={post.title}
                    width={640}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-[#718096] mb-2">
                    <span>{post.category}</span>
                    {post.readTime && (
                      <span>• {post.readTime}</span>
                    )}
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

      <section id="home-faq" className="py-16 md:py-24 px-4 bg-[#faf6ed] border-b border-[#e5dec9]">
        <div className="container max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8a5d24]">
            Frequently asked questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#081a2e] mt-1 mb-7">
            Physiotherapy in Manikonda: your questions answered
          </h2>

          <div className="space-y-3">
            <details className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <summary className="cursor-pointer font-semibold text-[#081a2e]">
                Where is the nearest physiotherapy clinic in Manikonda?
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                Dr Hamid’s Physio and Pain Clinic is at 4-3/81, opposite HDFC Bank ATM, near Friends Colony Park, Puppalguda, Manikonda, Hyderabad 500089. The clinic is open daily from 10 AM to 10 PM.
              </p>
            </details>

            <details className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <summary className="cursor-pointer font-semibold text-[#081a2e]">
                Do I need a doctor’s referral for physiotherapy?
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                No referral is needed to contact the clinic or request an appointment. If your symptoms should be medically assessed before physiotherapy, the clinic can advise you to seek that review.
              </p>
            </details>

            <details className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <summary className="cursor-pointer font-semibold text-[#081a2e]">
                Do you offer home physiotherapy visits in Hyderabad?
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                Home visits are generally targeted within about 15 km of Manikonda. Availability depends on your exact address, so please confirm by phone or WhatsApp.
              </p>
            </details>

            <details className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <summary className="cursor-pointer font-semibold text-[#081a2e]">
                How much does physiotherapy cost?
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                In-clinic consultations are ₹300, and treatments start from ₹500; the total depends on the treatment needed. Home visits start from ₹1,200 and vary with your treatment needs and travel distance from the clinic.
              </p>
              <a
                href="https://wa.me/917601026596?text=Hi%20Dr.%20Hamid,%20I%20would%20like%20to%20request%20a%20home%20visit.%0A%0AMy%20location/area%20is:%20%0A%0AMy%20problem%20is:%20"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                Request a home visit on WhatsApp
              </a>
            </details>

            <details className="rounded-xl border border-[#e5dec9] bg-white p-5">
              <summary className="cursor-pointer font-semibold text-[#081a2e]">
                How can I book an appointment?
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                Call the clinic at +91 76010 26596 or use the appointment form below. The form opens WhatsApp with a prepared message; review it and send it from WhatsApp to complete your enquiry.
              </p>
            </details>
          </div>
        </div>
      </section>

      <ServiceAreasSection />

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
              Book Your Physiotherapy Appointment in Puppalguda, Manikonda
            </h2>
            <p className="text-[#4a5568] text-base leading-relaxed">
              Appointments are available Monday to Sunday, 10:00 AM to 10:00 PM. Clinic consultations are in Puppalguda, Manikonda. Home visits are generally targeted within an approximate 15 km radius of Manikonda; contact the clinic to confirm coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AppointmentForm />
            <ContactMap
              mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.7!2d78.390221!3d17.3989817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c8eb026f65%3A0x5e83196a16a5e123!2sDr.%20Hamid's%20Physio%20%26%20Pain%20Clinic!5e0!3m2!1sen!2sin!4v1727624000000"
              externalMapUrl={GOOGLE_BUSINESS_PROFILE_URL}
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
