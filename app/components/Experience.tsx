import { BriefcaseIcon } from "./icons";

const EXPERIENCE = [
  {
    role: "Business Development Representative",
    company: "Really Great Company",
    period: "2023 — 2026",
    points: [
      "Generated and qualified leads through outbound prospecting.",
      "Conducted cold calls and business-to-business outreach.",
      "Maintained accurate customer and lead information in CRM systems.",
    ],
    current: true,
  },
  {
    role: "Waiter / Server",
    company: "Really Great Company",
    period: "2023 — 2023",
    points: [
      "Handled customer requests, concerns, and special orders.",
      "Welcomed and assisted customers professionally.",
      "Took and accurately processed food and beverage orders.",
    ],
  },
  {
    role: "Head Cashier",
    company: "Really Great Company",
    period: "2022 — 2023",
    points: [
      "Supervised and supported cashier staff.",
      "Managed daily cash handling and POS transactions.",
      "Delivered efficient and professional customer service.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="max-w-2xl">
        <p className="section-label">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Where I&apos;ve made an impact.
        </h2>
      </div>

      <ol className="mt-12 space-y-10 border-l border-border pl-8">
        {EXPERIENCE.map((job) => (
          <li key={`${job.role}-${job.period}`} className="relative">
            <span
              className={`absolute -left-[2.55rem] flex size-8 items-center justify-center rounded-full border ${
                job.current
                  ? "border-brand bg-brand text-white"
                  : "border-border bg-surface text-muted"
              }`}
            >
              <BriefcaseIcon className="size-4" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-foreground">
                {job.role}
              </h3>
              <span className="section-label !text-muted">{job.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-brand">
              {job.company}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-muted" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
