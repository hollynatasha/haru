"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  name: string;
  tagline: string;
  href: string;
  index: number;
  logoSrc?: string;
  accent?: "default" | "blush";
};

export function BusinessCard({
  name,
  tagline,
  href,
  index,
  logoSrc,
  accent = "default",
}: Props) {
  const [logoOk, setLogoOk] = useState<boolean>(Boolean(logoSrc));

  const isBlush = accent === "blush";

  const baseClass = isBlush
    ? "bg-blush border border-blush-deep/25 shadow-[0_10px_30px_-20px_rgba(181,96,117,0.35)]"
    : "bg-white border border-line shadow-[0_10px_30px_-20px_rgba(63,42,82,0.18)]";

  const numberClass = isBlush ? "text-blush-deep" : "text-jacarta";
  const accentText = isBlush ? "text-blush-deep" : "text-jacarta";
  const hoverShadow = isBlush
    ? "0 30px 60px -15px rgba(181, 96, 117, 0.32)"
    : "0 30px 60px -15px rgba(63, 42, 82, 0.30)";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      whileHover={{
        scale: 1.03,
        rotateY: 4,
        rotateX: -2,
        y: -6,
        boxShadow: hoverShadow,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`group relative block rounded-2xl p-10 sm:p-12 will-change-transform ${baseClass}`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className={`font-serif italic text-sm ${numberClass}`}>
          0{index + 1}
        </p>
        {logoSrc && logoOk && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoSrc}
            alt=""
            onError={() => setLogoOk(false)}
            className="h-10 sm:h-12 w-auto object-contain"
          />
        )}
      </div>

      <p className="mt-8 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-black-coffee">
        {name}
      </p>
      <p className="mt-3 max-w-sm text-base font-normal text-black-coffee/75 leading-relaxed">
        {tagline}
      </p>
      <p
        className={`mt-12 text-[11px] font-semibold uppercase tracking-[0.3em] ${accentText}`}
      >
        Visit{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </p>
    </motion.a>
  );
}
