import { VENTURES } from "@/lib/content";
import { BusinessCard } from "./BusinessCard";

export function BusinessShowcase() {
  return (
    <section className="bg-cream py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
          ventures
        </p>
        <h2 className="mt-5 text-center font-serif italic text-4xl sm:text-5xl lg:text-6xl text-black-coffee leading-[1.05]">
          Things I&apos;m building<span className="text-jacarta">.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:gap-8 md:grid-cols-2">
          {VENTURES.map((v, i) => (
            <BusinessCard
              key={v.name}
              index={i}
              name={v.name}
              tagline={v.tagline}
              href={v.href}
              accent={v.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
