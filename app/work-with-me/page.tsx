import Link from "next/link";
import { BRAND_KIT, WHATSAPP } from "@/lib/content";
import { BackToHome } from "@/components/BackToHome";
import { WhatsAppIcon } from "@/components/Icons";
import { WorkedWith } from "@/components/WorkedWith";
import { VideoPortfolio } from "@/components/VideoPortfolio";

export const metadata = {
  title: "Work with me, Holly Natasha",
  description:
    "Brand collaborations with Holly Natasha. Short-form video that gets shared and saved, made from Beijing.",
};

function Bar({
  label,
  pct,
  emphasis,
}: {
  label: string;
  pct: number;
  emphasis?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p
          className={`text-sm sm:text-base ${
            emphasis ? "font-bold text-black-coffee" : "text-black-coffee/85"
          }`}
        >
          {label}
        </p>
        <p className="font-mono text-sm text-black-coffee/85">{pct}%</p>
      </div>
      <div className="mt-2 h-1.5 w-full rounded-full bg-line/80 overflow-hidden">
        <div
          className="h-full rounded-full bg-jacarta"
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
    </div>
  );
}

export default function WorkWithMePage() {
  const { demographics } = BRAND_KIT;

  return (
    <>
      <section className="relative bg-cream px-6 pt-10 pb-20 sm:pt-12 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <BackToHome variant="light" />

          <div className="mt-16 sm:mt-20">
            <WorkedWith brands={[...BRAND_KIT.workedWith]} />
          </div>

          <div className="mt-20 sm:mt-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
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
        </div>
      </section>

      <section className="bg-cream-deep px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
                the stats
              </p>
              <h2 className="mt-4 font-serif italic text-3xl sm:text-4xl text-black-coffee">
                {BRAND_KIT.funnel.headline}
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-black-coffee/70">
              data per {BRAND_KIT.statsDate}
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-base sm:text-lg font-normal leading-[1.7] text-black-coffee/85">
            {BRAND_KIT.funnel.body}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {BRAND_KIT.funnelStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white border border-line p-8"
              >
                <p className="font-black tracking-[-0.03em] text-black-coffee text-4xl sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-jacarta">
                  {s.label}
                </p>
                <p className="mt-3 font-serif italic text-sm text-black-coffee/65">
                  {s.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {BRAND_KIT.topStats.map((s) => (
              <div
                key={s.label}
                className="border-t border-line pt-5 flex items-baseline justify-between gap-4"
              >
                <p className="font-mono text-sm text-black-coffee/65">
                  {s.label}
                </p>
                <p className="font-display text-2xl sm:text-3xl text-jacarta tracking-tight">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
            audience
          </p>
          <h2 className="mt-4 font-serif italic text-3xl sm:text-4xl text-black-coffee">
            Who you&apos;ll be reaching<span className="text-jacarta">.</span>
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl bg-white border border-line p-8">
              <p className="font-mono text-sm text-black-coffee/65">gender</p>
              <div className="mt-6 space-y-5">
                <Bar
                  label="Women"
                  pct={demographics.gender.women}
                  emphasis
                />
                <Bar label="Men" pct={demographics.gender.men} />
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-line p-8">
              <p className="font-mono text-sm text-black-coffee/65">age range</p>
              <div className="mt-6 space-y-4">
                {demographics.age.map((a) => (
                  <Bar
                    key={a.range}
                    label={a.range}
                    pct={a.pct}
                    emphasis={a.range === "25–34"}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-line p-8">
              <p className="font-mono text-sm text-black-coffee/65">
                top countries
              </p>
              <div className="mt-6 space-y-5">
                {demographics.countries.map((c) => (
                  <Bar
                    key={c.name}
                    label={c.name}
                    pct={c.pct}
                    emphasis={c.name === "Indonesia"}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-line p-8">
              <p className="font-mono text-sm text-black-coffee/65">top cities</p>
              <div className="mt-6 space-y-5">
                {demographics.cities.map((c) => (
                  <Bar key={c.name} label={c.name} pct={c.pct} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-deep px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <VideoPortfolio videos={BRAND_KIT.videoPortfolio} />
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

      <section className="bg-cream-deep px-6 py-24 sm:py-32">
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
