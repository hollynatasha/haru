"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  category: string;
  oneLiner: string;
  href: string;
};

export function ProjectCard({ title, category, oneLiner, href }: Props) {
  const isExternal = href !== "#";

  const inner = (
    <>
      <div className="flex h-[220px] w-full items-center justify-center bg-neutral-200 text-neutral-500 text-xs font-bold tracking-[0.3em]">
        IMAGE
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-jacarta">
          {category}
        </p>
        <p className="mt-3 text-2xl font-black tracking-tighter text-black-coffee">
          {title}
        </p>
        <p className="mt-2 text-sm text-black-coffee/80">{oneLiner}</p>

        <div className="mt-6 flex justify-end">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-jacarta">
            View{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 24px 50px -20px rgba(63, 42, 82, 0.30)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group rounded-2xl bg-white shadow-[0_6px_20px_-12px_rgba(63,42,82,0.20)] overflow-hidden flex flex-col"
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noreferrer noopener">
          {inner}
        </a>
      ) : (
        <div>{inner}</div>
      )}
    </motion.div>
  );
}
