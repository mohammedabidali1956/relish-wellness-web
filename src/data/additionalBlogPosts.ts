import type { BlogPost } from "./blogPosts";
import should_i_visit_a_gp_or_physio_for_my_painContent from "./blogContent/should-i-visit-a-gp-or-physio-for-my-pain.html?raw";
import should_i_visit_an_orthopaedician_or_physiotherapist_for_my_painContent from "./blogContent/should-i-visit-an-orthopaedician-or-physiotherapist-for-my-pain.html?raw";
import chiropractic_care_or_physiotherapy_for_spine_problemsContent from "./blogContent/chiropractic-care-or-physiotherapy-for-spine-problems.html?raw";
import orthopaedician_or_physiotherapist_for_lower_back_painContent from "./blogContent/orthopaedician-or-physiotherapist-for-lower-back-pain.html?raw";
import neck_pain_orthopaedician_or_physiotherapistContent from "./blogContent/neck-pain-orthopaedician-or-physiotherapist.html?raw";
import neck_pain_after_waking_upContent from "./blogContent/neck-pain-after-waking-up.html?raw";
import why_does_my_lower_back_hurt_10_common_causesContent from "./blogContent/why-does-my-lower-back-hurt-10-common-causes.html?raw";
import sciatica_pain_causes_symptoms_treatmentContent from "./blogContent/sciatica-pain-causes-symptoms-treatment.html?raw";
import knee_pain_without_injury_physiotherapy_near_me_manikondaContent from "./blogContent/knee-pain-without-injury-physiotherapy-near-me-manikonda.html?raw";
import frozen_shoulder_physiotherapy_near_me_manikondaContent from "./blogContent/frozen-shoulder-physiotherapy-near-me-manikonda.html?raw";
import how_many_physiotherapy_sessions_needed_manikondaContent from "./blogContent/how-many-physiotherapy-sessions-needed-manikonda.html?raw";

const clinicCta = `
<div class="article-cta" aria-label="Contact Dr Hamid’s Physio and Pain Clinic">
  <a class="article-cta__link article-cta__link--call" href="tel:+917601026596">Call the clinic</a>
  <a class="article-cta__link article-cta__link--whatsapp" href="https://wa.me/917601026596?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20physiotherapy%20consultation." target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
  <a class="article-cta__link article-cta__link--maps" href="https://maps.app.goo.gl/9AbCjEWW1ALe6uFN8" target="_blank" rel="noopener noreferrer">Find the clinic on Google Maps</a>
</div>`;

const sourceArticleCta = (whatsappHref: string) => `
<div class="article-cta" aria-label="Contact Dr Hamid’s Physio and Pain Clinic">
  <a class="article-cta__link article-cta__link--call" href="tel:+917601026596">Call the clinic</a>
  <a class="article-cta__link article-cta__link--whatsapp" href="${whatsappHref}" target="_blank" rel="noopener noreferrer">WhatsApp the clinic</a>
  <a class="article-cta__link article-cta__link--maps" href="https://maps.app.goo.gl/9AbCjEWW1ALe6uFN8" target="_blank" rel="noopener noreferrer">View clinic on Google Maps</a>
</div>`;

const withClinicCtas = (
  content: string,
  openingCta: string = clinicCta,
  closingCta: string = clinicCta,
) => content
  .replace("<!-- BLOG_CTA_OPENING -->", openingCta)
  .replace("<!-- BLOG_CTA_CLOSING -->", closingCta);

