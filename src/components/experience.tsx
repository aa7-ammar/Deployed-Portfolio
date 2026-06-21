import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { experiences } from "@/lib/data";

function monogram(company: string) {
  const cleaned = company.replace(/[^a-zA-Z ]/g, "").trim();
  const words = cleaned.split(/\s+/);
  return (words[0]?.[0] ?? "").concat(words[1]?.[0] ?? "").toUpperCase();
}

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="01" title="career" subtitle="Work Experience" />

        <div className="relative">
          {/* timeline spine */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border md:left-6" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.05}>
                <div className="relative pl-16 md:pl-20">
                  {/* node */}
                  <div className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full border border-accent/40 bg-card font-mono text-xs font-semibold text-accent shadow-glow md:h-12 md:w-12">
                    {monogram(exp.company)}
                  </div>

                  <div className="rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-accent/30 md:p-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-display text-lg font-semibold md:text-xl">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-accent">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {exp.company} · {exp.location}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {exp.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
