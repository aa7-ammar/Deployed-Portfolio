"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Line = { text: string; tone?: "cmd" | "ok" | "muted" | "accent" };

const SCRIPT: Line[] = [
  { text: "$ whoami", tone: "cmd" },
  { text: "ammar — full-stack engineer", tone: "ok" },
  { text: "$ cat stack.txt", tone: "cmd" },
  { text: "react · next.js · node · fastapi", tone: "muted" },
  { text: "$ npm run build", tone: "cmd" },
  { text: "✓ compiled successfully", tone: "accent" },
];

const toneClass: Record<NonNullable<Line["tone"]>, string> = {
  cmd: "text-foreground",
  ok: "text-emerald-400",
  muted: "text-muted-foreground",
  accent: "text-accent",
};

export function TerminalCard() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState<number>(reduce ? SCRIPT.length : 0);
  const [typed, setTyped] = useState<string>("");
  const lineIndex = useRef(0);

  useEffect(() => {
    if (reduce) return;
    let cancelled = false;
    let charTimer: ReturnType<typeof setTimeout>;
    let lineTimer: ReturnType<typeof setTimeout>;

    const typeLine = () => {
      const i = lineIndex.current;
      if (i >= SCRIPT.length) {
        // restart after a pause
        lineTimer = setTimeout(() => {
          if (cancelled) return;
          lineIndex.current = 0;
          setShown(0);
          setTyped("");
          typeLine();
        }, 2600);
        return;
      }
      const full = SCRIPT[i].text;
      let c = 0;
      const tick = () => {
        if (cancelled) return;
        c += 1;
        setTyped(full.slice(0, c));
        if (c < full.length) {
          charTimer = setTimeout(tick, 26);
        } else {
          lineTimer = setTimeout(() => {
            if (cancelled) return;
            setShown((s) => s + 1);
            setTyped("");
            lineIndex.current += 1;
            typeLine();
          }, 420);
        }
      };
      tick();
    };

    typeLine();
    return () => {
      cancelled = true;
      clearTimeout(charTimer);
      clearTimeout(lineTimer);
    };
  }, [reduce]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-card/90 shadow-soft backdrop-blur">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          ~/ammar — zsh
        </span>
        <span className="ml-auto h-2 w-2 animate-pulse-dot rounded-full bg-accent" />
      </div>

      {/* body */}
      <div className="min-h-[180px] space-y-1.5 p-4 font-mono text-[13px] leading-relaxed">
        {SCRIPT.slice(0, shown).map((line, i) => (
          <p key={i} className={toneClass[line.tone ?? "muted"]}>
            {line.text}
          </p>
        ))}
        {!reduce && shown < SCRIPT.length ? (
          <p className={toneClass[SCRIPT[shown].tone ?? "muted"]}>
            {typed}
            <span className="ml-0.5 inline-block h-[1.05em] w-[0.5ch] translate-y-[0.15em] animate-caret-blink bg-accent" />
          </p>
        ) : null}
      </div>
    </div>
  );
}
