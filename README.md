# "Atlas" redesign — drop-in for your Next.js portfolio

This folder mirrors your project structure. Copy each file to the matching path
in your repo (overwriting the old version). Everything keeps your existing
machinery: `next/image`, server actions, framer-motion, both context providers,
and your Resend email flow.

## Files in this bundle

```
tailwind.config.js              ← replace (palette + fonts now wired here)
app/globals.css                 ← replace (zellige CSS variables + animations)
app/layout.tsx                  ← replace (next/font, loader, atmosphere)
app/page.tsx                    ← replace (section order, no extra wrapper main)
lib/data.ts                     ← replace (cleaned titles + copy)
context/...                     ← UNCHANGED, keep yours
lib/hooks.ts / types.ts / utils.ts  ← UNCHANGED, keep yours
actions/sendEmail.ts            ← UNCHANGED, keep yours
email/contact-form-email.tsx    ← UNCHANGED, keep yours

components/star.tsx             ← NEW (the eight-point zellige mark)
components/loader.tsx           ← NEW (loading screen)
components/scroll-progress.tsx  ← NEW (top progress bar)
components/header.tsx           ← replace (theme toggle now lives here)
components/intro.tsx            ← replace
components/section-heading.tsx  ← replace (new signature: number + label)
components/section-divider.tsx  ← replace
components/about.tsx            ← replace
components/projects.tsx         ← replace
components/project.tsx          ← replace
components/skills.tsx           ← replace
components/studies.tsx         ← replace (custom timeline, no external lib)
components/experience.tsx      ← replace (custom timeline, no external lib)
components/contact.tsx         ← replace
components/submit-btn.tsx      ← replace
components/footer.tsx          ← replace
```

## After copying — 4 quick things

1. **No new dependencies.** Fonts load via `next/font/google` (Fraunces, Hanken
   Grotesk, JetBrains Mono). framer-motion, react-icons, react-hot-toast and
   clsx are already in your project.

2. **You can remove `react-vertical-timeline-component`** — the Studies and
   Experience sections now use a lightweight custom timeline, so the package and
   its `import ".../style.min.css"` are no longer needed.

3. **`components/theme-switch.tsx` is now unused** — the theme toggle moved into
   the header. Delete it, or keep it if you still want the floating button (just
   re-add it to `app/layout.tsx`).

4. **Make sure these assets exist:** `public/circle-me.png` (your portrait) and
   `public/resume.pdf` (the CV download). Also update the GitHub link in
   `components/intro.tsx` — it's still the `https://github.com` placeholder.

## One compatibility note

`components/submit-btn.tsx` imports `useFormStatus` from `react-dom` (the stable
API). Your old file used `experimental_useFormStatus`. If your Next.js version
is old enough to require the experimental alias, swap that one import back.

## Want a fully working theme persistence?

Your existing `theme-context.tsx` already handles `localStorage` + the `.dark`
class on `<html>`, and the new palette keys off that class — so dark mode keeps
working exactly as before. Nothing to change there.
