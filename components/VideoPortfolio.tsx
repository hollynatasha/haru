"use client";

import { motion } from "framer-motion";

type Video = {
  tag: string;
  href: string;
};

export function VideoPortfolio({ videos }: { videos: readonly Video[] }) {
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
          portfolio
        </p>
        <h2 className="mt-4 font-serif italic text-4xl sm:text-5xl lg:text-6xl text-black-coffee leading-[1.05]">
          My video <span className="not-italic font-display text-jacarta tracking-[-0.02em]">portfolio</span>
          <span className="text-jacarta">.</span>
        </h2>
        <p className="mt-4 max-w-md font-serif italic text-sm sm:text-base text-black-coffee/65">
          Each tile opens the reel on Instagram. Tap through for live view counts and saves.
        </p>
      </div>

      <div className="mt-14 grid gap-x-5 gap-y-10 grid-cols-2 lg:grid-cols-4">
        {videos.map((video, i) => (
          <motion.a
            key={`${video.tag}-${i}`}
            href={video.href}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group flex flex-col"
          >
            <div className="relative aspect-[9/16] rounded-2xl bg-cream-deep border border-line overflow-hidden flex flex-col justify-between p-5 transition-colors group-hover:bg-jacarta/90 group-hover:text-cream">
              <div className="flex items-start justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-jacarta group-hover:text-cream/80">
                <span>0{i + 1}</span>
                <span aria-hidden>↗</span>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl uppercase leading-[0.95] text-black-coffee group-hover:text-cream transition-colors">
                  {video.tag}
                </p>
                <p className="mt-3 font-serif italic text-xs text-black-coffee/60 group-hover:text-cream/70 transition-colors">
                  watch on Instagram
                </p>
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-black-coffee/75">
              {video.tag}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
