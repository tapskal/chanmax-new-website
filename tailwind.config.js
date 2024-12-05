/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#ffd000',
            light: '#ffe14d',
            dark: '#e6bb00',
          },
          secondary: {
            DEFAULT: '#000000',
            50: '#f7f7f7',
            100: '#e3e3e3',
            200: '#c8c8c8',
            300: '#a4a4a4',
            400: '#818181',
            500: '#666666',
            600: '#515151',
            700: '#434343',
            800: '#383838',
            900: '#000000',
          },
          accent: {
            blue: '#2563eb',
            purple: '#7c3aed',
            pink: '#ec4899',
          },
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
          display: ['var(--font-jakarta)'],
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-primary': 'linear-gradient(135deg, #ffd000 0%, #ffe14d 100%)',
        },
      },
    },
    plugins: [],
  }