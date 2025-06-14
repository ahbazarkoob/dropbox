import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // keyframes: {
      //   'spin-once': {
      //     '0%': { transform: 'rotate(0deg)' },
      //     '100%': { transform: 'rotate(360deg)' },
      //   },
      // },
      // animation: {
      //   'spin-once': 'spin-once 1s linear forwards',
      // },
    },
  },
  plugins: [],
} satisfies Config;
