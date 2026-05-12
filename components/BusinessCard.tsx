"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  tagline: string;
  href: string;
  index: number;
  accent?: "default" | "blush";
};

export function BusinessCard({
  name,
  tagline,
  href,
  index,
  accent = "default",
}: Props) {
  const isBlush = accent === "blush";
  const isLinked = href !== "#";

  const baseClass = isBlush
    ? "bg-blush border border-blush-deep/25 shadow-[0_10px_30px_-20px_rgba(181,96,117,0.35)]"
    : "bg-white border border-line shadow-[0_10px_30px_-20px_rgba(63,42,82,0.18)]";

  const numberClass = isBlush ? "text-blush-deep" : "text-jacarta";
  const accentText = isBlush ? "text-blush-deep" : "text-jacarta";
  const hoverShadow = isBlush
    ? "0 30px 60px -15px rgba(181, 96, 117, 0.32)"
    : "0 30px 60px -15px rgba(63, 42, 82, 0.30)";

  const Inner = (
    <>
      <p className={`font-serif italic text-sm ${numberClass}`}>
        0{index + 1}
      </p>

      <p className="mt-8 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-black-coffee">
        {name}
      </p>
      <p className="mt-3 max-w-sm text-base font-normal text-black-coffee/75 leading-relaxed">
        {tagline}
      </p>
      {isLinked && (
        <p
          className={`mt-12 text-[11px] font-semibold uppercase tracking-[0.3em] ${accentText}`}
        >
          Visit{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </p>
      )}
    </>
  );

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        rotateY: 4,
        rotateX: -2,
        y: -6,
        boxShadow: hoverShadow,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`group relative rounded-2xl p-10 sm:p-12 will-change-transform ${baseClass}`}
    >
      {isLinked ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="block"
        >
          {Inner}
        </a>
      ) : (
        <div>{Inner}</div>
      )}
    </motion.div>
  );
}
