import Link from "next/link";
import { FOOTER } from "@/lib/content";
import { ContactIcons } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight uppercase text-black-coffee hover:text-jacarta transition-colors"
            >
              Holly Natasha
            </Link>
            <p className="mt-3 max-w-xs font-serif italic text-base text-black-coffee/70">
              {FOOTER.tagline}
            </p>
          </div>

          <div>
            <p className="font-serif italic text-sm text-jacarta">find me.</p>
            <ul className="mt-4 space-y-3 text-sm">
              {FOOTER.contacts.map((c) => {
                const Icon = ContactIcons[c.kind];
                const isExternal = c.kind !== "mail";
                return (
                  <li key={c.href}>
                    <a
                      href={c.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer noopener" : undefined}
                      className="group inline-flex items-center gap-3 text-black-coffee hover:text-jacarta transition-colors"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-black-coffee group-hover:border-jacarta group-hover:text-jacarta transition-colors">
                        <Icon size={15} />
                      </span>
                      <span className="font-normal underline-offset-4 group-hover:underline">
                        {c.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="font-serif italic text-sm text-jacarta">read.</p>
            <ul className="mt-4 space-y-3 text-sm">
              {FOOTER.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-black-coffee hover:text-jacarta transition-colors underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-center font-serif italic text-sm text-black-coffee/55">
          {FOOTER.bottomLine}
        </p>
      </div>
    </footer>
  );
}
