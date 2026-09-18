import {
  BriefcaseIcon,
  CheckIcon,
  EarIcon,
  PhoneCallIcon,
  TargetIcon,
} from "./icons";

const SKILLS = [
  { label: "Lead Generation & Prospecting", icon: TargetIcon },
  { label: "Outbound Cold Calling", icon: PhoneCallIcon },
  { label: "Inbound & Outbound Sales", icon: BriefcaseIcon },
  { label: "Lead Qualification", icon: CheckIcon },
  { label: "Business Development", icon: BriefcaseIcon },
  { label: "Active Listening", icon: EarIcon },
  { label: "Sales Target Achievement", icon: TargetIcon },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-surface-muted/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="section-label">Core Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What I bring to the table.
          </h2>
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {SKILLS.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground shadow-sm"
            >
              <Icon className="size-4 text-brand" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
