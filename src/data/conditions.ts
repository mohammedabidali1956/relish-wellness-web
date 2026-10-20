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
    overview: "Neck pain and cervical stiffness are among the most frequent complaints seen at Dr. Hamid's Physio and Pain Clinic in Manikonda. Long desk hours, forward-head posture with smartphones ('text neck'), disc bulges, and cervical spondylosis cause severe muscle spasms, headaches, and radiating nerve pain down the arms. Led by Dr. Mohammed Hamid Ali (BPT, 8+ years clinical experience), our goal is to deliver fast pain relief, decompress cervical nerve roots, and restore full, pain-free neck mobility without unnecessary medications.",
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
    expectedRecovery: "Most patients experience noticeable pain reduction within 3 to 5 sessions. Full mobility and postural endurance are typically restored over 2 to 4 weeks of consistent clinic and home exercise routines.",
    whyChooseDoctor: [
      "8+ years of dedicated clinical musculoskeletal experience",
      "Precise differential diagnosis to rule out cervical nerve root impingement",
      "Personalized 1-on-1 care directly by Dr. Mohammed Hamid Ali, BPT",
      "Convenient Manikonda clinic location with dedicated home visit options"
    ],
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
        answer: "While age-related spinal changes cannot be reversed, physiotherapy is exceptionally effective at relieving nerve compression, strengthening supporting neck musculature, and eliminating pain and stiffness so you can live completely symptom-free."
      },
      {
        question: "What is text neck syndrome, and how do you treat it?",
        answer: "Text neck is repetitive strain injury caused by forward-head posture while looking down at phones. We treat it through thoracic extension mobilization, deep neck flexor strengthening, and ergonomic retraining."
      },
      {
        question: "Do you offer home visit physiotherapy for severe neck pain in Manikonda?",
        answer: "Yes, Dr. Hamid provides home visit physiotherapy across Manikonda, Puppalguda, Alkapur Township, and Gachibowli for patients experiencing acute, debilitating neck pain."
      }
    ]
  },
  {
    slug: "back-pain",
    title: "Back Pain Physiotherapy & Sciatica Care",
    shortDescription: "Comprehensive clinical physiotherapy for lower back pain, disc bulge, sciatica, and spinal rehabilitation in Manikonda.",
    imageSrc: "/images/services/condition-back-pain.webp",
    altText: "Back pain physiotherapy treatment showing spine rehabilitation in Manikonda clinic",
    overview: "Lower back pain is the number one cause of mobility impairment and missed work in Hyderabad. Whether caused by prolonged sitting in IT jobs, heavy lifting, herniated discs, or lumbar canal stenosis, back pain requires precise clinical assessment. At Dr. Hamid's Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali (BPT) focuses on identifying the mechanical driver of your back pain and building spinal resilience through evidence-based manual therapy, core stabilization, and neural mobilization.",
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
    howPhysioHelps: "Physiotherapy for back pain targets both immediate symptom relief and permanent functional restoration. We combine spinal mobilization, lumbar traction principles, neural gliding, targeted core strengthening (transversus abdominis and multifidus), and postural retraining. Supportive modalities like ultrasound therapy and IFT assist in quelling acute inflammation.",
    treatmentApproach: [
      "Comprehensive spinal assessment (directional preference, neural tension tests)",
      "Targeted manual therapy to restore intervertebral and sacroiliac joint mobility",
      "Progressive core stabilization and McKenzie-based movement therapy",
      "Safe lifting mechanics and ergonomic sitting posture education",
      "Gradual return-to-activity and sports conditioning protocol"
    ],
    expectedRecovery: "Acute back strain often resolves within 1 to 2 weeks (4-6 sessions). Chronic disc-related pain or sciatica typically shows significant relief in 3 to 6 weeks with consistent guided exercises.",
    whyChooseDoctor: [
      "Accurate clinical evaluation avoiding unnecessary costly MRIs",
      "8+ years of hands-on spinal rehabilitation experience",
      "Individualized treatment plans tailored to your daily routine",
      "Trusted by over 100+ five-star patient reviews in Hyderabad"
    ],
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
        answer: "Yes, studies show that over 90% of herniated disc cases recover successfully with conservative physiotherapy. Our targeted exercises relieve pressure on the nerve root and allow the disc to heal."
      },
      {
        question: "Is bed rest recommended for severe back pain?",
        answer: "No, strict bed rest beyond 24-48 hours weakens spinal muscles and delays recovery. Controlled, gentle movement and targeted physiotherapy lead to much faster healing."
      },
      {
        question: "Where is Dr. Hamid's physiotherapy clinic located?",
        answer: "The clinic is located at 4-3/81, Opposite HDFC Bank ATM, near Friends Colony Park, Puppalguda, Manikonda, Hyderabad. Home visits are also available across Manikonda and neighbouring areas."
      }
    ]
  },
  {
    slug: "knee-pain",
    title: "Knee Pain Physiotherapy & Arthritis Care",
    shortDescription: "Specialized knee rehabilitation for osteoarthritis, ligament injuries, runner's knee, and post-surgery recovery in Manikonda.",
    imageSrc: "/images/services/condition-knee-pain.webp",
    altText: "Knee pain physiotherapy and arthritis rehabilitation in Manikonda clinic",
    overview: "Knee pain makes basic activities like climbing stairs, sitting cross-legged, walking, and squatting painful and exhausting. At Dr. Hamid's Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali (BPT) specializes in conservative knee pain treatment, osteoarthritis management, meniscus recovery, patellofemoral pain syndrome, and post-operative joint rehabilitation. By restoring joint mechanics, strengthening quadriceps and hip stabilizers, and improving cartilage load distribution, we help patients avoid premature surgical intervention.",
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
    expectedRecovery: "Patellofemoral pain and mild-to-moderate osteoarthritis typically show substantial improvement within 6 to 8 sessions. Post-surgical or ligament rehabilitation follows structured 8 to 12-week protocols.",
    whyChooseDoctor: [
      "Specialized clinical expertise in conservative knee preservation",
      "Structured rehabilitation protocols for pre and post-total knee replacement (TKR)",
      "Hands-on guidance ensuring correct exercise biomechanics",
      "Comprehensive patient education with dedicated exercise handouts"
    ],
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
    shortDescription: "Fast-track recovery and return-to-play rehabilitation for athletes and active individuals in Manikonda, Hyderabad.",
    imageSrc: "/images/services/condition-sports-injury.webp",
    altText: "Sports injury physiotherapy and rehabilitation for athletes in Manikonda",
    overview: "From weekend cricket and badminton enthusiasts to competitive runners and gym athletes, sports injuries demand rapid, structured, and resilient recovery. At Dr. Hamid's Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali (BPT) provides specialized sports injury physiotherapy targeting ligament sprains, muscle tears, tendinopathies, and joint instability. We don't just treat the injury — we restore biomechanics and athletic endurance to prevent re-injury.",
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
    expectedRecovery: "Grade I sprains and strains typically resolve within 2 to 3 weeks. Grade II injuries require 4 to 8 weeks. Post-operative ligament repairs follow phased 3 to 6-month protocols.",
    whyChooseDoctor: [
      "Experience treating cricket, badminton, football, and running injuries",
      "Objective return-to-play criteria to safeguard against recurrence",
      "Active exercise-based rehab philosophy",
      "Convenient clinic hours in Manikonda with personalized attention"
    ],
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
    overview: "Orthopedic surgery is only half the recovery journey — optimal functional outcome depends on structured post-operative physiotherapy. At Dr. Hamid's Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali (BPT) offers protocol-driven post-surgery rehabilitation for Total Knee Replacement (TKR), Total Hip Replacement (THR), ACL reconstruction, fracture fixation, and spinal decompression. We guide you safely from gentle bedside mobility to complete independent walking and stair climbing.",
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
    expectedRecovery: "Post-surgery recovery timeline depends on the procedure: TKR patients typically achieve functional independence in 6 to 12 weeks; fracture recovery averages 6 to 8 weeks.",
    whyChooseDoctor: [
      "Protocol-compliant post-surgical care with surgical team alignment",
      "Gentle, patient, and compassionate bedside manner",
      "Home visit physiotherapy available for early post-operative days in Manikonda",
      "Consistent tracking of range of motion and functional milestones"
    ],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
    ],
    homeCare: [
      "Perform hourly ankle pumps and quad sets to prevent deep vein thrombosis (DVT)",
      "Elevate the operated limb above heart level when resting to reduce swelling",
      "Follow prescribed ice application guidelines (15-20 min every 2-3 hours)",
      "Use assistive walking devices exactly as demonstrated until cleared",
      "Keep surgical incisions clean and dry according to hospital discharge instructions"
    ],
    whenToVisit: "Begin post-surgery physiotherapy immediately upon hospital discharge (typically day 3 to 5 post-op). Home visits can be arranged in Manikonda and Puppalguda.",
    faqs: [
      {
        question: "Can Dr. Hamid visit my home for post-knee replacement physiotherapy?",
        answer: "Yes, we provide dedicated home visit physiotherapy across Manikonda, Puppalguda, Narsingi, and Gachibowli for patients recovering from knee or hip replacement who cannot travel to the clinic."
      },
      {
        question: "How long after knee replacement will I be able to walk independently?",
        answer: "Most patients transition from a walker to a single cane within 2 to 3 weeks, and walk comfortably without aids within 4 to 6 weeks under consistent physiotherapy supervision."
      }
    ]
  },
  {
    slug: "home-visit-services",
    title: "Home Physiotherapy Visits",
    shortDescription: "Professional in-home physiotherapy treatment across Manikonda, Puppalguda, Narsingi, and Gachibowli for elderly, post-op, and acute patients.",
    imageSrc: "/images/services/exercise-therapy.webp",
    altText: "Physiotherapist providing home visit physiotherapy service in Manikonda",
    overview: "For elderly seniors, post-operative patients, or individuals experiencing debilitating back spasms or neurological conditions, travelling to a clinic can be painful and impractical. Dr. Hamid's Physio and Pain Clinic offers trusted Home Visit Physiotherapy Services across Manikonda, Puppalguda, Alkapur Township, Shaikpet, Narsingi, Kokapet, and Gachibowli. Dr. Mohammed Hamid Ali (BPT) brings professional medical equipment, portable modalities, and customized rehabilitation right to the comfort and safety of your home.",
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
    howPhysioHelps: "Home visit physiotherapy delivers identical clinical excellence directly to your bedside or living room. We assess your home environment for fall hazards, assist with bed transfers, retrain balance and stair navigation using your own furniture, and provide gentle manual therapy and portable electrotherapy.",
    treatmentApproach: [
      "Comprehensive in-home safety, mobility, and pain assessment",
      "Bedside manual therapy, passive/active joint mobilization",
      "Portable electrotherapy (IFT/TENS/Ultrasound) for pain relief",
      "Real-world functional training (bed-to-chair, bathroom transfers, stairs)",
      "Caregiver education on safe lifting and transfer techniques"
    ],
    expectedRecovery: "Home visit patients often transition to clinic visits or independent self-management within 2 to 4 weeks as their strength and mobility improve.",
    whyChooseDoctor: [
      "Punctual, dignified, and compassionate home visits by Dr. Mohammed Hamid Ali",
      "Portable medical equipment brought directly to your home",
      "Tailored home exercise programs using your existing living space",
      "Trusted by families across Puppalguda, Manikonda, and Financial District"
    ],
    serviceAreas: [
      "Manikonda", "Puppalguda", "Shaikpet", "Alkapur Township",
      "Narsingi", "Gandipet", "Kokapet", "Financial District", "Gachibowli"
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
        answer: "We cover Manikonda, Puppalguda, Friends Colony, Alkapur Township, Shaikpet, Narsingi, Kokapet, Gandipet, Financial District, and Gachibowli."
      },
      {
        question: "Do you bring treatment equipment for home visits?",
        answer: "Yes, Dr. Hamid carries portable electrotherapy modalities, exercise resistance bands, taping supplies, and assessment tools for comprehensive in-home sessions."
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
    shortDescription: "Expert physiotherapy for frozen shoulder, rotator cuff injuries, and impingement syndrome in Manikonda.",
    imageSrc: "/images/services/condition-shoulder-pain.webp",
    altText: "Shoulder pain and frozen shoulder treatment in Manikonda clinic",
    overview: "Shoulder pain turns routine actions like reaching overhead, combing hair, or sleeping on your side into agonizing challenges. At Dr. Hamid's Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali (BPT) treats adhesive capsulitis (frozen shoulder), rotator cuff tendinopathies, subacromial impingement, and bursitis with targeted joint mobilizations, scapular stabilization, and gentle stretching protocols that restore comfortable shoulder reach.",
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
    expectedRecovery: "Subacromial impingement often improves in 3 to 6 weeks. Frozen shoulder recovery depends on the stage, with most patients gaining major range of motion within 8 to 12 weeks of guided care.",
    whyChooseDoctor: [
      "Gentle, graded mobilizations that avoid painful joint irritation",
      "Comprehensive rehab addressing shoulder, thoracic spine, and posture together",
      "Proven track record with diabetic and chronic frozen shoulder patients"
    ],
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
        answer: "Yes, consistent physical therapy combining gentle capsular mobilization and progressive stretching is the gold-standard treatment, successfully restoring functional mobility in the vast majority of patients."
      },
      {
        question: "How many sessions are typically required for shoulder impingement?",
        answer: "Most patients with shoulder impingement or tendinitis feel marked improvement within 6 to 10 sessions as scapular mechanics and rotator cuff strength improve."
      }
    ]
  },
  {
    slug: "spine-physiotherapy",
    title: "Spine Physiotherapy & Posture Rehabilitation",
    shortDescription: "Specialized clinical physiotherapy for cervical, thoracic, and lumbar spine disorders, scoliosis, and degenerative disc disease.",
    imageSrc: "/images/services/condition-back-pain.webp",
    altText: "Spine physiotherapy and postural correction in Manikonda clinic",
    overview: "Your spine protects your central nervous system and supports every movement of your day. Spinal conditions — ranging from thoracic stiffness and scoliosis to degenerative disc disease and spondylolisthesis — require holistic spinal biomechanics care. At Dr. Hamid's Physio and Pain Clinic in Manikonda, Dr. Mohammed Hamid Ali (BPT) provides specialized spine physiotherapy integrating vertebral decompression, postural alignment, and core stabilization.",
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
    expectedRecovery: "Postural spine fatigue typically improves in 2 to 3 weeks (4-6 sessions). Chronic degenerative spinal conditions achieve sustained pain management within 4 to 8 weeks.",
    whyChooseDoctor: [
      "Holistic whole-spine approach rather than treating localized symptoms in isolation",
      "Clear, patient-friendly explanations of spinal mechanics",
      "Modern clinic equipped with evidence-based rehabilitation tools"
    ],
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
    overview: "Therapeutic Ultrasound is a secondary supportive modality utilized at Dr. Hamid's Physio and Pain Clinic to accelerate tissue repair and manage acute inflammation. By delivering high-frequency sound waves into injured soft tissues, ultrasound produces gentle microscopic acoustic streaming and deep cellular stimulation. At our Manikonda clinic, ultrasound therapy is always integrated into a broader, condition-specific rehabilitation program alongside active manual therapy and corrective exercise.",
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
    expectedRecovery: "Typically administered for 4 to 6 sessions during the acute or subacute phase of soft-tissue recovery as part of a comprehensive treatment plan.",
    whyChooseDoctor: [
      "Calibrated, modern electrotherapy equipment",
      "Used appropriately as an adjunct therapy — never as a passive standalone replacement for exercise",
      "Administered safely under Dr. Hamid's direct supervision"
    ],
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
        answer: "No, therapeutic ultrasound is completely painless and non-invasive. Most patients feel only a soothing, mild warmth as the sound head gently glides across the skin."
      },
      {
        question: "Is ultrasound therapy used alone for treatment?",
        answer: "No, at Dr. Hamid's clinic we prioritize active rehabilitation. Ultrasound is used selectively to accelerate tissue healing alongside manual therapy and targeted exercise."
      }
    ]
  },
  {
    slug: "interferential-therapy-ift",
    title: "Interferential Therapy (IFT) & Electro-Analgesia",
    shortDescription: "Advanced dual-frequency electrical modality used as a supportive therapy for deep musculoskeletal pain and inflammation relief.",
    imageSrc: "/images/services/interferential-therapy.webp",
    altText: "Interferential therapy IFT electrodes applied on patient in Manikonda clinic",
    overview: "Interferential Therapy (IFT) is a comfortable electrotherapeutic modality utilized at Dr. Hamid's Physio and Pain Clinic to relieve acute musculoskeletal pain, reduce chronic swelling, and calm hyperactive muscle spasms. By crossing two medium-frequency currents deep within the tissues, IFT stimulates endorphin release and blocks pain signals via the neurological gate control mechanism. At our clinic, IFT serves as a valuable comfort adjunct to help patients transition comfortably into active exercise rehabilitation.",
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
    expectedRecovery: "Provides immediate post-treatment pain relief; typically applied across 3 to 6 sessions to facilitate active mobility work.",
    whyChooseDoctor: [
      "Well-maintained, medical-grade IFT equipment",
      "Applied thoughtfully to optimize comfort without delaying active movement",
      "Patient-centered dosing matching individual sensitivity"
    ],
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
        answer: "IFT is a supportive therapy used to control acute pain and swelling so that you can comfortably perform the strengthening and mobility exercises that provide lasting cure."
      }
    ]
  }
];
