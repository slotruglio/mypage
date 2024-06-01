import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'binary-pattern': "url('/img/background.png')",
      },
      backgroundColor: {
        'background-main': 'rgb(44, 54, 57)',
      },
      colors: {
        'main-brown': '#A27B5C',
        'main-white': '#DCD7C9',
        'background-main': 'rgb(44, 54, 57)',
      },
      fontFamily: {
        mono: ['SourceCodePro', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
