import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  serviceCategoryGroups,
  supportingModalities,
  allServices,
  primaryServices,
} from "@/data/services";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  Award,
  Search,
  Filter,
  Activity,
  CheckCircle2,
  Stethoscope,
  ChevronRight
} from "lucide-react";

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleCall = () => {
    window.location.href = "tel:+917601026596";
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Dr. Hamid, I would like to book a physiotherapy consultation at your Manikonda clinic."
    );
    window.open(`https://wa.me/917601026596?text=${text}`, "_blank");
  };

  // Filtered services if user searches
  const filteredServices = useMemo(() => {
    if (!searchTerm.trim()) return null;
    const q = searchTerm.toLowerCase();
    return allServices.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.shortDescription.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  const canonicalUrl = "https://www.drhamidphysio.in/services";

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.drhamidphysio.in/services#webpage",
        url: canonicalUrl,
        name: "Physiotherapy Services in Manikonda | Dr. Hamid's Physio Clinic",
        description:
          "Comprehensive condition-based physiotherapy in Manikonda, Hyderabad: Spine, Neck, Knee, Shoulder, Neuro Rehab, Sports Injuries & Home Visits by Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics).",
        inLanguage: "en-IN",
        about: {
          "@type": "Physiotherapy",
          name: "Dr. Hamid's Physio and Pain Clinic",
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
        "@type": "ItemList",
        itemListElement: primaryServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `https://www.drhamidphysio.in/services/${service.slug}`
        }))
      }
    ]
  };

  return (
    <div className="bg-[#faf6ed] min-h-screen">
      <Helmet>
        <title>Physiotherapy Services in Manikonda | Dr. Hamid's Physio Clinic</title>
        <meta
          name="description"
          content="Specialized physiotherapy in Puppalguda, Manikonda, Hyderabad. Individualized care for Back Pain, Sciatica, Knee Arthritis, Frozen Shoulder & Sports Rehab. Easily accessible from Lanco Hills, Tolichowki & Shaikpet."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Physiotherapy Services in Manikonda | Dr. Hamid's Physio Clinic" />
        <meta
          property="og:description"
          content="Over 40 dedicated clinical condition and rehabilitation programs by Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics) in Manikonda & Puppalguda."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(servicesStructuredData)}</script>
      </Helmet>

      {/* Hero Header */}
      <section className="border-b border-[#e5dec9] bg-gradient-to-b from-[#faf6ed] via-[#f7f1e4] to-[#f2e9d9] py-14 sm:py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#f4ede0] border border-[#e5dec9] px-3.5 py-1 rounded-full text-xs font-semibold text-[#8a5d24]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Clinical Programs • Zero Shared Treatments</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081a2e] tracking-tight leading-[1.18]">
              Physiotherapy Services in Manikonda | Pain Relief &amp; Rehabilitation
            </h1>

            <p className="text-base sm:text-lg text-[#4a5568] leading-relaxed">
              At Dr Hamid’s Physio and Pain Clinic, we provide doctor-led physiotherapy for back pain, neck pain, knee pain, shoulder problems, sciatica, sports injuries, post-surgical rehabilitation and neurological conditions. Our clinic is located in Manikonda, Hyderabad, and we also offer home physiotherapy visits in Manikonda, Puppalguda, Lanco Hills, Tolichowki, Seven Tombs and nearby areas. Every treatment plan is individualised after proper assessment by Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics), Regd. No. 0413, Consultant Physiotherapist.
            </p>

            <div id="services-cta-top" className="services-cta bg-white border border-[#e5dec9] rounded-xl p-5 text-left space-y-2">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#081a2e]">
                Ready to start your recovery?
              </h2>
              <p className="text-sm text-[#4a5568] leading-relaxed">
                Book a consultation or home visit with Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics), Regd. No. 0413.
              </p>
              <p className="text-sm font-semibold text-[#081a2e]">
                Call or WhatsApp: <a href="tel:+917601026596" className="text-[#8a5d24] hover:underline">+91 76010 26596</a>
              </p>
              <p className="text-xs text-[#64748b]">
                Serving Manikonda, Puppalguda, Lanco Hills, Tolichowki, Seven Tombs and nearby areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <Button onClick={handleCall} className="bg-[#081a2e] hover:bg-[#122842] text-white text-sm">
                  <Phone className="w-4 h-4 mr-1.5" />
                  <span>Call +91 76010 26596</span>
                </Button>
                <Button onClick={handleWhatsApp} variant="outline" className="border-[#d6cbaf] text-[#081a2e] text-sm">
                  <MessageCircle className="w-4 h-4 mr-1.5 text-emerald-600" />
                  <span>WhatsApp to Book</span>
                </Button>
              </div>
            </div>


            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-2xl mx-auto text-left">
              <div className="bg-white/80 border border-[#e5dec9] p-3 rounded-xl">
                <p className="text-xl sm:text-2xl font-bold text-[#081a2e]">40+</p>
                <p className="text-xs text-[#64748b]">Specific Conditions</p>
              </div>
              <div className="bg-white/80 border border-[#e5dec9] p-3 rounded-xl">
                <p className="text-xl sm:text-2xl font-bold text-[#8a5d24]">1-on-1</p>
                <p className="text-xs text-[#64748b]">Doctor Attention</p>
              </div>
              <div className="bg-white/80 border border-[#e5dec9] p-3 rounded-xl">
                <p className="text-xl sm:text-2xl font-bold text-[#081a2e]">Home Physio</p>
                <p className="text-xs text-[#64748b]">Visits in Manikonda</p>
              </div>
              <div className="bg-white/80 border border-[#e5dec9] p-3 rounded-xl">
                <p className="text-xl sm:text-2xl font-bold text-[#8a5d24]">8+ Yrs</p>
                <p className="text-xs text-[#64748b]">Clinical Mastery</p>
              </div>
            </div>

            {/* Search Input Box */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8a5d24]" />
                <input
                  type="text"
                  placeholder="Search condition (e.g. Back Pain, Sciatica, Frozen Shoulder, ACL, Stroke)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#d6cbaf] rounded-xl text-sm text-[#081a2e] placeholder:text-[#94a3b8] focus:outline-hidden focus:ring-2 focus:ring-[#8a5d24] shadow-xs"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8a5d24] hover:text-[#081a2e] bg-[#faf6ed] px-2 py-1 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Category Navigation Pills (When not searching) */}
      {!filteredServices && (
        <nav aria-label="Service Categories" className="sticky top-0 z-30 bg-[#faf6ed]/95 backdrop-blur-md border-b border-[#e5dec9] py-3 overflow-x-auto shadow-xs">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-2">
            <span className="text-xs font-bold text-[#8a5d24] uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Jump To:</span>
            </span>
            {serviceCategoryGroups.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-[#e5dec9] text-[#081a2e] hover:bg-[#081a2e] hover:text-white hover:border-[#081a2e] transition-all shrink-0"
              >
                {cat.badge} ({cat.services.length})
              </a>
            ))}
            <a
              href="#modalities"
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f4ede0] border border-[#d6cbaf] text-[#8a5d24] hover:bg-[#8a5d24] hover:text-white transition-all shrink-0"
            >
              Supporting Modalities (8)
            </a>
          </div>
        </nav>
      )}

      {/* Main Content Area */}
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {/* Active Search Results View */}
          {filteredServices && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#081a2e]">
                    Search Results ({filteredServices.length})
                  </h2>
                  <p className="text-sm text-[#4a5568]">
                    Showing matches for "{searchTerm}"
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchTerm("")}
                  className="border-[#e5dec9] text-xs"
                >
                  View All Services
                </Button>
              </div>

              {filteredServices.length === 0 ? (
                <div className="bg-white border border-[#e5dec9] rounded-2xl p-10 text-center space-y-3">
                  <Activity className="w-10 h-10 text-[#8a5d24] mx-auto" />
                  <h3 className="font-serif text-lg font-bold text-[#081a2e]">
                    No exact match found
                  </h3>
                  <p className="text-sm text-[#4a5568] max-w-md mx-auto">
                    We treat almost all musculoskeletal, spinal, and neurological conditions. Call Dr. Hamid directly to discuss your specific symptoms.
                  </p>
                  <Button onClick={handleCall} className="bg-[#081a2e] text-white text-xs mt-2">
                    <Phone className="w-3.5 h-3.5 mr-1 text-[#8a5d24]" />
                    <span>Call +91 76010 26596</span>
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <article
                      key={service.slug}
                      className="group flex flex-col bg-white border border-[#e5dec9] rounded-2xl overflow-hidden shadow-xs hover:border-[#8a5d24] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-[#faf6ed] relative">
                        <img
                          src={service.imageSrc}
                          alt={service.altText}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#081a2e]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs">
                          {service.category}
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-serif text-xl font-bold text-[#081a2e] mb-2 group-hover:text-[#8a5d24] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed line-clamp-3 mb-5 flex-grow">
                          {service.shortDescription}
                        </p>

                        <div className="pt-4 border-t border-[#f0e7d3] flex items-center justify-between">
                          <Link
                            to={`/services/${service.slug}`}
                            className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#8a5d24] hover:text-[#5c3e17] transition-colors"
                          >
                            <span>Read Complete Protocol &amp; FAQs</span>
                            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Categorized Services Groups (When not searching) */}
          {!filteredServices && (
            <div className="space-y-20">
              {serviceCategoryGroups.map((group) => (
                <section key={group.id} id={group.id} className="scroll-mt-24 space-y-6">
                  <div className="border-b border-[#e5dec9] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8a5d24]">
                        {group.badge}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081a2e] mt-1">
                        {group.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#4a5568] mt-1 max-w-2xl">
                        {group.description}
                      </p>
                      {group.id === "sports-general" && (
                        <a
                          href="https://wa.me/917601026596?text=Hello%20Dr.%20Hamid%2C%20I%20would%20like%20to%20book%20a%20home%20physiotherapy%20visit."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="home-visit-whatsapp mt-2 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:underline"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>WhatsApp to book home visit: +91 76010 26596</span>
                        </a>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-[#64748b] bg-white border border-[#e5dec9] px-3 py-1 rounded-full self-start sm:self-auto">
                      {group.services.length} Specialized Programs
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {group.services.map((service) => (
                      <article
                        key={service.slug}
                        className="group flex flex-col bg-white border border-[#e5dec9] rounded-2xl overflow-hidden shadow-xs hover:border-[#8a5d24] hover:shadow-lg transition-all duration-300"
                      >
                        <div className="aspect-[16/10] overflow-hidden bg-[#faf6ed] relative">
                          <img
                            src={service.imageSrc}
                            alt={service.altText}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 bg-[#081a2e]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs">
                            Manikonda &amp; Home Visit
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="font-serif text-xl font-bold text-[#081a2e] mb-2 group-hover:text-[#8a5d24] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed line-clamp-3 mb-5 flex-grow">
                            {service.shortDescription}
                          </p>
                          {service.slug === "home-visit-physiotherapy-manikonda" && (
                            <a
                              href="https://wa.me/917601026596?text=Hello%20Dr.%20Hamid%2C%20I%20would%20like%20to%20book%20a%20home%20physiotherapy%20visit."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="home-visit-whatsapp mb-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:underline"
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span>WhatsApp to book home visit: +91 76010 26596</span>
                            </a>
                          )}

                          <div className="pt-4 border-t border-[#f0e7d3] flex items-center justify-between">
                            <Link
                              to={`/services/${service.slug}`}
                              className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#8a5d24] hover:text-[#5c3e17] transition-colors"
                            >
                              <span>Complete Protocol &amp; FAQs</span>
                              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}

              {/* Supporting Therapies & Modalities Section (Secondary at bottom) */}
              <section id="modalities" className="scroll-mt-24 pt-8 border-t-2 border-[#e5dec9] space-y-6">
                <div className="max-w-3xl space-y-2">
                  <div className="inline-flex items-center gap-1.5 bg-[#f4ede0] border border-[#e5dec9] px-3 py-1 rounded-full text-xs font-semibold text-[#8a5d24]">
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>Clinical Support Modalities</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081a2e]">
                    Supporting Therapies &amp; Electro-Physical Modalities
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
                    At Dr. Hamid's clinic, modalities are used selectively as supportive tools to alleviate acute pain, reduce muscle spasms, and soften tight tissues—preparing your body for active, doctor-guided exercise rehabilitation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {supportingModalities.map((modality) => (
                    <article
                      key={modality.slug}
                      className="group bg-white border border-[#e5dec9] rounded-xl p-5 hover:border-[#8a5d24] hover:shadow-md transition-all flex flex-col"
                    >
                      <div className="aspect-[16/10] rounded-lg overflow-hidden bg-[#faf6ed] mb-4">
                        <img
                          src={modality.imageSrc}
                          alt={modality.altText}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#081a2e] mb-2 group-hover:text-[#8a5d24] transition-colors">
                        {modality.title}
                      </h3>
                      <p className="text-xs text-[#64748b] leading-relaxed line-clamp-3 mb-4 flex-grow">
                        {modality.shortDescription}
                      </p>
                      <Link
                        to={`/services/${modality.slug}`}
                        className="inline-flex items-center text-xs font-semibold text-[#8a5d24] hover:text-[#5c3e17] pt-3 border-t border-[#f0e7d3]"
                      >
                        <span>Learn how it works</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Bottom Consultation Banner */}
          <section className="bg-gradient-to-r from-[#081a2e] to-[#122842] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="text-xs uppercase font-bold tracking-widest text-[#e5dec9]">
                Clinic Consultation &amp; Home Visits
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Ready to start your recovery?
              </h2>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Book a consultation or home visit with Dr. Mohammed Hamid Ali, BPT, MPT (Orthopedics), Regd. No. 0413.
              </p>
              <p className="text-sm sm:text-base font-semibold">
                Call or WhatsApp: +91 76010 26596
              </p>
              <p className="text-xs sm:text-sm text-slate-300">
                Serving Manikonda, Puppalguda, Lanco Hills, Tolichowki, Seven Tombs and nearby areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  onClick={handleCall}
                  className="bg-[#8a5d24] hover:bg-[#a67232] text-white font-semibold px-6 py-5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call +91 76010 26596</span>
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-5 rounded-xl flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
              <Activity className="w-96 h-96 text-white" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
