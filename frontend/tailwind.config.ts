import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#00D4FF',
        midnight: '#060B14',
        deep: '#0A1020',
        panel: '#111827',
        glass: 'rgba(17, 24, 39, 0.65)',
        lint: '#F59E0B',
        test: '#10B981',
        build: '#3B82F6',
        push: '#7C3AED',
        danger: '#EF4444',
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', 'sans-serif'],
        mono: ['"Cascadia Code"', '"Fira Code"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 24px rgba(0, 212, 255, 0.25)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.45)',
      },
      screens: {
        presentation: '1280px',
        'presentation-lg': '1920px',
      },
    },
  },
} satisfies Config
