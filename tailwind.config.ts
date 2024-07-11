import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hoc/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        titillium: ['var(--font-titillium)'],
        roboto: ['var(--font-roboto)'],
        dotMatrix: ['var(--font-dot-matrix)'],
      },
      keyframes: {
        blink: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        breath: {
          '0%': { borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50% ' },
          '50%': { borderRadius: '96% 4% 93% 7% / 6% 91% 9% 94% ' },
          '100%': { borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%' },
        }
      },
      animation: {
        blink: "blink 0.5s ease-in-out infinite",
        breath: "breath 15s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};
export default config;
