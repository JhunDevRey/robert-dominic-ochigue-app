import {
  BriefcaseIcon,
  CheckIcon,
  EarIcon,
  PhoneCallIcon,
  TargetIcon,
} from "./icons";
import Reveal from "./Reveal";

const SKILLS = [
  { label: "Lead Generation & Prospecting", icon: TargetIcon },
  { label: "Outbound Cold Calling", icon: PhoneCallIcon },
  { label: "Inbound & Outbound Sales", icon: BriefcaseIcon },
  { label: "Lead Qualification", icon: CheckIcon },
  { label: "Business Development", icon: BriefcaseIcon },
  { label: "Active Listening", icon: EarIcon },
  { label: "Sales Target Achievement", icon: TargetIcon },
];

function Pill({ label, icon: Icon }: (typeof SKILLS)[number]) {
  return (
    <span className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium whitespace-nowrap text-foreground shadow-sm">
      <Icon className="size-4 text-brand" />
      {label}
    </span>
  );
}

export default function Skills() {
  const reversed = [...SKILLS].reverse();

  return (
    <section
      id="skills"
      className="overflow-hidden border-y border-border bg-surface-muted/60 py-24"
    >
      <Reveal className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="section-label">Core Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What I bring to the table.
          </h2>
        </div>
      </Reveal>

      <div className="mt-10 space-y-4">
        <div className="marquee">
          <ul className="marquee-track" aria-label="Core skills">
            {[...SKILLS, ...SKILLS].map((skill, i) => (
              <li key={`${skill.label}-a-${i}`} aria-hidden={i >= SKILLS.length}>
                <Pill {...skill} />
              </li>
            ))}
          </ul>
        </div>

        <div className="marquee">
          <ul className="marquee-track marquee-reverse" aria-hidden="true">
            {[...reversed, ...reversed].map((skill, i) => (
              <li key={`${skill.label}-b-${i}`}>
                <Pill {...skill} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
