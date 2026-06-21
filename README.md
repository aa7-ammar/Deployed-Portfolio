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

Open it and edit the objects — profile, stats, socials, experiences, projects, stack, education, recommendations. The UI updates automatically. Search the file for **`TODO`** to jump to every gap that needs your input.

### ✅ Gaps to fill in (checklist)

These are the things I couldn't pull from your resume — they're marked `// TODO` in `src/lib/data.ts`:

- [ ] **Social URLs** — `socials[]`: real GitHub, LinkedIn, and LeetCode links (placeholders right now).
- [ ] **Resume PDF** — drop your file in `public/` (e.g. `public/resume.pdf`) so the **Download Resume** button works. Update `profile.resumeUrl` if you name it differently.
- [ ] **Project links** — `projects[].github` and `projects[].live`: GitHub repos and live demo URLs (your resume only had `[Link]` placeholders).
- [ ] **Project screenshots** *(optional)* — add images to `public/projects/` and set `projects[].image` to e.g. `"/projects/devdesk.png"` to show preview thumbnails.
- [ ] **Headshot** *(optional)* — set `profile.avatar` to an image path in `public/`.
- [ ] **Stats** — `stats[]`: tune the headline numbers/labels however you like.
- [ ] **Recommendations** *(optional)* — `recommendations[]` is empty, so that section is hidden. Add entries (see the example in the file) and it appears automatically.
- [ ] **Domain** — in `src/app/layout.tsx`, update `metadataBase` to your real deployed URL once live.
- [ ] **OG image** *(optional)* — add `public/og.png` for richer link previews.

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

## ▲ Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and **import** the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. After it's live, update `metadataBase` in `src/app/layout.tsx` to your domain and redeploy.

> Don't forget to add your `resume.pdf` to `public/` and commit it, otherwise the Download Resume button will 404.

Build settings (auto-filled by Vercel):
- **Framework preset:** Next.js
- **Build command:** `next build`
- **Output:** `.next`

---

## 🧰 Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [next-themes](https://github.com/pacocoursey/next-themes) — theme toggle
- [lucide-react](https://lucide.dev/) — icons

---

Built as a starting point — make it yours. 🧡
