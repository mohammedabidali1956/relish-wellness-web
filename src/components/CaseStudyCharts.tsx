import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type CaseStudyChartSet = "cervical" | "lumbar" | "meniscus";

interface CaseStudyChartsProps {
  caseStudy: CaseStudyChartSet;
}

interface ChartFigureProps {
  title: string;
  description: string;
  accessibleSummary: string;
  children: React.ReactNode;
}

const palette = {
  navy: "#17324f",
  teal: "#16808a",
  gold: "#bd8745",
  lavender: "#9272a3",
  slate: "#64748b",
  grid: "#e5dec9",
  levels: ["#16808a", "#5d9f9a", "#bd8745", "#9272a3", "#64748b"],
};

const ChartFigure: React.FC<ChartFigureProps> = ({
  title,
  description,
  accessibleSummary,
  children,
}) => (
  <figure className="min-w-0 rounded-xl border border-[#e5dec9] bg-white p-4 sm:p-5">
    <h3 className="font-semibold text-[#081a2e]">{title}</h3>
    <p className="mt-1 text-xs leading-relaxed text-[#64748b]">{description}</p>
    <div
      className="mt-3 h-64 w-full min-w-0"
      role="img"
      aria-label={accessibleSummary}
    >
      {children}
    </div>
    <figcaption className="sr-only">{accessibleSummary}</figcaption>
  </figure>
);

const AxisTick = { fontSize: 10, fill: "#4a5568" };
const CommonChartProps = { margin: { top: 18, right: 10, bottom: 8, left: 0 } };

const cervicalPain = [
  { visit: "Day 1", vas: 8 },
  { visit: "After 7 sessions", vas: 1 },
];

const cervicalRangeOfMotion = [
  { movement: "Flexion", before: 20, after: 80, normal: 80 },
  { movement: "Extension", before: 20, after: 70, normal: 70 },
  { movement: "Right lateral flexion", before: 20, after: 45, normal: 45 },
  { movement: "Left lateral flexion", before: 25, after: 45, normal: 45 },
  { movement: "Right rotation", before: 25, after: 70, normal: 70 },
  { movement: "Left rotation", before: 30, after: 70, normal: 70 },
];

const cervicalSessionPain = [8, 7, 6, 5, 4, 3, 2, 1].map((vas, index) => ({
  session: index === 0 ? "Day 1" : `After session ${index}`,
  vas,
}));

const lumbarPain = [
  { visit: "Before", vas: 9 },
  { visit: "After 7 sessions", vas: 1 },
];

const lumbarRangeOfMotion = [
  { movement: "Flexion", before: 30, after: 60, normal: 60 },
  { movement: "Extension", before: 15, after: 35, normal: 35 },
  { movement: "Right lateral flexion", before: 10, after: 20, normal: 20 },
  { movement: "Left lateral flexion", before: 10, after: 20, normal: 20 },
  { movement: "Right rotation", before: 8, after: 18, normal: 18 },
  { movement: "Left rotation", before: 8, after: 18, normal: 18 },
];

const lumbarEqVas = [
  { visit: "Before", score: 35 },
  { visit: "After 7 sessions", score: 85 },
];

const eq5dBefore = [
  { level: "Level 1", count: 0 },
  { level: "Level 2", count: 0 },
  { level: "Level 3", count: 2 },
  { level: "Level 4", count: 3 },
  { level: "Level 5", count: 0 },
];

const eq5dAfter = [
  { level: "Level 1", count: 4 },
  { level: "Level 2", count: 1 },
  { level: "Level 3", count: 0 },
  { level: "Level 4", count: 0 },
  { level: "Level 5", count: 0 },
];

const meniscusVisits = [
  "Baseline",
  "After 8 sessions",
  "4 weeks after supervised care",
  "3 months from baseline",
  "6 months from baseline",
];

const meniscusPain = [
  { visit: meniscusVisits[0], activity: 7, rest: 5 },
  { visit: meniscusVisits[1], activity: 2, rest: 1 },
  { visit: meniscusVisits[2], activity: 1, rest: 0 },
  { visit: meniscusVisits[3], activity: 1, rest: 0 },
  { visit: meniscusVisits[4], activity: 1, rest: 0 },
];

