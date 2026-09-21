import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, CheckCircle2, Info, MessageCircle } from "lucide-react";

type BodyAreaId =
  | "head"
  | "neck"
  | "shoulder"
  | "upper-back"
  | "elbow"
  | "wrist"
  | "lower-back"
  | "hip"
  | "knee"
  | "ankle"
  | "foot";

type BodyArea = {
  id: BodyAreaId;
  name: string;
  conditions: string[];
  symptoms: string[];
  physioInfo: string;
  assessment: string;
};

const bodyAreas: BodyArea[] = [
  {
    id: "head",
    name: "Head",
    conditions: ["Tension-type headaches", "Jaw or neck-related headache patterns", "Posture-related discomfort"],
    symptoms: ["Pressure or tightness", "Pain around the temples or base of the skull", "Headache with neck stiffness"],
    physioInfo: "Following an individual assessment, physiotherapy may include movement education, neck and upper-back mobility work, posture guidance, and an appropriate home exercise plan.",
    assessment: "Assessment may be useful if headaches are new, persistent, changing, or affecting daily activities.",
  },
  {
    id: "neck",
    name: "Neck",
    conditions: ["Posture-related strain", "Muscle tension and stiffness", "Neck pain after an injury"],
    symptoms: ["Reduced movement", "Stiffness", "Pain that may spread into the shoulder or upper back"],
    physioInfo: "Neck pain can be associated with prolonged screen use, posture-related strain, muscle tension, stiffness, injuries, or other underlying conditions. Depending on the individual assessment, physiotherapy may include mobility work, strengthening, movement education, posture guidance, and home exercises.",
    assessment: "Professional assessment may be useful when pain persists, follows an injury, or is associated with weakness, numbness, or severe headaches.",
  },
  {
    id: "shoulder",
    name: "Shoulder",
    conditions: ["Rotator cuff-related pain", "Shoulder stiffness", "Overuse or sports-related strain"],
    symptoms: ["Pain reaching overhead", "Reduced range of motion", "Pain when lifting or lying on the side"],
    physioInfo: "Physiotherapy may include a guided assessment of movement, gradual strengthening, mobility work, activity modification, and a tailored exercise programme.",
    assessment: "Assessment may be useful when pain limits daily tasks, follows a fall or injury, or does not improve with rest.",
  },
  {
    id: "upper-back",
    name: "Upper Back",
    conditions: ["Muscle strain", "Posture-related discomfort", "Thoracic stiffness"],
    symptoms: ["Aching between the shoulder blades", "Tightness", "Discomfort after sitting or standing for long periods"],
    physioInfo: "Physiotherapy can focus on thoracic mobility, shoulder-blade control, strengthening, movement habits, and home exercises selected for your needs.",
    assessment: "Professional assessment may be useful for persistent pain, pain after trauma, or symptoms that interfere with breathing or daily activities.",
  },
  {
    id: "elbow",
    name: "Elbow",
    conditions: ["Tendon-related elbow pain", "Overuse strain", "Sports or work-related irritation"],
    symptoms: ["Pain when gripping", "Tenderness around the elbow", "Pain with lifting or repetitive movement"],
    physioInfo: "Physiotherapy may include load management, targeted strengthening, movement advice, and a gradual return-to-activity plan.",
    assessment: "Assessment may be useful when elbow pain persists, grip becomes difficult, or symptoms follow an injury.",
  },
  {
    id: "wrist",
    name: "Wrist",
    conditions: ["Repetitive strain", "Tendon irritation", "Wrist sprain or stiffness"],
    symptoms: ["Pain with gripping or typing", "Stiffness", "Swelling or reduced hand use"],
    physioInfo: "Following assessment, physiotherapy may include mobility exercises, strengthening, activity modification, and guidance for work or sport tasks.",
    assessment: "Professional assessment may be useful after a fall, with swelling, or when pain or weakness persists.",
  },
  {
    id: "lower-back",
    name: "Lower Back",
    conditions: ["Mechanical low-back pain", "Muscle strain", "Posture or activity-related discomfort"],
    symptoms: ["Aching or stiffness", "Pain with bending or sitting", "Reduced tolerance for daily activity"],
    physioInfo: "Physiotherapy may include movement assessment, graded activity, mobility work, strengthening, education, and a home exercise programme tailored to your presentation.",
    assessment: "Assessment may be useful when pain is severe, persistent, follows trauma, or is accompanied by leg weakness, numbness, or changes in bladder or bowel control.",
  },
  {
    id: "hip",
    name: "Hip",
    conditions: ["Hip muscle or tendon pain", "Hip joint stiffness", "Overuse-related discomfort"],
    symptoms: ["Pain walking or climbing stairs", "Stiffness after rest", "Pain on the outside, front, or back of the hip"],
    physioInfo: "Physiotherapy may include a movement and strength assessment, gradual loading, mobility work, and practical guidance for daily activity.",
    assessment: "Professional assessment may be useful when walking is difficult, pain is worsening, or symptoms follow a fall or injury.",
  },
  {
    id: "knee",
    name: "Knee",
    conditions: ["Patellofemoral pain", "Ligament or tendon strain", "Arthritis-related knee pain"],
    symptoms: ["Pain with stairs or squatting", "Swelling", "Stiffness or reduced confidence with movement"],
    physioInfo: "Physiotherapy may include strength and movement assessment, graded exercise, balance work, activity planning, and guidance for returning to daily activities or sport.",
    assessment: "Assessment may be useful after a twist or fall, with swelling or locking, or when pain continues to affect walking.",
  },
  {
    id: "ankle",
    name: "Ankle",
    conditions: ["Ankle sprain", "Tendon-related pain", "Persistent ankle stiffness"],
    symptoms: ["Pain or swelling", "Instability", "Difficulty walking on uneven ground"],
    physioInfo: "Physiotherapy may include restoring movement, progressive strength and balance training, and a structured return-to-activity plan.",
    assessment: "Professional assessment may be useful after a significant sprain, with difficulty bearing weight, or when instability persists.",
  },
  {
    id: "foot",
    name: "Foot",
    conditions: ["Plantar heel pain", "Overuse-related foot pain", "Forefoot or arch discomfort"],
    symptoms: ["Pain with first steps", "Tenderness under the foot", "Pain with standing or walking"],
    physioInfo: "Physiotherapy may include assessment of walking and loading patterns, calf and foot strengthening, mobility exercises, and advice about activity progression.",
    assessment: "Assessment may be useful when pain persists, affects walking, or is associated with swelling, numbness, or a wound.",
  },
];

