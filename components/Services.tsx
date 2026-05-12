"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/content";

export function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-black-coffee py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-wisteria">
          WHAT I DO
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {SERVICES.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.button
                key={service.title}
                type="button"
                layout
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                transition={{
                  layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                }}
                style={{ backgroundColor: service.background }}
                className="text-left rounded-2xl overflow-hidden p-8 sm:p-10 cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-wisteria/60"
                aria-expanded={isOpen}
              >
                <motion.div layout className="flex items-start justify-between gap-6">
                  <motion.h3
                    layout
                    className={`font-black tracking-tighter text-black-coffee transition-[font-size] duration-300 ${
                      isOpen
                        ? "text-3xl sm:text-4xl"
                        : "text-4xl sm:text-5xl lg:text-6xl"
                    }`}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.span
                    layout
                    className="mt-2 shrink-0 text-2xl font-black text-black-coffee"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </motion.div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px]"
                    >
                      <div>
                        <p className="max-w-xl text-base sm:text-lg leading-relaxed text-black-coffee">
                          {service.description}
                        </p>
                        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-serif italic text-sm text-black-coffee/80">
                          {service.keywords.map((k) => (
                            <li key={k}>{k}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex h-[220px] sm:h-[260px] lg:h-[300px] w-full items-center justify-center bg-neutral-300/70 text-neutral-600 text-xs font-bold tracking-[0.3em] rounded-xl">
                        IMAGE
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
