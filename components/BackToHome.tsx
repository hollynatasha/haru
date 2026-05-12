import Link from "next/link";

type Props = {
  variant?: "light" | "dark";
};

export function BackToHome({ variant = "light" }: Props) {
  const color =
    variant === "light"
      ? "text-jacarta hover:text-black-coffee"
      : "text-cream hover:text-wisteria";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] transition-colors ${color}`}
    >
      <span className="inline-block transition-transform group-hover:-translate-x-1">
        ←
      </span>
      Holly Natasha
    </Link>
  );
}
