import { Helmet } from "react-helmet";

interface StructuredDataProps {
  type?: "homepage" | "service" | "blog" | "about";
  pageTitle?: string;
  pageDescription?: string;
}

const StructuredData = ({ type = "homepage", pageTitle, pageDescription }: StructuredDataProps) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    "name": "Dr. Hamid's Physio Clinic",
    "image": "/og-image.png",
    "url": "https://yourwebsite.com",
    "@id": "https://yourwebsite.com",
    "telephone": "+919885755888",
    "email": "hamid.physio324@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park",
      "addressSubLocality": "Friends Colony, Puppalguda, Manikonda",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500089",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4165,
      "longitude": 78.3892
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. Mohammed Hamid Ali",
      "jobTitle": "Physiotherapist",
      "hasCredential": "BPT (Bachelor of Physiotherapy)"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 17.4165,
        "longitude": 78.3892
      },
      "geoRadius": "10000"
    },
    "medicalSpecialty": [
      "Physiotherapy",
      "Physical Therapy",
      "Rehabilitation Medicine",
      "Sports Medicine",
      "Pain Management"
    ],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Ultrasound Therapy"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Interferential Therapy"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Exercise Therapy"
      },
      {
        "@type": "MedicalTherapy",
        "name": "TENS Therapy"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Manual Therapy"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is physiotherapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Physiotherapy is a healthcare profession that helps people restore, maintain, and maximize their strength, function, movement, and overall well-being through physical examination, diagnosis, prognosis, patient education, and physical intervention."
        }
      },
      {
        "@type": "Question",
        "name": "What conditions can physiotherapy treat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Physiotherapy can treat a wide range of conditions including back pain, neck pain, sports injuries, arthritis, post-surgical rehabilitation, stroke recovery, neurological disorders, and chronic pain conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Dr. Hamid's Physio Clinic located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Hamid's Physio Clinic is located at 4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park, Friends Colony, Puppalguda, Manikonda, Hyderabad, Telangana 500089."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a doctor's referral for physiotherapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you don't need a doctor's referral to visit a physiotherapist. You can directly consult a physiotherapist for musculoskeletal conditions, which can save time and provide specialized care faster."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a physiotherapy session last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical physiotherapy session at Dr. Hamid's Physio Clinic lasts 30-45 minutes, depending on the treatment required and the condition being addressed."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dr. Hamid's Physio Clinic",
    "alternateName": "Dr Hamid Physiotherapy",
    "url": "https://yourwebsite.com",
    "logo": "/og-image.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919885755888",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "te"]
    },
    "sameAs": [
      "https://www.instagram.com/relishphysio",
      "https://twitter.com/relishphysio"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {type === "homepage" && (
        <link rel="canonical" href="https://yourwebsite.com/" />
      )}
      {pageTitle && <title>{pageTitle}</title>}
      {pageDescription && <meta name="description" content={pageDescription} />}
    </Helmet>
  );
};

export default StructuredData;
