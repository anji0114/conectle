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
        relaxed: '1.75',
      },
      colors: {
        base: {
          100: '#f2f2f2',
          200: '#ebebeb',
          300: '#e6e6e6',
          400: '#d9d9d9',
          500: '#bcbcbc',
          600: '#a8a8a8',
          700: '#8f8f8f',
          800: '#7d7d7d',
          900: '#666666',
          1000: '#171717',
        },
        primary: {
          100: '#f5fbff',
          200: '#eaf8ff',
          300: '#e0f4ff',
          400: '#ccedff',
          500: '#99dbff',
          600: '#54baff',
          700: '#007bff',
          800: '#0064cc',
          900: '#005bb8',
          1000: '#00223d',
        },
        attention: {
          100: '#faf7f7',
          200: '#f5ecec',
          300: '#f2e2e2',
          400: '#e5bcbc',
          500: '#d99a9a',
          600: '#cc5b5b',
          700: '#b84848',
          800: '#9c3d3d',
          900: '#863737',
          1000: '#2d0b0b',
        },
      },
    },
  },
  plugins: [],
};
export default config;
