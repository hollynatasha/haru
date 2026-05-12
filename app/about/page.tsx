import { ABOUT_SECTIONS } from "@/lib/content";

export const metadata = {
  title: "About, Holly Natasha",
  description:
    "Who is Holly. Indonesian, Beijing-based, studying Mechanical Engineering at Tsinghua University. Building AI products and short-form video.",
};

export default function AboutPage() {
  return (
    <>
      <section className="flex h-[50vh] min-h-[360px] items-end bg-bright-gray px-6 pb-12">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-jacarta">
            ABOUT
          </p>
          <h1 className="mt-4 text-5xl sm:text-7xl lg:text-[6rem] font-black tracking-[-0.05em] leading-[0.95] text-black-coffee">
            Who is Holly<span className="text-jacarta">.</span>
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[500px_1fr] lg:gap-20">
          <div className="flex h-[500px] sm:h-[600px] lg:h-[700px] w-full items-center justify-center bg-neutral-200 text-neutral-500 text-xs font-bold tracking-[0.3em]">
            PORTRAIT
          </div>

          <div className="flex flex-col gap-10">
            {ABOUT_SECTIONS.map((s) => (
              <div key={s.heading}>
                <p className="font-serif italic text-base text-jacarta">
                  {s.heading}
                </p>
                <p className="mt-3 text-base lg:text-lg text-black-coffee leading-[1.7]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