const regions: Record<BodyAreaId, React.ReactNode> = {
  head: <circle cx="130" cy="48" r="29" />,
  neck: <rect x="113" y="77" width="34" height="30" rx="12" />,
  shoulder: (
    <>
      <ellipse cx="94" cy="116" rx="35" ry="16" />
      <ellipse cx="166" cy="116" rx="35" ry="16" />
    </>
  ),
  "upper-back": <path d="M96 124 Q130 111 164 124 L170 196 Q130 211 90 196 Z" />,
  elbow: (
    <>
      <circle cx="64" cy="196" r="16" />
      <circle cx="196" cy="196" r="16" />
    </>
  ),
  wrist: (
    <>
      <rect x="48" y="246" width="25" height="25" rx="10" />
      <rect x="187" y="246" width="25" height="25" rx="10" />
    </>
  ),
  "lower-back": <path d="M95 203 Q130 216 165 203 L162 263 Q130 278 98 263 Z" />,
  hip: <path d="M98 266 Q130 283 162 266 L171 310 Q130 330 89 310 Z" />,
  knee: (
    <>
      <ellipse cx="108" cy="382" rx="18" ry="21" />
      <ellipse cx="152" cy="382" rx="18" ry="21" />
    </>
  ),
  ankle: (
    <>
      <rect x="93" y="443" width="25" height="29" rx="11" />
      <rect x="142" y="443" width="25" height="29" rx="11" />
    </>
  ),
  foot: (
    <>
      <path d="M92 470 L116 470 L123 497 Q108 506 79 499 Q79 482 92 470 Z" />
      <path d="M144 470 L168 470 L181 499 Q152 506 137 497 Z" />
    </>
  ),
};

