import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

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
    "@type": "Physiotherapy",
    "name": "Dr. Hamid's Physio and Pain Clinic",
    "image": "/images/logo/og-image.png",
    "url": "https://www.drhamidphysio.in",
    "@id": "https://www.drhamidphysio.in",
    "telephone": "+917601026596",
    "email": "hamid.physio324@gmail.com",
    "sameAs": [
      "https://www.youtube.com/@dr.hamidsphysiopainclinic",
      "https://www.instagram.com/drhamidphysio",
      "https://www.facebook.com/profile.php?id=61587086612280",
      "https://maps.app.goo.gl/zGixCFnPJbKzKxy17",
      "https://www.practo.com/hyderabad/doctor/mohammed-hamid-ali-physiotherapist-1"
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
    "hasMap": "https://maps.app.goo.gl/zGixCFnPJbKzKxy17",
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
      "jobTitle": "Consultant Physiotherapist",
      "hasCredential": "BPT, MPT (Orthopedics)",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Registration Number",
        "value": "0413"
      }
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
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 17.3989817,
          "longitude": 78.390221
        },
        "geoRadius": "10000"
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
    "name": "Dr. Hamid's Physio and Pain Clinic",
    "alternateName": "Dr Hamid Physiotherapy",
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
      "https://www.instagram.com/drhamidphysio",
      "https://www.facebook.com/profile.php?id=61587086612280",
      "https://maps.app.goo.gl/zGixCFnPJbKzKxy17",
      "https://www.practo.com/hyderabad/doctor/mohammed-hamid-ali-physiotherapist-1"
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
      {pageTitle && <title>{pageTitle}</title>}
      {pageDescription && <meta name="description" content={pageDescription} />}
    </Helmet>
  );
};

export default StructuredData;
