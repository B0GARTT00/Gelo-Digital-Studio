/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        base: 'var(--bg)',
        'base-2': 'var(--bg-2)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        border: 'var(--border)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Sora"', '"Segoe UI"', 'sans-serif'],
        sans: ['"Sora"', '"Space Grotesk"', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(93, 224, 255, 0.35)',
        deep: '0 30px 80px rgba(0, 0, 0, 0.55)',
      },
    },
  },
  plugins: [],
}

