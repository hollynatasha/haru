import { SPEAKING } from "@/lib/content";

function StageMark({ name }: { name: string }) {
  if (name === "TEDx") {
    return (
      <span className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.05em] text-black-coffee leading-none">
        TED
        <span className="ml-[0.05em] text-2xl sm:text-3xl lg:text-4xl text-jacarta">
          x
        </span>
      </span>
    );
  }

  if (name === "IdeaCloud") {
    return (
      <span className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-black-coffee lowercase leading-none">
        idea<span className="text-jacarta">cloud</span>
      </span>
    );
  }

  return (
    <span className="font-display text-3xl sm:text-4xl text-black-coffee tracking-tight">
      {name}
    </span>
  );
}

export function SpeakerCallout() {
  return (
    <section className="bg-cream py-20 sm:py-24 px-6 border-y border-line/60">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
          on stage
        </p>
        <h2 className="mt-4 font-serif italic text-4xl sm:text-5xl text-black-coffee leading-[1.05]">
          {SPEAKING.headline.replace(/\.$/, "")}
          <span className="text-jacarta">.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-black-coffee/85 leading-relaxed">
          {SPEAKING.body}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-serif italic text-base text-jacarta">
          {SPEAKING.topics.map((t, i) => (
            <span key={t} className="inline-flex items-center gap-x-6">
              <span>{t}</span>
              {i < SPEAKING.topics.length - 1 && (
                <span className="text-jacarta/40">·</span>
              )}
            </span>
          ))}
        </div>

        <div className="mt-12 flex items-end justify-center gap-12 sm:gap-16">
          {SPEAKING.pastStages.map((name) => (
            <StageMark key={name} name={name} />
          ))}
        </div>

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-black-coffee/55">
          past stages
        </p>
      </div>
    </section>
  );
}
