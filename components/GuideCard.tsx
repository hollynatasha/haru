"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readMinutes: number;
};

export function GuideCard({
  slug,
  category,
  title,
  description,
  readMinutes,
}: Props) {
  return (
    <motion.article
      whileHover={{
        y: -4,
        boxShadow: "0 20px 45px -20px rgba(63, 42, 82, 0.25)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group rounded-xl bg-white border border-line flex flex-col"
    >
      <Link href={`/ai-resources/${slug}`} className="flex flex-col p-8">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-jacarta">
            {category}
          </p>
          <p className="font-serif italic text-[12px] text-black-coffee/55">
            {readMinutes} min read
          </p>
        </div>
        <h3 className="mt-5 text-xl sm:text-2xl font-bold uppercase tracking-tight text-black-coffee leading-tight">
          {title}
        </h3>
        <p className="mt-3 text-sm font-normal leading-relaxed text-black-coffee/75">
          {description}
        </p>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-jacarta">
          Read guide{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </p>
      </Link>
    </motion.article>
  );
}
