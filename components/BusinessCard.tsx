"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  tagline: string;
  href: string;
  index: number;
};

export function BusinessCard({ name, tagline, href, index }: Props) {
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
        boxShadow: "0 30px 60px -15px rgba(63, 42, 82, 0.30)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative block rounded-2xl bg-white border border-line p-10 sm:p-12 shadow-[0_10px_30px_-20px_rgba(63,42,82,0.18)] will-change-transform"
    >
      <p className="font-serif italic text-sm text-jacarta">
        0{index + 1}
      </p>
      <p className="mt-6 text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-black-coffee">
        {name}
      </p>
      <p className="mt-3 max-w-sm text-base font-normal text-black-coffee/75 leading-relaxed">
        {tagline}
      </p>
      <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.3em] text-jacarta">
        Visit{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </p>
    </motion.a>
  );
}
