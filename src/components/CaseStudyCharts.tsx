import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type CaseStudyKey = "cervical" | "lumbar" | "medial_meniscus";

interface CaseStudyChartsProps {
  caseStudy: CaseStudyKey;
}

interface ChartFigureProps {
  title: string;
  description: string;
  accessibleSummary: string;
  children: React.ReactNode;
}

interface BarPoint {
  visit: string;
  value: number;
}

interface GroupedBarPoint {
  visit: string;
  [key: string]: string | number;
}

interface SingleBarChartProps extends ChartFigureProps {
  data: BarPoint[];
  unit: string;
  color: string;
  domain: [number, number];
  ticks: number[];
  wide?: boolean;
}

interface GroupedBarChartProps extends ChartFigureProps {
  data: GroupedBarPoint[];
  unit: string;
  series: Array<{ key: string; name: string; color: string }>;
  domain?: [number, number];
  ticks?: number[];
  wide?: boolean;
}

const palette = {
  navy: "#17324f",
  teal: "#16808a",
  gold: "#bd8745",
  lavender: "#9272a3",
  grid: "#e5dec9",
  ordinal: ["#16808a", "#5d9f9a", "#bd8745", "#9272a3", "#64748b"],
};

const axisTick = { fontSize: 10, fill: "#4a5568" };

const ChartFigure: React.FC<ChartFigureProps> = ({
  title,
  description,
  accessibleSummary,
  children,
}) => (
  <figure className="min-w-0 rounded-xl border border-[#e5dec9] bg-white p-4 sm:p-5">
    <h4 className="font-semibold text-[#081a2e]">{title}</h4>
    <p className="mt-1 text-xs leading-relaxed text-[#64748b]">{description}</p>
    <div
      className="mt-3 h-[300px] w-full min-w-0 overflow-x-auto sm:h-[320px]"
      role="img"
      aria-label={accessibleSummary}
      tabIndex={0}
    >
      {children}
    </div>
    <figcaption className="sr-only">{accessibleSummary}</figcaption>
  </figure>
);

const SingleBarChart: React.FC<SingleBarChartProps> = ({
  data,
  unit,
  color,
  domain,
  ticks,
  wide = false,
  ...figure
}) => (
  <ChartFigure {...figure}>
    <div className={wide ? "h-full min-w-[560px]" : "h-full min-w-[280px]"}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 14, right: 12, bottom: wide ? 60 : 16, left: 0 }}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis
            dataKey="visit"
            interval={0}
            angle={wide ? -28 : 0}
            textAnchor={wide ? "end" : "middle"}
            height={wide ? 76 : 36}
            tick={axisTick}
          />
          <YAxis domain={domain} ticks={ticks} unit={unit} tick={axisTick} />
          <Tooltip formatter={(value: number) => [`${value}${unit}`, figure.title]} />
          <Bar dataKey="value" name={figure.title} fill={color} barSize={wide ? 34 : 48} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </ChartFigure>
);

