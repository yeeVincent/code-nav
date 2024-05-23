const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "layout/**/*.{ts,tsx}",
    "data/**/*.mdx",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1280px",
        // "2xl": "1440px",
      },
      colors: {
        primary: colors.black,
        gray: colors.gray,
      },
    },
    extend: {
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
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          a: {
            color: theme("colors.primary.500"),
            "&:hover": {
              color: `${theme("colors.primary.600")}`,
            },
            code: { color: theme("colors.primary.400") },
          },
          "h1,h2": {
            marginTop: theme("spacing.4"), // 设置 h 的顶部间距
            marginBottom: theme("spacing.2"), // 设置 h 的底部间距
            fontWeight: "700",
            letterSpacing: theme("letterSpacing.tight"),
          },
          h3: {
            marginTop: theme("spacing.4"), // 设置 h3 的顶部间距
            marginBottom: theme("spacing.2"), // 设置 h3 的底部间距
            color: theme("colors.primary.500"),
            fontWeight: "600",
          },
          code: {
            color: theme("colors.indigo.500"),
          },
        },
      },
      invert: {
        css: {
          a: {
            color: theme("colors.primary.500"),
            "&:hover": {
              color: `${theme("colors.primary.400")}`,
            },
            code: { color: theme("colors.primary.400") },
          },
          "h1,h2,h3,h4,h5,h6": {
            color: theme("colors.gray.100"),
          },
        },
      },
    }),
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
