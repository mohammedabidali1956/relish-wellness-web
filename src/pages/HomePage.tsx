import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import ConditionCard from "@/components/ConditionCard";
import AppointmentForm from "@/components/AppointmentForm";

import ContactMap from "@/components/ContactMap";
import StructuredData from "@/components/StructuredData";
import StickyCTA from "@/components/StickyCTA";
import { conditions } from "@/data/conditions";
import { MapPin, Phone, Star, Stethoscope, Home, Clock, Quote } from "lucide-react";

const HomePage = () => {
  const featuredServices = [
    {
      id: 1,
      title: "Ultrasound Therapy",
      description: "Non-invasive treatment using sound waves to reduce pain and promote healing in injured tissues.",
      imageSrc: "/lovable-uploads/01292324-cb51-41f6-bd7a-1c494545808a.png",
      altText: "Physiotherapist performing ultrasound therapy on patient's leg with handheld device and gel"
    },
    {
      id: 2,
      title: "Interferential Therapy",
      description: "Two medium-frequency electrical currents that intersect to create therapeutic low-frequency stimulation.",
      imageSrc: "/lovable-uploads/c220c26b-4bc1-4d9d-98b4-337454da8afb.png",
      altText: "Physiotherapist applying interferential therapy electrodes to patient's leg with visible wires and equipment"
    },
    {
      id: 3,
      title: "Exercise Therapy",
      description: "Custom-designed exercise programs to improve mobility, strength, coordination, and overall function.",
      imageSrc: "/lovable-uploads/0651f71a-9e1c-4cc0-ac06-d637f4c03ad3.png",
      altText: "Patient performing exercise therapy with physiotherapist guidance using resistance bands"
    },
    {
      id: 4,
      title: "Consultation & Assessment",
      description: "Comprehensive evaluation of your condition including physical examination and development of a customized treatment plan.",
      imageSrc: "/lovable-uploads/7b58bcad-171e-4d7d-a569-8269c66ed030.png",
      altText: "Professional physiotherapy consultation with doctor and patient discussing treatment plan"
    },
  ];

  const testimonials = [
    {
      quote: "After months of back pain, I found relief after just a few sessions at Dr. Hamid's Physio Clinic. The therapists are knowledgeable, caring, and attentive.",
      author: "R.K.",
    },
    {
      quote: "The exercise therapy program designed for me was excellent. I've regained strength in my knee and can now walk without pain. Highly recommended!",
      author: "S.M.",
    },
    {
      quote: "Professional, punctual, and effective treatment. The clinic is clean and well-equipped. Will definitely continue my therapy here.",
      author: "A.S.",
    },
  ];

  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppHomeService = () => {
    window.open(
      "https://wa.me/917601026596?text=Hi,%20I%20would%20like%20to%20enquire%20about%20physiotherapy%20at%20home%20service.",
      "_blank"
    );
  };

  return (
    <div className="pb-16 md:pb-0">
      <StructuredData type="homepage" />

      {/* Hero */}
      <section className="border-b border-border bg-sand-50">
        <div className="container px-4 py-14 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 animate-fade-in">
              <span className="eyebrow">Physiotherapy &amp; Rehabilitation · Manikonda</span>

              <h1 className="text-[2rem] sm:text-4xl lg:text-5xl font-semibold font-display leading-[1.12] text-relish-900">
                Expert physiotherapy care in Manikonda, Hyderabad
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
                Personalised treatment for pain relief, injury recovery, post-surgery rehabilitation
                and improved mobility — under the care of Dr. Mohammed Hamid Ali, BPT.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button
                  size="lg"
                  className="bg-relish-700 hover:bg-relish-800 text-white px-7 h-12 text-base font-medium rounded-md w-full sm:w-auto"
                  onClick={scrollToAppointment}
                >
                  Book an Appointment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-relish-700/40 text-relish-800 hover:bg-relish-50 hover:text-relish-900 px-7 h-12 text-base font-medium rounded-md w-full sm:w-auto flex items-center justify-center gap-2"
                  onClick={handleWhatsAppHomeService}
                >
                  <Home className="w-4 h-4" />
                  Physiotherapy at Home
                </Button>
              </div>

              <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-border max-w-lg">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Experience</dt>
                  <dd className="mt-1 text-2xl font-display font-semibold text-relish-800">6+ yrs</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">5-star reviews</dt>
                  <dd className="mt-1 text-2xl font-display font-semibold text-relish-800">40+</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Qualification</dt>
                  <dd className="mt-1 text-2xl font-display font-semibold text-relish-800">BPT</dd>
                </div>
              </dl>
            </div>

            {/* Clinic details panel */}
            <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="surface p-6 sm:p-8">
                <div className="flex items-center gap-4 pb-6 border-b border-border">
                  <img
                    src="/lovable-uploads/hamid-physio-logo.png"
                    alt="Dr. Hamid's Physio Clinic logo"
                    className="h-14 w-14 rounded-full object-cover border border-border"
                  />
                  <div>
                    <p className="font-display text-lg font-semibold text-relish-900 leading-tight">
                      Dr. Hamid's Physio Clinic
                    </p>
                    <p className="text-sm text-muted-foreground">Dr. Mohammed Hamid Ali, BPT</p>
                  </div>
                </div>

                <ul className="divide-y divide-border">
                  <li className="flex gap-3 py-4">
                    <MapPin className="w-5 h-5 text-relish-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Clinic address</p>
                      <p className="text-sm text-muted-foreground">
                        4-3/81, Opp HDFC Bank ATM, Near Friends Colony Park, Puppalguda, Manikonda, Hyderabad
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3 py-4">
                    <Phone className="w-5 h-5 text-relish-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a href="tel:+917601026596" className="text-sm text-muted-foreground hover:text-relish-700 transition-colors">
                        +91 76010 26596
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3 py-4">
                    <Clock className="w-5 h-5 text-relish-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Consultation</p>
                      <p className="text-sm text-muted-foreground">By appointment · Home visits available</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Conditions</span>
            <h2 className="heading-2 mt-3 mb-4 text-relish-900">Conditions we treat</h2>
            <p className="paragraph">
              Assessment and treatment for a wide range of musculoskeletal and neurological
              conditions, for patients across Manikonda and Puppalguda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {conditions.map((condition, index) => (
              <div
                key={condition.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${Math.min(index, 5) * 0.06}s` }}
              >
                <ConditionCard
                  title={condition.title}
                  description={condition.shortDescription}
                  imageSrc={condition.imageSrc}
                  slug={condition.slug}
                  altText={condition.altText}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Doctor */}
      <section className="py-16 md:py-24 px-4 bg-sand-100 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="eyebrow">About the doctor</span>
              <h2 className="heading-2 mt-3 text-relish-900">Dr. Mohammed Hamid Ali, BPT</h2>
              <span className="rule mt-5" />
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <Stethoscope className="w-5 h-5 text-relish-600" />
                Physiotherapist · Practising since 2019
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <p className="text-lg leading-relaxed text-foreground/85">
                Dr. Mohammed Hamid Ali is a certified physiotherapist with a Bachelor of Physiotherapy (BPT)
                degree and over six years of hands-on clinical experience. Known for his measured, precise
                approach, he combines clinical knowledge with a sincere commitment to patient wellbeing.
              </p>
              <p className="text-lg leading-relaxed text-foreground/85">
                His treatment philosophy is rooted in both evidence and compassion — each patient receives a
                clear diagnosis, a plan explained in plain language, and consistent follow-up. From chronic
                pain to post-injury rehabilitation, the aim is to restore mobility, confidence and comfort in
                everyday movement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border mt-8 border border-border">
                <div className="bg-card p-5">
                  <p className="font-display text-lg font-semibold text-relish-900">BPT certified</p>
                  <p className="text-sm text-muted-foreground mt-1">Professional qualification</p>
                </div>
                <div className="bg-card p-5">
                  <p className="font-display text-lg font-semibold text-relish-900">6+ years</p>
                  <p className="text-sm text-muted-foreground mt-1">Clinical experience</p>
                </div>
                <div className="bg-card p-5">
                  <p className="font-display text-lg font-semibold text-relish-900">Patient-centred</p>
                  <p className="text-sm text-muted-foreground mt-1">Individual treatment plans</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-relish-600" />
                  Areas we serve
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Manikonda, Puppalguda, Shaikpet, Alkapur Township, Narsingi, Gandipet, Kokapet,
                  Financial District, Gachibowli and surrounding areas in Hyderabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Treatments</span>
            <h2 className="heading-2 mt-3 mb-4 text-relish-900">Our services</h2>
            <p className="paragraph">
              Evidence-based physiotherapy treatments, delivered with clinical care and reviewed
              at every stage of your recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                altText={service.altText}
              />
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/services"
              className="text-sm font-medium text-relish-700 hover:text-relish-900 underline underline-offset-4 decoration-relish-300"
            >
              View all services in detail
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment + Map */}
      <section id="appointment" className="py-16 md:py-24 px-4 bg-sand-100 border-y border-border">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Appointments</span>
            <h2 className="heading-2 mt-3 mb-4 text-relish-900">Book your appointment</h2>
            <p className="paragraph">
              Share a few details and we will confirm a suitable time with you. You can also call
              the clinic directly on +91 76010 26596.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AppointmentForm />
            <ContactMap
              mapEmbedUrl="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Dr.%20Hamid's%20Physio%20Clinic&maptype=roadmap"
              className="h-full min-h-[360px]"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Patient feedback</span>
            <h2 className="heading-2 mt-3 mb-4 text-relish-900">What our patients say</h2>
            <p className="paragraph">
              A selection of experiences shared by patients treated at the clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {testimonials.map((t) => (
              <figure key={t.author} className="bg-card p-7 flex flex-col">
                <Quote className="w-5 h-5 text-relish-300 mb-4" />
                <blockquote className="text-foreground/85 leading-relaxed flex-grow">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-medium text-relish-900">{t.author}</span>
                  <span className="flex" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 text-relish-600 fill-relish-600" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/reviews">
              <Button
                variant="outline"
                className="border-relish-700/40 text-relish-800 hover:bg-relish-50 hover:text-relish-900 rounded-md px-6 h-11 font-medium"
              >
                Read all reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <StickyCTA />
    </div>
  );
};

export default HomePage;
