"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

type Video = {
  tag: string;
  href: string;
  category?: string;
  logoSrc?: string;
  logoWide?: boolean;
  format?: string;
};

const ALL = "All work";

type Accent = {
  plate: string;
  pill: string;
  dot: string;
  chipOn: string;
};

const ACCENTS: Record<string, Accent> = {
  "AI & Tech": {
    plate: "bg-jacarta/[0.06] group-hover:bg-jacarta/[0.12]",
    pill: "bg-jacarta text-cream",
    dot: "bg-jacarta",
    chipOn: "bg-jacarta text-cream border-jacarta",
  },
  "Travel & Tour": {
    plate: "bg-blush/60 group-hover:bg-blush",
    pill: "bg-blush-deep text-cream",
    dot: "bg-blush-deep",
    chipOn: "bg-blush-deep text-cream border-blush-deep",
  },
  Education: {
    plate: "bg-cream-deep group-hover:bg-cream-deep/80",
    pill: "bg-jacarta-soft text-cream",
    dot: "bg-jacarta-soft",
    chipOn: "bg-jacarta-soft text-cream border-jacarta-soft",
  },
};

const FALLBACK: Accent = {
  plate: "bg-cream-deep group-hover:bg-cream-deep/80",
  pill: "bg-black-coffee text-cream",
  dot: "bg-black-coffee",
  chipOn: "bg-black-coffee text-cream border-black-coffee",
};

function accentFor(category?: string) {
  return (category && ACCENTS[category]) || FALLBACK;
}

function PlayIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden>
      <path d="M4.5 2.6 13 8l-8.5 5.4V2.6Z" fill="currentColor" />
    </svg>
  );
}

function CardArtwork({ video }: { video: Video }) {
  const [ok, setOk] = useState<boolean>(Boolean(video.logoSrc));
  const accent = accentFor(video.category);

  return (
    <div
      className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-line transition-colors duration-300 ${accent.plate}`}
    >
      <span
        className={`absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${accent.pill}`}
      >
        {video.category ?? "Campaign"}
      </span>

      {video.logoSrc && ok ? (
        <div className="flex h-full w-full items-center justify-center px-8 py-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.logoSrc}
            alt={video.tag}
            onError={() => setOk(false)}
            className={`object-contain transition-transform duration-300 group-hover:scale-[1.04] ${
              video.logoWide ? "max-h-16 w-full" : "max-h-24 max-w-[62%]"
            }`}
          />
        </div>
      ) : (
        <span className="font-display text-4xl uppercase tracking-[-0.02em] text-black-coffee/70">
          {video.tag}
        </span>
      )}

      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black-coffee/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors group-hover:bg-black-coffee">
        <PlayIcon size={12} />
        reel
      </span>
    </div>
  );
}

export function VideoPortfolio({ videos }: { videos: readonly Video[] }) {
  const categories = useMemo(
    () => [
      ALL,
      ...Array.from(
        new Set(videos.map((v) => v.category).filter(Boolean) as string[]),
      ),
    ],
    [videos],
  );
  const [active, setActive] = useState<string>(ALL);

  const shown = useMemo(
    () => (active === ALL ? videos : videos.filter((v) => v.category === active)),
    [videos, active],
  );

  const countFor = (c: string) =>
    c === ALL ? videos.length : videos.filter((v) => v.category === c).length;

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
          portfolio
        </p>
        <h2 className="mt-4 font-times text-4xl sm:text-5xl lg:text-6xl text-black-coffee leading-[1.05]">
          {videos.length} brand{" "}
          <span className="font-display text-jacarta tracking-[-0.02em]">
            campaigns
          </span>
          <span className="text-jacarta">.</span>
        </h2>
        <p className="mt-4 max-w-lg font-times text-base sm:text-lg text-black-coffee/70">
          Reels made for AI tools, travel brands, and universities. Filter by
          category, tap any card to watch the real thing on Instagram.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => {
            const on = active === c;
            const accent = c === ALL ? FALLBACK : accentFor(c);
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={on}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  on
                    ? accent.chipOn
                    : "border-line bg-white text-black-coffee/70 hover:border-jacarta/40 hover:text-black-coffee"
                }`}
              >
                {c !== ALL && (
                  <span
                    className={`h-2 w-2 rounded-full ${on ? "bg-cream" : accent.dot}`}
                  />
                )}
                {c}
                <span
                  className={`font-mono text-[10px] ${on ? "text-cream/70" : "text-black-coffee/40"}`}
                >
                  {String(countFor(c)).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-12 grid gap-x-5 gap-y-9 grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((video) => (
            <motion.a
              key={video.tag}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              href={video.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col"
            >
              <CardArtwork video={video} />

              <div className="mt-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-display text-lg sm:text-xl uppercase leading-[1.1] tracking-[-0.02em] text-black-coffee break-words">
                    {video.tag}
                  </p>
                  {video.format && (
                    <p className="mt-1.5 font-times text-sm text-black-coffee/60">
                      {video.format}
                    </p>
                  )}
                </div>
                <span className="mt-1 shrink-0 text-jacarta transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
