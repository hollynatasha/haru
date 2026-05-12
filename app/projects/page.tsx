import { PROJECTS } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
  title: "Projects, Holly Natasha",
  description:
    "Projects by Holly Natasha. HANZHI.ID, CSCA.ID, Haru Studio, HeaRing, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="flex h-[50vh] min-h-[360px] items-end bg-wisteria px-6 pb-12">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-jacarta">
            WORK
          </p>
          <h1 className="mt-4 text-5xl sm:text-7xl lg:text-[6rem] font-black tracking-[-0.05em] leading-[0.95] text-black-coffee">
            Projects<span className="text-jacarta">.</span>
          </h1>
        </div>
      </section>

      <section className="bg-bright-gray px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              category={p.category}
              oneLiner={p.oneLiner}
              href={p.href}
            />
          ))}
        </div>
      </section>
    </>
  );
}
