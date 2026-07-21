import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="border-b border-theme-bg-gray bg-theme-bg px-6 pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-theme-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl leading-[1.08] md:text-6xl">{title}</h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-theme-text-light md:text-xl">
          {intro}
        </p>
        {children && <div className="mt-10 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
