/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brutal-paper': '#E8E4DD',
        'brutal-red': '#E63B2E',
        'brutal-offwhite': '#F5F3EE',
        'brutal-black': '#111111',
      },
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'sans-serif'],
        'serif-display': ['"DM Serif Display"', 'serif'],
        'mono': ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
