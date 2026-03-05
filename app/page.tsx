'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import RouletteWheel from '@/components/RouletteWheel';
import RegistrationForm from '@/components/RegistrationForm';
import ResultModal from '@/components/ResultModal';
import { Prize, PRIZES } from '@/lib/prizes';
import EventGate from '@/components/EventGate';

type AppState = 'form' | 'spinning' | 'done';

interface AlreadyUsed {
  name: string;
  prize: Prize;
}

export default function Home() {
  const [state, setState] = useState<AppState>('form');
  const [userName, setUserName] = useState('');
  const [targetPrize, setTargetPrize] = useState<Prize | null>(null);
  const [shownPrize, setShownPrize] = useState<Prize | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [alreadyUsed, setAlreadyUsed] = useState<AlreadyUsed | null>(null);

  async function handleFormSubmit(name: string, phone: string) {
    setError(null);
    setAlreadyUsed(null);
    setIsLoading(true);
    try {
      const res = await fetch('/api/spin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone }),
      });
      const data = await res.json();
      if (res.status === 409 && data.error === 'already_used') {
        const prevPrize = PRIZES.find(p => p.label === data.previousPrize);
        if (prevPrize) {
          setAlreadyUsed({ name: data.previousName ?? name, prize: prevPrize });
        } else {
          setError('This number has already been used to spin.');
        }
        setIsLoading(false);
        return;
      }
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        setIsLoading(false);
        return;
      }
      const prize = PRIZES.find(p => p.label === data.prize.label) ?? data.prize;
      setUserName(name);
      setTargetPrize(prize);
      setState('spinning');
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleSpinComplete = useCallback(() => {
    setShownPrize(targetPrize);
    setState('done');
  }, [targetPrize]);

  function handleCloseModal() {
    setShownPrize(null);
    setTargetPrize(null);
    setUserName('');
    setState('form');
    setError(null);
  }

  return (
    <EventGate>
    <main className="min-h-screen bg-[#FAF6EF] flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <Image
          src="/IMG_7658-min.PNG"
          alt="Logo"
          width={200}
          height={200}
          className="mx-auto mb-6 object-contain"
          priority
        />

        {/* Eyebrow label */}
        <p className="text-[10px] font-semibold tracking-[0.35em] text-[#E8196E] uppercase mb-3">
          Exclusive Event
        </p>

        {/* Heading — serif italic mix like reference */}
        <h1
          className="text-4xl md:text-5xl font-bold text-[#1a1815] leading-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Spin &amp;{' '}
          <span className="italic font-bold">Win</span>
        </h1>

        <p className="mt-3 text-[#6b5c4e] text-sm md:text-base max-w-xs mx-auto">
          Enter your details and spin the wheel for exclusive prizes.
        </p>
        <p className="mt-1 text-[#1a1815] text-sm md:text-base font-bold max-w-xs mx-auto">
          ‼️KHUSUS 7 MARET 2026‼️
        </p>

        {/* Pink dot divider like reference */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {[...Array(7)].map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#E8196E]" />
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Wheel */}
        <div className="flex-shrink-0 w-full max-w-[480px]">
          <RouletteWheel
            spinning={state === 'spinning'}
            targetPrize={targetPrize}
            onSpinComplete={handleSpinComplete}
          />
        </div>

        {/* Right panel */}
        <div className="w-full max-w-sm space-y-4">
          {state !== 'spinning' ? (
            <div className="bg-white border border-[#e8ddd0] rounded-2xl p-6 shadow-sm">
              <h2
                className="text-lg font-bold text-[#1a1815] mb-5"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Your Details
              </h2>
              <RegistrationForm onSubmit={handleFormSubmit} isLoading={isLoading} />

              {/* Generic error */}
              {error && (
                <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-500 text-xs">
                  {error}
                </div>
              )}

              {/* Already played */}
              {alreadyUsed && (
                <div className="mt-4 rounded-xl border-2 border-[#e8ddd0] overflow-hidden">
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: alreadyUsed.prize.color }}
                  />
                  <div className="px-4 py-3 space-y-1">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#E8196E] uppercase">
                      Already played
                    </p>
                    <p className="text-sm text-[#1a1815] font-semibold">
                      {alreadyUsed.name} already spun and won:
                    </p>
                    <div
                      className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: alreadyUsed.prize.color,
                        color: alreadyUsed.prize.textColor,
                      }}
                    >
                      <span>{alreadyUsed.prize.label}</span>
                    </div>
                    <p className="text-xs text-[#6b5c4e] mt-1">
                      Each phone number can only spin once.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white border border-[#e8ddd0] rounded-2xl p-6 shadow-sm text-center">
              <h2
                className="text-lg font-bold text-[#1a1815] italic"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Spinning...
              </h2>
              <p className="text-[#6b5c4e] text-sm mt-1">Good luck, {userName}!</p>
            </div>
          )}

          {/* Prize legend */}
          <div className="bg-white border border-[#e8ddd0] rounded-2xl p-5 shadow-sm">
            <h3 className="text-[10px] font-bold text-[#E8196E] uppercase tracking-[0.25em] mb-3">
              Prize Table
            </h3>
            <ul className="space-y-2.5">
              {PRIZES.map(prize => (
                <li key={prize.label} className="flex items-center gap-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 border border-white/60"
                    style={{ backgroundColor: prize.color }}
                  />
                  <span className="text-[#1a1815] text-sm">{prize.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {state === 'done' && shownPrize && (
        <ResultModal prize={shownPrize} name={userName} onClose={handleCloseModal} />
      )}
    </main>
    </EventGate>
  );
}
