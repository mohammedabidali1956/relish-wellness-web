import { useParams, Link } from "react-router-dom";
import { conditions } from "@/data/conditions";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MessageCircle, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ConditionPage = () => {
  const { slug } = useParams();
  const condition = conditions.find((c) => c.slug === slug);

  if (!condition) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Condition Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
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
      `https://wa.me/917601026596?text=Hi,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(condition.title)}%20treatment.`,
      "_blank"
    );
  };

  // Generate FAQ Schema for this condition
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": condition.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <StructuredData 
        type="service"
        pageTitle={`${condition.title} in Manikonda, Hyderabad | Dr. Hamid's Physio Clinic`}
        pageDescription={condition.shortDescription}
      />

      {/* Hero Section */}
      <section className="relative border-b border-border bg-sand-50 py-12 md:py-20">
        <div className="container px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-relish-600 hover:text-relish-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 text-gray-900">
                {condition.title}{" "}
                <span className="text-relish-700">
                  in Manikonda
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {condition.overview}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCall}
                  className="bg-relish-600 hover:bg-relish-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src={condition.imageSrc} 
                alt={condition.altText}
                className="rounded-2xl shadow-xl w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-relish-600" />
              Common Causes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {condition.causes.map((cause, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-relish-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{cause}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Symptoms to Watch For
            </h2>
            <div className="bg-card border border-border rounded-md p-6 md:p-8">
              <ul className="space-y-4">
                {condition.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-wellness-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Physiotherapy Helps */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              How Physiotherapy Helps
            </h2>
            <div className="rounded-md border border-border bg-sand-100 p-6 md:p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {condition.howPhysioHelps}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Care Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Home Care & Self-Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {condition.homeCare.map((tip, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-md flex items-start gap-3"
                >
                  <span className="bg-wellness-100 text-wellness-700 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Visit */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              When to Visit a Physiotherapist
            </h2>
            <div className="bg-relish-600 text-white rounded-2xl p-6 md:p-8">
              <p className="text-lg leading-relaxed">
                {condition.whenToVisit}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-relish-600" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="bg-card border border-border rounded-md">
              {condition.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="px-6 text-left hover:no-underline">
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-relish-800">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Recovery?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Book an appointment with Dr. Mohammed Hamid Ali for expert {condition.title.toLowerCase()} treatment in Manikonda, Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleCall}
                size="lg"
                className="bg-white text-relish-600 hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 76010 26596
              </Button>
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Script */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </div>
  );
};

export default ConditionPage;
