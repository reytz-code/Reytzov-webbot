import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "case-scroll": {
          "0%": { transform: "translateX(100%)" },
          "50%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "bounce-slow": {
          "0%, 100%": { 
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
          },
          "50%": { 
            transform: "translateY(-10px)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
          },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
            transform: "scale(1.05)"
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "case-scroll": "case-scroll 3s ease-in-out",
        "bounce-slow": "bounce-slow 2s infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "shimmer": "shimmer 2s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gaming-gradient": "linear-gradient(135deg, hsl(222, 84%, 5%) 0%, hsl(217, 32%, 8%) 50%, hsl(222, 84%, 5%) 100%)",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-lg": "0 0 25px rgba(59, 130, 246, 0.4)",
        "glow-gold": "0 0 25px rgba(245, 158, 11, 0.4)",
        "glow-purple": "0 0 25px rgba(139, 92, 246, 0.4)",
        "glow-green": "0 0 20px rgba(34, 197, 94, 0.4)",
        "glow-red": "0 0 20px rgba(239, 68, 68, 0.4)",
        "inner-glow": "inset 0 0 10px rgba(59, 130, 246, 0.3)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
      },
      scale: {
        "102": "1.02",
        "103": "1.03",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
