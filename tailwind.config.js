/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'adv-navy': '#0b2545',
        'adv-gold': '#b8860b',
        'adv-muted': '#6b7280',
        'paper': '#f7f6f3',
      },
    },
  },
  plugins: [],
};
