"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ABOUT_ME } from "@/lib/content";

const STAR_PATH =
  "M12 1.5 L14.8 9.2 L23 9.7 L16.8 14.9 L18.9 22.8 L12 18.4 L5.1 22.8 L7.2 14.9 L1 9.7 L9.2 9.2 Z";

function StarIcon({
  size = 18,
  className,
  filled = false,
}: {
  size?: number;
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.6}
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={STAR_PATH} />
    </svg>
  );
}

type StarSticker = {
  top: string;
  left?: string;
  right?: string;
  size: number;
  rotate: number;
  delay: number;
  filled: boolean;
  opacity: number;
};

const STAR_STICKERS: StarSticker[] = [
  { top: "8%", left: "-2%", size: 36, rotate: -12, delay: 0.0, filled: true, opacity: 0.9 },
  { top: "4%", right: "2%", size: 28, rotate: 18, delay: 0.6, filled: false, opacity: 0.7 },
  { top: "38%", left: "-3%", size: 22, rotate: 22, delay: 1.2, filled: false, opacity: 0.6 },
  { top: "52%", right: "-2%", size: 30, rotate: -8, delay: 0.3, filled: true, opacity: 0.85 },
  { top: "78%", left: "-1%", size: 18, rotate: 30, delay: 0.9, filled: false, opacity: 0.55 },
  { top: "88%", right: "3%", size: 24, rotate: -22, delay: 1.5, filled: true, opacity: 0.8 },
];

function FloatingStars() {
  return (
    <>
      {STAR_STICKERS.map((s, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute text-jacarta"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            opacity: s.opacity,
          }}
          animate={{
            rotate: [s.rotate - 4, s.rotate + 4, s.rotate - 4],
            scale: [1, 1.12, 1],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 5 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        >
          <StarIcon size={s.size} filled={s.filled} />
        </motion.div>
      ))}
    </>
  );
}

type Sparkle = { id: number; x: number; y: number; size: number; rotate: number };

function SparkleTrail({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const lastSpawnRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawnRef.current < 90) return;
      lastSpawnRef.current = now;
      const rect = el.getBoundingClientRect();
      const id = idRef.current++;
      const sparkle: Sparkle = {
        id,
        x: e.clientX - rect.left + (Math.random() - 0.5) * 12,
        y: e.clientY - rect.top + (Math.random() - 0.5) * 12,
        size: 10 + Math.random() * 8,
        rotate: Math.random() * 90,
      };
      setSparkles((prev) => [...prev, sparkle]);
      window.setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 750);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [containerRef]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute text-jacarta"
          style={{
            left: s.x - s.size / 2,
            top: s.y - s.size / 2,
            width: s.size,
            height: s.size,
          }}
          initial={{ opacity: 0, scale: 0, rotate: s.rotate }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0.6],
            rotate: s.rotate + 80,
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <StarIcon size={s.size} filled />
        </motion.div>
      ))}
    </div>
  );
}

