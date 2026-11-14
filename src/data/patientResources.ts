export type PatientResourceLink = {
  path: string;
  title: string;
  summary: string;
};

export type PatientTopicResources = {
  id: string;
  topic: string;
  answer?: PatientResourceLink;
  guide?: PatientResourceLink;
  evidence?: PatientResourceLink & { note: string };
  evidenceGap?: string;
  servicePath: string;
  serviceTitle: string;
  reviewPath?: string;
  reviewLabel?: string;
};

export const patientTopicResources: PatientTopicResources[] = [
  {
    id: "neck",
    topic: "Neck pain",
    answer: {
      path: "/blogs/neck-pain-after-waking-up",
      title: "Why does my neck hurt after waking up?",
      summary: "A focused answer about common patterns, practical comfort measures, warning signs, and when to seek an assessment.",
    },
    guide: {
      path: "/blogs/neck-pain-orthopaedician-or-physiotherapist",
      title: "Neck pain: physiotherapist or orthopaedician?",
      summary: "A broader guide to assessment options, physiotherapy, specialist care, imaging, and symptoms that need medical review.",
    },
    evidence: {
      path: "/conditions#cervical-clinical-case-study",
      title: "An anonymised cervical case study",
      summary: "Review the recorded assessment, measurements, documented care, and follow-up for one patient.",
      note: "This is one individual experience, not a typical or guaranteed result.",
    },
    servicePath: "/services/neck-pain-physiotherapy-manikonda",
    serviceTitle: "Neck Pain Physiotherapy",
    reviewPath: "/reviews#reviews-neck-pain",
    reviewLabel: "Read patient reviews mentioning neck pain",
  },
  {
    id: "back",
    topic: "Back pain",
    answer: {
      path: "/blogs/orthopaedician-or-physiotherapist-for-lower-back-pain",
      title: "Should I see a physiotherapist or orthopaedician for lower-back pain?",
      summary: "A care-choice answer that explains when physiotherapy may be suitable and when medical assessment matters.",
    },
    guide: {
      path: "/blogs/why-does-my-lower-back-hurt-10-common-causes",
      title: "Why does my lower back hurt? Ten possible causes",
      summary: "A broader guide to possible contributors, warning signs, assessment, and approaches to recovery.",
    },
    evidence: {
      path: "/conditions#lumbar-clinical-case-study",
      title: "An anonymised lumbar case study",
      summary: "Review this patient's recorded symptoms, examination findings, outcome measures, care, and follow-up.",
      note: "This is one individual experience, not a typical or guaranteed result.",
    },
    servicePath: "/services/back-pain-physiotherapy-manikonda",
    serviceTitle: "Back Pain Physiotherapy",
    reviewPath: "/reviews#reviews-back-pain",
    reviewLabel: "Read patient reviews mentioning back pain",
  },
  {
    id: "knee",
    topic: "Knee pain",
    answer: {
      path: "/blogs/knee-pain-when-climbing-stairs",
      title: "Why does my knee hurt when climbing stairs?",
      summary: "A question-led guide to stair-related knee pain, possible explanations, safe next steps, and warning signs.",
    },
    guide: {
      path: "/blogs/knee-pain-without-injury-physiotherapy-near-me-manikonda",
      title: "Knee pain without an injury: eight possible causes",
      summary: "A broader guide to possible causes, assessment, self-care considerations, and when to seek medical advice.",
    },
    evidence: {
      path: "/conditions#meniscus-clinical-case-study",
      title: "An anonymised medial meniscus case study",
      summary: "Review the recorded symptoms, knee measures, conservative care, and follow-up for one patient.",
      note: "This is one individual case. Outcomes do not predict another person's result or mean surgery is never needed.",
    },
    servicePath: "/services/knee-pain-physiotherapy-manikonda",
    serviceTitle: "Knee Pain Physiotherapy",
    reviewPath: "/reviews#reviews-knee-pain",
    reviewLabel: "Read patient reviews mentioning knee pain",
  },
  {
    id: "sciatica",
    topic: "Sciatica and leg symptoms",
    answer: {
      path: "/blogs/sciatica-vs-disc-bulge",
      title: "Sciatica and a disc bulge: what is the difference?",
      summary: "A focused explanation of a symptom pattern and an imaging description, which are not interchangeable.",
    },
    guide: {
      path: "/blogs/sciatica-pain-causes-symptoms-treatment",
      title: "Sciatica: causes, symptoms, assessment, and physiotherapy",
      summary: "A broader guide to radiating leg symptoms, possible causes, assessment, care options, and warning signs.",
    },
    evidence: {
      path: "/conditions#lumbar-clinical-case-study",
      title: "Related lumbar case with documented leg symptoms",
      summary: "The case records lumbar findings and leg symptoms; it is not presented as a sciatica-specific case.",
      note: "A disc bulge does not establish sciatica, and this single case does not predict another person's outcome.",
    },
    servicePath: "/services/sciatica-physiotherapy-manikonda",
    serviceTitle: "Sciatica Physiotherapy",
  },
  {
    id: "shoulder",
    topic: "Shoulder pain",
    answer: {
      path: "/blogs/frozen-shoulder-physiotherapy-near-me-manikonda",
      title: "Could shoulder pain and stiffness be frozen shoulder?",
      summary: "A condition-specific guide to signs that warrant assessment; shoulder pain can have other causes too.",
    },
    evidence: {
      path: "/conditions#frozen-shoulder-case-study",
      title: "Frozen shoulder physiotherapy case study",
      summary: "Review one anonymised case, its recorded outcomes, treatment programme, and six-month follow-up.",
      note: "This single case describes one person's experience and does not predict another person's outcome.",
    },
    servicePath: "/services/shoulder-pain-physiotherapy-manikonda",
    serviceTitle: "Shoulder Pain Physiotherapy",
    reviewPath: "/reviews#reviews-shoulder-pain",
    reviewLabel: "Read patient reviews mentioning shoulder pain",
  },
];
