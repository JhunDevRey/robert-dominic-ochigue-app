import { BriefcaseIcon, PhoneCallIcon, TargetIcon } from "./icons";

const HIGHLIGHTS = [
  {
    icon: TargetIcon,
    title: "Lead Generation & Prospecting",
    description:
      "Identifying and qualifying high-potential leads through disciplined outbound prospecting.",
  },
  {
    icon: PhoneCallIcon,
    title: "Outbound Cold Calling",
    description:
      "Confident, consistent cold-calling and business-to-business outreach that opens doors.",
  },
  {
    icon: BriefcaseIcon,
    title: "CRM & Pipeline Management",
    description:
      "Keeping customer and lead data accurate and up to date to support a healthy sales pipeline.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p className="section-label">About Me</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Turning conversations into opportunities.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            I am a qualified and professional business development
            representative with four years of experience with proven
            capabilities in outbound prospecting, lead generation, and cold
            calling. I&apos;m dedicated to exceeding performance goals and
            contributing to long-term client and company success.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <dt className="section-label">Experience</dt>
              <dd className="mt-2 text-2xl font-semibold text-foreground">
                4+ Years
              </dd>
            </div>
            <div>
              <dt className="section-label">Languages</dt>
              <dd className="mt-2 text-2xl font-semibold text-foreground">
                English &amp; Tagalog
              </dd>
            </div>
          </dl>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md sm:first:col-span-2"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
