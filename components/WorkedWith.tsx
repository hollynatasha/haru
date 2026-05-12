"use client";

import { useState } from "react";

type Brand = {
  name: string;
  logoSrc?: string;
};

function BrandLogo({ brand }: { brand: Brand }) {
  const [ok, setOk] = useState<boolean>(Boolean(brand.logoSrc));

  if (brand.logoSrc && ok) {
    return (
      <div className="flex h-10 sm:h-12 items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brand.logoSrc}
          alt={brand.name}
          onError={() => setOk(false)}
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <p className="font-serif italic text-base sm:text-lg text-black-coffee/85 whitespace-nowrap">
      {brand.name}
    </p>
  );
}

export function WorkedWith({ brands }: { brands: Brand[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta text-center">
        worked with
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16 border-y border-line py-8">
        {brands.map((b) => (
          <BrandLogo key={b.name} brand={b} />
        ))}
      </div>
    </div>
  );
}
