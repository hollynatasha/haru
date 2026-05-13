import { notFound } from "next/navigation";
import Link from "next/link";
import { GUIDES } from "@/lib/content";
import { GUIDE_BODIES } from "@/lib/guide-content";
import { BackToHome } from "@/components/BackToHome";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) return { title: "Guide, Holly Natasha" };
  return {
    title: `${guide.title.toLowerCase()}, Holly Natasha`,
    description: guide.description,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) notFound();

  const body = GUIDE_BODIES[slug] ?? [
    { paragraphs: ["This guide is in the works. Check back soon."] },
  ];

  const formattedDate = new Date(guide.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="bg-cream px-6 pt-10 pb-14 sm:pt-12 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <BackToHome variant="light" />

          <p className="mt-14 text-[11px] font-semibold uppercase tracking-[0.35em] text-jacarta">
            {guide.category}
          </p>
          <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.03em] text-black-coffee leading-[1.05]">
            {guide.title}
          </h1>
          <p className="mt-6 font-serif italic text-base text-black-coffee/65">
            {formattedDate} &middot; {guide.readMinutes} min read
          </p>
        </div>
      </section>

      <article className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg sm:text-xl font-normal leading-[1.75] text-black-coffee/90">
            {guide.description}
          </p>

          <div className="mt-12 space-y-12">
            {body.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-serif italic text-2xl sm:text-3xl text-black-coffee">
                    {section.heading}
                  </h2>
                )}
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-base sm:text-lg font-normal leading-[1.8] text-black-coffee/85"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                {section.images && section.images.length > 0 && (
                  <div className="mt-8 space-y-6">
                    {section.images.map((img, k) => (
                      <figure key={k} className="overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-auto rounded-lg border border-line bg-cream"
                        />
                        {img.caption && (
                          <figcaption className="mt-3 font-serif italic text-sm text-black-coffee/60 text-center">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <p className="font-serif italic text-base text-black-coffee/70">
              Written by Holly in Beijing. Notes get longer as I learn more. If
              you spot something off, find me in the footer.
            </p>
            <div className="mt-8">
              <Link
                href="/ai-resources"
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-jacarta hover:text-black-coffee transition-colors"
              >
                <span>←</span> All resources
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
