import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  /** monospace eyebrow, e.g. "02" or "work" */
  index: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3 font-mono text-sm text-accent">
        <span className="text-muted-foreground">{index}</span>
        <span className="h-px w-8 bg-accent/60" />
        <span className="tracking-widest uppercase">{title}</span>
      </div>
      {subtitle ? (
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
          {subtitle}
        </h2>
      ) : null}
    </Reveal>
  );
}
