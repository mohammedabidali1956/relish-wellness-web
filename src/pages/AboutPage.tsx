
import React from "react";
import { Star, Heart, Users, Award, Target, Lightbulb } from "lucide-react";
import { Helmet } from "react-helmet";
import StructuredData from "@/components/StructuredData";
import { PRACTO_PROFILE_URL } from "@/lib/businessInfo";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <StructuredData 
        type="about" 
        pageTitle="About Dr Hamid’s Physio and PAIN Clinic | Physiotherapist in Manikonda"
        pageDescription="Meet Dr. Mohammed Hamid Ali, founder and Consultant Physiotherapist at Dr Hamid’s Physio and PAIN Clinic in Manikonda, Hyderabad."
      />
      <Helmet>
        <meta property="og:title" content="About Dr Hamid’s Physio and PAIN Clinic | Manikonda, Hyderabad" />
        <meta property="og:description" content="Meet Dr. Mohammed Hamid Ali, BPT, MPT (Ortho), Regd. No. 0413, Consultant Physiotherapist and founder of the clinic in Manikonda." />
        <meta property="og:url" content="https://www.drhamidphysio.in/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://www.drhamidphysio.in/images/doctor/dr-mohammed-hamid-ali.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dr Hamid’s Physio and PAIN Clinic | Manikonda" />
        <meta name="twitter:description" content="Meet Dr. Mohammed Hamid Ali, BPT, MPT (Ortho), Regd. No. 0413, Consultant Physiotherapist and founder of the clinic in Manikonda." />
        <meta name="twitter:image" content="https://www.drhamidphysio.in/images/doctor/dr-mohammed-hamid-ali.webp" />
      </Helmet>
      {/* Hero Section */}
      <section className="border-b border-border bg-sand-50 py-14 md:py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-gray-900">
              About Dr Hamid’s Physio and PAIN Clinic
            </h1>
            
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-md p-8 md:p-12 mb-12">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Dr Hamid’s Physio and Pain Clinic is located in Manikonda, Hyderabad. The clinic’s website lists physiotherapy and rehabilitation services for local patients.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                The clinic lists Puppalguda, Manikonda, and nearby West Hyderabad areas among its service locations. Contact the clinic to confirm current availability.
              </p>
            </div>

            {/* Clinic profile */}
            <div className="rounded-md border border-border bg-white p-8 md:p-12 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-relish-600 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Clinic profile</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Dr. Mohammed Hamid Ali is the founder and Consultant Physiotherapist at Dr Hamid’s Physio and Pain Clinic. His confirmed qualifications are BPT and MPT (Ortho), with Registration No. 0413 under the Government of Telangana.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                He has 8+ years of clinical experience. The clinic was established in 2021 and is founder-operated, with individualized one-to-one care. Appointment and service suitability depend on an individual assessment.
              </p>
              <a href={PRACTO_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-medium text-relish-700 hover:underline">
                View Dr. Mohammed Hamid Ali’s professional profile on Practo
              </a>
            </div>

            {/* Our Mission */}
            <div className="rounded-md border border-border bg-sand-100 p-8 md:p-12 mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-relish-600 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                To empower each patient on their journey to optimal movement and holistic wellness by delivering:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-relish-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-relish-600 rounded-full"></div>
                  </div>
                  <span>Personalized care tailored to individual goals and lifestyles</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-relish-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-relish-600 rounded-full"></div>
                  </div>
                  <span>Evidence-based treatments grounded in the latest physiotherapy research</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-relish-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-relish-600 rounded-full"></div>
                  </div>
                  <span>Compassionate care that respects individual needs and preferences</span>
                </li>
              </ul>
            </div>

            {/* Our Philosophy */}
            <div className="bg-card border border-border rounded-md p-8 md:p-12 mb-12">
              <div className="flex items-center mb-8">
                <div className="bg-wellness-600 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Philosophy</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-4 border-relish-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Whole-Person Healing</h3>
                  <p className="text-gray-700">
                    We believe true rehabilitation addresses body, mind, and spirit—restoring not just function, but confidence and quality of life.
                  </p>
                </div>
                
                <div className="border-l-4 border-wellness-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Collaborative Partnership</h3>
                  <p className="text-gray-700">
                    You're at the center of your recovery plan. We listen, educate, and support you every step of the way.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Continuous Growth</h3>
                  <p className="text-gray-700">
                    Through ongoing training and advanced modalities, we remain at the forefront of physiotherapy innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Offer */}
            <div className="rounded-md border border-border bg-sand-100 p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="bg-wellness-600 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-md border border-border p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Orthopedic & Musculoskeletal Rehabilitation</h4>
                </div>
                <div className="bg-white rounded-md border border-border p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Pain Management (Back, Neck, Joints)</h4>
                </div>
                <div className="bg-white rounded-md border border-border p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Sports-Injury Prevention & Performance Enhancement</h4>
                </div>
                <div className="bg-white rounded-md border border-border p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Soft-Tissue Mobilization & Corrective Exercise</h4>
                </div>
                <div className="bg-white rounded-md border border-border p-6 md:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Ergonomic & Lifestyle Advice</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