const BodyPainMap = () => {
  const [selectedId, setSelectedId] = useState<BodyAreaId | null>(null);
  const [hoveredId, setHoveredId] = useState<BodyAreaId | null>(null);

  const selectedArea = bodyAreas.find((area) => area.id === selectedId);
  const hoveredArea = bodyAreas.find((area) => area.id === hoveredId);

  const selectArea = (id: BodyAreaId) => {
    setSelectedId(id);
    setHoveredId(id);
  };

  const talkToVineet = () => {
    const areaText = selectedArea ? ` about ${selectedArea.name.toLowerCase()} pain` : "";
    window.open(
      `https://wa.me/917601026596?text=${encodeURIComponent(`Hello, I would like to talk to Vineet${areaText}.`)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const regionClass = (id: BodyAreaId) =>
    `transition-all duration-200 outline-none ${
      selectedId === id
        ? "fill-wellness-500/45 stroke-wellness-700"
        : "fill-transparent stroke-transparent hover:fill-wellness-400/35 hover:stroke-wellness-600 focus:fill-wellness-400/35 focus:stroke-wellness-600"
    }`;

  return (
    <section className="border-y border-border bg-sand-100 py-16 md:py-24 px-4" aria-labelledby="pain-map-heading">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">Interactive guide</span>
          <h2 id="pain-map-heading" className="heading-2 mt-3 mb-4 text-relish-900">
            Where Does It Hurt?
          </h2>
          <p className="paragraph">
            Tap the area where you&apos;re experiencing pain to explore common conditions and
            physiotherapy-related information.
          </p>
          <p className="mt-3 text-sm text-wellness-700 sm:hidden">Tap a body area to explore.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="surface overflow-hidden bg-card p-4 sm:p-6">
              <div
                className="mb-4 min-h-6 text-center text-sm text-muted-foreground"
                role="tooltip"
                aria-live="polite"
              >
                {hoveredArea ? `${hoveredArea.name} — select to explore` : "Hover or tap an area to explore"}
              </div>

              <svg
                viewBox="0 0 260 520"
                className="mx-auto block w-full max-w-[300px] touch-manipulation"
                role="img"
                aria-label="Front-facing interactive human body pain map"
              >
                <title>Interactive front-facing human body pain map</title>
                <g fill="#e8edf0" stroke="#b9c7ce" strokeWidth="2">
                  <circle cx="130" cy="48" r="29" />
                  <path d="M113 77 L147 77 L150 108 L110 108 Z" />
                  <path d="M96 112 Q130 94 164 112 L178 228 Q164 278 130 288 Q96 278 82 228 Z" />
                  <path d="M92 118 Q72 129 62 162 L50 241 Q48 258 60 267 Q73 263 76 246 L88 181 L107 137 Z" />
                  <path d="M168 118 Q188 129 198 162 L210 241 Q212 258 200 267 Q187 263 184 246 L172 181 L153 137 Z" />
                  <path d="M96 277 Q108 284 120 285 L117 367 L94 443 Q91 461 105 470 Q118 468 120 451 L135 382 L140 451 Q142 468 155 470 Q169 461 166 443 L143 367 L140 285 Q152 284 164 277 L171 310 Q151 331 130 332 Q109 331 89 310 Z" />
                  <path d="M94 468 L119 468 L124 498 Q108 508 77 500 Q78 480 94 468 Z" />
                  <path d="M141 468 L166 468 L183 500 Q152 508 136 498 Z" />
                </g>

                {bodyAreas.map((area) => (
                  <g
                    key={area.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Explore ${area.name} pain information`}
                    aria-pressed={selectedId === area.id}
                    className="cursor-pointer"
                    onClick={() => selectArea(area.id)}
                    onMouseEnter={() => setHoveredId(area.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(area.id)}
                    onBlur={() => setHoveredId(null)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        selectArea(area.id);
                      }
                    }}
                  >
                    {Array.isArray(regions[area.id]) ? regions[area.id] : regions[area.id]}
                    <g className={regionClass(area.id)} pointerEvents="none">
                      {regions[area.id]}
                    </g>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="surface min-h-[420px] p-6 sm:p-8">
              {selectedArea ? (
                <div className="animate-fade-in">
                  <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
                    <div>
                      <p className="eyebrow">Selected area</p>
                      <h3 className="heading-3 mt-2 text-relish-900">{selectedArea.name} pain</h3>
                    </div>
                    <Activity className="h-6 w-6 shrink-0 text-wellness-600" aria-hidden="true" />
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Common conditions</h4>
                      <ul className="mt-3 space-y-2">
                        {selectedArea.conditions.map((condition) => (
                          <li key={condition} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-wellness-600" />
                            {condition}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Common symptoms</h4>
                      <ul className="mt-3 space-y-2">
                        {selectedArea.symptoms.map((symptom) => (
                          <li key={symptom} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-wellness-600" />
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 rounded-md border border-wellness-200 bg-wellness-50 p-5">
                    <h4 className="text-sm font-semibold text-wellness-900">How physiotherapy may help</h4>
                    <p className="mt-2 text-sm leading-relaxed text-wellness-900/80">{selectedArea.physioInfo}</p>
                  </div>

                  <div className="mt-5 flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-relish-600" />
                    <p>{selectedArea.assessment}</p>
                  </div>

                  <Button
                    type="button"
                    onClick={talkToVineet}
                    className="mt-7 h-11 rounded-md bg-relish-700 px-5 text-white hover:bg-relish-800"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Talk to Vineet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex min-h-[360px] flex-col justify-center">
                  <Activity className="h-9 w-9 text-wellness-600" aria-hidden="true" />
                  <h3 className="heading-3 mt-5 text-relish-900">Choose an area to learn more</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                    Select a highlighted body region to see common symptoms, general physiotherapy
                    information, and guidance on when an assessment may be useful.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <h3 className="text-sm font-semibold text-foreground">Explore by body area</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Use these controls if you prefer not to interact with the illustration.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {bodyAreas.map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => selectArea(area.id)}
                className={`min-h-11 rounded-md border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-relish-600 focus:ring-offset-2 ${
                  selectedId === area.id
                    ? "border-wellness-600 bg-wellness-100 text-wellness-900"
                    : "border-border bg-card text-foreground hover:border-wellness-400 hover:text-wellness-800"
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-4xl border-l-2 border-relish-300 pl-4 text-xs leading-relaxed text-muted-foreground">
          This information is for general educational purposes and is not a medical diagnosis.
          Persistent, severe, or unexplained symptoms should be assessed by a qualified healthcare professional.
        </p>
      </div>
    </section>
  );
};

export default BodyPainMap;
