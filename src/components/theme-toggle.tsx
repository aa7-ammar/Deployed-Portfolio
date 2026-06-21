"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/80 transition-colors hover:border-accent/50 hover:text-accent"
    >
      {/* Render nothing theme-specific until mounted to avoid hydration mismatch */}
      {mounted ? (
        isDark ? (
          <Sun className="h-[1.05rem] w-[1.05rem]" />
        ) : (
          <Moon className="h-[1.05rem] w-[1.05rem]" />
        )
      ) : (
        <span className="h-[1.05rem] w-[1.05rem]" />
      )}
    </button>
  );
}
