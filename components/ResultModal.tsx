'use client';

import { Prize } from '@/lib/prizes';

interface ResultModalProps {
  prize: Prize;
  name: string;
  onClose: () => void;
}

export default function ResultModal({ prize, name, onClose }: ResultModalProps) {
  const isLight = prize.textColor !== '#ffffff';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1a1815]/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-sm bg-[#FAF6EF] rounded-2xl shadow-2xl overflow-hidden border border-[#e8ddd0]">
        {/* Color band at top */}
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: prize.color }}
        />

        <div className="px-8 pt-10 pb-8 text-center">
          {/* Eyebrow */}
          <p className="text-[10px] font-semibold tracking-[0.3em] text-[#E8196E] uppercase mb-3">
            Congratulations, {name}!
          </p>

          {/* Prize name */}
          <h2
            className="text-3xl font-bold text-[#1a1815] leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {prize.label}
          </h2>

          {/* Divider — dot row matching reference */}
          <div className="flex items-center justify-center gap-1.5 my-5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: '#E8196E' }}
              />
            ))}
          </div>

          <p className="text-[#6b5c4e] text-sm">
            Show this screen to the booth to redeem your prize.
          </p>
          <p className="text-[#b8a898] text-xs mt-2">
            Voucher valid for 1 month · Expires 7 April 2026
          </p>

          {/* Prize badge */}
          <div
            className="mt-5 inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wide"
            style={{
              backgroundColor: prize.color,
              color: isLight ? '#1a1815' : '#ffffff',
            }}
          >
            {prize.label}
          </div>
        </div>

        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-6 rounded-xl font-bold text-sm border-2 border-[#1a1815] text-[#1a1815] hover:bg-[#1a1815] hover:text-[#FAF6EF] active:scale-[0.98] transition-all duration-150 tracking-widest uppercase"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
