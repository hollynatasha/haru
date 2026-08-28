"use client";

import { useState } from "react";

type Brand = {
  name: string;
  logoSrc?: string;
  category?: string;
};

function BrandLogo({ brand }: { brand: Brand }) {
  const [ok, setOk] = useState<boolean>(Boolean(brand.logoSrc));

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {brand.logoSrc && ok ? (
        <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-line bg-white p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.logoSrc}
            alt={brand.name}
            onError={() => setOk(false)}
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-line bg-white">
          <span className="font-display text-lg uppercase text-jacarta">
            {brand.name.slice(0, 2)}
          </span>
        </div>
      )}
      <p className="max-w-[7.5rem] text-[11px] font-semibold uppercase tracking-[0.18em] text-black-coffee/80 leading-tight">
        {brand.name}
      </p>
    </div>
  );
}

export function WorkedWith({ brands }: { brands: Brand[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta text-center">
        worked with
      </p>
      <div className="mt-8 flex flex-wrap items-start justify-center gap-x-10 gap-y-8 sm:gap-x-14 border-y border-line py-10">
        {brands.map((b) => (
          <BrandLogo key={b.name} brand={b} />
        ))}
      </div>
    </div>
  );
}
