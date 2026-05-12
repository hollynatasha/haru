"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <Link
        href="/work-with-me"
        className="group absolute top-6 right-6 sm:top-8 sm:right-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-jacarta hover:text-black-coffee transition-colors"
      >
        Work with me
        <span className="inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>

      <Link
        href="/ai-resources"
        className="group absolute top-6 left-6 sm:top-8 sm:left-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-jacarta hover:text-black-coffee transition-colors"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-1">
          ←
        </span>
        AI resources
      </Link>

      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-block rounded-full bg-jacarta/10 px-3 py-1 font-serif italic text-[12px] text-jacarta"
      >
        {HERO.location}
      </motion.span>

      <h1 className="mt-8 font-display text-center tracking-[-0.04em] leading-[0.88] text-jacarta uppercase text-[4.5rem] sm:text-[7.5rem] lg:text-[11rem]">
        {HERO.name.map((line, i) => (
          <motion.span
            key={line}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        className="mt-10 flex max-w-xl flex-col items-center text-center"
      >
        <p className="font-serif italic text-base sm:text-lg text-black-coffee/85">
          {HERO.tagline}
        </p>
        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12px] sm:text-sm font-medium tracking-[0.18em] text-jacarta">
          {HERO.topics.map((t, i) => (
            <span key={t} className="inline-flex items-center gap-x-3">
              <span>{t}</span>
              {i < HERO.topics.length - 1 && (
                <span className="text-jacarta/40">|</span>
              )}
            </span>
          ))}
        </p>
        <p className="mt-6 font-serif italic text-sm text-black-coffee/55">
          {HERO.domain}
        </p>
      </motion.div>
    </section>
  );
}
