/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Colors are driven by CSS variables defined in globals.css,
      // so light/dark switching happens automatically via the .dark class.
      colors: {
        paper: "var(--paper)",
        paper2: "var(--paper-2)",
        paper3: "var(--paper-3)",
        ink: "var(--ink)",
        inkSoft: "var(--ink-soft)",
        muted: "var(--muted)",
        clay: "var(--clay)",
        clayDeep: "var(--clay-deep)",
        teal: "var(--teal)",
        line: "var(--line)",
        card: "var(--card)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
