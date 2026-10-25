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
  treatmentApproach?: string[];
  expectedRecovery?: string;
  whyChooseDoctor?: string[];
  serviceAreas?: string[];
  faqs: { question: string; answer: string }[];
}

export const conditions: Condition[] = [
  {
    slug: "neck-pain",
    title: "Neck Pain Physiotherapy & Cervical Care",
    shortDescription: "Specialized physiotherapy treatment for neck pain, cervical spondylosis, stiffness, and postural strain in Manikonda.",
    imageSrc: "/images/services/condition-neck-pain.webp",
    altText: "Neck pain physiotherapy treatment showing cervical spine care in Manikonda clinic",
    overview: "Neck pain and stiffness can have several causes, including long periods in one position, an injury, or age-related changes. At Dr Hamid’s Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali assesses symptoms and movement before discussing whether physiotherapy may help manage pain and improve function. Care is tailored to the individual and may include activity advice and exercise.",
    causes: [
      "Forward head posture and ergonomic strain from long computer or mobile use",
      "Cervical spondylosis (age-related disc and facet joint wear)",
      "Cervical radiculopathy (pinched nerve causing arm numbness or tingling)",
      "Whiplash and acute muscle strain from sudden movements or accidents",
      "Cervical disc bulge or herniation",
      "Stress-related trapezius and suboccipital muscle tightness"
    ],
    symptoms: [
      "Persistent stiffness, burning ache, or sharp pain when turning your head",
      "Cervicogenic headaches originating from the base of the skull",
      "Tingling, numbness, or weakness radiating into shoulders, arms, or fingers",
      "Muscle spasms across the upper back and shoulder blades",
      "Clicking or grinding sensations during neck rotation"
    ],
    howPhysioHelps: "Our evidence-based cervical protocol combines hands-on manual therapy (gentle joint mobilization and myofascial release), deep cervical flexor retraining, ergonomic posture correction, and supportive electrotherapy (IFT or ultrasound therapy when acute inflammation is present). We provide step-by-step home exercise guidance so you regain long-term spinal stability.",
    treatmentApproach: [
      "Thorough cervical movement, neurological, and postural assessment",
      "Targeted manual therapy to relieve acute muscle spasm and facet joint restriction",
      "Deep neck flexor and scapular stabilizer muscle retraining",
      "Targeted electro-modalities for rapid anti-inflammatory pain relief",
      "Workstation ergonomic advice and personalized preventive home exercises"
    ],
    expectedRecovery: "Recovery time and progress vary by condition, symptoms, overall health, treatment, and individual circumstances. An assessment can help set goals and review progress; no fixed timeline or outcome can be promised.",
    whyChooseDoctor: [],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
    ],
    homeCare: [
      "Keep computer monitors at eye level to prevent downward neck flexion",
      "Take micro-breaks every 30-45 minutes to do gentle chin tucks",
      "Use an ergonomic contour pillow that supports the natural cervical curve",
      "Apply moist heat for 15 minutes to relax tight neck and shoulder muscles",
      "Avoid sleeping on your stomach or cradling phones between ear and shoulder"
    ],
    whenToVisit: "Consult Dr. Hamid immediately if your neck pain radiates down your arm, causes hand weakness or clumsiness, follows a car crash or fall, or fails to improve after 3 to 5 days of rest.",
    faqs: [
      {
        question: "Can physiotherapy cure cervical spondylosis and neck pain?",
        answer: "Physiotherapy cannot reverse age-related changes, and it cannot guarantee that symptoms will go away. Depending on the assessment, an individual plan may include movement, strengthening, and advice to help manage pain and improve everyday function."
      },
      {
        question: "What is text neck syndrome, and how do you treat it?",
        answer: "Text neck is repetitive strain injury caused by forward-head posture while looking down at phones. We treat it through thoracic extension mobilization, deep neck flexor strengthening, and ergonomic retraining."
      },
      {
        question: "Do you offer home visit physiotherapy for severe neck pain in Manikonda?",
        answer: "Home visits may be available for people with severe symptoms who have difficulty travelling. They are generally targeted within an approximate 15 km radius of Manikonda; contact the clinic to confirm location coverage and availability."
      }
    ]
  },
  {
    slug: "back-pain",
    title: "Back Pain Physiotherapy & Sciatica Care",
    shortDescription: "Comprehensive clinical physiotherapy for lower back pain, disc bulge, sciatica, and spinal rehabilitation in Manikonda.",
    imageSrc: "/images/services/condition-back-pain.webp",
    altText: "Back pain physiotherapy treatment showing spine rehabilitation in Manikonda clinic",
    overview: "Lower back pain is the number one cause of mobility impairment and missed work in Hyderabad. Whether caused by prolonged sitting in IT jobs, heavy lifting, herniated discs, or lumbar canal stenosis, back pain requires precise clinical assessment. At Dr Hamid’s Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali focuses on identifying the mechanical driver of your back pain and building spinal resilience through evidence-based manual therapy, core stabilization, and neural mobilization.",
    causes: [
      "Prolonged static sitting and poor ergonomic posture during desk work",
      "Herniated or bulging lumbar discs (L4-L5, L5-S1)",
      "Sciatica and compression of the sciatic nerve roots",
      "Lumbar spondylosis and facet joint arthritis",
      "Sacroiliac (SI) joint dysfunction",
      "Weak abdominal, pelvic floor, and deep spinal stabilizer muscles"
    ],
    symptoms: [
      "Constant dull ache or sudden sharp pain in the lower back",
      "Shooting pain, tingling, or numbness travelling down the buttocks and legs (sciatica)",
      "Difficulty standing up straight after sitting or getting out of bed",
      "Stiffness and restricted spinal bending or twisting",
      "Muscle spasms locking the lower spine"
    ],
    howPhysioHelps: "Physiotherapy for back pain may include advice, activity modification, and exercises selected for a person's symptoms and goals. Hands-on techniques or modalities may be considered as part of an individual plan, but response varies. The aim is to support movement and day-to-day function over time.",
    treatmentApproach: [
      "Comprehensive spinal assessment (directional preference, neural tension tests)",
      "Targeted manual therapy to restore intervertebral and sacroiliac joint mobility",
      "Progressive core stabilization and McKenzie-based movement therapy",
      "Safe lifting mechanics and ergonomic sitting posture education",
      "Gradual return-to-activity and sports conditioning protocol"
    ],
    expectedRecovery: "Recovery time and progress vary by condition, symptoms, overall health, treatment, and individual circumstances. An assessment can help set goals and review progress; no fixed timeline or outcome can be promised.",
    whyChooseDoctor: [],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
    ],
    homeCare: [
      "Avoid prolonged bed rest; gentle walking promotes disc hydration and recovery",
      "Use lumbar support while sitting in office chairs or driving",
      "Bend at the knees and hips, keeping objects close to your body when lifting",
      "Practice prescribed gentle pelvic tilts, knee-to-chest, and cat-camel stretches",
      "Apply ice in acute flare-ups and moist heat for chronic muscular tightness"
    ],
    whenToVisit: "Schedule an assessment if back pain persists beyond 3 days, radiates into the legs, causes numbness, or makes walking difficult. Seek emergency medical care for bowel/bladder incontinence or progressive foot weakness (foot drop).",
    faqs: [
      {
        question: "Can physiotherapy heal a herniated or slipped disc without surgery?",
        answer: "Some people with a herniated disc improve without surgery, but the course and appropriate care vary. Physiotherapy may help manage symptoms and support activity for some people. A medical assessment is important for severe or worsening symptoms; treatment cannot guarantee that surgery will be avoided."
      },
      {
        question: "Is bed rest recommended for severe back pain?",
        answer: "No, strict bed rest beyond 24-48 hours weakens spinal muscles and delays recovery. Controlled, gentle movement and targeted physiotherapy lead to much faster healing."
      },
      {
        question: "Where is Dr Hamid’s Physio and Pain Clinic located?",
        answer: "The clinic is located at 4-3/81, Opposite HDFC Bank ATM, near Friends Colony Park, Puppalguda, Manikonda, Hyderabad. Home visits are generally targeted within an approximate 15 km radius of Manikonda; contact the clinic to confirm coverage."
      }
    ]
  },
  {
    slug: "knee-pain",
    title: "Knee Pain Physiotherapy & Arthritis Care",
    shortDescription: "Specialized knee rehabilitation for osteoarthritis, ligament injuries, runner's knee, and post-surgery recovery in Manikonda.",
    imageSrc: "/images/services/condition-knee-pain.webp",
    altText: "Knee pain physiotherapy and arthritis rehabilitation in Manikonda clinic",
    overview: "Knee pain can affect activities such as climbing stairs, walking, and squatting, and can have several causes. An assessment at Dr Hamid’s Physio and Pain Clinic in Manikonda can help discuss whether physiotherapy may be appropriate for symptoms, function, and personal goals. Treatment options and progress vary, and physiotherapy cannot guarantee that surgery will be avoided.",
    causes: [
      "Knee osteoarthritis and age-related cartilage degeneration",
      "Patellofemoral pain syndrome (runner's knee, chondromalacia patellae)",
      "Ligament sprains and tears (ACL, PCL, MCL, LCL)",
      "Meniscus tears and joint line irritation",
      "Patellar tendinitis (jumper's knee)",
      "Quadriceps and hip abductor muscle weakness"
    ],
    symptoms: [
      "Pain and burning while climbing or descending stairs",
      "Morning stiffness, clicking, popping, or grating sensations (crepitus)",
      "Swelling, warmth, and tenderness around the joint line",
      "Sensation of knee instability or 'giving way' while walking",
      "Difficulty straightening or fully bending the knee"
    ],
    howPhysioHelps: "Our clinic provides evidence-based knee rehabilitation that unloads the joint space. We combine targeted open and closed kinetic chain quadriceps strengthening, gluteus medius stabilization, patellar taping, manual mobilization of the patella, and therapeutic modalities. We also provide customized gait retraining to reduce impact shock.",
    treatmentApproach: [
      "Detailed biomechanical evaluation of knee alignment, patellar tracking, and gait",
      "Gentle joint mobilization and soft-tissue release to improve joint flexibility",
      "Progressive resistance exercise for quadriceps, hamstrings, and hip rotators",
      "Proprioception, balance, and stair-climbing biomechanics training",
      "Weight management and lifestyle joint protection strategies"
    ],
    expectedRecovery: "Recovery time and progress vary by condition, symptoms, overall health, treatment, and individual circumstances. An assessment can help set goals and review progress; no fixed timeline or outcome can be promised.",
    whyChooseDoctor: [],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
    ],
    homeCare: [
      "Incorporate low-impact activities like stationary cycling or swimming",
      "Perform straight leg raises and quad sets daily to maintain muscle tone",
      "Wear supportive footwear with adequate arch cushioning",
      "Use the handrail and lead with the stronger leg when climbing stairs",
      "Apply cold packs for 15 minutes after activities if swelling occurs"
    ],
    whenToVisit: "Consult Dr. Hamid if knee pain persists for over a week, causes limping, makes stair navigation painful, or if you notice visible swelling or locking.",
    faqs: [
      {
        question: "Can physiotherapy help knee osteoarthritis without surgery?",
        answer: "Yes, international clinical guidelines recommend exercise therapy as the primary first-line treatment for knee osteoarthritis. Strengthening supporting muscles significantly reduces joint pressure and delays or prevents surgical replacement."
      },
      {
        question: "Why does my knee hurt more going downstairs than upstairs?",
        answer: "Descending stairs requires eccentric contraction of the quadriceps while absorbing up to 3.5 times body weight, causing greater compressive load on the patellofemoral joint. Targeted physiotherapy restores eccentric muscle control."
      },
      {
        question: "Do you have educational articles on knee pain?",
        answer: "Yes, explore our in-depth blog post on 'Why Does My Knee Hurt When Climbing Stairs?' for detailed anatomy, home exercises, and recovery guidance."
      }
    ]
  },
  {
    slug: "sports-injuries",
    title: "Sports Injury Rehabilitation & Athletic Performance",
    shortDescription: "Sports injury assessment and rehabilitation options for athletes and active people in Manikonda, Hyderabad. Return to activity depends on the injury and individual progress.",
    imageSrc: "/images/services/condition-sports-injury.webp",
    altText: "Sports injury physiotherapy and rehabilitation for athletes in Manikonda",
    overview: "Sports injuries can affect people who play recreationally or competitively. At Dr Hamid’s Physio and Pain Clinic in Manikonda, an assessment can help discuss rehabilitation options for symptoms affecting movement and activity. The plan and return to sport depend on the injury, health, symptoms, and progress; no timeline or prevention of recurrence can be promised.",
    causes: [
      "Sudden acceleration, deceleration, or rapid change of direction",
      "Inadequate warm-up or sudden spikes in training volume",
      "Direct contact collisions and awkward landings",
      "Muscle imbalances, poor core stability, or inadequate joint mobility",
      "Overuse tendinopathies (Achilles, patellar, tennis elbow)"
    ],
    symptoms: [
      "Sudden sharp pain or audible pop during physical activity",
      "Immediate swelling, bruising, and restricted weight-bearing capacity",
      "Loss of joint stability or range of motion",
      "Persistent ache that flares up during or after athletic training"
    ],
    howPhysioHelps: "Our sports rehab protocol follows progressive phases: acute swelling control, joint mobility restoration, eccentric strengthening, neuromuscular agility retraining, and sport-specific return-to-play drills. We incorporate manual therapy, kinesiology taping, and functional athletic testing.",
    treatmentApproach: [
      "Functional movement screening (FMS) and injury severity grading",
      "Swelling management and tissue healing optimization",
      "Progressive eccentric muscle loading and tendon remodelling",
      "Agility, balance, and proprioceptive neuromuscular drills",
      "Sport-specific testing prior to full clearance for match play"
    ],
    expectedRecovery: "Recovery time and progress vary by condition, symptoms, overall health, treatment, and individual circumstances. An assessment can help set goals and review progress; no fixed timeline or outcome can be promised.",
    whyChooseDoctor: [],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
    ],
    homeCare: [
      "Follow PEACE & LOVE protocol for soft-tissue injuries rather than prolonged ice-only rest",
      "Maintain active cardiovascular conditioning using uninjured limbs",
      "Perform daily mobility and prescribed rehabilitation drills",
      "Wear supportive athletic footwear appropriate for your playing surface"
    ],
    whenToVisit: "Seek immediate physiotherapy if an injury prevents weight bearing, causes rapid swelling within an hour, produces a popping sound, or fails to improve within 48 hours.",
    faqs: [
      {
        question: "How soon after a sports injury should I start physiotherapy?",
        answer: "Gentle assessment and active rehab should start within 24 to 72 hours once acute bleeding is ruled out. Early guided movement speeds tissue remodelling and prevents scar contracture."
      },
      {
        question: "Do you treat badminton and cricket injuries like tennis elbow and rotator cuff tears?",
        answer: "Yes, badminton and cricket players frequently visit our Manikonda clinic for shoulder impingement, tennis elbow, wrist strains, and hamstring recovery."
      }
    ]
  },
  {
    slug: "post-surgery-rehab",
    title: "Post-Surgery Rehabilitation",
    shortDescription: "Structured post-operative physiotherapy for knee replacement, hip surgery, fracture recovery, and spinal procedures.",
    imageSrc: "/images/services/consultation-assessment.webp",
    altText: "Post-surgery physiotherapy rehabilitation in Manikonda clinic",
    overview: "Orthopedic surgery is only half the recovery journey — optimal functional outcome depends on structured post-operative physiotherapy. At Dr Hamid’s Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali offers protocol-driven post-surgery rehabilitation for Total Knee Replacement (TKR), Total Hip Replacement (THR), ACL reconstruction, fracture fixation, and spinal decompression. We guide you safely from gentle bedside mobility to complete independent walking and stair climbing.",
    causes: [
      "Total or partial knee arthroplasty (TKR/PKR)",
      "Total hip replacement (THR)",
      "ACL or meniscus surgical repair/reconstruction",
      "Post-fracture internal fixation (plates, rods, screws)",
      "Spinal surgery (discectomy, laminectomy, lumbar fusion)",
      "Rotator cuff repair or shoulder arthroscopy"
    ],
    symptoms: [
      "Post-surgical joint stiffness and swelling",
      "Muscle atrophy and weakness from surgical immobilization",
      "Difficulty walking without crutches, walker, or a limp",
      "Fear of movement and apprehension during weight-bearing",
      "Scar tissue sensitivity and reduced range of motion"
    ],
    howPhysioHelps: "We liaise closely with orthopedic surgical protocols to gently regain range of motion, clear residual lymphatic fluid, activate dormant muscles (such as the vastus medialis), and retrain normal gait mechanics. We provide compassionate, patient-paced recovery support.",
    treatmentApproach: [
      "Adherence to orthopedic surgeon's weight-bearing and range-of-motion guidelines",
      "Early passive and active-assisted joint range of motion",
      "Isometric muscle activation and swelling management",
      "Gait training with progressive wean-off from walker or cane",
      "Functional step, balance, and independence retraining"
    ],
    expectedRecovery: "Recovery time and progress vary by condition, symptoms, overall health, treatment, and individual circumstances. An assessment can help set goals and review progress; no fixed timeline or outcome can be promised.",
    whyChooseDoctor: [],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
    ],
    homeCare: [
      "Follow your hospital discharge instructions and the surgeon's advice about movement, swelling, wound care, and mobility aids.",
      "Use only exercises and activity levels recommended for your operation and current stage of recovery.",
      "Contact your surgical team if you have concerns about pain, swelling, wound changes, or mobility."
    ],
    whenToVisit: "Ask your surgeon or hospital team when rehabilitation should start and which precautions apply. Contact the clinic to ask about an assessment and current home-visit availability.",
    faqs: [
      {
        question: "Can Dr. Hamid visit my home for post-knee replacement physiotherapy?",
        answer: "Home visits may be available for people recovering from surgery who cannot travel to the clinic. They are generally targeted within an approximate 15 km radius of Manikonda; contact the clinic to confirm location coverage and availability."
      },
      {
        question: "How long after knee replacement will I be able to walk independently?",
        answer: "The time someone uses a walker or cane varies with balance, strength, symptoms, surgery, and the treating team's advice. Do not stop using an aid until the treating team considers it safe."
      }
    ]
  },
  {
    slug: "home-visit-services",
    title: "Home Physiotherapy Visits",
    shortDescription: "Home physiotherapy visits in Manikonda and nearby areas, generally targeted within an approximate 15 km radius of Manikonda. Contact the clinic to confirm location coverage and availability.",
    imageSrc: "/images/services/exercise-therapy.webp",
    altText: "Physiotherapist providing home visit physiotherapy service in Manikonda",
    overview: "Home visit physiotherapy may be an option for people who have difficulty travelling to a clinic. Visits are generally targeted within an approximate 15 km radius of Manikonda; contact Dr Hamid’s Physio and Pain Clinic to confirm current coverage, availability, and what a visit can include.",
    causes: [
      "Recent orthopedic surgery (knee/hip replacement, spinal surgery, fractures)",
      "Severe acute back spasm or sciatic pain preventing sitting or travel",
      "Elderly mobility decline, osteoarthritis, and fall-prevention needs",
      "Stroke and neurological paralysis requiring home environment retraining",
      "Busy professionals or homemakers seeking home treatment convenience"
    ],
    symptoms: [
      "Inability to climb stairs or enter cars due to intense joint pain",
      "Post-discharge recovery requiring supervised bed-to-chair transfers",
      "General frailty, balance loss, or high risk of domestic falls",
      "Neurological hemiplegia or Parkinsonian gait difficulty"
    ],
    howPhysioHelps: "A home visit assessment may consider movement, daily activities, goals, and the home environment. Options depend on the person's condition, the assessment, and what services are available; contact the clinic to confirm details.",
    treatmentApproach: [
      "Discuss symptoms, relevant medical instructions, mobility, and goals",
      "Consider practical activity and movement options based on assessment",
      "Coordinate exercise or daily-activity advice with the person's treating team when needed",
      "Confirm the visit location, available services, and any equipment directly with the clinic"
    ],
    expectedRecovery: "Recovery time and progress vary by condition, symptoms, overall health, treatment, and individual circumstances. An assessment can help set goals and review progress; no fixed timeline or outcome can be promised.",
    whyChooseDoctor: [],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Lanco Hills", "Tolichowki", "Seven Tombs",
      "Narsingi", "Alkapur Township", "Kokapet", "Shaikpet", "nearby areas"
    ],
    homeCare: [
      "Remove loose rugs, floor cords, and clutter from walking pathways",
      "Install sturdy grab bars in bathrooms and near toilet seats",
      "Ensure rooms and hallways are brightly illuminated day and night",
      "Wear non-slip indoor footwear rather than smooth socks",
      "Practice prescribed bedside ankle and leg exercises between visits"
    ],
    whenToVisit: "Contact our clinic directly via phone (+91 76010 26596) or WhatsApp to schedule a home visit consultation at your preferred time slot.",
    faqs: [
      {
        question: "Which areas in Hyderabad do you cover for home visits?",
        answer: "We cover Manikonda, Puppalguda, Lanco Hills, Tolichowki, Seven Tombs, Narsingi, Alkapur Township, Kokapet, Shaikpet and nearby areas."
      },
      {
        question: "Do you bring treatment equipment for home visits?",
        answer: "Equipment and services vary. Contact the clinic before booking to confirm whether a particular device or item is available for your visit."
      },
      {
        question: "How do I schedule a physiotherapy home visit?",
        answer: "You can book directly by calling +91 76010 26596 or messaging us on WhatsApp. We coordinate a convenient time slot that fits your schedule."
      }
    ]
  },
  {
    slug: "shoulder-pain",
    title: "Shoulder Pain & Frozen Shoulder Treatment",
    shortDescription: "Physiotherapy information for frozen shoulder, rotator cuff injuries, and impingement symptoms in Manikonda.",
    imageSrc: "/images/services/condition-shoulder-pain.webp",
    altText: "Shoulder pain and frozen shoulder treatment in Manikonda clinic",
    overview: "Shoulder pain turns routine actions like reaching overhead, combing hair, or sleeping on your side into agonizing challenges. At Dr Hamid’s Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali treats adhesive capsulitis (frozen shoulder), rotator cuff tendinopathies, subacromial impingement, and bursitis with targeted joint mobilizations, scapular stabilization, and gentle stretching protocols that restore comfortable shoulder reach.",
    causes: [
      "Frozen shoulder (adhesive capsulitis), often associated with diabetes or thyroid conditions",
      "Rotator cuff tears or supraspinatus tendinitis",
      "Subacromial impingement syndrome from repetitive overhead reach",
      "Subdeltoid or subacromial bursitis",
      "Postural kyphosis and rounded shoulder posture",
      "Acromioclavicular (AC) joint strain or post-fracture stiffness"
    ],
    symptoms: [
      "Inability to reach behind your back or lift your arm past 90 degrees",
      "Dull ache deep in the shoulder joint that worsens at night",
      "Sharp pain during quick overhead reaching or lifting movements",
      "Weakness when lifting objects or opening doors"
    ],
    howPhysioHelps: "Shoulder therapy requires careful, stage-specific management. In the freezing phase, we focus on pain relief and gentle pendular movements. In the frozen phase, we use Maitland joint mobilizations and capsular stretching. In the thawing phase, we rebuild rotator cuff strength and scapulothoracic rhythm.",
    treatmentApproach: [
      "Clinical assessment of glenohumeral, AC, and scapulothoracic mechanics",
      "Glenohumeral joint mobilization to stretch contracted capsular tissue",
      "Scapular stabilizer and rotator cuff strengthening exercises",
      "Ultrasound or IFT therapy for pain relief and tendon relaxation",
      "Postural and ergonomic sleeping modification guidance"
    ],
    expectedRecovery: "Recovery time and progress vary by condition, symptoms, overall health, treatment, and individual circumstances. An assessment can help set goals and review progress; no fixed timeline or outcome can be promised.",
    whyChooseDoctor: [],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
    ],
    homeCare: [
      "Perform Codman's pendulum exercises 3 times daily to keep the joint relaxed",
      "Avoid sleeping directly on the painful shoulder; use a pillow under the arm",
      "Use moist heat for 10 minutes prior to performing prescribed shoulder stretches",
      "Do not force your arm through sharp, pinching pain"
    ],
    whenToVisit: "Consult Dr. Hamid if shoulder stiffness lasts more than 2 weeks, disrupts sleep, or limits your ability to dress or reach overhead.",
    faqs: [
      {
        question: "Can physiotherapy thaw a frozen shoulder without steroid injections?",
        answer: "Physiotherapy may help some people with frozen shoulder manage pain and gradually improve movement. Recovery and the right approach vary, so an assessment can help guide activity and exercises for the person's symptoms and stage."
      },
      {
        question: "How many sessions are typically required for shoulder impingement?",
        answer: "Symptoms and response to treatment vary. An assessment can help discuss options, goals, and how progress may be reviewed over time."
      }
    ]
  },
  {
    slug: "spine-physiotherapy",
    title: "Spine Physiotherapy & Posture Rehabilitation",
    shortDescription: "Specialized clinical physiotherapy for cervical, thoracic, and lumbar spine disorders, scoliosis, and degenerative disc disease.",
    imageSrc: "/images/services/condition-back-pain.webp",
    altText: "Spine physiotherapy and postural correction in Manikonda clinic",
    overview: "Your spine protects your central nervous system and supports every movement of your day. Spinal conditions — ranging from thoracic stiffness and scoliosis to degenerative disc disease and spondylolisthesis — require holistic spinal biomechanics care. At Dr Hamid’s Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali provides specialized spine physiotherapy integrating vertebral decompression, postural alignment, and core stabilization.",
    causes: [
      "Desk job sedentary lifestyles causing thoracic kyphosis and lumbar flattening",
      "Degenerative disc disease and spinal stenosis",
      "Spondylolysis and spondylolisthesis (vertebral slippage)",
      "Mild to moderate postural scoliosis",
      "Post-fracture spinal weakness or osteoporosis-related postural strain"
    ],
    symptoms: [
      "Aching tension across the mid-back, neck, or lower spine",
      "Difficulty sitting or standing upright for extended periods without fatigue",
      "Sensations of stiffness, reduced trunk rotation, and shallow breathing",
      "Nerve compression causing numbness or shooting discomfort"
    ],
    howPhysioHelps: "Our spine rehabilitation restores mobility in stiff spinal segments while stabilizing hypermobile or vulnerable vertebrae through precise neuromuscular training and ergonomic re-education.",
    treatmentApproach: [
      "Whole-spine posture, pelvic tilt, and sagittal alignment evaluation",
      "Segmental spinal mobilizations to release restricted thoracic and lumbar joints",
      "Deep core and spinal erector endurance training",
      "Dynamic workstation posture correction and lifting education",
      "Long-term spinal maintenance exercise prescription"
    ],
    expectedRecovery: "Recovery time and progress vary by condition, symptoms, overall health, treatment, and individual circumstances. An assessment can help set goals and review progress; no fixed timeline or outcome can be promised.",
    whyChooseDoctor: [],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
    ],
    homeCare: [
      "Incorporate daily cat-camel and thoracic rotation stretches",
      "Use an ergonomic lumbar roll whenever seated for longer than 30 minutes",
      "Stay active with daily 20-30 minute brisk walks to promote spinal disc health",
      "Avoid slumping forward over laptops on sofas or beds"
    ],
    whenToVisit: "Book a consultation if spinal stiffness interferes with your daily activities, causes persistent fatigue, or radiates into the ribs or extremities.",
    faqs: [
      {
        question: "How does spine physiotherapy differ from chiropractic adjustments?",
        answer: "Physiotherapy combines gentle joint mobilizations with active muscle strengthening, neuromuscular retraining, and long-term postural education so your body learns to maintain its own alignment without becoming dependent on passive cracks."
      },
      {
        question: "Can desk workers in Manikonda prevent spinal degeneration?",
        answer: "Yes, our customized ergonomic assessments and 5-minute desk mobility routines keep spinal joints healthy and counteract hours of daily sitting."
      }
    ]
  },
  {
    slug: "ultrasound-therapy",
    title: "Therapeutic Ultrasound Therapy",
    shortDescription: "Deep tissue acoustic wave modality used as a supporting therapy for acute tendonitis, ligament sprains, and muscle spasm.",
    imageSrc: "/images/services/ultrasound-therapy.webp",
    altText: "Therapeutic ultrasound therapy being administered on patient limb in Manikonda",
    overview: "Therapeutic Ultrasound is a secondary supportive modality utilized at Dr Hamid’s Physio and Pain Clinic to accelerate tissue repair and manage acute inflammation. By delivering high-frequency sound waves into injured soft tissues, ultrasound produces gentle microscopic acoustic streaming and deep cellular stimulation. At our Manikonda clinic, ultrasound therapy is always integrated into a broader, condition-specific rehabilitation program alongside active manual therapy and corrective exercise.",
    causes: [
      "Acute tendonitis (Achilles, patellar, bicipital tendinitis)",
      "Ligament sprains with persistent localized inflammatory swelling",
      "Deep muscle knots and myofascial trigger points",
      "Joint capsule tightness and scar tissue restrictions"
    ],
    symptoms: [
      "Localized tenderness and sharp pain upon palpation of a tendon or ligament",
      "Post-injury swelling that feels firm and congested",
      "Restricted tissue elasticity and painful tightness"
    ],
    howPhysioHelps: "Ultrasound waves increase local blood circulation, relax stubborn muscle spasms, soften dense fibrous adhesions, and stimulate cellular fibroblasts for faster collagen deposition. It prepares the affected joint or muscle for deeper manual therapy and active rehabilitation.",
    treatmentApproach: [
      "Careful evaluation of tissue healing phase and contraindications",
      "Direct application of acoustic transmission gel to target tissues",
      "Continuous or pulsed sound wave delivery tailored to acute vs chronic states",
      "Immediate follow-up with targeted stretching and active mobility exercises"
    ],
    expectedRecovery: "Recovery time and progress vary by condition, symptoms, overall health, treatment, and individual circumstances. An assessment can help set goals and review progress; no fixed timeline or outcome can be promised.",
    whyChooseDoctor: [],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
    ],
    homeCare: [
      "Keep treated tissues hydrated and perform prescribed gentle stretches",
      "Avoid heavy direct impact on the treated tendon for 24 hours post-session"
    ],
    whenToVisit: "Ask Dr. Hamid whether ultrasound therapy is indicated for your acute tendonitis or muscle strain during your initial clinical consultation.",
    faqs: [
      {
        question: "Does therapeutic ultrasound therapy hurt?",
        answer: "Therapeutic ultrasound is non-invasive, but the sensation can vary and some people feel warmth. Tell the physiotherapist if the treatment is uncomfortable; it should be adjusted or stopped as needed."
      },
      {
        question: "Is ultrasound therapy used alone for treatment?",
        answer: "No, at Dr Hamid’s Physio and Pain Clinic we prioritize active rehabilitation. Ultrasound is used selectively to accelerate tissue healing alongside manual therapy and targeted exercise."
      }
    ]
  },
  {
    slug: "interferential-therapy-ift",
    title: "Interferential Therapy (IFT) & Electro-Analgesia",
    shortDescription: "Advanced dual-frequency electrical modality used as a supportive therapy for deep musculoskeletal pain and inflammation relief.",
    imageSrc: "/images/services/interferential-therapy.webp",
    altText: "Interferential therapy IFT electrodes applied on patient in Manikonda clinic",
    overview: "Interferential Therapy (IFT) is a comfortable electrotherapeutic modality utilized at Dr Hamid’s Physio and Pain Clinic to relieve acute musculoskeletal pain, reduce chronic swelling, and calm hyperactive muscle spasms. By crossing two medium-frequency currents deep within the tissues, IFT stimulates endorphin release and blocks pain signals via the neurological gate control mechanism. At our clinic, IFT serves as a valuable comfort adjunct to help patients transition comfortably into active exercise rehabilitation.",
    causes: [
      "Severe acute back spasm or neck stiffness making movement difficult",
      "Osteoarthritis flare-ups with persistent joint line ache",
      "Post-traumatic joint edema and localized swelling",
      "Deep myofascial pain syndromes and fibromyalgia trigger points"
    ],
    symptoms: [
      "Severe pain making it difficult to tolerate active stretching or exercises",
      "Deep joint aching that does not respond to surface heat alone",
      "Muscle tightness locking the cervical or lumbar spine"
    ],
    howPhysioHelps: "IFT delivers deep penetrating stimulation without the skin irritation often associated with standard TENS units. It boosts local blood and lymphatic flow, aids in clearing inflammatory metabolites, and produces deep muscular relaxation.",
    treatmentApproach: [
      "Electrode placement crosswise across the deep pain epicenter",
      "Frequency sweep calibration tailored to sensory comfort and pain relief",
      "Integration with gentle active movement once pain levels subside"
    ],
    expectedRecovery: "Recovery time and progress vary by condition, symptoms, overall health, treatment, and individual circumstances. An assessment can help set goals and review progress; no fixed timeline or outcome can be promised.",
    whyChooseDoctor: [],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
    ],
    homeCare: [
      "Perform gentle active range of motion exercises while pain levels are lowered post-treatment",
      "Stay well-hydrated to assist lymphatic drainage of inflammatory byproducts"
    ],
    whenToVisit: "IFT is recommended during acute pain flare-ups to calm intense nerve and muscle irritation so you can comfortably begin recovery exercises.",
    faqs: [
      {
        question: "What does IFT therapy feel like?",
        answer: "IFT feels like a gentle, rhythmic 'pins and needles' or pleasant tingling sensation that gradually massages deep within your muscles."
      },
      {
        question: "Is IFT the primary treatment for my condition?",
        answer: "IFT may be used as a supportive modality for some people, but it is not a cure or a substitute for an assessment and an appropriate active rehabilitation plan. Response varies."
      }
    ]
  }
];
