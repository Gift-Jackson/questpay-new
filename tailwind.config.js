/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        lightbg:'rgb(var(--light-bg))',
        mediumbg:'rgb(var(--medium-bg))',
        stroke: 'rgb(var(--border))',
        stroke_focus: 'rgb(var(--border-focus))',
        maintext: 'rgb(var(--font-color))',
        subtext: 'rgb(var(--font-color-light))',
        green: 'var(--green)',
        blue: 'var(--blue)',
        orange: 'var(--orange)',
        crimson: 'var(--crimson)',
        pink: 'var(--pink)',
        purple: 'var(--purple)',
      },
      fontFamily: {
        outfit: ['Outfit, system-ui'],
        jaro: ['Jaro, system-ui'],
      },
    },
  },
  plugins: [
    daisyui,
    function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          background: 'linear-gradient(270deg, rgb(var(--color-primary)), #FF26B9 99.99%, #FE34B9 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
