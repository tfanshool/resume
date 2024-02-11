/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins','ui-sans-serif', 'system-ui'],
        'serif': ['Noto Serif', 'Georgia'],
        'mono': ['JetBrains Mono','ui-monospace', 'SFMono-Regular'],
      },
    },
    plugins: [],
  }
}