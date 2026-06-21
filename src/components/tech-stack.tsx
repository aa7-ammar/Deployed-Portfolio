import { GraduationCap, Target } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { stack, stackMarquee, education, focusAreas } from "@/lib/data";

export function TechStack() {
  return (
    <section id="stack" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" title="toolbox" subtitle="Stack & Skills" />

        {/* Marquee strip */}
        <Reveal className="mb-12">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 py-4">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
            <div className="flex w-max animate-marquee gap-3 pause-on-hover">
              {[...stackMarquee, ...stackMarquee].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="whitespace-nowrap rounded-full border border-border bg-muted/40 px-4 py-1.5 font-mono text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Grouped skills */}
        <div className="grid gap-5 md:grid-cols-2">
          {stack.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-accent/30">
                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-muted/60 px-2.5 py-1 text-sm text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Focus + Education */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-5">
              <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                <Target className="h-4 w-4" /> DSA Focus
              </h3>
              <p className="text-sm text-muted-foreground">
                600+ problems across LeetCode, Codeforces & GFG. Deepest in:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {focusAreas.map((f) => (
                  <span
                    key={f}
                    className="rounded-md bg-muted/60 px-2.5 py-1 text-sm text-foreground/90"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-5">
              <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                <GraduationCap className="h-4 w-4" /> Education
              </h3>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.degree}>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-medium">{e.degree}</p>
                      <span className="shrink-0 font-mono text-xs text-accent">
                        {e.score}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{e.school}</p>
                    <p className="font-mono text-xs text-muted-foreground/70">
                      {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
