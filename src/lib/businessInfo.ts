export const GOOGLE_BUSINESS_PROFILE_URL = "https://maps.app.goo.gl/9AbCjEWW1ALe6uFN8";
export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/drhamidphysio/";
export const YOUTUBE_CHANNEL_URL = "https://youtube.com/@dr.hamidsphysiopainclinic";
export const FACEBOOK_PROFILE_URL = "https://www.facebook.com/profile.php?id=61587086612280";
export const PRACTO_PROFILE_URL = "https://www.practo.com/hyderabad/doctor/mohammed-hamid-ali-physiotherapist-1";
export const OFFICIAL_CLINIC_EMAIL = "drhamidphysio@gmail.com";

export const CLINIC_POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "4-3/81, Opp: HDFC Bank ATM, near Friends Colony Park",
  addressSubLocality: "Friends Colony, Puppalguda, Manikonda",
  addressLocality: "Hyderabad",
  addressRegion: "Telangana",
  postalCode: "500089",
  addressCountry: "IN",
} as const;

export const CLINIC_BUSINESS_INFO = {
  name: "Dr Hamid's Physio and PAIN Clinic | Manikonda",
  website: "https://www.drhamidphysio.in",
  telephone: "+917601026596",
  email: OFFICIAL_CLINIC_EMAIL,
  fullAddress: `${CLINIC_POSTAL_ADDRESS.streetAddress}, ${CLINIC_POSTAL_ADDRESS.addressSubLocality}, ${CLINIC_POSTAL_ADDRESS.addressLocality}, ${CLINIC_POSTAL_ADDRESS.addressRegion} ${CLINIC_POSTAL_ADDRESS.postalCode}, India.`,
  plusCode: "99XR+H3X Hyderabad, Telangana",
  latitude: 17.39899,
  longitude: 78.390219,
} as const;

export const CLINIC_GEO_COORDINATES = {
  "@type": "GeoCoordinates",
  latitude: CLINIC_BUSINESS_INFO.latitude,
  longitude: CLINIC_BUSINESS_INFO.longitude,
} as const;

export const CLINIC_PLUS_CODE_IDENTIFIER = {
  "@type": "PropertyValue",
  propertyID: "Google Maps Plus Code",
  value: CLINIC_BUSINESS_INFO.plusCode,
} as const;

export const CLINIC_BUSINESS_SCHEMA = {
  name: CLINIC_BUSINESS_INFO.name,
  url: CLINIC_BUSINESS_INFO.website,
  telephone: CLINIC_BUSINESS_INFO.telephone,
  email: CLINIC_BUSINESS_INFO.email,
  address: CLINIC_POSTAL_ADDRESS,
  geo: CLINIC_GEO_COORDINATES,
  identifier: CLINIC_PLUS_CODE_IDENTIFIER,
} as const;

export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.7!2d${CLINIC_BUSINESS_INFO.longitude}!3d${CLINIC_BUSINESS_INFO.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c8eb026f65%3A0x5e83196a16a5e123!2sDr.%20Hamid's%20Physio%20%26%20Pain%20Clinic!5e0!3m2!1sen!2sin!4v1727624000000`;
