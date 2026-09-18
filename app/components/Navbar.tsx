"use client";

import { useEffect, useState } from "react";
import { CloseIcon, DownloadIcon, MenuIcon } from "./icons";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter((el): el is Element => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onScroll() {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#top"
          className="font-semibold tracking-tight text-foreground"
        >
          Robert<span className="text-brand">.</span>Ochigue
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-brand after:transition-all ${
                  active === link.href
                    ? "text-brand after:w-full"
                    : "text-muted after:w-0 hover:text-brand hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/files/Robert Dominic Ochigue_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand"
          >
            <DownloadIcon className="size-4" />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    active === link.href
                      ? "bg-surface-muted text-brand"
                      : "text-foreground hover:bg-surface-muted hover:text-brand"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/files/Robert Dominic Ochigue_CV.pdf"
            download
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white"
          >
            <DownloadIcon className="size-4" />
            Download Resume
          </a>
        </div>
      )}

      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-brand to-brand-light transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
