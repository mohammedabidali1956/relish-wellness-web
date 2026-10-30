export interface ServiceDetail {
  slug: string;
  category: "Spine & Back" | "Neck & Cervical" | "Knee" | "Shoulder" | "Other Joints & Pain" | "Neurological & Special" | "Sports, Post-Op & General" | "Supporting Modalities";
  isModality?: boolean;
  relatedServiceSlugs?: string[];
  conditionSchemaName?: string;
  evidenceSources?: { label: string; url: string }[];
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  imageSrc: string;
  altText: string;
  whatItIs: string;
  causes: string[];
  symptoms: string[];
  howPhysioHelps: string;
  assessmentProcess: string[];
  treatmentApproach: string[];
  expectedRecovery: string;
  whyChooseDoctor: string[];
  serviceAreas: string[];
  homeCare: string[];
  whenToVisit: string;
  faqs: { question: string; answer: string }[];
}
