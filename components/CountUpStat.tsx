"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Parsed = {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
  hasCommas: boolean;
};

function parseValue(raw: string): Parsed {
  const match = raw.match(/^([^\d.-]*)([0-9.,]+)(.*)$/);
  if (!match) {
    return {
      prefix: "",
      target: 0,
      suffix: raw,
      decimals: 0,
      hasCommas: false,
    };
  }
  const [, prefix, numStr, suffix] = match;
  const hasCommas = numStr.includes(",");
  const clean = numStr.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  return {
    prefix,
    target: parseFloat(clean),
    suffix,
    decimals,
    hasCommas,
  };
}

function format(n: number, p: Parsed): string {
  const fixed = p.decimals > 0 ? n.toFixed(p.decimals) : Math.round(n).toString();
  if (!p.hasCommas) return p.prefix + fixed + p.suffix;
  const [int, frac] = fixed.split(".");
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return p.prefix + (frac ? `${withCommas}.${frac}` : withCommas) + p.suffix;
}

export function CountUpStat({
  value,
  className,
  duration = 1500,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(() => format(0, parsed));
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(format(parsed.target, parsed));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || startedRef.current) return;
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(format(parsed.target * eased, parsed));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [parsed, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
