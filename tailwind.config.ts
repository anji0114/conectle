import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.375rem',
        '3xl': '1.5rem',
        '4xl': '1.625rem',
        '5xl': '1.75rem',
      },
      lineHeight: {
        150: '1.5',
        180: '1.8',
      },
      colors: {
        base: {
          100: '#FAFAFC',
          200: '#F6F8FA',
          300: '#E3E8EC',
          400: '#d0d7de',
          500: '#A9BACB',
          600: '#656D76',
          700: '#404A58',
          800: '#292F37',
          900: '#1F2328',
        },
        primary: {
          400: '#1885DC',
          500: '#3D89B8',
        },
        utility: {
          500: '#DA2F35',
        },
      },
    },
  },
  plugins: [],
};
export default config;
