import { VENTURES } from "@/lib/content";

type Venture = {
  name: string;
  href: string;
  logoSrc?: string;
};

function VentureMark({ venture }: { venture: Venture }) {
  const isLinked = venture.href !== "#";

  const inner = venture.logoSrc ? (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={venture.logoSrc}
      alt={venture.name}
      className="h-14 sm:h-16 w-auto object-contain"
    />
  ) : (
    <span className="font-display text-2xl sm:text-3xl tracking-tight text-black-coffee whitespace-nowrap">
      {venture.name}
    </span>
  );

  const baseClass =
    "flex h-20 sm:h-24 items-center justify-center transition-opacity";

  return isLinked ? (
    <a
      href={venture.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={venture.name}
      className={`${baseClass} hover:opacity-60`}
    >
      {inner}
    </a>
  ) : (
    <div className={baseClass}>{inner}</div>
  );
}

export function BusinessShowcase() {
  return (
    <section className="bg-cream py-24 sm:py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
          projects
        </p>
        <h2 className="mt-5 text-center font-serif italic text-4xl sm:text-5xl lg:text-6xl text-black-coffee leading-[1.05]">
          Projects<span className="text-jacarta">.</span>
        </h2>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 items-center">
          {VENTURES.map((v) => (
            <VentureMark key={v.name} venture={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
