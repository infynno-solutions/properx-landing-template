import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        monument: ["var(--font-monument)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },

        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        border: 'border 4s ease infinite',
      },
      backgroundImage: {
        "ecosystem-gradient":
          "radial-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.37),rgba(255, 255, 255, 1))",
        "more-than-platform-gradient":
          " linear-gradient(210deg, rgba(144,87,226,1) 31%, rgba(204,104,236,1) 63%, rgba(204,104,236,0.9641106442577031) 81%, rgba(255,255,255,1) 100%)",
        "circle-blur-gradient":
          "radial-gradient(rgba(64, 83, 255, 1),rgba(201, 206, 255, 0.42),rgba(255, 255, 255, 0))",
        "logos-tail-gradient-mid":
          "linear-gradient(rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0))",
        "logos-tail-gradient-third":
          "linear-gradient(rgba(255, 255, 255, 0.21),rgba(255, 255, 255, 0))",
        "all-tabs-gradient":
          "angular-gradient(rgba(249, 142, 218, 1),rgba(121, 108, 220, 1),rgba(61, 230, 211, 1),rgba(73, 146, 208, 1))",
        "traditional-app-ecosystem-gradient":
          "linear-gradient(rgba(136, 88, 224, 1),rgba(202, 84, 234, 1),rgba(208, 173, 236, 1) )",
        "properX-ecosystem-gradient":
          "radial-gradient(rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0.27),rgba(255, 255, 255, 0))",

      },
      rotate: {
        '-9': '-9deg',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
