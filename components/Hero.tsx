"use client";

import { motion } from "framer-motion";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-block rounded-full bg-wisteria px-3 py-1 font-serif italic text-[12px] text-black-coffee"
      >
        {HERO.location}
      </motion.span>

      <div className="relative mt-8 flex flex-col items-center">
        <h1 className="relative z-0 text-center font-black tracking-[-0.05em] leading-[0.9] text-black uppercase text-[4rem] sm:text-[6rem] lg:text-[8rem]">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative z-10 -mt-[12%] sm:-mt-[14%] lg:-mt-[16%] flex h-[480px] w-[320px] sm:h-[560px] sm:w-[380px] lg:h-[600px] lg:w-[400px] items-center justify-center bg-neutral-200 text-neutral-500 text-xs font-bold tracking-[0.3em]"
        >
          PORTRAIT
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        className="mt-10 max-w-xl text-center text-base text-black-coffee"
      >
        {HERO.bio}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.05, ease: "easeOut" }}
        className="mt-3 font-serif italic text-sm text-neutral-500"
      >
        🌐 {HERO.domain}
      </motion.p>
    </section>
  );
}
