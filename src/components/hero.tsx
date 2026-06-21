"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock, Download, MapPin } from "lucide-react";
import { TerminalCard } from "@/components/terminal-card";
import { profile, stats, socials } from "@/lib/data";

function useLiveTime(timezone: string) {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: timezone,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timezone]);
  return time;
}

export function Hero() {
  const reduce = useReducedMotion();
  const time = useLiveTime(profile.timezone);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44"
    >
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[760px] max-w-[90vw] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl text-center"
      >
        {/* location + live clock */}
        <motion.div
          variants={item}
          className="mb-8 flex flex-wrap items-center justify-center gap-2 font-mono text-xs"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-muted-foreground tabular-nums">
            <Clock className="h-3.5 w-3.5 text-accent" />
            {time || "--:--:--"}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="accent-gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {profile.tagline.lead}{" "}
          {profile.tagline.highlights.map((h, i) => (
            <span key={h}>
              <strong className="font-semibold text-foreground">{h}</strong>
              {i < profile.tagline.highlights.length - 1 ? ", " : "."}
            </span>
          ))}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* socials inline */}
        <motion.div
          variants={item}
          className="mt-6 flex items-center justify-center gap-4 text-muted-foreground"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="transition-colors hover:text-accent"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

        {/* stats */}
        <motion.div
          variants={item}
          className="mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-sm text-muted-foreground"
        >
          {stats.map((s, i) => (
            <span key={s.label} className="flex items-center gap-2">
              {i > 0 ? <span className="text-border">·</span> : null}
              <strong className="font-semibold text-foreground">
                {s.value}
              </strong>
              {s.label}
            </span>
          ))}
        </motion.div>

        {/* terminal */}
        <motion.div
          variants={item}
          className="mx-auto mt-16 max-w-xl text-left"
        >
          <TerminalCard />
        </motion.div>
      </motion.div>
    </section>
  );
}