const MARQUEE_ITEMS = [
  "open to projects",
  "open to internships",
  "based in beijing",
  "AI · tech · self-development",
  "TEDx speaker",
  "tsinghua mechanical engineering",
  "let's collaborate",
];

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-jacarta/15 bg-cream-deep mt-12">
      <motion.div
        className="flex whitespace-nowrap py-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      >
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] text-jacarta"
          >
            <StarIcon size={11} filled className="shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function AboutNotepad() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream py-24 sm:py-32 px-6 overflow-hidden"
    >
      <SparkleTrail containerRef={sectionRef} />

      <div className="relative mx-auto max-w-5xl">
        <FloatingStars />

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
          c:\portfolio\about_me.txt
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
          className="mt-6 win98-window bg-[#dcdcdc] origin-top"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="win98-titlebar flex items-center justify-between gap-2 px-2 py-1 bg-jacarta text-cream font-mono text-[11px] sm:text-xs tracking-tight"
          >
            <span className="truncate">
              NOTEPAD.EXE &mdash;&nbsp;about_me.txt
            </span>
            <span className="flex gap-1">
              <span className="win98-btn" aria-hidden>_</span>
              <span className="win98-btn" aria-hidden>□</span>
              <span className="win98-btn" aria-hidden>×</span>
            </span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
            className="px-2 py-1 bg-[#dcdcdc] border-b border-[#808080] font-mono text-[11px] sm:text-xs text-black-coffee flex gap-5"
          >
            <span><u>F</u>ile</span>
            <span><u>E</u>dit</span>
            <span>F<u>o</u>rmat</span>
            <span><u>V</u>iew</span>
            <span><u>H</u>elp</span>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scaleY: 0.6 },
              visible: { opacity: 1, scaleY: 1 },
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white px-6 sm:px-10 lg:px-14 py-10 sm:py-14 origin-top"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-black-coffee leading-none">
              about me
            </h2>

            <ul className="mt-10 font-mono text-[13px] sm:text-sm leading-relaxed text-black-coffee space-y-1">
              {ABOUT_ME.fields.map((f) => {
                const highlight = "highlight" in f && f.highlight;
                return (
                  <li key={f.label}>
                    <span className="text-black-coffee/55">{f.label}:</span>{" "}
                    {highlight ? (
                      <span className="inline-flex items-center gap-2 align-middle">
                        <span className="inline-block h-2 w-2 rounded-full bg-jacarta animate-pulse" />
                        <span className="font-bold text-jacarta">{f.value}</span>
                      </span>
                    ) : (
                      <span>{f.value}</span>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {(() => {
                const left = ABOUT_ME.highlights.slice(0, 1);
                const right = ABOUT_ME.highlights.slice(1);
                const renderItem = (h: (typeof ABOUT_ME.highlights)[number]) => (
                  <div key={h.tag}>
                    <p className="font-mono text-sm font-bold text-black-coffee">
                      <span className="text-black-coffee/55">[{h.tag}]</span>{" "}
                      {h.title}
                    </p>
                    {h.points.length > 0 && (
                      <ul className="mt-3 space-y-2 font-mono text-[13px] sm:text-sm leading-relaxed text-black-coffee">
                        {h.points.map((p, i) => (
                          <li key={i} className="flex gap-2 pl-1">
                            <span aria-hidden className="text-jacarta">
                              ◉
                            </span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
                return (
                  <>
                    <div className="space-y-10">{left.map(renderItem)}</div>
                    <div className="space-y-10">{right.map(renderItem)}</div>
                  </>
                );
              })()}
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-mono text-sm font-bold underline underline-offset-4 text-black-coffee">
                  TECHNICAL SKILLS:
                </p>
                <p className="mt-3 pl-6 font-mono text-[13px] sm:text-sm leading-relaxed text-black-coffee">
                  {ABOUT_ME.technicalSkills.join(", ")}
                </p>

                <p className="mt-8 font-mono text-sm font-bold underline underline-offset-4 text-black-coffee">
                  LANGUAGES:
                </p>
                <p className="mt-3 pl-6 font-mono text-[13px] sm:text-sm leading-relaxed text-black-coffee">
                  {ABOUT_ME.languages.join(", ")}
                </p>
              </div>

              <div>
                <p className="font-mono text-sm font-bold underline underline-offset-4 text-black-coffee">
                  EDUCATION:
                </p>
                <ul className="mt-3 font-mono text-[13px] sm:text-sm leading-relaxed text-black-coffee space-y-3">
                  {ABOUT_ME.education.map((e, i) => (
                    <li key={i}>
                      <div>{e.line1}</div>
                      <div className="text-black-coffee/75">{e.line2}</div>
                      <div className="text-black-coffee/55">{e.dates}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-14 font-serif italic text-sm text-black-coffee/55">
              end of file. (scroll for the rest of the site.)
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
            className="bg-[#dcdcdc] border-t border-[#808080] px-3 py-1 font-mono text-[11px] text-black-coffee/80 flex items-center justify-between"
          >
            <span>C:\portfolio\about_me.txt</span>
            <span>Ln 1, Col 1</span>
          </motion.div>
        </motion.div>

        <Marquee />
      </div>
    </section>
  );
}
