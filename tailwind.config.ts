import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#dbe9ff",
          200: "#b2d3ff",
          300: "#80b8ff",
          400: "#4d9dff",
          500: "#1e82ff",
          600: "#0d6ae6",
          700: "#0a53b4",
          800: "#083d82",
          900: "#052650"
        }
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Poppins'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        focus: "0 12px 30px -12px rgba(30, 130, 255, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
