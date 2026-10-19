import { ServiceDetail } from "./types";
import { spineAndBackServices } from "./spineAndBack";
import { neckAndCervicalServices } from "./neckAndCervical";
import { kneeServices } from "./knee";
import { shoulderServices } from "./shoulder";
import { otherJointsServices } from "./otherJoints";
import { neurologicalServices } from "./neurological";
import { sportsAndGeneralServices } from "./sportsAndGeneral";
import { supportingModalities } from "./modalities";

export * from "./types";
export { spineAndBackServices } from "./spineAndBack";
export { neckAndCervicalServices } from "./neckAndCervical";
export { kneeServices } from "./knee";
export { shoulderServices } from "./shoulder";
export { otherJointsServices } from "./otherJoints";
export { neurologicalServices } from "./neurological";
export { sportsAndGeneralServices } from "./sportsAndGeneral";
export { supportingModalities } from "./modalities";

export const primaryServices: ServiceDetail[] = [
  ...spineAndBackServices,
  ...neckAndCervicalServices,
  ...kneeServices,
  ...shoulderServices,
  ...otherJointsServices,
  ...neurologicalServices,
  ...sportsAndGeneralServices,
];

export const allServices: ServiceDetail[] = [
  ...primaryServices,
  ...supportingModalities,
];

export interface ServiceCategoryGroup {
  id: string;
  title: string;
  badge: string;
  description: string;
  services: ServiceDetail[];
}

export const serviceCategoryGroups: ServiceCategoryGroup[] = [
  {
    id: "spine-back",
    title: "Spine & Back Related",
    badge: "Spinal Health",
    description: "Doctor-led clinical care for acute lumbar pain, chronic disc prolapse, sciatica, and post-injury spinal rehabilitation in Manikonda.",
    services: spineAndBackServices,
  },
  {
    id: "neck-cervical",
    title: "Neck & Cervical Care",
    badge: "Cervical Spine",
    description: "Specialized rehabilitation for cervical spondylosis, computer neck strain, radiating arm pain, and cervical facet joint stiffness.",
    services: neckAndCervicalServices,
  },
  {
    id: "knee",
    title: "Knee & Joint Care",
    badge: "Lower Extremity",
    description: "Comprehensive physical therapy for osteoarthritis, meniscus tears, ACL/PCL injuries, and post-operative total knee rehabilitation.",
    services: kneeServices,
  },
  {
    id: "shoulder",
    title: "Shoulder & Upper Limb",
    badge: "Shoulder Girdle",
    description: "Targeted mobilization for frozen shoulder, rotator cuff tendinitis, subacromial impingement, and post-dislocation recovery.",
    services: shoulderServices,
  },
  {
    id: "other-joints",
    title: "Other Joints & Extremity Pain",
    badge: "Peripheral Joints",
    description: "Dedicated clinical care for hip impingement, tennis elbow, heel spurs, plantar fasciitis, and chronic foot & ankle sprains.",
    services: otherJointsServices,
  },
  {
    id: "neurological",
    title: "Neurological & Special Care",
    badge: "Neuro Rehab",
    description: "Neuroplastic motor re-education for stroke recovery, balance deficits, vestibular vertigo, foot drop, and peripheral nerve injuries.",
    services: neurologicalServices,
  },
  {
    id: "sports-general",
    title: "Sports, Post-Op & General Physical Therapy",
    badge: "Rehabilitation & Sports",
    description: "Complete athletic conditioning, fracture rehabilitation, post-surgical care, geriatric mobility, and pediatric physical therapy.",
    services: sportsAndGeneralServices,
  },
];

