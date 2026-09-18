/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm, editorial hotel palette — deep ink, brass/gold accent, soft ivory.
        ink: {
          DEFAULT: "#12181b",
          50: "#f4f5f5",
          100: "#e6e8e8",
          200: "#c7cbcc",
          300: "#a2a8aa",
          400: "#767f82",
          500: "#565f62",
          600: "#414a4d",
          700: "#2f3639",
          800: "#1c2225",
          900: "#12181b",
        },
        ivory: {
          DEFAULT: "#faf7f1",
          50: "#fefdfb",
          100: "#faf7f1",
          200: "#f2ecdf",
          300: "#e7dcc4",
        },
        brass: {
          DEFAULT: "#a9843c",
          50: "#f8f1e3",
          100: "#efe1c4",
          200: "#dfc38c",
          300: "#cca75c",
          400: "#a9843c",
          500: "#8c6b2e",
          600: "#6f5424",
          700: "#54401b",
        },
      },
      fontFamily: {
        display: ["\"Cormorant Garamond\"", "\"Playfair Display\"", "serif"],
        body: ["\"Manrope\"", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        fadeIn: "fadeIn 1.1s ease forwards",
        kenburns: "kenburns 12s ease-out forwards",
      },
    },
  },
  plugins: [],
};
