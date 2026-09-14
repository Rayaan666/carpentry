/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          DEFAULT: '#9E532B',
          light: '#BA683A',
          hover: '#8C4620',
          muted: '#C4815E',
          glow: 'rgba(158, 83, 43, 0.25)',
          border: 'rgba(158, 83, 43, 0.35)',
        },
        charcoal: {
          DEFAULT: '#141414',
          deep: '#0B0B0B',
          surface: '#1A1A1A',
          elevated: '#242424',
          border: '#2E2E2E',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          warm: '#F4F0EA',
          card: '#FFFFFF',
          border: '#E8E4DC',
          muted: '#8A847C',
        },
        warmgrey: {
          DEFAULT: '#736E67',
          light: '#E2DCD5',
          subtle: '#F2EFEA',
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      letterSpacing: {
        'architectural': '0.2em',
        'technical': '0.15em',
      },
      backgroundImage: {
        'technical-grid': 'radial-gradient(rgba(158, 83, 43, 0.12) 1px, transparent 1px)',
        'technical-grid-dark': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      },
      boxShadow: {
        'copper-sm': '0 0 15px rgba(158, 83, 43, 0.15)',
        'copper-lg': '0 10px 30px rgba(158, 83, 43, 0.25)',
        'architectural': '0 20px 50px -10px rgba(0, 0, 0, 0.08)',
        'architectural-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
