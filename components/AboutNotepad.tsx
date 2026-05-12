import { ABOUT_ME } from "@/lib/content";

export function AboutNotepad() {
  return (
    <section className="bg-cream py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
          c:\portfolio\about_me.txt
        </p>

        <div className="mt-6 win98-window bg-[#dcdcdc]">
          <div className="win98-titlebar flex items-center justify-between gap-2 px-2 py-1 bg-jacarta text-cream font-mono text-[11px] sm:text-xs tracking-tight">
            <span className="truncate">
              NOTEPAD.EXE &mdash;&nbsp;about_me.txt
            </span>
            <span className="flex gap-1">
              <span className="win98-btn" aria-hidden>_</span>
              <span className="win98-btn" aria-hidden>□</span>
              <span className="win98-btn" aria-hidden>×</span>
            </span>
          </div>

          <div className="px-2 py-1 bg-[#dcdcdc] border-b border-[#808080] font-mono text-[11px] sm:text-xs text-black-coffee flex gap-5">
            <span><u>F</u>ile</span>
            <span><u>E</u>dit</span>
            <span>F<u>o</u>rmat</span>
            <span><u>V</u>iew</span>
            <span><u>H</u>elp</span>
          </div>

          <div className="bg-white px-6 sm:px-10 lg:px-14 py-10 sm:py-14">
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

            <p className="mt-8 max-w-2xl font-sans text-base sm:text-lg leading-[1.8] text-black-coffee/90">
              {ABOUT_ME.intro}
            </p>

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
          </div>

          <div className="bg-[#dcdcdc] border-t border-[#808080] px-3 py-1 font-mono text-[11px] text-black-coffee/80 flex items-center justify-between">
            <span>C:\portfolio\about_me.txt</span>
            <span>Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
