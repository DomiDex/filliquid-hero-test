import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'dodger-blue': {
          DEFAULT: '#278EFF',
          50: '#DFEEFF',
          100: '#CAE3FF',
          200: '#A1CEFF',
          300: '#79B9FF',
          400: '#50A3FF',
          500: '#278EFF',
          600: '#0071EE',
          700: '#0057B6',
          800: '#003C7E',
          900: '#002146',
          950: '#00142A',
        },
      },
      fontFamily: {
        custom: ['var(--font-custom)'],
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
