export const uppercasePainTerm = (text: string): string =>
  text.replace(/\bpain\b/gi, "PAIN");

const blogMetaTitles: Record<string, string> = {
  "knee-pain-when-climbing-stairs": "Knee Pain on Stairs: Causes & Advice | Dr Hamid",
  "yoga-vs-physical-therapy": "Yoga vs Physical Therapy: Key Differences | Dr Hamid",
  "physiotherapist-vs-gp-for-pain": "Physio or GP for Pain? | Dr Hamid",
  "physiotherapy-vs-gym-exercises": "Physio Exercises vs Gym Workouts | Dr Hamid",
  "role-of-physiotherapy-in-daily-life": "How Physiotherapy Helps Daily Life | Dr Hamid",
  "sciatica-vs-disc-bulge": "Sciatica vs Disc Bulge: Differences | Dr Hamid",
  "desk-work-and-back-pain": "Desk Work and Back Pain: Practical Advice | Dr Hamid",
  "morning-heel-pain-plantar-fasciitis": "Morning Heel Pain: Causes & Advice | Dr Hamid",
  "should-i-visit-a-gp-or-physio-for-my-pain": "GP or Physio for Pain? | Dr Hamid",
  "should-i-visit-an-orthopaedician-or-physiotherapist-for-my-pain": "Pain: Orthopaedician or Physio? | Dr Hamid",
  "chiropractic-care-or-physiotherapy-for-spine-problems": "Spine Pain: Chiropractic or Physio? | Dr Hamid",
  "orthopaedician-or-physiotherapist-for-lower-back-pain": "Lower Back Pain: Orthopaedician or Physio? | Dr Hamid",
  "neck-pain-orthopaedician-or-physiotherapist": "Neck Pain: Orthopaedician or Physio? | Dr Hamid",
  "neck-pain-after-waking-up": "Neck Pain After Waking: Causes & Advice | Dr Hamid",
  "why-does-my-lower-back-hurt-10-common-causes": "Lower Back Pain: 10 Possible Causes | Dr Hamid",
  "knee-pain-without-injury-physiotherapy-near-me-manikonda": "Knee Pain Without Injury: Causes | Dr Hamid",
  "frozen-shoulder-physiotherapy-near-me-manikonda": "Frozen Shoulder: Signs & Care | Dr Hamid",
  "how-many-physiotherapy-sessions-needed-manikonda": "How Many Physio Sessions Do You Need? | Dr Hamid",
  "sciatica-pain-causes-symptoms-treatment": "Sciatica: Causes, Symptoms & Physio | Dr Hamid",
};

const blogMetaDescriptions: Record<string, string> = {
  "chiropractic-care-or-physiotherapy-for-spine-problems": "Compare chiropractic care and physiotherapy for spine problems. Learn when assessment may help and when specialist review matters in Manikonda.",
  "desk-work-and-back-pain": "Desk work may aggravate back discomfort. Learn ways to vary position, take movement breaks and seek help if symptoms persist.",
  "how-many-physiotherapy-sessions-needed-manikonda": "How many physiotherapy sessions might you need? Learn what affects recovery, how progress is reviewed and when to adjust your plan.",
  "morning-heel-pain-plantar-fasciitis": "Morning heel pain has several possible causes. Learn signs of plantar fasciitis, other causes to consider and when assessment may help.",
  "neck-pain-after-waking-up": "Waking with neck pain or stiffness? Learn common causes, sleep-position tips, warning signs and when to seek care.",
  "sciatica-vs-disc-bulge": "Sciatica describes nerve-related symptoms; a disc bulge is an imaging finding. Learn why one does not prove the other.",
  "should-i-visit-a-gp-or-physio-for-my-pain": "Unsure where to start for movement-related pain? Learn when a physiotherapist, general physician or specialist may be appropriate.",
  "should-i-visit-an-orthopaedician-or-physiotherapist-for-my-pain": "For suitable movement-related pain, physiotherapy may be a starting point. Learn when an orthopaedic specialist should assess symptoms.",
};