// Slug alias dictionary for backwards compatibility and clean URLs
const slugAliases: Record<string, string> = {
  // Spine & Back
  "back-pain": "back-pain-physiotherapy-manikonda",
  "back-pain-physiotherapy": "back-pain-physiotherapy-manikonda",
  "sciatica": "sciatica-physiotherapy-manikonda",
  "sciatica-physiotherapy": "sciatica-physiotherapy-manikonda",
  "lumbar-pain": "lumbar-pain-physiotherapy-manikonda",
  "disc-bulge": "disc-bulge-physiotherapy-manikonda",
  "lumbar-spondylosis": "lumbar-spondylosis-physiotherapy-manikonda",
  "spinal-injuries": "spinal-injuries-rehabilitation-manikonda",
  "spinal-injuries-rehabilitation": "spinal-injuries-rehabilitation-manikonda",
  "spine-physiotherapy": "spine-physiotherapy-manikonda",
  "spine-rehabilitation": "spine-physiotherapy-manikonda",

  // Neck & Cervical
  "neck-pain": "neck-pain-physiotherapy-manikonda",
  "neck-pain-physiotherapy": "neck-pain-physiotherapy-manikonda",
  "cervical-pain": "cervical-pain-physiotherapy-manikonda",
  "cervical-spondylosis": "cervical-spondylosis-physiotherapy-manikonda",

  // Knee
  "knee-pain": "knee-pain-physiotherapy-manikonda",
  "knee-pain-physiotherapy": "knee-pain-physiotherapy-manikonda",
  "arthritis": "arthritis-physiotherapy-manikonda",
  "arthritis-physiotherapy": "arthritis-physiotherapy-manikonda",
  "acl-injury": "acl-injury-physiotherapy-manikonda",
  "acl-rehabilitation": "acl-injury-physiotherapy-manikonda",
  "pcl-injury": "pcl-injury-physiotherapy-manikonda",
  "meniscus-injury": "meniscus-injury-physiotherapy-manikonda",
  "knee-rehabilitation": "knee-rehabilitation-manikonda",

  // Shoulder
  "shoulder-pain": "shoulder-pain-physiotherapy-manikonda",
  "shoulder-pain-physiotherapy": "shoulder-pain-physiotherapy-manikonda",
  "frozen-shoulder": "frozen-shoulder-physiotherapy-manikonda",
  "shoulder-rehabilitation": "shoulder-rehabilitation-manikonda",

  // Other Joints
  "hip-pain": "hip-pain-physiotherapy-manikonda",
  "elbow-pain": "elbow-pain-physiotherapy-manikonda",
  "tennis-elbow": "tennis-elbow-physiotherapy-manikonda",
  "heel-pain": "heel-pain-physiotherapy-manikonda",
  "plantar-fasciitis": "plantar-fasciitis-physiotherapy-manikonda",
  "heel-spur": "heel-spur-physiotherapy-manikonda",
  "foot-and-ankle-pain": "foot-and-ankle-pain-physiotherapy-manikonda",
  "ankle-rehabilitation": "ankle-rehabilitation-manikonda",

  // Neurological
  "stroke-physiotherapy": "stroke-physiotherapy-manikonda",
  "stroke-rehab": "stroke-physiotherapy-manikonda",
  "stroke-rehabilitation": "stroke-physiotherapy-manikonda",
  "neurological-physiotherapy": "neurological-physiotherapy-manikonda",
  "neuro-rehab": "neurological-physiotherapy-manikonda",
  "vestibular-rehabilitation": "vestibular-rehabilitation-manikonda",
  "vertigo-rehabilitation": "vestibular-rehabilitation-manikonda",
  "foot-drop": "foot-drop-physiotherapy-manikonda",
  "foot-drop-physiotherapy": "foot-drop-physiotherapy-manikonda",
  "nerve-rehabilitation": "nerve-rehabilitation-manikonda",

  // Sports, Post-Op & General
  "sports-injury": "sports-injury-physiotherapy-manikonda",
  "sports-injuries": "sports-injury-physiotherapy-manikonda",
  "sports-injury-rehabilitation": "sports-injury-physiotherapy-manikonda",
  "post-surgical": "post-surgical-rehabilitation-manikonda",
  "post-surgery-rehab": "post-surgical-rehabilitation-manikonda",
  "post-surgical-rehabilitation": "post-surgical-rehabilitation-manikonda",
  "fracture-treatment": "fracture-treatment-physiotherapy-manikonda",
  "fracture-rehabilitation": "fracture-treatment-physiotherapy-manikonda",
  "accident-physiotherapy": "accident-physiotherapy-manikonda",
  "geriatric-physiotherapy": "geriatric-physiotherapy-manikonda",
  "paediatric-physiotherapy": "paediatric-physiotherapy-manikonda",
  "pediatric-physiotherapy": "paediatric-physiotherapy-manikonda",
  "home-visit-physiotherapy": "home-visit-physiotherapy-manikonda",
  "home-visit-services": "home-visit-physiotherapy-manikonda",
  "therapeutic-exercise": "therapeutic-exercise-therapy-manikonda",
  "balance-exercise": "balance-exercise-therapy-manikonda",
  "balance-exercise-therapy": "balance-exercise-therapy-manikonda",
  "chronic-pain": "chronic-pain-management-manikonda",
  "chronic-pain-management": "chronic-pain-management-manikonda",
  "muscle-spasm": "muscle-spasm-physiotherapy-manikonda",
  "muscle-spasm-physiotherapy": "muscle-spasm-physiotherapy-manikonda",
  "muscle-tear": "muscle-strain-physiotherapy-manikonda",
  "muscle-strain": "muscle-strain-physiotherapy-manikonda",
  "tendonitis": "tendonitis-physiotherapy-manikonda",
  "whiplash": "whiplash-injuries-physiotherapy-manikonda",
  "whiplash-injuries": "whiplash-injuries-physiotherapy-manikonda",

  // Modalities
  "therapeutic-ultrasound": "therapeutic-ultrasound-manikonda",
  "interferential-therapy": "interferential-therapy-ift-manikonda",
  "ift-therapy": "interferential-therapy-ift-manikonda",
  "tens-therapy": "tens-therapy-manikonda",
  "electrical-muscle-stimulation": "electrical-muscle-stimulation-ems-manikonda",
  "ems-therapy": "electrical-muscle-stimulation-ems-manikonda",
  "infrared-radiation-therapy": "infrared-radiation-therapy-manikonda",
  "heat-therapy": "heat-therapy-manikonda",
  "exercise-therapy": "exercise-therapy-manikonda",
  "manual-therapy": "manual-therapy-soft-tissue-mobilisation-manikonda",
};

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.toLowerCase().trim();
  
  // Direct match
  const direct = allServices.find((s) => s.slug.toLowerCase() === cleanSlug);
  if (direct) return direct;

  // Alias lookup
  const targetSlug = slugAliases[cleanSlug];
  if (targetSlug) {
    return allServices.find((s) => s.slug.toLowerCase() === targetSlug.toLowerCase());
  }

  // Partial match fallback (e.g. "back-pain" inside "back-pain-physiotherapy-manikonda")
  return allServices.find((s) => s.slug.toLowerCase().includes(cleanSlug));
}
