import { GUIDES } from "@/lib/content";
import { GuideCard } from "@/components/GuideCard";
import { BackToHome } from "@/components/BackToHome";

export const metadata = {
  title: "AI Resources, Holly Natasha",
  description:
    "Free guides, prompts, and workflows for building with AI. By Holly Natasha.",
};

export default function AiResourcesPage() {
  return (
    <>
      <section className="relative bg-cream px-6 pt-10 pb-16 sm:pt-12 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <BackToHome variant="light" />

          <div className="mt-20 sm:mt-28 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
              resources
            </p>
            <h1 className="mt-6 font-display uppercase tracking-[-0.04em] text-black-coffee leading-[0.88] text-[4.5rem] sm:text-[8rem] lg:text-[10rem]">
              <span className="block">AI</span>
              <span className="block">RESOURCES</span>
            </h1>
            <p className="mt-8 max-w-xl mx-auto font-serif italic text-base sm:text-lg text-black-coffee/70">
              Free guides, prompts, and workflows from the videos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-deep px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
            getting started
          </p>
          <h2 className="mt-4 font-serif italic text-3xl sm:text-4xl text-black-coffee">
            Start anywhere. Most things connect<span className="text-jacarta">.</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g) => (
              <GuideCard
                key={g.slug}
                slug={g.slug}
                category={g.category}
                title={g.title}
                description={g.description}
                readMinutes={g.readMinutes}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
