import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { recommendations } from "@/lib/data";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Recommendations() {
  // Hidden until you add at least one recommendation in src/lib/data.ts
  if (recommendations.length === 0) return null;

  return (
    <section id="recommendations" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          title="words"
          subtitle="Recommendations"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-accent/30">
                <Quote className="h-6 w-6 text-accent/70" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-muted font-mono text-xs font-semibold text-accent">
                    {initials(r.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {r.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {r.title} · {r.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
