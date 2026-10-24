import { Helmet } from "react-helmet";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import ContactMap from "@/components/ContactMap";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/lib/businessInfo";

const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.7!2d78.390221!3d17.3989817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c8eb026f65%3A0x5e83196a16a5e123!2sDr.%20Hamid's%20Physio%20%26%20Pain%20Clinic!5e0!3m2!1sen!2sin!4v1727624000000";

const ContactPage = () => {
  const canonicalUrl = "https://www.drhamidphysio.in/contact";

  return (
    <div className="min-h-screen bg-[#faf6ed]">
      <Helmet>
        <title>Contact a Physiotherapist in Manikonda | Dr. Hamid's Clinic</title>
        <meta name="description" content="Contact Dr. Hamid's Physio and Pain Clinic in Puppalguda, Manikonda, Hyderabad. Call, WhatsApp, get directions or request an appointment." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Contact Dr. Hamid's Physio Clinic in Manikonda" />
        <meta property="og:description" content="Clinic address, hours, directions and appointment contact options for Dr. Hamid's Physio and Pain Clinic in Manikonda, Hyderabad." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Dr. Hamid's Physio and Pain Clinic",
            "url": canonicalUrl,
            "mainEntity": {
              "@type": "MedicalClinic",
              "@id": "https://www.drhamidphysio.in",
              "name": "Dr. Hamid's Physio and Pain Clinic",
              "telephone": "+917601026596",
              "email": "hamid.physio324@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park, Friends Colony, Puppalguda",
                "addressLocality": "Manikonda, Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500089",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Su 10:00-22:00",
              "hasMap": GOOGLE_BUSINESS_PROFILE_URL
            }
          })}
        </script>
      </Helmet>

      <section className="border-b border-[#e5dec9] bg-gradient-to-b from-[#faf6ed] to-[#f2e9d9] py-14 md:py-20">
        <div className="container max-w-5xl px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#8a5d24]">Contact and appointments</p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#081a2e] sm:text-5xl">
            Contact Dr. Hamid&apos;s Physio and Pain Clinic
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
            Visit the clinic in Puppalguda, Manikonda, Hyderabad, or contact us about clinic consultations and physiotherapy home visits.
          </p>
        </div>
      </section>

      <section id="clinic-contact-details" className="py-12 md:py-16">
        <div className="container grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
          <div className="space-y-5 rounded-2xl border border-[#e5dec9] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-[#081a2e]">Clinic details</h2>
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#8a5d24]" aria-hidden="true" />
              <p className="leading-relaxed text-[#4a5568]">
                4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park, Friends Colony, Puppalguda, Manikonda, Hyderabad, Telangana 500089
              </p>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#8a5d24]" aria-hidden="true" />
              <p className="text-[#4a5568]">Monday to Sunday, 10:00 AM to 10:00 PM</p>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#8a5d24]" aria-hidden="true" />
              <a href="tel:+917601026596" className="font-semibold text-[#8a5d24] hover:underline">+91 76010 26596</a>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#8a5d24]" aria-hidden="true" />
              <a href="mailto:hamid.physio324@gmail.com" className="break-all text-[#8a5d24] hover:underline">hamid.physio324@gmail.com</a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#081a2e] px-4 py-3 text-sm font-semibold text-white hover:bg-[#122842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]">
                Get directions
              </a>
              <a href="https://wa.me/917601026596?text=Hi%20Dr.%20Hamid%2C%20I%20would%20like%20to%20enquire%20about%20physiotherapy%20services" target="_blank" rel="noopener noreferrer" className="rounded-md border border-[#d6cbaf] px-4 py-3 text-sm font-semibold text-[#2a5d45] hover:bg-[#f5f3e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24]">
                WhatsApp the clinic
              </a>
            </div>
          </div>

          <div className="min-h-[360px]">
            <ContactMap mapEmbedUrl={mapEmbedUrl} externalMapUrl={GOOGLE_BUSINESS_PROFILE_URL} className="min-h-[360px]" />
          </div>
        </div>
      </section>

      <section id="appointment-request" className="border-t border-[#e5dec9] bg-white py-12 md:py-16">
        <div className="container grid max-w-6xl gap-8 px-4 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#081a2e]">Request an appointment</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-[#4a5568]">
              Complete the form to open a prepared WhatsApp message. Your request reaches the clinic only after you review and send that message in WhatsApp.
            </p>
          </div>
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
