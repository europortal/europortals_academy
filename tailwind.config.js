/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#F0F5FF",
          100: "#EEF3FF",
          200: "#DDE3EE",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#1A4FDB",
          600: "#1642c4",
          700: "#1e3a8a",
          800: "#1e3272",
          900: "#0B1F3A",
        },
        gold: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#F0A500",
          600: "#d99400",
          700: "#b45309",
        },
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
