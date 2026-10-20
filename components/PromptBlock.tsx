"use client";

import { useRef, useState } from "react";

export type PromptBlockData = {
  /** Mono eyebrow above the card, e.g. "PROMPT 1 · SKETSA 2D KE 3D". */
  label: string;
  /** Plain-language title of what the prompt produces. */
  title: string;
  /** One or two lines on what to fill in and what you get back. */
  note?: string;
  /** The prompt itself, pasted verbatim into the model. */
  body: string;
};

function CopyIcon({ done }: { done: boolean }) {
  if (done) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M20 6 9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="9"
        y="9"
        width="11"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5 15V5a2 2 0 0 1 2-2h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PromptBlock({ prompt }: { prompt: PromptBlockData }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const words = prompt.body.trim().split(/\s+/).length;
  // Short follow-up prompts fit on screen, so the expand control would be noise.
  const collapsible = prompt.body.length > 900;

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt.body);
    } catch {
      // Clipboard API needs a secure context; fall back to a selection copy.
      const node = preRef.current;
      if (!node) return;
      const range = document.createRange();
      range.selectNodeContents(node);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      document.execCommand("copy");
      sel?.removeAllRanges();
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-cream/60">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
        <div className="min-w-0">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-jacarta-soft">
            {prompt.label}
          </p>
          <p className="mt-2 text-base font-semibold leading-snug text-black-coffee">
            {prompt.title}
          </p>
          {prompt.note && (
            <p className="mt-2 text-sm leading-relaxed text-black-coffee/70">
              {prompt.note}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${prompt.title}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-jacarta px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-black-coffee"
        >
          <CopyIcon done={copied} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="relative">
        <pre
          ref={preRef}
          className={`overflow-x-auto whitespace-pre-wrap px-5 py-5 font-mono text-[11.5px] leading-[1.75] text-black-coffee sm:px-6 sm:text-[12.5px] ${
            open || !collapsible ? "" : "max-h-[22rem] overflow-y-hidden"
          }`}
        >
          {prompt.body}
        </pre>
        {!open && collapsible && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent"
          />
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-3 sm:px-6">
        {collapsible ? (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-jacarta transition-colors hover:text-black-coffee"
          >
            {open ? "Tutup prompt" : "Baca full prompt"}
          </button>
        ) : (
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-black-coffee/45">
            Prompt pendek
          </span>
        )}
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black-coffee/45">
          {words} kata
        </span>
      </div>
    </div>
  );
}
