import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        codevura: {
          light: '#f7f5ff',
          dawn: '#efe9ff',
          standard: '#6d5cff',
          deep: '#2b1d7a',
          accent: '#ff6b3b',
          ember: '#ff8b3f',
          sky: '#67f5ff',
          slate: '#0b1124',
          muted: '#4c4b63',
        },
      },
      backgroundImage: {
        'codevura-hero': 'radial-gradient(circle at 20% -20%, rgba(255,255,255,0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(111,76,255,0.28), transparent 45%)',
        'codevura-card': 'radial-gradient(circle at top, rgba(255,255,255,0.6), transparent 60%)',
      },
      boxShadow: {
        'codevura-soft': '0 25px 60px rgba(42, 18, 92, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
