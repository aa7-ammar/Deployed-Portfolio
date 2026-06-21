# Ammar Ali — Developer Portfolio

A fast, animated, fully responsive personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dark/light theme, scroll-reveal animations, an animated terminal signature element, and a single content file you edit to update everything.

---

## ✨ Features

- **Dark / light theme toggle** (persists across visits, defaults to dark).
- **One content file** (`src/lib/data.ts`) drives every section — no need to touch component code.
- **Animated hero** with a live local clock and a typing terminal card.
- **Scroll-reveal animations** that respect `prefers-reduced-motion`.
- **Sections:** Hero · Work Experience timeline · Featured Projects · Stack & Skills · Education · (optional) Recommendations · Contact · Footer.
- **Responsive** down to mobile, with a mobile nav menu and keyboard-visible focus states.
- **SEO-ready** metadata and Open Graph tags.

---

## 🚀 Getting started (local)

> Requires **Node.js 18.18+** (Node 20 LTS recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build (optional, to test before deploy)
npm run build
npm run start
```

---

## ✏️ How to customize (start here)

**Almost everything lives in one file:** [`src/lib/data.ts`](./src/lib/data.ts).

### Where things live

| You want to change... | Edit |
| --- | --- |
| Any text / content / links | `src/lib/data.ts` |
| Colors & theme palette | `src/app/globals.css` (CSS variables under `:root` and `.dark`) |
| Fonts | `src/app/layout.tsx` |
| Section order | `src/app/page.tsx` |
| A specific section's layout | the matching file in `src/components/` |

### Changing the accent color

In `src/app/globals.css`, edit the `--accent` HSL value in both `:root` (light) and `.dark` (dark). Everything that "shouts" uses this one variable, so a single change re-themes the whole site.

---

## 📁 Project structure

```
src/
├─ app/
│  ├─ layout.tsx       # fonts, metadata, theme provider
│  ├─ page.tsx         # assembles the sections in order
│  └─ globals.css      # theme tokens + base styles
├─ components/         # one file per section + shared bits
│  ├─ navbar.tsx
│  ├─ hero.tsx
│  ├─ terminal-card.tsx
│  ├─ experience.tsx
│  ├─ projects.tsx
│  ├─ tech-stack.tsx
│  ├─ recommendations.tsx
│  ├─ contact.tsx
│  ├─ footer.tsx
│  ├─ theme-toggle.tsx
│  ├─ theme-provider.tsx
│  ├─ section-heading.tsx
│  └─ reveal.tsx
└─ lib/
   ├─ data.ts          # 👈 single source of truth — edit this
   └─ utils.ts
```

---

## 🧰 Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [next-themes](https://github.com/pacocoursey/next-themes) — theme toggle
- [lucide-react](https://lucide.dev/) — icons

