import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile, socials, contactLinks } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 text-center md:p-14">
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 max-w-full -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]" />

            <span className="font-mono text-sm text-accent">
              {"// let's build something"}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Have a role or project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              I&apos;m open to internships and full-stack roles. The fastest way
              to reach me is email — I usually reply within a day.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
              {contactLinks.map((c) =>
                c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                  >
                    <c.icon className="h-3.5 w-3.5" />
                    {c.label}
                  </a>
                ) : (
                  <span key={c.label} className="inline-flex items-center gap-1.5">
                    <c.icon className="h-3.5 w-3.5" />
                    {c.label}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
