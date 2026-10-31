import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { GOOGLE_BUSINESS_PROFILE_URL, INSTAGRAM_PROFILE_URL, OFFICIAL_CLINIC_EMAIL, PRACTO_PROFILE_URL, YOUTUBE_CHANNEL_URL } from "@/lib/businessInfo";
import { uppercasePainTerm } from "@/lib/seoText";

interface StructuredDataProps {
  type?: "homepage" | "service" | "blog" | "about";
  pageTitle?: string;
  pageDescription?: string;
}

const StructuredData = ({ type = "homepage", pageTitle, pageDescription }: StructuredDataProps) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://www.drhamidphysio.in${pathname === "/" ? "/" : pathname}`;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr Hamid’s Physio and Pain Clinic",
    "image": "/images/logo/og-image.png",
    "url": "https://www.drhamidphysio.in",
    "@id": "https://www.drhamidphysio.in",
    "foundingDate": "2021",
    "telephone": "+917601026596",
    "email": OFFICIAL_CLINIC_EMAIL,
    "sameAs": [
      YOUTUBE_CHANNEL_URL,
      INSTAGRAM_PROFILE_URL,
      GOOGLE_BUSINESS_PROFILE_URL,
      PRACTO_PROFILE_URL
    ],
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
      "latitude": 17.3989817,
      "longitude": 78.390221
    },
    "hasMap": GOOGLE_BUSINESS_PROFILE_URL,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "22:00"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Mohammed Hamid Ali",
      "jobTitle": "Consultant Physiotherapist and Founder",
      "description": "BPT, MPT (Ortho); Registration No. 0413 with Government of Telangana; 8+ years of clinical experience."
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Puppalaguda",
        "description": "Primary clinic location"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Manikonda",
        "description": "Primary clinic location"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Lanco Hills"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Tolichowki"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Shaikpet"
      },
      {
        "@type": "AdministrativeArea",
        "name": "OU Colony"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Alkapur Township"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Khajaguda"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Narsingi"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Neknampur"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Golconda"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Seven Tombs"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kokapet"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Gandipet"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Jubilee Hills"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Banjara Hills"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Gachibowli"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Financial District"
      },
      {
        "@type": "AdministrativeArea",
        "name": "HITEC City"
      },
      {
        "@type": "GeoCircle",
        "description": "Approximate target radius for home visits; availability depends on the patient's exact address.",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 17.3989817,
          "longitude": 78.390221
        },
        "geoRadius": "15000"
      }
    ],
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dr Hamid’s Physio and Pain Clinic",
    "url": "https://www.drhamidphysio.in",
    "logo": "/images/logo/og-image.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917601026596",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "te"]
    },
    "sameAs": [
      YOUTUBE_CHANNEL_URL,
      INSTAGRAM_PROFILE_URL,
      GOOGLE_BUSINESS_PROFILE_URL,
      PRACTO_PROFILE_URL
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <link rel="canonical" href={canonicalUrl} />
      {pageTitle && <title>{uppercasePainTerm(pageTitle)}</title>}
      {pageDescription && <meta name="description" content={uppercasePainTerm(pageDescription)} />}
    </Helmet>
  );
};

export default StructuredData;
