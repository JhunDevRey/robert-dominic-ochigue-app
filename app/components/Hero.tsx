import Image from "next/image";
import robertPhoto from "@/public/images/robertprof.png";
import { ArrowRightIcon, DownloadIcon, MapPinIcon } from "./icons";
import { SOCIAL_LINKS } from "./social-links";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-ink text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 10%, var(--brand) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        <div>
          <p className="section-label">Business Development Representative</p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Robert Dominic
            <br />
            <span className="text-brand-light">Ochigue</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Qualified, results-driven business development professional with
            four years of experience in outbound prospecting, lead
            generation, and cold calling &mdash; dedicated to exceeding
            performance goals and building long-term client relationships.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
            <MapPinIcon className="size-4 shrink-0 text-brand-light" />
            Ipil-Ipil Drive, Buhangin, Davao City
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light"
            >
              Let&apos;s Connect
              <ArrowRightIcon className="size-4" />
            </a>
            <a
              href="/files/Robert Dominic Ochigue_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              <DownloadIcon className="size-4" />
              Download CV
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-light hover:text-brand-light"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:mx-0 md:ml-auto">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/40 to-transparent blur-2xl"
          />
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/40">
            <Image
              src={robertPhoto}
              alt="Portrait of Robert Dominic Ochigue"
              placeholder="blur"
              sizes="(min-width: 768px) 24rem, 80vw"
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 w-[calc(100%-2.5rem)] -translate-x-1/2 rounded-2xl border border-border bg-surface px-6 py-4 text-center shadow-xl">
            <p className="text-2xl font-semibold text-foreground">4+ Yrs</p>
            <p className="section-label mt-1">Sales &amp; Outreach</p>
          </div>
        </div>
      </div>
    </section>
  );
}
