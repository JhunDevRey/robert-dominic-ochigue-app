import { GraduationCapIcon, LanguagesIcon } from "./icons";

const EDUCATION = [
  {
    school: "University of Mindanao — Davao",
    program: "Bachelor of Science in Business Administration",
    period: "2022",
  },
  {
    school: "Bernardo D. Carpio NHS (Senior High School)",
    program: "Electrical Installation and Maintenance — TVL-EIM",
    period: "2020 — 2021",
  },
  {
    school: "Bernardo D. Carpio NHS",
    program: "Electrical Installation and Maintenance — TVL-EIM",
    period: "2019 — 2020",
  },
];

const LANGUAGES = ["English", "Tagalog"];

export default function Education() {
  return (
    <section
      id="education"
      className="border-y border-border bg-surface-muted/60 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
        <div>
          <p className="section-label">Education</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Academic background.
          </h2>

          <ul className="mt-10 space-y-6">
            {EDUCATION.map((item) => (
              <li
                key={item.school + item.period}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <GraduationCapIcon className="size-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {item.school}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.program}</p>
                  <p className="section-label mt-2 !text-muted">
                    {item.period}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label">Languages</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Fluent in.
          </h2>

          <ul className="mt-10 space-y-4">
            {LANGUAGES.map((lang) => (
              <li
                key={lang}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-5 shadow-sm"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <LanguagesIcon className="size-5" />
                </div>
                <p className="font-semibold text-foreground">{lang}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
