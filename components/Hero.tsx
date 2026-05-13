"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HERO,
  VENTURES,
  INSTAGRAM_URL,
  TIKTOK_URL,
  LINKEDIN_URL,
  WHATSAPP,
} from "@/lib/content";
import { ContactIcons } from "./Icons";

const HERO_CONTACTS = [
  { kind: "instagram" as const, label: "Instagram", href: INSTAGRAM_URL },
  { kind: "tiktok" as const, label: "TikTok", href: TIKTOK_URL },
  { kind: "linkedin" as const, label: "LinkedIn", href: LINKEDIN_URL },
  {
    kind: "mail" as const,
    label: "Email",
    href: "mailto:hollysinq@gmail.com",
  },
  { kind: "whatsapp" as const, label: "WhatsApp", href: WHATSAPP.href },
];

type Venture = (typeof VENTURES)[number];

const ORBIT_POSITIONS = [
  { className: "left-[4%] top-[22%] sm:left-[8%] sm:top-[20%]", drift: -10 },
  { className: "right-[4%] top-[22%] sm:right-[8%] sm:top-[20%]", drift: 12 },
  {
    className: "left-[6%] bottom-[18%] sm:left-[10%] sm:bottom-[20%]",
    drift: 14,
  },
  {
    className: "right-[6%] bottom-[18%] sm:right-[10%] sm:bottom-[20%]",
    drift: -12,
  },
];

function OrbitMark({
  venture,
  position,
  index,
}: {
  venture: Venture;
  position: (typeof ORBIT_POSITIONS)[number];
  index: number;
}) {
  const isLinked = venture.href !== "#";
  const hasLogo = "logoSrc" in venture && venture.logoSrc;

  const inner = hasLogo ? (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={venture.logoSrc as string}
      alt={venture.name}
      className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
    />
  ) : (
    <span className="font-display text-base sm:text-lg lg:text-xl tracking-tight text-black-coffee/85 whitespace-nowrap">
      {venture.name}
    </span>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.9 + index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`pointer-events-none absolute z-0 ${position.className}`}
    >
      <motion.div
        animate={{ y: [0, position.drift, 0] }}
        transition={{
          duration: 6 + index * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-auto"
      >
        {isLinked ? (
          <a
            href={venture.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={venture.name}
            className="block opacity-80 hover:opacity-100 transition-opacity"
          >
            {inner}
          </a>
        ) : (
          <div className="opacity-80">{inner}</div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <nav className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 flex items-center gap-5 sm:gap-8 z-20">
        <Link
          href="/ai-resources"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-jacarta hover:text-black-coffee transition-colors"
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
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-jacarta hover:text-black-coffee transition-colors"
        >
          Work with me
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </nav>

      {VENTURES.map((v, i) => (
        <OrbitMark
          key={v.name}
          venture={v}
          position={ORBIT_POSITIONS[i % ORBIT_POSITIONS.length]}
          index={i}
        />
      ))}

      <h1 className="relative z-10 font-display text-center tracking-[-0.04em] leading-[0.88] text-jacarta uppercase text-[4.5rem] sm:text-[7.5rem] lg:text-[11rem]">
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
        className="relative z-10 mt-10 flex max-w-xl flex-col items-center text-center"
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

        <div className="mt-7 flex items-center gap-3 sm:gap-4">
          {HERO_CONTACTS.map((c) => {
            const Icon = ContactIcons[c.kind];
            const isExternal = c.kind !== "mail";
            return (
              <a
                key={c.kind}
                href={c.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer noopener" : undefined}
                aria-label={c.label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-line text-black-coffee/75 hover:border-jacarta hover:text-jacarta transition-colors"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