const meniscusLysholm = [58, 86, 88, 90, 92].map((score, index) => ({
  visit: meniscusVisits[index],
  score,
}));

const meniscusFlexion = [95, 130, 132, 135, 135].map((degrees, index) => ({
  visit: meniscusVisits[index],
  degrees,
}));

const meniscusExtensionDeficit = [5, 0, 0, 0, 0].map((degrees, index) => ({
  visit: meniscusVisits[index],
  degrees,
}));

const meniscusGirthDifference = [1.5, 0, 0, 0, 0].map((centimeters, index) => ({
  visit: meniscusVisits[index],
  centimeters,
}));

const PatientReportedReliefChart: React.FC<{
  percent: number;
  remainder: number;
  label: string;
}> = ({ percent, remainder, label }) => {
  const data = [
    { name: label, value: percent },
    { name: "Arithmetic complement, not separately measured", value: remainder },
  ];

  return (
    <ChartFigure
      title="Patient-reported overall relief"
      description="A reported estimate only. The remainder is arithmetic, not a measured residual symptom score."
      accessibleSummary={`${label}: ${percent} percent. The remaining ${remainder} percent is an arithmetic complement and was not separately measured.`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="52%"
            outerRadius="78%"
            paddingAngle={2}
            label={({ value }) => `${value}%`}
          >
            <Cell fill={palette.teal} />
            <Cell fill={palette.grid} />
          </Pie>
          <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
          <Legend verticalAlign="bottom" height={52} wrapperStyle={{ fontSize: 10 }} />
        </PieChart>
      </ResponsiveContainer>
    </ChartFigure>
  );
};

const Eq5dDistributionChart: React.FC = () => (
  <ChartFigure
    title="EQ-5D-5L dimension-level distribution"
    description="Count of the five dimensions at each ordinal level. This is not an EQ-5D index score."
    accessibleSummary="Before: two dimensions at level 3 and three at level 4. After: four dimensions at level 1 and one at level 2. Dimension levels are ordinal categories."
  >
    <div className="grid h-full grid-cols-2 gap-2">
      {[{ label: "Before", data: eq5dBefore }, { label: "After", data: eq5dAfter }].map((chart) => (
        <div key={chart.label} className="flex min-w-0 flex-col">
          <p className="text-center text-xs font-semibold text-[#334155]">{chart.label}</p>
          <div className="min-h-0 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chart.data.filter((item) => item.count > 0)}
                  dataKey="count"
                  nameKey="level"
                  innerRadius="40%"
                  outerRadius="68%"
                  label={({ name, value }) => `${name.replace("Level ", "L")}: ${value}`}
                  labelLine={false}
                >
                  {chart.data.filter((item) => item.count > 0).map((item) => (
                    <Cell key={`${chart.label}-${item.level}`} fill={palette.levels[Number(item.level.slice(-1)) - 1]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  </ChartFigure>
);

const CervicalCharts: React.FC = () => (
  <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <ChartFigure
      title="Pain intensity (VAS)"
      description="Visual Analogue Scale, 0–10. Recorded before treatment and after seven sessions."
      accessibleSummary="VAS pain changed from 8 out of 10 on Day 1 to 1 out of 10 after seven sessions."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={cervicalPain} {...CommonChartProps}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="visit" tick={AxisTick} />
          <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} tick={AxisTick} />
          <Tooltip formatter={(value: number) => [`${value}/10`, "VAS"]} />
          <Bar dataKey="vas" name="VAS pain" fill={palette.navy} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartFigure>

    <ChartFigure
      title="Cervical range of motion"
      description="Goniometer measurements and the normal reference values listed in the source case, in degrees."
      accessibleSummary="Flexion 20 to 80 degrees; extension 20 to 70; right lateral flexion 20 to 45; left lateral flexion 25 to 45; right rotation 25 to 70; left rotation 30 to 70. After-treatment values equal the listed normal references."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={cervicalRangeOfMotion} margin={{ top: 14, right: 4, bottom: 54, left: -14 }}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="movement" interval={0} angle={-22} textAnchor="end" height={65} tick={AxisTick} />
          <YAxis unit="°" tick={AxisTick} />
          <Tooltip formatter={(value: number) => [`${value}°`, ""]} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Bar dataKey="before" name="Before" fill={palette.gold} radius={[3, 3, 0, 0]} />
          <Bar dataKey="after" name="After 7 sessions" fill={palette.teal} radius={[3, 3, 0, 0]} />
          <Bar dataKey="normal" name="Normal reference" fill={palette.navy} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartFigure>

    <ChartFigure
      title="Session-by-session VAS trend"
      description="The source reports a one-point decrease per session. Intermediate points are derived from that statement, not separately itemised session records."
      accessibleSummary="Reported VAS trend: Day 1, 8; after session 1, 7; session 2, 6; session 3, 5; session 4, 4; session 5, 3; session 6, 2; session 7, 1. Intermediate values are derived, not separately itemised."
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={cervicalSessionPain} margin={{ top: 16, right: 10, bottom: 34, left: 0 }}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="session" interval={0} angle={-30} textAnchor="end" height={60} tick={AxisTick} />
          <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} tick={AxisTick} />
          <Tooltip formatter={(value: number) => [`${value}/10`, "VAS"]} />
          <Line type="monotone" dataKey="vas" name="VAS pain" stroke={palette.teal} strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFigure>

    <PatientReportedReliefChart percent={75} remainder={25} label="Midpoint of reported 70–80% range" />
  </div>
);

const LumbarCharts: React.FC = () => (
  <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <ChartFigure
      title="Pain intensity (VAS)"
      description="Visual Analogue Scale, 0–10. Recorded before treatment and after seven sessions."
      accessibleSummary="VAS pain changed from 9 out of 10 before treatment to 1 out of 10 after seven sessions."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={lumbarPain} {...CommonChartProps}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="visit" tick={AxisTick} />
          <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} tick={AxisTick} />
          <Tooltip formatter={(value: number) => [`${value}/10`, "VAS"]} />
          <Bar dataKey="vas" name="VAS pain" fill={palette.navy} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartFigure>

    <ChartFigure
      title="Lumbar range of motion"
      description="Goniometer measurements and listed normal reference values, in degrees."
      accessibleSummary="Flexion 30 to 60 degrees; extension 15 to 35; right and left lateral flexion 10 to 20 each; right and left rotation 8 to 18 each. After-treatment values equal the listed normal references."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={lumbarRangeOfMotion} margin={{ top: 14, right: 4, bottom: 54, left: -14 }}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="movement" interval={0} angle={-22} textAnchor="end" height={65} tick={AxisTick} />
          <YAxis unit="°" tick={AxisTick} />
          <Tooltip formatter={(value: number) => [`${value}°`, ""]} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Bar dataKey="before" name="Before" fill={palette.gold} radius={[3, 3, 0, 0]} />
          <Bar dataKey="after" name="After 7 sessions" fill={palette.teal} radius={[3, 3, 0, 0]} />
          <Bar dataKey="normal" name="Normal reference" fill={palette.navy} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartFigure>

    <ChartFigure
      title="EQ VAS health rating"
      description="Patient-rated health Visual Analogue Scale, 0–100."
      accessibleSummary="EQ VAS increased from 35 out of 100 before treatment to 85 out of 100 after seven sessions, a recorded increase of 50 points."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={lumbarEqVas} {...CommonChartProps}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="visit" tick={AxisTick} />
          <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tick={AxisTick} />
          <Tooltip formatter={(value: number) => [`${value}/100`, "EQ VAS"]} />
          <Bar dataKey="score" name="EQ VAS" fill={palette.teal} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartFigure>

    <Eq5dDistributionChart />
    <PatientReportedReliefChart percent={89} remainder={11} label="Patient-reported overall relief" />
  </div>
);

const MeniscusCharts: React.FC = () => (
  <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <ChartFigure
      title="Activity and rest pain (VAS)"
      description="Pain ratings on the source case’s 0–10 scale, from baseline through six months."
      accessibleSummary="Activity VAS: 7, 2, 1, 1, 1. Rest VAS: 5, 1, 0, 0, 0. Visits are baseline, after eight sessions, four weeks after supervised care, three months from baseline, and six months from baseline."
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={meniscusPain} margin={{ top: 16, right: 10, bottom: 45, left: 0 }}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="visit" interval={0} angle={-28} textAnchor="end" height={72} tick={AxisTick} />
          <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} tick={AxisTick} />
          <Tooltip formatter={(value: number) => [`${value}/10`, "VAS"]} />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Line type="monotone" dataKey="activity" name="Activity" stroke={palette.navy} strokeWidth={3} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="rest" name="At rest" stroke={palette.teal} strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFigure>

    <ChartFigure
      title="Lysholm Knee Score"
      description="Patient-reported knee score, reproduced at each recorded review."
      accessibleSummary="Lysholm Knee Score: 58 at baseline, 86 after eight sessions, 88 four weeks after supervised care, 90 at three months, and 92 at six months."
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={meniscusLysholm} margin={{ top: 16, right: 10, bottom: 45, left: 0 }}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="visit" interval={0} angle={-28} textAnchor="end" height={72} tick={AxisTick} />
          <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tick={AxisTick} />
          <Tooltip formatter={(value: number) => [value, "Lysholm score"]} />
          <Line type="monotone" dataKey="score" name="Lysholm score" stroke={palette.lavender} strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFigure>

    <ChartFigure
      title="Knee flexion"
      description="Goniometer-measured flexion in degrees."
      accessibleSummary="Knee flexion: 95 degrees at baseline, 130 after eight sessions, 132 at four-week review, and 135 at both three- and six-month reviews."
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={meniscusFlexion} margin={{ top: 16, right: 10, bottom: 45, left: 0 }}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="visit" interval={0} angle={-28} textAnchor="end" height={72} tick={AxisTick} />
          <YAxis domain={[0, 150]} ticks={[0, 30, 60, 90, 120, 150]} unit="°" tick={AxisTick} />
          <Tooltip formatter={(value: number) => [`${value}°`, "Flexion"]} />
          <Line type="monotone" dataKey="degrees" name="Flexion" stroke={palette.teal} strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFigure>

    <ChartFigure
      title="Knee extension deficit"
      description="Recorded deficit in degrees; zero indicates no extension deficit."
      accessibleSummary="Extension deficit: 5 degrees at baseline, then 0 degrees after eight sessions, four weeks after supervised care, three months, and six months."
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={meniscusExtensionDeficit} margin={{ top: 16, right: 10, bottom: 45, left: 0 }}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="visit" interval={0} angle={-28} textAnchor="end" height={72} tick={AxisTick} />
          <YAxis domain={[0, 6]} ticks={[0, 1, 2, 3, 4, 5, 6]} unit="°" tick={AxisTick} />
          <Tooltip formatter={(value: number) => [`${value}°`, "Extension deficit"]} />
          <Line type="monotone" dataKey="degrees" name="Extension deficit" stroke={palette.gold} strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFigure>

    <ChartFigure
      title="Mid-patellar girth difference"
      description="Difference from the contralateral side, in centimetres."
      accessibleSummary="Girth difference: 1.5 centimetres at baseline and 0 centimetres at all four later reviews."
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={meniscusGirthDifference} margin={{ top: 16, right: 10, bottom: 45, left: 0 }}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis dataKey="visit" interval={0} angle={-28} textAnchor="end" height={72} tick={AxisTick} />
          <YAxis domain={[0, 2]} ticks={[0, 0.5, 1, 1.5, 2]} unit=" cm" tick={AxisTick} />
          <Tooltip formatter={(value: number) => [`${value} cm`, "Girth difference"]} />
          <Line type="monotone" dataKey="centimeters" name="Girth difference" stroke={palette.navy} strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFigure>
  </div>
);

const CaseStudyCharts: React.FC<CaseStudyChartsProps> = ({ caseStudy }) => {
  const labels = {
    cervical: "Cervical case statistical charts",
    lumbar: "Lumbar case statistical charts",
    meniscus: "Medial meniscus case statistical charts",
  };

  return (
    <section
      id={`${caseStudy}-statistical-charts`}
      className="space-y-3"
      aria-label={labels[caseStudy]}
    >
      <h3 className="font-serif text-xl font-bold text-[#081a2e]">Statistical charts</h3>
      {caseStudy === "cervical" && <CervicalCharts />}
      {caseStudy === "lumbar" && <LumbarCharts />}
      {caseStudy === "meniscus" && <MeniscusCharts />}
    </section>
  );
};

export default CaseStudyCharts;
