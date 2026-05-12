"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  tagline: string;
  href: string;
};

export function BusinessCard({ name, tagline, href }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      whileHover={{
        scale: 1.05,
        rotateY: 4,
        rotateX: -2,
        y: -8,
        boxShadow: "0 30px 60px -15px rgba(63, 42, 82, 0.35)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative block rounded-2xl bg-white p-10 sm:p-12 shadow-[0_10px_30px_-15px_rgba(63,42,82,0.18)] will-change-transform"
    >
      <div className="h-20 w-20 rounded-xl bg-neutral-200" aria-hidden />
      <p className="mt-8 text-2xl sm:text-3xl font-black tracking-tighter text-black-coffee">
        {name}
      </p>
      <p className="mt-3 max-w-sm text-base text-black-coffee/80">{tagline}</p>
      <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-jacarta">
        Visit{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </p>
    </motion.a>
  );
}