export const additionalBlogPosts: BlogPost[] = [
  {
    id: "17",
    title: "Should I Visit a General Physician or Physiotherapist for My Pain?",
    slug: "should-i-visit-a-gp-or-physio-for-my-pain",
    excerpt: "Having difficulty deciding? For suitable muscle, joint, neck or back pain, you can often start with a physiotherapist. Learn when to see a general physician, physiotherapist or specialist in Manikonda, Hyderabad.",
    content: withClinicCtas(
      should_i_visit_a_gp_or_physio_for_my_painContent,
      sourceArticleCta("https://wa.me/917601026596?text=Hello%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation."),
      sourceArticleCta("https://wa.me/917601026596?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20physiotherapy%20consultation."),
    ),
    author: "Dr. Mohammed Hamid Ali",
    category: "Patient Guidance",
    imageUrl: "/images/blog/physiotherapy-sessions/physiotherapy-sessions-consultation-manikonda.webp",
    imageSrcSet: "/images/blog/physiotherapy-sessions/physiotherapy-sessions-consultation-manikonda-480.webp 480w, /images/blog/physiotherapy-sessions/physiotherapy-sessions-consultation-manikonda-768.webp 768w, /images/blog/physiotherapy-sessions/physiotherapy-sessions-consultation-manikonda-1200.webp 1200w, /images/blog/physiotherapy-sessions/physiotherapy-sessions-consultation-manikonda.webp 1536w",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px",
  },
  {
    id: "18",
    title: "Should I Visit an Orthopaedician or Physiotherapist for My Pain?",
    slug: "should-i-visit-an-orthopaedician-or-physiotherapist-for-my-pain",
    excerpt: "Need help? For suitable movement-related pain, you can often start with a physiotherapist. Learn when an orthopaedic specialist may be the right first step in Manikonda, Hyderabad.",
    content: withClinicCtas(
      should_i_visit_an_orthopaedician_or_physiotherapist_for_my_painContent,
      sourceArticleCta("https://wa.me/917601026596?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20physiotherapy%20consultation."),
      sourceArticleCta("https://wa.me/917601026596?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20physiotherapy%20consultation."),
    ),
    author: "Dr. Mohammed Hamid Ali",
    category: "Patient Guidance",
    imageUrl: "/images/blog/physiotherapy-sessions/personalized-physiotherapy-treatment-plan.webp",
    imageSrcSet: "/images/blog/physiotherapy-sessions/personalized-physiotherapy-treatment-plan-480.webp 480w, /images/blog/physiotherapy-sessions/personalized-physiotherapy-treatment-plan-768.webp 768w, /images/blog/physiotherapy-sessions/personalized-physiotherapy-treatment-plan-1200.webp 1200w, /images/blog/physiotherapy-sessions/personalized-physiotherapy-treatment-plan.webp 1536w",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px",
  },
  {
    id: "9",
    title: "Chiropractic Care or Physiotherapy for Spine Problems: What Should You Choose?",
    slug: "chiropractic-care-or-physiotherapy-for-spine-problems",
    excerpt: "Understand how chiropractic care and physiotherapy differ, when physiotherapy may help spine problems, and when specialist assessment is important in Manikonda, Hyderabad.",
    content: withClinicCtas(chiropractic_care_or_physiotherapy_for_spine_problemsContent),
    author: "Dr. Mohammed Hamid Ali",
    category: "Spine Health",
    imageUrl: "/images/neck-pain-after-waking/cervical-spine-neck-anatomy.webp",
    imageSrcSet: "/images/neck-pain-after-waking/cervical-spine-neck-anatomy-640.webp 640w, /images/neck-pain-after-waking/cervical-spine-neck-anatomy-960.webp 960w, /images/neck-pain-after-waking/cervical-spine-neck-anatomy.webp 1536w",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px",
  },
  {
    id: "10",
    title: "Should I Consult an Orthopaedician or Physiotherapist for Lower Back Pain?",
    slug: "orthopaedician-or-physiotherapist-for-lower-back-pain",
    excerpt: "Learn when physiotherapy can help lower back pain, when specialist assessment may be needed, and how to seek care in Manikonda, Hyderabad.",
    content: withClinicCtas(orthopaedician_or_physiotherapist_for_lower_back_painContent),
    author: "Dr. Mohammed Hamid Ali",
    category: "Back Pain",
    imageUrl: "/images/low-back-pain/01-lumbar-spine-anatomy.webp",
  },
  {
    id: "11",
    title: "Neck Pain: Should I Consult an Orthopaedician or Physiotherapist?",
    slug: "neck-pain-orthopaedician-or-physiotherapist",
    excerpt: "Learn how physiotherapy can help suitable neck pain cases, when specialist assessment may be needed, and how to enquire at a clinic in Manikonda, Hyderabad.",
    content: withClinicCtas(neck_pain_orthopaedician_or_physiotherapistContent),
    author: "Dr. Mohammed Hamid Ali",
    category: "Neck Pain",
    imageUrl: "/images/neck-pain-after-waking/cervical-spine-neck-anatomy.webp",
    imageSrcSet: "/images/neck-pain-after-waking/cervical-spine-neck-anatomy-640.webp 640w, /images/neck-pain-after-waking/cervical-spine-neck-anatomy-960.webp 960w, /images/neck-pain-after-waking/cervical-spine-neck-anatomy.webp 1536w",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px",
  },
  {
    id: "12",
    title: "Why Does My Neck Hurt After Waking Up? Causes & What to Do",
    slug: "neck-pain-after-waking-up",
    excerpt: "Waking up with neck pain or stiffness? Learn common causes, pillow and sleeping-position tips, safe relief measures, warning signs, and when to seek physiotherapy in Manikonda, Hyderabad.",
    content: withClinicCtas(neck_pain_after_waking_upContent),
    author: "Dr. Mohammed Hamid Ali",
    category: "Neck Pain",
    imageUrl: "/images/neck-pain-after-waking/cervical-spine-neck-anatomy.webp",
    imageSrcSet: "/images/neck-pain-after-waking/cervical-spine-neck-anatomy-640.webp 640w, /images/neck-pain-after-waking/cervical-spine-neck-anatomy-960.webp 960w, /images/neck-pain-after-waking/cervical-spine-neck-anatomy.webp 1536w",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px",
    heroImageInContent: true,
  },
  {
    id: "13",
    title: "Why Does My Lower Back Hurt? 10 Common Causes of Low Back Pain",
    slug: "why-does-my-lower-back-hurt-10-common-causes",
    excerpt: "Learn 10 possible causes of lower back pain, warning signs that need medical attention, and how assessment and physiotherapy may help in Manikonda, Hyderabad.",
    content: withClinicCtas(why_does_my_lower_back_hurt_10_common_causesContent),
    author: "Dr. Mohammed Hamid Ali",
    category: "Back Pain",
    imageUrl: "/images/low-back-pain/01-lumbar-spine-anatomy.webp",
    heroImageInContent: true,
  },
  {
    id: "14",
    title: "Knee Pain Without Injury: 8 Possible Causes",
    slug: "knee-pain-without-injury-physiotherapy-near-me-manikonda",
    excerpt: "Why does your knee hurt without an injury? Learn 8 possible causes, warning signs, self-care tips and how physiotherapy in Manikonda, Hyderabad may help.",
    content: withClinicCtas(knee_pain_without_injury_physiotherapy_near_me_manikondaContent),
    author: "Dr. Mohammed Hamid Ali",
    category: "Knee Pain",
    imageUrl: "/images/blog/knee-pain-without-injury-hero.webp",
    imageSrcSet: "/images/blog/knee-pain-without-injury-hero-480.webp 480w, /images/blog/knee-pain-without-injury-hero-768.webp 768w, /images/blog/knee-pain-without-injury-hero-1200.webp 1200w, /images/blog/knee-pain-without-injury-hero.webp 1536w",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px",
    heroImageInContent: true,
  },
  {
    id: "15",
    title: "Frozen Shoulder: 7 Signs You Should Not Ignore",
    slug: "frozen-shoulder-physiotherapy-near-me-manikonda",
    excerpt: "Learn 7 signs of frozen shoulder, common risk factors, diagnosis and treatment options. Explore frozen shoulder physiotherapy near Manikonda, Hyderabad.",
    content: withClinicCtas(frozen_shoulder_physiotherapy_near_me_manikondaContent),
    author: "Dr. Mohammed Hamid Ali",
    category: "Shoulder Pain",
    imageUrl: "/images/blog/frozen-shoulder-physiotherapy-near-me-manikonda/frozen-shoulder-joint-anatomy-960.webp",
    imageSrcSet: "/images/blog/frozen-shoulder-physiotherapy-near-me-manikonda/frozen-shoulder-joint-anatomy-480.webp 480w, /images/blog/frozen-shoulder-physiotherapy-near-me-manikonda/frozen-shoulder-joint-anatomy-960.webp 960w, /images/blog/frozen-shoulder-physiotherapy-near-me-manikonda/frozen-shoulder-joint-anatomy-1536.webp 1536w",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px",
    heroImageInContent: true,
  },
  {
    id: "16",
    title: "How Many Physiotherapy Sessions Do You Actually Need?",
    slug: "how-many-physiotherapy-sessions-needed-manikonda",
    excerpt: "How many physiotherapy sessions do you actually need? Learn what affects recovery time, how progress is assessed, and when to review your plan in Manikonda, Hyderabad.",
    content: withClinicCtas(how_many_physiotherapy_sessions_needed_manikondaContent),
    author: "Dr. Mohammed Hamid Ali",
    category: "Physiotherapy",
    imageUrl: "/images/blog/physiotherapy-sessions/physiotherapy-sessions-consultation-manikonda.webp",
    imageSrcSet: "/images/blog/physiotherapy-sessions/physiotherapy-sessions-consultation-manikonda-480.webp 480w, /images/blog/physiotherapy-sessions/physiotherapy-sessions-consultation-manikonda-768.webp 768w, /images/blog/physiotherapy-sessions/physiotherapy-sessions-consultation-manikonda-1200.webp 1200w, /images/blog/physiotherapy-sessions/physiotherapy-sessions-consultation-manikonda.webp 1536w",
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 800px",
    heroImageInContent: true,
  },
  {
    id: "19",
    title: "Sciatica Pain: Causes, Symptoms & Physiotherapy Treatment",
    slug: "sciatica-pain-causes-symptoms-treatment",
    excerpt: "Learn why sciatica causes pain from the lower back to the leg, common symptoms, warning signs and how physiotherapy may help in Manikonda, Hyderabad.",
    content: withClinicCtas(sciatica_pain_causes_symptoms_treatmentContent),
    author: "Dr. Mohammed Hamid Ali",
    category: "Back Pain & Sciatica",
    imageUrl: "/images/blog/sciatica-pain-causes-symptoms-treatment/09-when-mri-may-be-considered.webp",
    heroImageInContent: true,
  }
];