const GroupedBarChart: React.FC<GroupedBarChartProps> = ({
  data,
  unit,
  series,
  domain,
  ticks,
  wide = false,
  ...figure
}) => (
  <ChartFigure {...figure}>
    <div className={wide ? "h-full min-w-[560px]" : "h-full min-w-[280px]"}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 14, right: 12, bottom: wide ? 60 : 16, left: 0 }}>
          <CartesianGrid stroke={palette.grid} vertical={false} />
          <XAxis
            dataKey="visit"
            interval={0}
            angle={wide ? -28 : 0}
            textAnchor={wide ? "end" : "middle"}
            height={wide ? 76 : 36}
            tick={axisTick}
          />
          <YAxis domain={domain} ticks={ticks} unit={unit} tick={axisTick} />
          <Tooltip formatter={(value: number) => [`${value}${unit}`, ""]} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          {series.map((item) => (
            <Bar
              key={item.key}
              dataKey={item.key}
              name={item.name}
              fill={item.color}
              barSize={wide ? 22 : 30}
              radius={[5, 5, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  </ChartFigure>
);

const DoughnutChart: React.FC<{
  title: string;
  description: string;
  accessibleSummary: string;
  data: Array<{ name: string; value: number }>;
  colors?: string[];
}> = ({ title, description, accessibleSummary, data, colors = [palette.teal, palette.gold] }) => (
  <ChartFigure title={title} description={description} accessibleSummary={accessibleSummary}>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius="48%"
          outerRadius="72%"
          paddingAngle={2}
          label={({ value }) => `${value}${title.includes("relief") || title.includes("ROM") ? "%" : ""}`}
        >
          {data.map((item, index) => (
            <Cell key={`${item.name}-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={44} wrapperStyle={{ fontSize: 10 }} />
      </PieChart>
    </ResponsiveContainer>
  </ChartFigure>
);

const cervicalVisits = [
  "Before treatment",
  "After 7 sessions",
];

const cervicalPain: BarPoint[] = [
  { visit: cervicalVisits[0], value: 8 },
  { visit: cervicalVisits[1], value: 1 },
];

const cervicalRom: GroupedBarPoint[] = [
  { visit: "Flexion", before: 20, after: 80 },
  { visit: "Extension", before: 20, after: 70 },
  { visit: "Right lateral flexion", before: 20, after: 45 },
  { visit: "Left lateral flexion", before: 25, after: 45 },
  { visit: "Right rotation", before: 25, after: 70 },
  { visit: "Left rotation", before: 30, after: 70 },
];

const cervicalSessionPain: BarPoint[] = [
  "Day 1",
  "Day 2",
  "Day 3",
  "Day 4",
  "Day 5",
  "Day 6",
  "Day 7",
  "After session 7",
].map((visit, index) => ({ visit, value: 8 - index }));

const lumbarPain: BarPoint[] = [
  { visit: "Before treatment", value: 9 },
  { visit: "After 7 sessions", value: 1 },
];

const lumbarRom: GroupedBarPoint[] = [
  { visit: "Flexion", before: 30, after: 60 },
  { visit: "Extension", before: 15, after: 35 },
  { visit: "Right lateral flexion", before: 10, after: 20 },
  { visit: "Left lateral flexion", before: 10, after: 20 },
  { visit: "Right rotation", before: 8, after: 18 },
  { visit: "Left rotation", before: 8, after: 18 },
];

const lumbarEqVas: BarPoint[] = [
  { visit: "Before treatment", value: 35 },
  { visit: "After 7 sessions", value: 85 },
];

const meniscusVisits = [
  "Baseline",
  "After 8 sessions",
  "4 weeks after programme",
  "3 months",
  "6 months",
];

const meniscusPain: GroupedBarPoint[] = [
  { visit: meniscusVisits[0], activity: 7, rest: 5 },
  { visit: meniscusVisits[1], activity: 2, rest: 1 },
  { visit: meniscusVisits[2], activity: 1, rest: 0 },
  { visit: meniscusVisits[3], activity: 1, rest: 0 },
  { visit: meniscusVisits[4], activity: 1, rest: 0 },
];

const meniscusLysholm: BarPoint[] = [58, 86, 88, 90, 92].map((value, index) => ({
  visit: meniscusVisits[index],
  value,
}));

const meniscusFlexion: BarPoint[] = [95, 130, 132, 135, 135].map((value, index) => ({
  visit: meniscusVisits[index],
  value,
}));

const meniscusExtensionDeficit: BarPoint[] = [5, 0, 0, 0, 0].map((value, index) => ({
  visit: meniscusVisits[index],
  value,
}));

const meniscusGirthDifference: BarPoint[] = [1.5, 0, 0, 0, 0].map((value, index) => ({
  visit: meniscusVisits[index],
  value,
}));

const cervicalReliefData = [
  { name: "Midpoint of reported 70–80% relief range", value: 75 },
  { name: "Arithmetic complement, not measured", value: 25 },
];

const cervicalRomSummaryData = [
  { name: "Mean movement-specific ROM before", value: 38.7 },
  { name: "Arithmetic complement", value: 61.3 },
];

const lumbarReliefData = [
  { name: "Patient-reported overall relief", value: 89 },
  { name: "Arithmetic complement, not measured", value: 11 },
];

const CervicalCharts: React.FC = () => (
  <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <SingleBarChart
      title="Pain intensity (VAS)"
      description="Visual Analogue Scale, 0–10, before care and after seven sessions."
      accessibleSummary="VAS pain changed from 8 out of 10 before treatment to 1 out of 10 after seven sessions."
      data={cervicalPain}
      unit="/10"
      color={palette.navy}
      domain={[0, 10]}
      ticks={[0, 2, 4, 6, 8, 10]}
    />

    <GroupedBarChart
      title="Cervical range of motion"
      description="Goniometer measurements in degrees before and after seven sessions."
      accessibleSummary="Flexion 20 to 80 degrees; extension 20 to 70; right lateral flexion 20 to 45; left lateral flexion 25 to 45; right rotation 25 to 70; left rotation 30 to 70."
      data={cervicalRom}
      unit="°"
      wide
      series={[
        { key: "before", name: "Before", color: palette.gold },
        { key: "after", name: "After 7 sessions", color: palette.teal },
      ]}
    />

    <SingleBarChart
      title="Session-by-session VAS"
      description="Intermediate values follow the case statement of a one-point decrease per session; they are not separately itemised records."
      accessibleSummary="The case reports VAS 8 on Day 1, followed by derived values of 7, 6, 5, 4, 3, and 2 on Days 2 to 7, then VAS 1 after session 7. Intermediate values are derived, not separate measurements."
      data={cervicalSessionPain}
      unit="/10"
      color={palette.teal}
      domain={[0, 10]}
      ticks={[0, 2, 4, 6, 8, 10]}
      wide
    />

    <DoughnutChart
      title="Average cervical ROM before treatment"
      description="Equal-weight mean of movement-specific percentages of normal range; a descriptive calculation, not a validated function score."
      accessibleSummary="Mean movement-specific cervical ROM before treatment was 38.7 percent of the listed normal values; 61.3 percent is the arithmetic complement."
      data={cervicalRomSummaryData}
      colors={[palette.teal, palette.grid]}
    />

    <DoughnutChart
      title="Patient-reported overall relief"
      description="75% is the midpoint of the reported 70–80% range. The remaining 25% is an arithmetic complement, not a measured residual symptom score."
      accessibleSummary="The patient reported approximately 70 to 80 percent overall relief. The chart displays the 75 percent midpoint and its arithmetic complement, not a measured pain score."
      data={cervicalReliefData}
      colors={[palette.teal, palette.grid]}
    />
  </div>
);

const Eq5dDistributionChart: React.FC<{
  title: string;
  levels: Array<{ name: string; value: number }>;
  accessibleSummary: string;
}> = ({ title, levels, accessibleSummary }) => (
  <DoughnutChart
    title={title}
    description="Count of the five EQ-5D-5L dimensions at each ordinal level. This is not an EQ-5D index score."
    accessibleSummary={accessibleSummary}
    data={levels}
    colors={palette.ordinal}
  />
);

const LumbarCharts: React.FC = () => (
  <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <SingleBarChart
      title="Pain intensity (VAS)"
      description="Visual Analogue Scale, 0–10, before care and after seven sessions."
      accessibleSummary="VAS pain changed from 9 out of 10 before treatment to 1 out of 10 after seven sessions."
      data={lumbarPain}
      unit="/10"
      color={palette.navy}
      domain={[0, 10]}
      ticks={[0, 2, 4, 6, 8, 10]}
    />

    <GroupedBarChart
      title="Lumbar range of motion"
      description="Goniometer measurements in degrees before and after seven sessions."
      accessibleSummary="Flexion 30 to 60 degrees; extension 15 to 35; right and left lateral flexion 10 to 20 each; right and left rotation 8 to 18 each."
      data={lumbarRom}
      unit="°"
      wide
      series={[
        { key: "before", name: "Before", color: palette.gold },
        { key: "after", name: "After 7 sessions", color: palette.teal },
      ]}
    />

    <SingleBarChart
      title="EQ VAS health rating"
      description="Patient-rated health Visual Analogue Scale, 0–100."
      accessibleSummary="EQ VAS changed from 35 out of 100 before treatment to 85 out of 100 after seven sessions."
      data={lumbarEqVas}
      unit="/100"
      color={palette.teal}
      domain={[0, 100]}
      ticks={[0, 20, 40, 60, 80, 100]}
    />

    <Eq5dDistributionChart
      title="EQ-5D-5L dimensions before treatment"
      levels={[
        { name: "Level 3", value: 2 },
        { name: "Level 4", value: 3 },
      ]}
      accessibleSummary="Before treatment, two EQ-5D-5L dimensions were at level 3 and three were at level 4. Levels are ordinal categories."
    />

    <Eq5dDistributionChart
      title="EQ-5D-5L dimensions after treatment"
      levels={[
        { name: "Level 1", value: 4 },
        { name: "Level 2", value: 1 },
      ]}
      accessibleSummary="After treatment, four EQ-5D-5L dimensions were at level 1 and one was at level 2. Levels are ordinal categories."
    />

    <DoughnutChart
      title="Patient-reported overall relief"
      description="89% was reported by the patient; 11% is an arithmetic complement, not a separately measured residual symptom score."
      accessibleSummary="Patient-reported overall relief was 89 percent. The 11 percent remainder is an arithmetic complement and was not separately measured."
      data={lumbarReliefData}
      colors={[palette.teal, palette.grid]}
    />
  </div>
);

const MeniscusCharts: React.FC = () => (
  <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <GroupedBarChart
      title="Activity and rest pain (VAS)"
      description="Pain ratings on the source case’s 0–10 scale, from baseline through six months."
      accessibleSummary="Activity VAS: 7, 2, 1, 1, 1. Rest VAS: 5, 1, 0, 0, 0. Visits are baseline, after eight sessions, four weeks after the programme, three months, and six months."
      data={meniscusPain}
      unit="/10"
      wide
      domain={[0, 10]}
      ticks={[0, 2, 4, 6, 8, 10]}
      series={[
        { key: "activity", name: "Activity pain", color: palette.navy },
        { key: "rest", name: "Pain at rest", color: palette.teal },
      ]}
    />

    <SingleBarChart
      title="Lysholm Knee Score"
      description="Patient-reported knee score, reproduced at each recorded review."
      accessibleSummary="Lysholm score was 58 at baseline, 86 after eight sessions, 88 four weeks after the programme, 90 at three months, and 92 at six months."
      data={meniscusLysholm}
      unit=""
      color={palette.lavender}
      domain={[0, 100]}
      ticks={[0, 20, 40, 60, 80, 100]}
      wide
    />

    <SingleBarChart
      title="Knee flexion"
      description="Goniometer-measured flexion in degrees."
      accessibleSummary="Flexion was 95 degrees at baseline, 130 after eight sessions, 132 four weeks after the programme, and 135 at both three- and six-month reviews."
      data={meniscusFlexion}
      unit="°"
      color={palette.teal}
      domain={[0, 150]}
      ticks={[0, 30, 60, 90, 120, 150]}
      wide
    />

    <SingleBarChart
      title="Knee extension deficit"
      description="Recorded deficit in degrees; zero indicates no extension deficit."
      accessibleSummary="Extension deficit was 5 degrees at baseline, then 0 degrees after eight sessions and at all later recorded reviews."
      data={meniscusExtensionDeficit}
      unit="°"
      color={palette.gold}
      domain={[0, 6]}
      ticks={[0, 1, 2, 3, 4, 5, 6]}
      wide
    />

    <SingleBarChart
      title="Mid-patellar girth difference"
      description="Difference from the contralateral side, in centimetres."
      accessibleSummary="Girth difference was 1.5 centimetres at baseline and 0 centimetres at all four later reviews."
      data={meniscusGirthDifference}
      unit=" cm"
      color={palette.navy}
      domain={[0, 2]}
      ticks={[0, 0.5, 1, 1.5, 2]}
      wide
    />

    <SingleBarChart
      title="Single-leg squat depth"
      description="Recorded depth after eight sessions and at six months. No baseline angle is assigned because the patient could not perform the task."
      accessibleSummary="Single-leg squat depth was 45 degrees after eight sessions and 70 degrees at the six-month review. Baseline performance was unable due to pain or apprehension, so no numerical baseline is shown."
      data={[
        { visit: "After 8 sessions", value: 45 },
        { visit: "6-month review", value: 70 },
      ]}
      unit="°"
      color={palette.lavender}
      domain={[0, 90]}
      ticks={[0, 15, 30, 45, 60, 75, 90]}
    />
  </div>
);

const chartSectionLabels: Record<CaseStudyKey, string> = {
  cervical: "cervical-case-statistical-charts-heading",
  lumbar: "lumbar-case-statistical-charts-heading",
  medial_meniscus: "medial-meniscus-case-statistical-charts-heading",
};

const chartSectionTitles: Record<CaseStudyKey, string> = {
  cervical: "Statistical Charts — Cervical Case",
  lumbar: "Statistical Charts — Lumbar Case",
  medial_meniscus: "Statistical Charts — Medial Meniscus Case",
};

const CaseStudyCharts: React.FC<CaseStudyChartsProps> = ({ caseStudy }) => (
  <section
    id={`${caseStudy}-statistical-charts`}
    className="space-y-4"
    aria-labelledby={chartSectionLabels[caseStudy]}
  >
    <h3
      id={chartSectionLabels[caseStudy]}
      className="font-serif text-xl font-bold text-[#081a2e]"
    >
      {chartSectionTitles[caseStudy]}
    </h3>
    {caseStudy === "cervical" && <CervicalCharts />}
    {caseStudy === "lumbar" && <LumbarCharts />}
    {caseStudy === "medial_meniscus" && <MeniscusCharts />}
  </section>
);

export default CaseStudyCharts;
