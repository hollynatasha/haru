export function SectionToggle() {
  return (
    <nav
      aria-label="Section navigation"
      className="flex items-center justify-center gap-6 sm:gap-10 border-y border-line py-5"
    >
      <a
        href="#endorsements"
        className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-black-coffee hover:text-jacarta transition-colors"
      >
        <span className="text-jacarta/50 group-hover:text-jacarta transition-colors">
          ↓
        </span>
        Endorsements
      </a>
      <span aria-hidden className="text-jacarta/40 text-base">
        |
      </span>
      <a
        href="#speaker"
        className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-black-coffee hover:text-jacarta transition-colors"
      >
        <span className="text-jacarta/50 group-hover:text-jacarta transition-colors">
          ↓
        </span>
        Speaker
      </a>
    </nav>
  );
}
