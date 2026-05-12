import { VENTURES } from "@/lib/content";
import { BusinessCard } from "./BusinessCard";

export function BusinessShowcase() {
  return (
    <section className="bg-gradient-to-b from-bright-gray to-wisteria py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-jacarta">
          VENTURES
        </p>
        <h2 className="mt-4 text-center text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-black-coffee">
          Things I&apos;m building<span className="text-jacarta">.</span>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {VENTURES.map((v) => (
            <BusinessCard
              key={v.name}
              name={v.name}
              tagline={v.tagline}
              href={v.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
