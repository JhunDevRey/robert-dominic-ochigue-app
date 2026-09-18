import Image from "next/image";
import robertPhoto from "@/public/images/robertprof.png";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  DownloadIcon,
  MapPinIcon,
  TargetIcon,
} from "./icons";
import { SOCIAL_LINKS } from "./social-links";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-noise relative overflow-hidden border-b border-border bg-ink text-white"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-32 right-[-10%] size-[28rem] rounded-full bg-brand/40 blur-[100px]" />
        <div
          className="animate-blob absolute bottom-[-15%] left-[-10%] size-[24rem] rounded-full bg-brand-dark/40 blur-[110px]"
          style={{ animationDelay: "-6s" }}
        />
        <div className="absolute inset-0 bg-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </div>

          <p className="section-label mt-6">
            Business Development Representative
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Robert Dominic
            <br />
            <span className="text-gradient">Ochigue</span>
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
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-light hover:shadow-[0_0_30px_-5px_var(--brand-light)]"
            >
              Let&apos;s Connect
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
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
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-light hover:text-brand-light"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-sm md:mx-0 md:ml-auto">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/40 to-transparent blur-2xl"
            />

            <TiltCard>
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
            </TiltCard>

            <div
              aria-hidden
              className="animate-float absolute -left-6 top-10 hidden items-center gap-2 rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 shadow-xl backdrop-blur-sm sm:flex"
            >
              <TargetIcon className="size-4 text-brand-light" />
              <span className="text-xs font-medium text-white/80">
                Lead Generation
              </span>
            </div>

            <div
              aria-hidden
              className="animate-float absolute -right-4 top-1/3 hidden items-center gap-2 rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 shadow-xl backdrop-blur-sm sm:flex"
              style={{ animationDelay: "-3s" }}
            >
              <BriefcaseIcon className="size-4 text-brand-light" />
              <span className="text-xs font-medium text-white/80">
                CRM Systems
              </span>
            </div>

            <div className="absolute -bottom-6 left-1/2 w-[calc(100%-2.5rem)] -translate-x-1/2 rounded-2xl border border-border bg-surface px-6 py-4 text-center shadow-xl">
              <p className="text-2xl font-semibold text-foreground">
                <CountUp end={4} suffix="+ Yrs" />
              </p>
              <p className="section-label mt-1">Sales &amp; Outreach</p>
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 transition-colors hover:text-white/80 sm:flex"
      >
        <span className="section-label !text-white/40">Scroll</span>
        <ChevronDownIcon className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
