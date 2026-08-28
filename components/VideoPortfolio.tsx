"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Video = {
  tag: string;
  href: string;
  category?: string;
  logoSrc?: string;
  format?: string;
};

function BrandMark({ video }: { video: Video }) {
  const [ok, setOk] = useState<boolean>(Boolean(video.logoSrc));

  if (video.logoSrc && ok) {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-white p-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={video.logoSrc}
          alt={video.tag}
          onError={() => setOk(false)}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-white">
      <span className="font-display text-xl uppercase text-jacarta">
        {video.tag.slice(0, 2)}
      </span>
    </div>
  );
}

export function VideoPortfolio({ videos }: { videos: readonly Video[] }) {
  const categories = Array.from(
    new Set(videos.map((v) => v.category).filter(Boolean)),
  ) as string[];

  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
          portfolio
        </p>
        <h2 className="mt-4 font-times text-4xl sm:text-5xl lg:text-6xl text-black-coffee leading-[1.05]">
          My video{" "}
          <span className="font-display text-jacarta tracking-[-0.02em]">
            portfolio
          </span>
          <span className="text-jacarta">.</span>
        </h2>
        <p className="mt-4 max-w-md font-times text-sm sm:text-base text-black-coffee/65">
          Paid campaigns across AI, travel, and education. Each card opens the
          reel on Instagram.
        </p>

        {categories.length > 0 && (
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => {
              const count = videos.filter((v) => v.category === c).length;
              return (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-jacarta"
                >
                  {c}
                  <span className="font-mono text-[10px] text-black-coffee/50">
                    {String(count).padStart(2, "0")}
                  </span>
                </span>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <motion.a
            key={`${video.tag}-${i}`}
            href={video.href}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group flex flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-colors hover:border-jacarta/40"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-jacarta/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-jacarta">
                  {video.category ?? "Campaign"}
                </span>
                <span className="font-mono text-[11px] text-black-coffee/40 group-hover:text-jacarta transition-colors">
                  {String(i + 1).padStart(2, "0")} ↗
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <BrandMark video={video} />
                <div className="min-w-0">
                  <p className="font-display text-2xl sm:text-[1.7rem] uppercase leading-[1] tracking-[-0.02em] text-black-coffee break-words">
                    {video.tag}
                  </p>
                  {video.format && (
                    <p className="mt-2 font-times text-sm text-black-coffee/65">
                      {video.format}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-line pt-5">
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-jacarta">
                watch reel
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
