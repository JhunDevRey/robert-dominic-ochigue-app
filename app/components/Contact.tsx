import { DownloadIcon, MailIcon, MapPinIcon, PhoneIcon, UsersIcon } from "./icons";

const CONTACT_DETAILS = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "0945 812 6795",
    href: "tel:+639458126795",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "ochiguerobert22@gmail.com",
    href: "mailto:ochiguerobert22@gmail.com",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Ipil-Ipil Drive, Buhangin, Davao City",
  },
];

const REFERENCES = [
  { name: "Bless Dian Buga-as", role: "Supervisor, Six Eleven" },
  { name: "Gae Marie Givella", role: "Owner, Hilltop Crabs & Buffet" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="overflow-hidden rounded-3xl bg-ink text-white">
        <div className="grid gap-12 p-10 sm:p-14 md:grid-cols-2">
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s grow your pipeline together.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Open to business development and sales opportunities in Davao
              City and beyond. Reach out and let&apos;s talk about how I can
              help move your leads down the funnel.
            </p>

            <a
              href="/files/Robert Dominic Ochigue_CV.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
            >
              <DownloadIcon className="size-4" />
              Download Full CV
            </a>
          </div>

          <div className="space-y-4">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-light">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="section-label !text-white/50">{label}</p>
                    <p className="mt-1 font-medium">{value}</p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/10 p-10 sm:p-14">
          <div className="flex items-center gap-3">
            <UsersIcon className="size-5 text-brand-light" />
            <p className="section-label !text-white/50">References</p>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {REFERENCES.map((ref) => (
              <div
                key={ref.name}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <p className="font-medium">{ref.name}</p>
                <p className="mt-0.5 text-sm text-white/60">{ref.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/40">
            Contact details available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
