'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// 7 March 2026 00:00:00 GMT+7 = 6 March 2026 17:00:00 UTC
const EVENT_START = new Date('2026-03-06T17:00:00Z').getTime();
// 7 March 2026 23:59:59 GMT+7 = 7 March 2026 16:59:59 UTC
const EVENT_END = new Date('2026-03-07T16:59:59Z').getTime();

type Status = 'countdown' | 'active' | 'expired';

function getStatus(now: number): Status {
  if (now < EVENT_START) return 'countdown';
  if (now <= EVENT_END) return 'active';
  return 'expired';
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function EventGate({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Wait for client-side time before rendering anything
  if (now === null) return null;

  const status = getStatus(now);

  if (status === 'active') return <>{children}</>;

  const isExpired = status === 'expired';
  const diff = isExpired ? 0 : EVENT_START - now;
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return (
    <main className="min-h-screen bg-[#FAF6EF] flex flex-col items-center justify-center px-4 py-12 text-center">
      {/* Logo */}
      <Image
        src="/IMG_7658-min.PNG"
        alt="Logo"
        width={160}
        height={160}
        className="mx-auto mb-6 object-contain"
        priority
      />

      {/* Eyebrow */}
      <p className="text-[10px] font-semibold tracking-[0.35em] text-[#E8196E] uppercase mb-3">
        {isExpired ? 'Event Closed' : 'Coming Soon'}
      </p>

      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-bold text-[#1a1815] leading-tight"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        Spin &amp; <span className="italic">Win</span>
      </h1>

      {isExpired ? (
        <p className="mt-3 text-[#6b5c4e] text-sm max-w-xs mx-auto">
          The spin event was only available on <strong>7 March 2026</strong>. Thank you for participating!
        </p>
      ) : (
        <>
          <p className="mt-3 text-[#6b5c4e] text-sm max-w-xs mx-auto">
            Opens on <strong>7 March 2026</strong> (GMT+7)
          </p>

          {/* Countdown tiles */}
          <div className="flex gap-3 mt-7">
            {[
              { value: days,    label: 'Days' },
              { value: hours,   label: 'Hours' },
              { value: minutes, label: 'Min' },
              { value: seconds, label: 'Sec' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-white border border-[#e8ddd0] rounded-2xl px-5 py-4 shadow-sm min-w-[72px]"
              >
                <span
                  className="text-3xl font-bold text-[#1a1815] tabular-nums"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {pad(value)}
                </span>
                <span className="text-[10px] text-[#E8196E] font-semibold tracking-widest uppercase mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Instagram handle */}
          <p className="mt-4 text-[11px] font-semibold tracking-[0.2em] text-[#6b5c4e] uppercase">
            IG: @HARUSTUDIO.IDN FOR UPDATES!
          </p>
        </>
      )}

      {/* Dot divider */}
      <div className="flex items-center justify-center gap-1.5 mt-8">
        {[...Array(7)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#E8196E]" />
        ))}
      </div>
    </main>
  );
}
