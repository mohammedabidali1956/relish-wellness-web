import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { CLINIC_BUSINESS_INFO, CLINIC_BUSINESS_SCHEMA, CLINIC_BUSINESS_SCHEMA_ID, CLINIC_LOGO_URL, GOOGLE_BUSINESS_PROFILE_URL, INSTAGRAM_PROFILE_URL, PRACTO_PROFILE_URL, YOUTUBE_CHANNEL_URL } from "@/lib/businessInfo";
import { uppercasePainTerm } from "@/lib/seoText";

interface StructuredDataProps {
  type?: "homepage" | "service" | "blog" | "about";
  pageTitle?: string;
  pageDescription?: string;
  includeCanonical?: boolean;
}

const StructuredData = ({ type = "homepage", pageTitle, pageDescription, includeCanonical = true }: StructuredDataProps) => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://www.drhamidphysio.in${pathname === "/" ? "/" : pathname}`;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    ...CLINIC_BUSINESS_SCHEMA,
    "image": [CLINIC_LOGO_URL, "https://www.drhamidphysio.in/images/doctor/dr-hamid-hero.webp"],
    "logo": CLINIC_LOGO_URL,
    "@id": CLINIC_BUSINESS_SCHEMA_ID,
    "foundingDate": "2021",
    "sameAs": [
      YOUTUBE_CHANNEL_URL,
      INSTAGRAM_PROFILE_URL,
      GOOGLE_BUSINESS_PROFILE_URL,
      PRACTO_PROFILE_URL
    ],
    "hasMap": GOOGLE_BUSINESS_PROFILE_URL,
    "openingHours": "Mo-Su 10:00-22:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CLINIC_BUSINESS_INFO.telephone,
      "email": CLINIC_BUSINESS_INFO.email,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "te"]
    },
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
          "latitude": CLINIC_BUSINESS_INFO.latitude,
          "longitude": CLINIC_BUSINESS_INFO.longitude
        },
        "geoRadius": "15000"
      }
    ],
    "medicalSpecialty": [
      "https://schema.org/Physiotherapy"
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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {includeCanonical && <link rel="canonical" href={canonicalUrl} />}
      {pageTitle && <title>{uppercasePainTerm(pageTitle)}</title>}
      {pageDescription && <meta name="description" content={uppercasePainTerm(pageDescription)} />}
    </Helmet>
  );
};

export default StructuredData;
