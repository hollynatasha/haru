"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";

export function Services() {
  return (
    <section className="bg-cream-deep py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
          what i do
        </p>

        <h2 className="mt-5 max-w-2xl font-serif italic text-4xl sm:text-5xl lg:text-6xl text-black-coffee leading-[1.05]">
          Three things, on repeat<span className="text-jacarta">.</span>
        </h2>

        <div className="mt-16 flex flex-col gap-6">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl bg-white border border-line overflow-hidden p-8 sm:p-12"
            >
              <div className="flex items-baseline justify-between gap-6">
                <p className="font-serif italic text-sm text-jacarta">
                  0{i + 1}
                </p>
                <p className="font-serif italic text-sm text-black-coffee/40">
                  service
                </p>
              </div>

              <h3 className="mt-6 font-black tracking-[-0.04em] uppercase text-black-coffee leading-[0.95] text-5xl sm:text-6xl lg:text-7xl">
                {service.title}
              </h3>

              <div className="mt-8 grid gap-10 lg:grid-cols-[2fr_1fr]">
                <p className="max-w-xl text-base sm:text-lg font-normal leading-relaxed text-black-coffee/85">
                  {service.description}
                </p>
                <ul className="flex flex-wrap content-start gap-x-4 gap-y-1 font-serif italic text-base text-jacarta">
                  {service.keywords.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
