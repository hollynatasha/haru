import { GUIDES } from "@/lib/content";
import { GuideCard } from "@/components/GuideCard";

export const metadata = {
  title: "AI Resources, Holly Natasha",
  description:
    "Free guides, prompts, and workflows for building with AI. By Holly Natasha.",
};

export default function AiResourcesPage() {
  return (
    <>
      <section className="flex h-[70vh] min-h-[500px] items-center justify-center bg-jacarta px-6 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cream">
            RESOURCES
          </p>
          <h1 className="mt-6 font-black uppercase tracking-[-0.05em] text-cream leading-[0.9] text-[5rem] sm:text-[8rem] lg:text-[10rem]">
            <span className="block">AI</span>
            <span className="block">RESOURCES</span>
          </h1>
          <p className="mt-8 font-serif italic text-base sm:text-lg text-cream/85">
            Free guides, prompts, and workflows from the videos.
          </p>
        </div>
      </section>

      <section className="bg-bright-gray px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-jacarta">
            GETTING STARTED
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g) => (
              <GuideCard
                key={g.title}
                category={g.category}
                title={g.title}
                description={g.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
