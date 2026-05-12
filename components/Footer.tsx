import Link from "next/link";
import { FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-black-coffee text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-2xl font-black uppercase tracking-tighter">
              HOLLY NATASHA
            </p>
            <p className="mt-3 max-w-xs text-sm text-cream/70">
              {FOOTER.tagline}
            </p>
          </div>

          <div>
            <p className="font-serif italic text-sm text-wisteria">Contact.</p>
            <ul className="mt-3 space-y-2 text-sm">
              {FOOTER.contacts.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    className="hover:underline underline-offset-4 decoration-cream/60"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif italic text-sm text-wisteria">Pages.</p>
            <ul className="mt-3 space-y-2 text-xs font-bold uppercase tracking-[0.2em]">
              {FOOTER.quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:underline underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-center font-serif italic text-sm text-wisteria">
          {FOOTER.bottomLine}
        </p>
      </div>
    </footer>
  );
}
