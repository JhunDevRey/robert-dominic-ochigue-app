import { BriefcaseIcon } from "./icons";
import Reveal from "./Reveal";

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
      <Reveal className="max-w-2xl">
        <p className="section-label">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Where I&apos;ve made an impact.
        </h2>
      </Reveal>

      <ol className="mt-12 space-y-6">
        {EXPERIENCE.map((job, index) => (
          <li key={`${job.role}-${job.period}`}>
            <Reveal
              delay={index * 120}
              className={`group relative overflow-hidden rounded-2xl border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                job.current
                  ? "border-brand/40 shadow-[0_0_0_1px_var(--brand)_inset]"
                  : "border-border hover:border-brand/30"
              }`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-8 select-none font-mono text-8xl font-bold text-foreground/[0.04] transition-colors duration-300 group-hover:text-brand/[0.08] sm:text-9xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex flex-wrap items-center gap-3">
                <span
                  className={`flex size-10 items-center justify-center rounded-full border ${
                    job.current
                      ? "border-brand bg-brand text-white"
                      : "border-border bg-surface-muted text-muted"
                  }`}
                >
                  <BriefcaseIcon className="size-4" />
                </span>
                <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <span className="section-label !text-muted">
                    {job.period}
                  </span>
                </div>
              </div>

              <div className="relative mt-3 flex flex-wrap items-center gap-3 pl-[3.25rem]">
                <p className="text-sm font-medium text-brand">
                  {job.company}
                </p>
                {job.current && (
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-brand uppercase">
                    Current
                  </span>
                )}
              </div>

              <ul className="relative mt-3 space-y-1.5 pl-[3.25rem] text-sm leading-relaxed text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
