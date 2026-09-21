import { useState } from "react";
import { Activity, AlertCircle, Check, Info, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PainRegion = {
  id: string;
  label: string;
  symptoms: string;
  contributors: string;
  support: string;
  assessment: string;
  markerClass: string;
};

const painRegions: PainRegion[] = [
  {
    id: "neck",
    label: "Neck",
    symptoms: "Stiffness, aching, reduced head movement, headaches, or pain that may extend towards the shoulder or arm.",
    contributors: "Prolonged static positions, muscle strain, joint-related changes, nerve irritation, or an injury can be associated with neck pain.",
    support: "A physiotherapist may assess movement and nerve symptoms, then use education, graded exercise, posture or activity changes, and an individual movement plan.",
    assessment: "Arrange an assessment when pain persists or limits normal activity. Seek medical care promptly after major trauma, or for marked weakness, loss of coordination, fever, or severe unexplained symptoms.",
    markerClass: "left-[48%] top-[13%]",
  },
  {
    id: "shoulder",
    label: "Shoulder",
    symptoms: "Pain when reaching, dressing, lifting, or lying on the affected side, sometimes with stiffness or weakness.",
    contributors: "Possible contributors include overuse, tendon or bursa irritation, joint stiffness, age-related change, or a fall or other injury.",
    support: "Physiotherapy may help through movement assessment, advice on comfortable activity, progressive mobility and strengthening, and a plan matched to daily needs.",
    assessment: "Seek assessment if symptoms are worsening, last beyond a couple of weeks, or make arm movement very difficult. Sudden severe pain, deformity, or inability to move after injury needs medical evaluation.",
    markerClass: "left-[27%] top-[20%]",
  },
  {
    id: "upper-back",
    label: "Upper back",
    symptoms: "Ache, tightness, stiffness, or discomfort around the upper spine and shoulder blades, sometimes aggravated by movement or sustained positions.",
    contributors: "Muscle or joint strain, repeated loading, prolonged positions, reduced activity, or pain referred from the neck can contribute.",
    support: "Physiotherapy may help identify movement factors and provide education, mobility work, strengthening, and a gradual return to comfortable activity.",
    assessment: "Persistent or limiting pain merits assessment. Seek urgent medical help when upper-back pain occurs with chest pain, breathing difficulty, faintness, fever, or follows significant trauma.",
    markerClass: "left-[66%] top-[25%]",
  },
  {
    id: "elbow",
    label: "Elbow",
    symptoms: "Pain with gripping, lifting, twisting, or bending the arm, with possible tenderness, stiffness, or reduced strength.",
    contributors: "Repetitive work or sport, a change in loading, tendon irritation, joint problems, or a direct injury are possible contributors.",
    support: "Physiotherapy may help by reviewing load and technique, guiding progressive exercise, and improving strength and movement around the arm and shoulder.",
    assessment: "Book an assessment if pain persists or affects work and daily tasks. Marked swelling, deformity, locking, numbness, or inability to use the arm after injury needs medical review.",
    markerClass: "left-[17%] top-[36%]",
  },
  {
    id: "wrist-hand",
    label: "Wrist / hand",
    symptoms: "Pain, stiffness, reduced grip, tingling, numbness, or discomfort during typing, lifting, or fine hand tasks.",
    contributors: "Repetitive loading, tendon irritation, a sprain, joint changes, or nerve irritation can be associated with these symptoms.",
    support: "Physiotherapy may help assess movement, sensation and strength, advise on activity changes, and guide suitable mobility or strengthening exercises.",
    assessment: "Assessment is appropriate for ongoing pain, weakness, or altered sensation. Seek prompt medical care after significant injury, or for deformity, a cold or discoloured hand, or rapidly worsening numbness.",
    markerClass: "left-[10%] top-[50%]",
  },
  {
    id: "lower-back",
    label: "Lower back",
    symptoms: "A dull or sharp ache, stiffness, muscle spasm, or pain that may spread into the buttock or leg.",
    contributors: "A strain, sudden or repeated loading, reduced activity, joint or disc-related change, or nerve irritation may contribute; the exact cause is not always clear.",
    support: "Physiotherapy may help restore comfortable movement through assessment, reassurance, education, graded activity and an individualized exercise plan.",
    assessment: "Seek assessment when pain is persistent or limits daily life. Urgent medical evaluation is needed for new bowel or bladder changes, numbness around the groin, major leg weakness, fever, or pain after significant trauma.",
    markerClass: "left-[67%] top-[42%]",
  },
  {
    id: "hip",
    label: "Hip",
    symptoms: "Pain around the groin, outer hip or buttock, stiffness, reduced walking tolerance, or discomfort when lying on one side.",
    contributors: "A fall or strain, tendon or bursa irritation, joint-related change, or pain referred from the back are possible contributors.",
    support: "Physiotherapy may help assess walking and movement, manage activity, and build mobility, balance and strength progressively.",
    assessment: "Arrange assessment if pain affects sleep or normal activity, worsens, or keeps returning. Severe pain or inability to walk after a fall, or a hot swollen joint with fever, needs urgent medical care.",
    markerClass: "left-[31%] top-[49%]",
  },
  {
    id: "knee",
    label: "Knee",
    symptoms: "Pain with walking, stairs, squatting or rising from a chair, sometimes with stiffness, swelling, clicking, or a feeling of giving way.",
    contributors: "Overuse, a sprain or other injury, tendon irritation, joint-related change, or altered strength and movement can contribute.",
    support: "Physiotherapy may help through movement and strength assessment, load guidance, progressive exercise, and support returning to everyday or sporting activity.",
    assessment: "Seek assessment for persistent pain, swelling, locking, or instability. Inability to bear weight, marked swelling or deformity, or a hot red knee with fever requires prompt medical evaluation.",
    markerClass: "left-[35%] top-[70%]",
  },
  {
    id: "ankle-foot",
    label: "Ankle / foot",
    symptoms: "Pain with standing or walking, swelling, stiffness, reduced balance, or tenderness around the ankle, heel, arch, or foot.",
    contributors: "A sprain, sudden increase in activity, tendon irritation, footwear or loading changes, or joint-related problems are possible contributors.",
    support: "Physiotherapy may help assess walking, balance, strength and mobility, then guide progressive loading and a safe return to activity.",
    assessment: "Assessment is appropriate when pain or swelling persists. Seek medical evaluation if you cannot bear weight after injury, the foot looks deformed, or it becomes cold, pale, numb, hot, or very swollen.",
    markerClass: "left-[36%] top-[90%]",
  },
];

const BodyFigure = ({ activeRegion, onSelect }: { activeRegion: string; onSelect: (id: string) => void }) => (
  <div className="relative mx-auto h-[440px] w-full max-w-[280px]" aria-label="Interactive human body pain map">
    <svg viewBox="0 0 280 440" className="h-full w-full text-relish-100" role="img" aria-labelledby="body-map-title">
      <title id="body-map-title">Front and back human body silhouettes</title>
      <g fill="currentColor" stroke="hsl(var(--border))" strokeWidth="2">
        <circle cx="84" cy="45" r="25" />
        <path d="M65 72 C45 82 39 112 42 158 L50 244 C52 260 64 260 66 244 L64 170 L70 169 L68 270 L58 400 C57 416 73 419 77 403 L86 286 L92 286 L101 403 C105 419 121 416 120 400 L110 270 L108 169 L114 170 L112 244 C114 260 126 260 128 244 L136 158 C139 112 123 82 103 72 Z" />
        <circle cx="198" cy="45" r="25" />
        <path d="M179 72 C159 82 153 112 156 158 L164 244 C166 260 178 260 180 244 L178 170 L184 169 L182 270 L172 400 C171 416 187 419 191 403 L200 286 L206 286 L215 403 C219 419 235 416 234 400 L224 270 L222 169 L228 170 L226 244 C228 260 240 260 242 244 L250 158 C253 112 237 82 217 72 Z" />
      </g>
      <g className="text-relish-500" fill="none" stroke="currentColor" strokeLinecap="round" opacity="0.45">
        <path d="M84 81 L84 258" strokeWidth="2" />
        <path d="M198 81 L198 258" strokeWidth="2" />
        <path d="M173 104 Q198 121 223 104" strokeWidth="3" />
        <path d="M174 157 Q198 174 222 157" strokeWidth="3" />
      </g>
    </svg>

    {painRegions.map((region) => {
      const isActive = activeRegion === region.id;
      return (
        <Button
          key={region.id}
          type="button"
          size="icon"
          variant={isActive ? "default" : "outline"}
          className={cn(
            "absolute h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-sm transition-transform duration-200 hover:scale-105 focus-visible:scale-105",
            region.markerClass,
            isActive
              ? "border-primary bg-primary text-primary-foreground"
              : "border-relish-400 bg-card text-relish-800 hover:bg-relish-50",
          )}
          onClick={() => onSelect(region.id)}
          aria-label={`Show information for ${region.label}`}
          aria-pressed={isActive}
        >
          {isActive ? <Check aria-hidden="true" /> : <span aria-hidden="true" className="text-xs font-semibold">+</span>}
        </Button>
      );
    })}
    <div className="absolute bottom-1 left-0 text-[10px] font-semibold uppercase text-muted-foreground">Front</div>
    <div className="absolute bottom-1 right-2 text-[10px] font-semibold uppercase text-muted-foreground">Back</div>
  </div>
);

const PainPointGuide = () => {
  const [activeId, setActiveId] = useState(painRegions[0].id);
  const activeRegion = painRegions.find((region) => region.id === activeId) ?? painRegions[0];

  return (
    <section className="border-y border-border bg-sand-100 px-4 py-16 md:py-24" aria-labelledby="pain-guide-heading">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">Body pain guide</span>
          <h2 id="pain-guide-heading" className="heading-2 mt-3 text-relish-900">Where does it hurt?</h2>
          <p className="paragraph mt-4">
            Select an area to understand common presentations and how a professional assessment may help.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.35fr)] lg:gap-14">
          <div className="border border-border bg-card px-4 py-6 sm:px-8">
            <BodyFigure activeRegion={activeId} onSelect={setActiveId} />
            <div className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Choose a pain region">
              {painRegions.map((region) => (
                <Button
                  key={region.id}
                  type="button"
                  size="sm"
                  variant={activeId === region.id ? "default" : "outline"}
                  className={cn(
                    "h-10 whitespace-normal px-3 text-xs",
                    activeId === region.id
                      ? "bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:bg-accent",
                  )}
                  onClick={() => setActiveId(region.id)}
                  aria-pressed={activeId === region.id}
                >
                  {region.label}
                </Button>
              ))}
            </div>
          </div>

          <article className="border-t-4 border-relish-600 bg-card p-6 sm:p-8" aria-live="polite">
            <div className="flex items-start gap-4 border-b border-border pb-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Activity aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase text-relish-600">Selected area</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-relish-900">{activeRegion.label}</h3>
              </div>
            </div>

            <dl className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Info className="h-4 w-4 text-relish-600" aria-hidden="true" />
                  Common presentation
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeRegion.symptoms}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Activity className="h-4 w-4 text-relish-600" aria-hidden="true" />
                  Possible contributors
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeRegion.contributors}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Stethoscope className="h-4 w-4 text-relish-600" aria-hidden="true" />
                  How physiotherapy may help
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeRegion.support}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <AlertCircle className="h-4 w-4 text-relish-600" aria-hidden="true" />
                  When to seek assessment
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{activeRegion.assessment}</dd>
              </div>
            </dl>

            <p className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
              This guide is educational and does not replace an individual assessment or medical diagnosis. If symptoms are severe, sudden, or concerning, seek appropriate medical care.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Clinical references: {" "}
              <a className="underline underline-offset-2 hover:text-relish-700" href="https://www.nhs.uk/symptoms/joint-pain/" target="_blank" rel="noreferrer">NHS joint pain guidance</a>
              {" · "}
              <a className="underline underline-offset-2 hover:text-relish-700" href="https://www.nhs.uk/nhs-services/get-nhs-help-for-back-joint-problems/" target="_blank" rel="noreferrer">NHS musculoskeletal care</a>
              {" · "}
              <a className="underline underline-offset-2 hover:text-relish-700" href="https://www.choosept.com/symptoms-conditions" target="_blank" rel="noreferrer">APTA ChoosePT</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PainPointGuide;