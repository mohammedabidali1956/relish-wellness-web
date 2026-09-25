import { Link, useNavigate, useLocation } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import StructuredData from "@/components/StructuredData";
import { scrollToAppointmentSection } from "@/lib/navigation";

const services = [
  {
    id: 1,
    title: "Ultrasound Therapy",
    description: "Ultrasound therapy uses high-frequency sound waves to stimulate deep tissue heating, increasing blood flow, reducing pain and swelling, and accelerating healing. It's particularly effective for treating chronic conditions such as tendonitis, muscle spasms, and joint contractures. Our trained physiotherapists use ultrasound therapy as part of a comprehensive treatment plan tailored to your specific needs.",
    imageSrc: "/images/services/ultrasound-therapy.webp",
    altText: "Physiotherapist performing ultrasound therapy on patient's leg with handheld device and gel"
  },
  {
    id: 2,
    title: "Interferential Therapy",
    description: "Interferential therapy utilizes two medium-frequency electrical currents that intersect within the tissues to create a low-frequency current at the point of intersection. This therapeutic approach helps to reduce pain, decrease inflammation, stimulate muscle, and promote healing. It's gentle on sensitive tissues and effective for treating a wide range of conditions, from acute injuries to chronic pain syndromes.",
    imageSrc: "/images/services/interferential-therapy.webp",
    altText: "Physiotherapist applying interferential therapy electrodes to patient's leg with visible wires and equipment"
  },
  {
    id: 3,
    title: "Exercise Therapy",
    description: "Our exercise therapy programs are custom-designed to address your specific condition and goals. Through a series of targeted movements and activities, we help improve your mobility, strength, coordination, and overall function. Whether recovering from an injury, managing a chronic condition, or seeking to enhance performance, our expert physiotherapists will guide you through appropriate exercises and progressively adjust your program as you improve.",
    imageSrc: "/images/services/exercise-therapy.webp",
    altText: "Patient performing exercise therapy with physiotherapist guidance using resistance bands"
  },
  {
    id: 4,
    title: "Consultation & Assessment",
    description: "Our comprehensive consultation and assessment services begin with a thorough evaluation of your condition, medical history, and goals. Based on this evaluation, we develop a personalized treatment plan that may include a combination of hands-on techniques, therapeutic exercises, and advice on lifestyle modifications. We regularly reassess your progress and adjust your treatment plan to ensure optimal outcomes and help you return to your daily activities with confidence.",
    imageSrc: "/images/services/consultation-assessment.webp",
    altText: "Professional physiotherapy consultation with doctor and patient discussing treatment plan"
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div>
      <StructuredData 
        type="service" 
        pageTitle="Physiotherapy Services in Manikonda | Dr. Hamid's Physio Clinic" 
        pageDescription="Comprehensive physiotherapy services in Puppalguda, Manikonda, Hyderabad. Ultrasound therapy, TENS, exercise therapy, manual therapy & more by Dr. Hamid."
      />
      {/* Hero Section */}
      <section className="border-b border-border bg-sand-50 py-14 md:py-20">
        <div className="container">
          <div className="text-center">
            <h1 className="heading-1 mb-6 text-gray-800">Our Services</h1>
            <p className="paragraph max-w-3xl mx-auto">
              At Dr. Hamid's Physio Clinic in Manikonda, Hyderabad, we offer a comprehensive range of evidence-based physiotherapy treatments designed to address various conditions and promote optimal physical health.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                altText={service.altText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-relish-800 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Healing Journey?</h2>
            <p className="text-lg mb-8 text-white/90">
              Our team of experienced physiotherapists is here to help you achieve optimal physical health and wellbeing.
            </p>
            <button 
              onClick={() => scrollToAppointmentSection(navigate, location.pathname)}
              className="bg-white text-relish-700 hover:bg-gray-100 rounded-lg px-8 py-3 font-medium transition-colors duration-200"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