const longServiceMetaDescriptions: Record<string, string> = {
  "ankle-rehabilitation-manikonda": "Ankle rehabilitation in Manikonda for post-fracture, ligament and sports-related needs. Assessment guides suitable recovery and activity.",
  "back-pain-physiotherapy-manikonda": "Back pain physiotherapy in Manikonda starts with assessment of symptoms, movement and goals. Care depends on individual findings.",
  "cervical-radiculopathy-physiotherapy-manikonda": "Physiotherapy for cervical radiculopathy in Manikonda may address arm pain, tingling or weakness after assessment.",
  "foot-drop-physiotherapy-manikonda": "Foot drop physiotherapy in Manikonda supports assessment of walking, strength and daily function. Care depends on its cause.",
  "gym-injuries-physiotherapy-manikonda": "Assessment and individual rehabilitation for gym-related strains and shoulder, knee or back pain in Manikonda.",
  "home-visit-physiotherapy-manikonda": "Home physiotherapy may be available within an approximate 5 km target area around Manikonda. Confirm address, suitability, fee and availability.",
  "geriatric-physiotherapy-manikonda": "Geriatric physiotherapy in Manikonda for assessed mobility, balance and arthritis needs. Ask the clinic about suitability and home visits.",
  "knee-pain-physiotherapy-manikonda": "Knee pain physiotherapy in Manikonda starts with assessment of symptoms, movement and goals. Care depends on individual findings.",
  "knee-rehabilitation-manikonda": "Knee rehabilitation after surgery or injury in Manikonda, guided by assessment and the treating team. Recovery varies by person.",
  "neurological-physiotherapy-manikonda": "Neurological physiotherapy in Manikonda for assessed movement and function needs. Care is tailored to diagnosis and goals.",
  "post-knee-replacement-rehabilitation-manikonda": "Physiotherapy after knee replacement in Manikonda, guided by your surgeon's advice and individual progress.",
  "post-surgical-rehabilitation-manikonda": "Post-operative physiotherapy in Manikonda, guided by your treating team's advice and individual recovery.",
  "paediatric-physiotherapy-manikonda": "Paediatric physiotherapy in Manikonda for assessed developmental, mobility and posture needs. Ask the clinic about an appointment.",
  "runner-knee-physiotherapy-manikonda": "Physiotherapy for runner's knee in Manikonda begins with assessment. Return to running depends on symptoms and progress.",
  "sciatica-physiotherapy-manikonda": "Sciatica physiotherapy in Manikonda begins with assessment of radiating leg symptoms. Care depends on findings and individual needs.",
  "shoulder-pain-physiotherapy-manikonda": "Shoulder pain physiotherapy in Manikonda starts with assessment of symptoms and movement. Care depends on findings and goals.",
  "spinal-injuries-rehabilitation-manikonda": "Spinal injury rehabilitation in Manikonda follows assessment and the treating team's guidance. Care depends on individual needs.",
  "spine-physiotherapy-manikonda": "Spine physiotherapy in Manikonda for assessed movement and function concerns. The plan depends on findings and goals.",
  "sports-injury-physiotherapy-manikonda": "Sports injury physiotherapy in Manikonda for active people. Return to activity depends on the injury and individual progress.",
  "vestibular-rehabilitation-manikonda": "Vestibular rehabilitation in Manikonda for assessed dizziness or balance concerns. Suitability depends on individual findings.",
  "therapeutic-exercise-therapy-manikonda": "Therapeutic exercise in Manikonda is selected for your assessment, goals and ability. Contact the clinic to discuss an appointment.",
  "whiplash-injuries-physiotherapy-manikonda": "Whiplash physiotherapy in Manikonda starts with assessment of neck symptoms after an accident. Seek medical review for severe or concerning symptoms.",
};

export const getBlogMetaTitle = (slug: string, fallback: string): string =>
  blogMetaTitles[slug] ?? fallback;

export const getBlogMetaDescription = (slug: string, fallback: string): string =>
  blogMetaDescriptions[slug] ?? fallback;

export const getServiceMetaTitle = (title: string): string => {
  const serviceName = title.split("|")[0].trim().replace(/,?\s*Hyderabad\b/i, "");
  let conciseName = serviceName;
  if (`${conciseName} | Dr Hamid`.length > 60) {
    conciseName = conciseName
      .replace(/\bPhysiotherapy\b/gi, "Physio")
      .replace(/\bRehabilitation\b/gi, "Rehab")
      .replace(/\bin Manikonda\b/gi, "Manikonda");
  }
  const brandedTitle = `${conciseName} | Dr Hamid`;
  return brandedTitle.length <= 60 ? brandedTitle : conciseName;
};

export const getServiceMetaDescription = (slug: string, fallback: string): string =>
  longServiceMetaDescriptions[slug] ?? fallback;
