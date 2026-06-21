import { MapPin } from "lucide-react";
import { profile, navItems, socials } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-mono text-lg font-semibold"
          >
            <span className="text-accent">{">_"}</span>
            {profile.brand}
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {profile.tagline.lead}{" "}
            {profile.tagline.highlights.map((h, i) => (
              <span key={h} className="text-accent">
                {h}
                {i < profile.tagline.highlights.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {profile.location}
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-foreground/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Social
          </h3>
          <ul className="space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-accent"
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl border-t border-border pt-6 font-mono text-xs text-muted-foreground">
        © {year} {profile.name}. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
