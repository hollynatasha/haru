"use client";

import { motion } from "framer-motion";

type Props = {
  category: string;
  title: string;
  description: string;
};

export function GuideCard({ category, title, description }: Props) {
  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 45px -20px rgba(63, 42, 82, 0.30)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group rounded-xl bg-white shadow-sm p-8 flex flex-col"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-jacarta">
        {category}
      </p>
      <h3 className="mt-4 text-xl sm:text-2xl font-black uppercase tracking-tighter text-black-coffee leading-tight">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-black-coffee/80">
        {description}
      </p>
      <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-jacarta">
        Read guide{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </p>
    </motion.article>
  );
}
