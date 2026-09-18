import { SOCIAL_LINKS } from "./social-links";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-3 text-center text-sm text-muted sm:items-start sm:text-left">
          <p>&copy; {new Date().getFullYear()} Robert Dominic Ochigue.</p>
          <p>Business Development Representative &middot; Davao City, PH</p>
        </div>

        <ul className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand hover:text-brand"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
