/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arc-cyan': '#00F0FF',
        'stark-red': '#E62429',
        'titan-gold': '#D4AF37',
        'bg-primary': '#050505',
        'bg-elevated': '#0a0a0f',
        'bg-panel': '#0d0d1a',
        'bg-card': '#0f0f1f',
      },
      fontFamily: {
        hud:     ['Orbitron', 'monospace'],
        heading: ['Rajdhani', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        code:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'reactor-pulse': 'reactor-pulse 2.5s ease-in-out infinite',
        'scan-line':     'scan-line 6s linear infinite',
        'blink':         'blink 1s step-end infinite',
        'float':         'float 4s ease-in-out infinite',
        'glow-pulse':    'glow-pulse 2s ease-in-out infinite',
      },
      boxShadow: {
        'glow-cyan':  '0 0 15px #00F0FF, 0 0 40px #00F0FF40',
        'glow-red':   '0 0 15px #E62429, 0 0 40px #E6242940',
        'glow-gold':  '0 0 15px #D4AF37, 0 0 40px #D4AF3740',
      },
    },
  },
  plugins: [],
}
