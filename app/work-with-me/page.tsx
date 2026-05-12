import Link from "next/link";
import { BRAND_KIT, WHATSAPP } from "@/lib/content";
import { BackToHome } from "@/components/BackToHome";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata = {
  title: "Work with me, Holly Natasha",
  description:
    "Brand collaborations with Holly Natasha. Short-form video, demos, paid ads, and tutorials from a Tsinghua student-builder in Beijing.",
};

export default function WorkWithMePage() {
  return (
    <>
      <section className="relative bg-cream px-6 pt-10 pb-20 sm:pt-12 sm:pb-28">
        <div className="mx-auto max-w-5xl">
          <BackToHome variant="light" />

          <p className="mt-20 sm:mt-28 text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
            {BRAND_KIT.hero.label}
          </p>
          <h1 className="mt-6 font-serif italic text-6xl sm:text-8xl lg:text-[9rem] text-black-coffee leading-[0.95]">
            {BRAND_KIT.hero.title}
          </h1>
          <p className="mt-10 max-w-2xl text-base sm:text-lg font-normal leading-[1.8] text-black-coffee/85">
            {BRAND_KIT.hero.intro}
          </p>

          <a
            href={WHATSAPP.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-jacarta px-7 py-4 text-cream text-sm font-semibold uppercase tracking-[0.2em] hover:bg-black-coffee transition-colors"
          >
            <WhatsAppIcon size={18} />
            Message on WhatsApp
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      <section className="bg-cream-deep px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
            the stats
          </p>
          <h2 className="mt-4 font-serif italic text-3xl sm:text-4xl text-black-coffee">
            Reach, by the numbers<span className="text-jacarta">.</span>
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BRAND_KIT.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white border border-line p-8"
              >
                <p className="font-black tracking-[-0.03em] text-black-coffee text-5xl sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-jacarta">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 font-serif italic text-sm text-black-coffee/65">
            {BRAND_KIT.notes}
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
            content i make
          </p>
          <h2 className="mt-4 font-serif italic text-3xl sm:text-4xl text-black-coffee">
            Next-level content for your brand<span className="text-jacarta">.</span>
          </h2>

          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {BRAND_KIT.contentTypes.map((c, i) => (
              <div
                key={c.tag}
                className="border-t border-line pt-6 flex items-start gap-6"
              >
                <p className="font-serif italic text-sm text-jacarta shrink-0 w-8">
                  0{i + 1}
                </p>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-jacarta">
                    {c.tag}
                  </p>
                  <p className="mt-3 text-base sm:text-lg font-normal leading-[1.7] text-black-coffee/85">
                    {c.blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
              audience
            </p>
            <h2 className="mt-4 font-serif italic text-3xl sm:text-4xl text-black-coffee">
              Who you&apos;ll be reaching<span className="text-jacarta">.</span>
            </h2>

            <ul className="mt-8 space-y-4 text-base sm:text-lg font-normal leading-[1.7] text-black-coffee/85">
              {BRAND_KIT.audience.map((a, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-serif italic text-jacarta shrink-0">
                    ·
                  </span>
                  <span>{a.line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
              past work
            </p>
            <h2 className="mt-4 font-serif italic text-3xl sm:text-4xl text-black-coffee">
              Where I&apos;ve shown up<span className="text-jacarta">.</span>
            </h2>

            <ul className="mt-8 space-y-4 text-base sm:text-lg font-normal leading-[1.7] text-black-coffee/85">
              {BRAND_KIT.pastWork.map((p, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-serif italic text-jacarta shrink-0">
                    ·
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
            collaborate
          </p>
          <h2 className="mt-6 font-serif italic text-4xl sm:text-6xl lg:text-7xl text-black-coffee leading-[1.05]">
            {BRAND_KIT.cta.headline}
          </h2>
          <p className="mt-8 text-base sm:text-lg font-normal leading-[1.8] text-black-coffee/85">
            {BRAND_KIT.cta.body}
          </p>

          <a
            href={WHATSAPP.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-jacarta px-8 py-5 text-cream text-sm sm:text-base font-semibold uppercase tracking-[0.2em] hover:bg-black-coffee transition-colors"
          >
            <WhatsAppIcon size={20} />
            {BRAND_KIT.cta.buttonLabel}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <p className="mt-6 font-mono text-sm text-black-coffee/65">
            {WHATSAPP.raw}
          </p>

          <p className="mt-10 font-serif italic text-sm text-black-coffee/55">
            Prefer email?{" "}
            <Link
              href="mailto:hollysinq@gmail.com"
              className="text-jacarta hover:text-black-coffee transition-colors underline-offset-4 hover:underline"
            >
              hollysinq@gmail.com
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
