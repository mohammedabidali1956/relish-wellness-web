export interface Condition {
  slug: string;
  title: string;
  shortDescription: string;
  imageSrc: string;
  altText: string;
  overview: string;
  causes: string[];
  symptoms: string[];
  howPhysioHelps: string;
  homeCare: string[];
  whenToVisit: string;
  faqs: { question: string; answer: string }[];
}

export const conditions: Condition[] = [
  {
    slug: "back-pain",
    title: "Back Pain Physiotherapy",
    shortDescription: "Expert treatment for lower back pain, sciatica, and spinal conditions to restore mobility and reduce discomfort.",
    imageSrc: "/images/services/condition-back-pain.webp",
    altText: "Back pain physiotherapy treatment showing highlighted spine in Manikonda clinic",
    overview: "Back pain is one of the most common reasons people seek physiotherapy. It can range from a dull, constant ache to sudden sharp pain that makes movement difficult. At Dr. Hamid's Physio and Pain Clinic in Manikonda, we specialize in diagnosing the root cause of your back pain and providing targeted treatment to restore your mobility and quality of life.",
    causes: [
      "Poor posture from prolonged sitting or standing",
      "Muscle strain from lifting heavy objects incorrectly",
      "Herniated or bulging discs",
      "Degenerative disc disease",
      "Sciatica and nerve compression",
      "Spinal stenosis",
      "Sedentary lifestyle and weak core muscles"
    ],
    symptoms: [
      "Persistent aching or stiffness along the spine",
      "Sharp, localized pain in the lower, middle, or upper back",
      "Pain that radiates down the leg (sciatica)",
      "Difficulty standing straight or walking",
      "Numbness or tingling in the back or legs",
      "Pain that worsens after sitting for long periods"
    ],
    howPhysioHelps: "Physiotherapy for back pain involves a combination of manual therapy techniques, targeted exercises, and patient education. Our treatment approach includes spinal mobilization to improve joint movement, core strengthening exercises to support the spine, postural correction training, and modalities like ultrasound therapy and TENS to reduce pain and inflammation. We create personalized treatment plans that address not just the symptoms but the underlying causes of your back pain.",
    homeCare: [
      "Maintain good posture while sitting and standing",
      "Take regular breaks from prolonged sitting",
      "Perform gentle stretching exercises daily",
      "Use ergonomic furniture and pillows",
      "Apply ice or heat packs as recommended",
      "Stay active with low-impact exercises like walking or swimming"
    ],
    whenToVisit: "You should visit a physiotherapist if your back pain persists for more than a few days, interferes with daily activities, is accompanied by numbness or weakness in the legs, or if you experience sudden severe pain after an injury. Early intervention can prevent chronic issues and speed up recovery.",
    faqs: [
      {
        question: "How many sessions will I need for back pain treatment?",
        answer: "The number of sessions varies depending on the severity and cause of your back pain. Most patients see significant improvement within 6-8 sessions, but chronic conditions may require longer treatment plans."
      },
      {
        question: "Can physiotherapy help with slipped disc?",
        answer: "Yes, physiotherapy is highly effective for herniated or slipped discs. Treatment focuses on reducing pain, improving mobility, and strengthening supporting muscles to prevent recurrence."
      },
      {
        question: "Is bed rest good for back pain?",
        answer: "Prolonged bed rest is not recommended for most back pain. Staying moderately active and following prescribed exercises is more beneficial for recovery."
      }
    ]
  },
  {
    slug: "neck-pain",
    title: "Neck Pain Treatment",
    shortDescription: "Effective relief for cervical pain, stiffness, and headaches caused by poor posture or injury.",
    imageSrc: "/images/services/condition-neck-pain.webp",
    altText: "Neck pain treatment showing cervical spine visualization at physio clinic",
    overview: "Neck pain is increasingly common in today's digital age, affecting people who spend long hours at computers or on smartphones. At Dr. Hamid's Physio and Pain Clinic, we provide comprehensive treatment for neck pain, cervical spondylosis, and related conditions. Our goal is to relieve your pain, restore full range of motion, and prevent future episodes.",
    causes: [
      "Forward head posture from prolonged screen use",
      "Cervical spondylosis (age-related wear)",
      "Muscle strain from poor sleeping positions",
      "Whiplash from accidents",
      "Cervical disc problems",
      "Stress-related muscle tension",
      "Poor ergonomics at work"
    ],
    symptoms: [
      "Stiffness and difficulty turning the head",
      "Sharp pain when moving the neck",
      "Headaches originating from the neck",
      "Radiating pain to shoulders or arms",
      "Numbness or tingling in arms or hands",
      "Muscle tightness and knots in the neck"
    ],
    howPhysioHelps: "Our neck pain treatment combines manual therapy techniques including soft tissue mobilization and joint manipulation with targeted exercises to strengthen neck muscles and improve posture. We use modalities like heat therapy, ultrasound, and electrical stimulation to reduce pain and muscle spasms. Ergonomic assessment and postural training help prevent recurrence.",
    homeCare: [
      "Position your screen at eye level",
      "Take breaks every 30-45 minutes from computer work",
      "Use a supportive pillow that maintains neck alignment",
      "Perform gentle neck stretches throughout the day",
      "Avoid cradling the phone between ear and shoulder",
      "Apply heat to relieve muscle tension"
    ],
    whenToVisit: "Seek physiotherapy if neck pain persists beyond a week, is accompanied by radiating pain or numbness in arms, causes severe headaches, or follows a trauma like a car accident. Immediate medical attention is needed if you experience weakness in arms or legs.",
    faqs: [
      {
        question: "Can neck pain cause headaches?",
        answer: "Yes, cervicogenic headaches originate from neck problems. Physiotherapy can effectively treat both the neck issue and reduce associated headaches."
      },
      {
        question: "What is text neck syndrome?",
        answer: "Text neck is a modern term for neck pain and damage caused by looking down at phones or tablets for prolonged periods. Physiotherapy and posture correction can help reverse these effects."
      },
      {
        question: "How can I prevent neck pain at work?",
        answer: "Ensure proper workstation ergonomics, take regular breaks, maintain good posture, and perform neck exercises. Our physiotherapist can provide personalized workplace recommendations."
      }
    ]
  },
  {
    slug: "knee-pain",
    title: "Knee Pain Rehabilitation",
    shortDescription: "Comprehensive treatment for arthritis, ligament injuries, and post-surgical knee rehabilitation.",
    imageSrc: "/images/services/condition-knee-pain.webp",
    altText: "Knee pain rehabilitation showing athlete with knee injury",
    overview: "Knee pain can significantly impact your mobility and quality of life. Whether you're dealing with arthritis, a sports injury, or recovering from surgery, Dr. Hamid's Physio and Pain Clinic offers expert knee rehabilitation services. Our evidence-based approach focuses on reducing pain, restoring function, and getting you back to your active lifestyle.",
    causes: [
      "Osteoarthritis and degenerative changes",
      "ACL, MCL, or meniscus injuries",
      "Patellofemoral pain syndrome (runner's knee)",
      "Tendinitis and bursitis",
      "Post-surgical rehabilitation needs",
      "Overuse from sports or repetitive activities",
      "Obesity and excess weight on joints"
    ],
    symptoms: [
      "Pain during walking, climbing stairs, or squatting",
      "Swelling and stiffness around the knee",
      "Popping or crunching sounds",
      "Instability or feeling like the knee will give out",
      "Difficulty straightening or bending the knee",
      "Warmth and redness around the joint"
    ],
    howPhysioHelps: "Knee rehabilitation at our clinic includes strengthening exercises for the quadriceps and hamstrings, flexibility training, balance and proprioception exercises, and manual therapy techniques. We use modalities like interferential therapy and ultrasound for pain management. For post-surgical patients, we follow structured protocols to ensure safe and effective recovery.",
    homeCare: [
      "Maintain a healthy weight to reduce joint stress",
      "Use the RICE method (Rest, Ice, Compression, Elevation) for acute injuries",
      "Perform prescribed strengthening exercises regularly",
      "Wear supportive footwear",
      "Avoid high-impact activities if advised",
      "Use assistive devices if recommended"
    ],
    whenToVisit: "Visit a physiotherapist if you experience persistent knee pain, have difficulty bearing weight, notice significant swelling, feel instability while walking, or are recovering from knee surgery. Early treatment can prevent further damage and speed recovery.",
    faqs: [
      {
        question: "How long is the recovery after knee replacement surgery?",
        answer: "Recovery varies by individual, but most patients see significant improvement within 3-6 months with consistent physiotherapy. Full recovery may take up to a year."
      },
      {
        question: "Can physiotherapy help avoid knee surgery?",
        answer: "In many cases, yes. Conservative treatment with physiotherapy can strengthen muscles, reduce pain, and improve function, potentially avoiding or delaying the need for surgery."
      },
      {
        question: "What exercises are best for knee arthritis?",
        answer: "Low-impact exercises like swimming, cycling, and specific strengthening exercises are beneficial. Our physiotherapist will design a program suited to your condition and fitness level."
      }
    ]
  },
  {
    slug: "shoulder-pain",
    title: "Shoulder Pain Treatment",
    shortDescription: "Specialized care for frozen shoulder, rotator cuff injuries, and shoulder impingement.",
    imageSrc: "/images/services/condition-shoulder-pain.webp",
    altText: "Shoulder pain treatment showing patient with shoulder discomfort",
    overview: "Shoulder problems can make simple daily tasks like reaching overhead or getting dressed incredibly painful. At Dr. Hamid's Physio and Pain Clinic, we treat a wide range of shoulder conditions from frozen shoulder to rotator cuff injuries. Our comprehensive approach combines hands-on treatment with therapeutic exercises to restore full shoulder function.",
    causes: [
      "Frozen shoulder (adhesive capsulitis)",
      "Rotator cuff tears or tendinitis",
      "Shoulder impingement syndrome",
      "Bursitis",
      "Shoulder instability and dislocations",
      "Arthritis of the shoulder joint",
      "Overuse from repetitive overhead activities"
    ],
    symptoms: [
      "Difficulty raising the arm overhead",
      "Pain when reaching behind the back",
      "Night pain disrupting sleep",
      "Weakness in arm movements",
      "Stiffness and reduced range of motion",
      "Clicking or grinding sounds during movement"
    ],
    howPhysioHelps: "Our shoulder treatment protocol includes joint mobilization to restore range of motion, strengthening exercises for the rotator cuff and scapular muscles, postural correction, and pain-relieving modalities. For frozen shoulder, we use specific stretching techniques and progressive exercises to gradually restore movement. Manual therapy helps break down adhesions and improve tissue flexibility.",
    homeCare: [
      "Perform prescribed stretching exercises daily",
      "Apply ice after activities that aggravate pain",
      "Avoid sleeping on the affected shoulder",
      "Maintain good posture to reduce shoulder strain",
      "Use heat before exercises to loosen muscles",
      "Modify activities that cause pain"
    ],
    whenToVisit: "Seek physiotherapy if shoulder pain persists beyond two weeks, prevents you from sleeping, limits your ability to use your arm, or follows an injury. Frozen shoulder especially benefits from early intervention to prevent prolonged stiffness.",
    faqs: [
      {
        question: "How long does frozen shoulder recovery take?",
        answer: "Frozen shoulder typically goes through three phases over 1-3 years naturally. With physiotherapy, this timeline can be significantly shortened, with many patients improving within 6-12 months."
      },
      {
        question: "Can I exercise with a rotator cuff injury?",
        answer: "Yes, but the exercises must be appropriate for your condition. Our physiotherapist will guide you through safe exercises that promote healing without causing further damage."
      },
      {
        question: "Do I need surgery for shoulder impingement?",
        answer: "Most cases of shoulder impingement respond well to physiotherapy. Surgery is typically only considered if conservative treatment fails after several months."
      }
    ]
  },
  {
    slug: "sports-injury",
    title: "Sports Injury Physiotherapy",
    shortDescription: "Fast recovery and return-to-play programs for athletes with sprains, strains, and sports-related injuries.",
    imageSrc: "/images/services/condition-sports-injury.webp",
    altText: "Sports injury physiotherapy showing athlete with bandaged knee",
    overview: "Athletes and active individuals require specialized care to recover from injuries and return to their sport safely. Dr. Hamid's Physio and Pain Clinic provides comprehensive sports injury rehabilitation that addresses the unique demands of athletic performance. Our goal is not just recovery, but helping you come back stronger and more resilient.",
    causes: [
      "Muscle strains and ligament sprains",
      "Tendon injuries (tendinitis, tendinopathy)",
      "Stress fractures from overtraining",
      "ACL and other ligament tears",
      "Tennis elbow and golfer's elbow",
      "Shin splints",
      "Plantar fasciitis"
    ],
    symptoms: [
      "Sudden pain during activity",
      "Swelling and bruising",
      "Reduced strength or performance",
      "Joint instability",
      "Decreased range of motion",
      "Pain that worsens with specific movements"
    ],
    howPhysioHelps: "Sports injury rehabilitation involves acute injury management, progressive strengthening and conditioning, sport-specific training, and injury prevention education. We use techniques like manual therapy, dry needling, taping, and therapeutic exercises tailored to your sport. Our return-to-play protocols ensure you're ready to perform safely before resuming competitive activities.",
    homeCare: [
      "Follow the RICE protocol for acute injuries",
      "Complete prescribed rehabilitation exercises",
      "Gradually increase training intensity",
      "Warm up properly before activities",
      "Use appropriate protective equipment",
      "Listen to your body and rest when needed"
    ],
    whenToVisit: "See a physiotherapist immediately after any sports injury for proper assessment and treatment. Early intervention reduces recovery time and prevents complications. Also consult if you have recurring injuries or want to improve performance and prevent future injuries.",
    faqs: [
      {
        question: "How soon can I return to sports after an injury?",
        answer: "Return-to-sport timelines vary based on injury type and severity. Our structured protocols ensure you meet specific functional criteria before returning to prevent re-injury."
      },
      {
        question: "Can physiotherapy prevent sports injuries?",
        answer: "Yes, preventive physiotherapy including screening, corrective exercises, and training modifications can significantly reduce injury risk."
      },
      {
        question: "Do you provide rehabilitation for cricket and badminton injuries?",
        answer: "Absolutely. We treat athletes from all sports including cricket, badminton, football, tennis, and running, with sport-specific rehabilitation programs."
      }
    ]
  },
  {
    slug: "neuro-rehabilitation",
    title: "Stroke & Neuro Rehabilitation",
    shortDescription: "Specialized neurological physiotherapy for stroke recovery, paralysis, and movement disorders.",
    imageSrc: "/images/services/condition-neuro-rehab.webp",
    altText: "Neurological rehabilitation therapy with physiotherapist guiding patient",
    overview: "Neurological conditions require specialized physiotherapy approaches to help patients regain function and independence. At Dr. Hamid's Physio and Pain Clinic, we provide comprehensive neuro-rehabilitation for stroke survivors, patients with Parkinson's disease, and other neurological conditions. Our patient-centered approach focuses on maximizing recovery potential and improving quality of life.",
    causes: [
      "Stroke (ischemic or hemorrhagic)",
      "Traumatic brain injury",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Bell's palsy",
      "Guillain-Barré syndrome",
      "Spinal cord injuries"
    ],
    symptoms: [
      "Weakness or paralysis on one side of the body",
      "Difficulty with balance and coordination",
      "Problems walking or moving",
      "Muscle stiffness or spasticity",
      "Difficulty with fine motor tasks",
      "Fatigue and reduced endurance"
    ],
    howPhysioHelps: "Neuro-rehabilitation uses specialized techniques to retrain the brain and nervous system. Treatment includes gait training, balance exercises, strength training for affected limbs, task-specific practice, and strategies to improve daily activities. We work on neuroplasticity principles to help the brain form new connections and recover lost functions.",
    homeCare: [
      "Practice prescribed exercises daily",
      "Maintain a consistent exercise schedule",
      "Focus on quality of movement, not just quantity",
      "Use assistive devices as recommended",
      "Involve family members in the rehabilitation process",
      "Be patient - neurological recovery takes time"
    ],
    whenToVisit: "Begin physiotherapy as soon as medically stable after a stroke or neurological event. Early intervention leads to better outcomes. Regular sessions are important even for chronic conditions to maintain and improve function.",
    faqs: [
      {
        question: "When should stroke rehabilitation begin?",
        answer: "Rehabilitation should begin as soon as the patient is medically stable, often within 24-48 hours of the stroke. Early intervention significantly improves outcomes."
      },
      {
        question: "How long does stroke recovery take?",
        answer: "Recovery is highly individual. Most significant improvement occurs in the first 3-6 months, but progress can continue for years with consistent therapy and home exercises."
      },
      {
        question: "Can physiotherapy help with Parkinson's disease?",
        answer: "Yes, physiotherapy can improve mobility, balance, and quality of life in Parkinson's patients through specialized exercises and movement strategies."
      }
    ]
  }
];
