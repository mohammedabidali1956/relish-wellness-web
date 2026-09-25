import { useState } from "react";
import { Activity, AlertCircle, Info, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const bodyFront = "/images/clinic/body-map-front.webp";
const bodyBack = "/images/clinic/body-map-back.webp";

type BodyView = "front" | "back";

type PainRegion = {
  id: string;
  label: string;
  symptoms: string;
  contributors: string;
  support: string;
  assessment: string;
  preferredView: BodyView;
  hotspots: Partial<Record<BodyView, string>>;
};

const painRegions: PainRegion[] = [
  {
    id: "head",
    label: "Head",
    symptoms: "Headache, pressure, or pain around the head that may occur with neck stiffness, sensitivity to light, nausea, or changes in normal activity.",
    contributors: "Head pain can be associated with tension, migraine, illness, injury, or pain referred from the neck. An individual assessment is needed to understand the pattern.",
    support: "When symptoms are linked with neck movement or muscle and joint factors, physiotherapy may help through assessment, education, movement advice, and an individualized exercise plan.",
    assessment: "Seek urgent medical help for a sudden extremely severe headache, headache after a serious injury, or headache with confusion, fainting, fever, new weakness, numbness, vision loss, or speech difficulty.",
    preferredView: "front",
    hotspots: { front: "left-[39%] top-[2.5%] h-[10%] w-[22%]" },
  },
  {
    id: "neck",
    label: "Neck",
    symptoms: "Stiffness, aching, reduced head movement, headaches, or pain that may extend towards the shoulder or arm.",
    contributors: "Prolonged static positions, muscle strain, joint-related changes, nerve irritation, or an injury can be associated with neck pain.",
    support: "A physiotherapist may assess movement and nerve symptoms, then use education, graded exercise, posture or activity changes, and an individual movement plan.",
    assessment: "Arrange an assessment when pain persists or limits normal activity. Seek medical care promptly after major trauma, or for marked weakness, loss of coordination, fever, or severe unexplained symptoms.",
    preferredView: "front",
    hotspots: {
      front: "left-[42%] top-[12%] h-[8%] w-[16%]",
      back: "left-[41%] top-[12%] h-[9%] w-[18%]",
    },
  },
  {
    id: "shoulder",
    label: "Shoulder",
    symptoms: "Pain when reaching, dressing, lifting, or lying on the affected side, sometimes with stiffness or weakness.",
    contributors: "Possible contributors include overuse, tendon or bursa irritation, joint stiffness, age-related change, or a fall or other injury.",
    support: "Physiotherapy may help through movement assessment, advice on comfortable activity, progressive mobility and strengthening, and a plan matched to daily needs.",
    assessment: "Seek assessment if symptoms are worsening, last beyond a couple of weeks, or make arm movement very difficult. Sudden severe pain, deformity, or inability to move after injury needs medical evaluation.",
    preferredView: "front",
    hotspots: {
      front: "left-[25%] top-[17%] h-[10%] w-[50%] rounded-[45%]",
      back: "left-[25%] top-[18%] h-[10%] w-[50%] rounded-[45%]",
    },
  },
  {
    id: "upper-back",
    label: "Upper back",
    symptoms: "Ache, tightness, stiffness, or discomfort around the upper spine and shoulder blades, sometimes aggravated by movement or sustained positions.",
    contributors: "Muscle or joint strain, repeated loading, prolonged positions, reduced activity, or pain referred from the neck can contribute.",
    support: "Physiotherapy may help identify movement factors and provide education, mobility work, strengthening, and a gradual return to comfortable activity.",
    assessment: "Persistent or limiting pain merits assessment. Seek urgent medical help when upper-back pain occurs with chest pain, breathing difficulty, faintness, fever, or follows significant trauma.",
    preferredView: "back",
    hotspots: { back: "left-[32%] top-[24%] h-[16%] w-[36%] rounded-[38%]" },
  },
  {
    id: "elbow",
    label: "Elbow",
    symptoms: "Pain with gripping, lifting, twisting, or bending the arm, with possible tenderness, stiffness, or reduced strength.",
    contributors: "Repetitive work or sport, a change in loading, tendon irritation, joint problems, or a direct injury are possible contributors.",
    support: "Physiotherapy may help by reviewing load and technique, guiding progressive exercise, and improving strength and movement around the arm and shoulder.",
    assessment: "Book an assessment if pain persists or affects work and daily tasks. Marked swelling, deformity, locking, numbness, or inability to use the arm after injury needs medical review.",
    preferredView: "front",
    hotspots: {
      front: "left-[15%] top-[34%] h-[13%] w-[15%] -rotate-12",
      back: "left-[70%] top-[34%] h-[13%] w-[15%] rotate-12",
    },
  },
  {
    id: "wrist-hand",
    label: "Wrist / hand",
    symptoms: "Pain, stiffness, reduced grip, tingling, numbness, or discomfort during typing, lifting, or fine hand tasks.",
    contributors: "Repetitive loading, tendon irritation, a sprain, joint changes, or nerve irritation can be associated with these symptoms.",
    support: "Physiotherapy may help assess movement, sensation and strength, advise on activity changes, and guide suitable mobility or strengthening exercises.",
    assessment: "Assessment is appropriate for ongoing pain, weakness, or altered sensation. Seek prompt medical care after significant injury, or for deformity, a cold or discoloured hand, or rapidly worsening numbness.",
    preferredView: "front",
    hotspots: {
      front: "left-[8%] top-[46%] h-[13%] w-[17%] -rotate-12",
      back: "left-[75%] top-[46%] h-[13%] w-[17%] rotate-12",
    },
  },
  {
    id: "lower-back",
    label: "Lower back",
    symptoms: "A dull or sharp ache, stiffness, muscle spasm, or pain that may spread into the buttock or leg.",
    contributors: "A strain, sudden or repeated loading, reduced activity, joint or disc-related change, or nerve irritation may contribute; the exact cause is not always clear.",
    support: "Physiotherapy may help restore comfortable movement through assessment, reassurance, education, graded activity and an individualized exercise plan.",
    assessment: "Seek assessment when pain is persistent or limits daily life. Urgent medical evaluation is needed for new bowel or bladder changes, numbness around the groin, major leg weakness, fever, or pain after significant trauma.",
    preferredView: "back",
    hotspots: { back: "left-[34%] top-[39%] h-[14%] w-[32%] rounded-[38%]" },
  },
  {
    id: "hip",
    label: "Hip",
    symptoms: "Pain around the groin, outer hip or buttock, stiffness, reduced walking tolerance, or discomfort when lying on one side.",
    contributors: "A fall or strain, tendon or bursa irritation, joint-related change, or pain referred from the back are possible contributors.",
    support: "Physiotherapy may help assess walking and movement, manage activity, and build mobility, balance and strength progressively.",
    assessment: "Arrange assessment if pain affects sleep or normal activity, worsens, or keeps returning. Severe pain or inability to walk after a fall, or a hot swollen joint with fever, needs urgent medical care.",
    preferredView: "front",
    hotspots: {
      front: "left-[31%] top-[46%] h-[13%] w-[38%] rounded-[42%]",
      back: "left-[31%] top-[46%] h-[13%] w-[38%] rounded-[42%]",
    },
  },
  {
    id: "knee",
    label: "Knee",
    symptoms: "Pain with walking, stairs, squatting or rising from a chair, sometimes with stiffness, swelling, clicking, or a feeling of giving way.",
    contributors: "Overuse, a sprain or other injury, tendon irritation, joint-related change, or altered strength and movement can contribute.",
    support: "Physiotherapy may help through movement and strength assessment, load guidance, progressive exercise, and support returning to everyday or sporting activity.",
    assessment: "Seek assessment for persistent pain, swelling, locking, or instability. Inability to bear weight, marked swelling or deformity, or a hot red knee with fever requires prompt medical evaluation.",
    preferredView: "front",
    hotspots: {
      front: "left-[35%] top-[68%] h-[10%] w-[14%]",
      back: "left-[51%] top-[68%] h-[10%] w-[14%]",
    },
  },
  {
    id: "ankle-foot",
    label: "Ankle / foot",
    symptoms: "Pain with standing or walking, swelling, stiffness, reduced balance, or tenderness around the ankle, heel, arch, or foot.",
    contributors: "A sprain, sudden increase in activity, tendon irritation, footwear or loading changes, or joint-related problems are possible contributors.",
    support: "Physiotherapy may help assess walking, balance, strength and mobility, then guide progressive loading and a safe return to activity.",
    assessment: "Assessment is appropriate when pain or swelling persists. Seek medical evaluation if you cannot bear weight after injury, the foot looks deformed, or it becomes cold, pale, numb, hot, or very swollen.",
    preferredView: "front",
    hotspots: {
      front: "left-[34%] top-[87%] h-[12%] w-[17%]",
      back: "left-[49%] top-[87%] h-[12%] w-[17%]",
    },
  },
];

const BodyFigure = ({
  activeRegion,
  view,
  onSelect,
}: {
  activeRegion: string;
  view: BodyView;
  onSelect: (id: string) => void;
}) => (
  <div
    className="relative mx-auto aspect-[9/16] w-full max-w-[350px] sm:max-w-[390px]"
    aria-label={`${view === "front" ? "Front" : "Back"} view interactive human body pain map`}
  >
    <img
      src={view === "front" ? bodyFront : bodyBack}
      alt=""
      aria-hidden="true"
      className="h-full w-full object-contain transition-opacity duration-300 motion-reduce:transition-none"
      draggable={false}
    />

    {painRegions.map((region) => {
      const hotspotClass = region.hotspots[view];
      if (!hotspotClass) return null;
      const isActive = activeRegion === region.id;

      return (
        <Button
          key={`${view}-${region.id}`}
          type="button"
          variant="ghost"
          className={cn(
            "absolute min-h-11 min-w-11 border border-transparent p-0 text-transparent transition-all duration-200 motion-reduce:transition-none",
            "hover:border-wellness-300 hover:bg-wellness-300/55 focus-visible:border-wellness-400 focus-visible:bg-wellness-300/60 focus-visible:ring-wellness-600",
            isActive && "border-wellness-300 bg-wellness-400/70 shadow-[0_0_0_5px_hsl(var(--accent)/0.55)]",
            hotspotClass,
          )}
          onClick={() => onSelect(region.id)}
          aria-label={`Show information for ${region.label}`}
          aria-pressed={isActive}
        >
          <span className="sr-only">{region.label}</span>
        </Button>
      );
    })}
  </div>
);

const PainPointGuide = () => {
  const [activeId, setActiveId] = useState(painRegions[0].id);
  const [bodyView, setBodyView] = useState<BodyView>("front");
  const activeRegion = painRegions.find((region) => region.id === activeId) ?? painRegions[0];

  const selectRegion = (id: string) => {
    const region = painRegions.find((item) => item.id === id);
    if (!region) return;
    setActiveId(id);
    setBodyView(region.preferredView);
  };

  const changeView = (view: BodyView) => {
    setBodyView(view);
    if (!activeRegion.hotspots[view]) {
      setActiveId(view === "front" ? "head" : "upper-back");
    }
  };

  return (
    <section className="border-y border-border bg-sand-100 px-4 py-16 md:py-24" aria-labelledby="pain-guide-heading">
      <div className="container">
        <div className="max-w-2xl">
          <span className="eyebrow">Body pain guide</span>
          <h2 id="pain-guide-heading" className="heading-2 mt-3 text-relish-900">Where does it hurt?</h2>
          <p className="paragraph mt-4">
            Tap an area to explore common pain conditions and how physiotherapy may help.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(380px,1.2fr)_minmax(0,1fr)] lg:gap-14">
          <div className="min-w-0 border border-border bg-card px-3 py-5 sm:px-8 sm:py-7">
            <div className="mx-auto mb-5 flex w-fit rounded-md border border-border bg-background p-1" aria-label="Choose body view">
              {(["front", "back"] as BodyView[]).map((view) => (
                <Button
                  key={view}
                  type="button"
                  size="sm"
                  variant={bodyView === view ? "default" : "ghost"}
                  className={cn(
                    "min-w-20 capitalize",
                    bodyView === view && "bg-relish-700 text-primary-foreground hover:bg-relish-800",
                  )}
                  onClick={() => changeView(view)}
                  aria-pressed={bodyView === view}
                >
                  {view}
                </Button>
              ))}
            </div>

            <BodyFigure activeRegion={activeId} view={bodyView} onSelect={selectRegion} />

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
                  onClick={() => selectRegion(region.id)}
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