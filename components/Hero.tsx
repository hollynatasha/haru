"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <nav className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 flex items-center gap-5 sm:gap-8">
        <Link
          href="/ai-resources"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-jacarta hover:text-black-coffee transition-colors"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">
            ←
          </span>
          AI resources
        </Link>
        <span aria-hidden className="text-jacarta/30 text-sm">
          |
        </span>
        <Link
          href="/work-with-me"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-jacarta hover:text-black-coffee transition-colors"
        >
          Work with me
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </nav>

      <h1 className="font-display text-center tracking-[-0.04em] leading-[0.88] text-jacarta uppercase text-[4.5rem] sm:text-[7.5rem] lg:text-[11rem]">
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
