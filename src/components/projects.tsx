import Image from "next/image";
import { ArrowUpRight, Github, FolderGit2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="02"
          title="work"
          subtitle="Featured Projects"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
                {/* Optional preview image; falls back to a terminal-style header */}
                {project.image ? (
                  <div className="relative aspect-video w-full overflow-hidden border-b border-border">
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3 font-mono text-xs text-muted-foreground">
                    <FolderGit2 className="h-4 w-4 text-accent" />
                    {project.name.split("—")[0].trim().toLowerCase().replace(/\s+/g, "-")}
                    {project.period ? (
                      <span className="ml-auto">{project.period}</span>
                    ) : null}
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-display text-lg font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {project.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-muted/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4 pt-2 text-sm">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-accent"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    ) : null}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-accent transition-transform hover:translate-x-0.5"
                      >
                        Live demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                    {!project.github && !project.live ? (
                      <span className="font-mono text-xs text-muted-foreground/60">
                        {/* TODO: add links in src/lib/data.ts */}
                        links coming soon
                      </span>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
