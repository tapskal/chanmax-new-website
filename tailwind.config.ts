// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
 content: [
   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
     },
     container: {
       center: true,
       padding: '1rem',
       screens: {
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
         '2xl': '1536px',
       },
     },
     keyframes: {
       borderFlow: {
         '0%': { transform: 'translateX(-100%)' },
         '100%': { transform: 'translateX(100%)' }
       },
       borderFlowVertical: {
         '0%': { transform: 'translateY(-100%)' },
         '100%': { transform: 'translateY(100%)' }
       }
     },
     animation: {
       borderFlow: 'borderFlow 3s linear infinite',
       borderFlowVertical: 'borderFlowVertical 3s linear infinite'
     },
     typography: {
      invert: {
        css: {
          '--tw-prose-body': 'white',
          '--tw-prose-headings': 'white',
          '--tw-prose-lead': '#9CA3AF',
          '--tw-prose-links': '#ffd000',
          '--tw-prose-bold': 'white',
          '--tw-prose-counters': '#ffd000',
          '--tw-prose-bullets': '#ffd000',
          '--tw-prose-hr': '#1F2937',
          '--tw-prose-quotes': '#9CA3AF',
          '--tw-prose-quote-borders': '#ffd000',
          '--tw-prose-captions': '#9CA3AF',
          '--tw-prose-code': 'white',
          '--tw-prose-pre-code': '#E5E7EB',
          '--tw-prose-pre-bg': 'rgb(0 0 0 / 0.1)',
          '--tw-prose-th-borders': '#1F2937',
          '--tw-prose-td-borders': '#1F2937',
    
          // Custom styling
          color: '#9CA3AF',
          maxWidth: 'none',
          
          p: {
            marginTop: '2em',
            marginBottom: '2em',
            lineHeight: '1.75',
          },
    
          'ul, ol': {
            listStylePosition: 'outside',
            marginTop: '1.5em',
            marginBottom: '1.5em',
            paddingLeft: '1.625em',
          },
    
          'ul > li, ol > li': {
            marginTop: '0.75em',
            marginBottom: '0.75em',
            paddingLeft: '0.375em',
          },
    
          'ul > li::marker': {
            color: '#ffd000',
          },
    
          'ol > li::marker': {
            color: '#ffd000',
          },
    
          a: {
            color: '#ffd000',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            padding: '0.2em 0.1em',
            borderRadius: '0.2em',
            '&:hover': {
              color: '#ffe14d',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              backgroundColor: 'rgba(255, 208, 0, 0.1)',
            }
          },
    
          'h1, h2, h3, h4': {
            color: 'white',
            fontWeight: '700',
            lineHeight: '1.25',
          },
    
          h1: {
            fontSize: '2.5em',
            marginTop: '2em',
            marginBottom: '1em',
          },
    
          h2: {
            fontSize: '2em',
            marginTop: '1.75em',
            marginBottom: '0.75em',
          },
    
          h3: {
            fontSize: '1.5em',
            marginTop: '1.5em',
            marginBottom: '0.75em',
          },
    
          strong: {
            color: 'white',
            fontWeight: '600',
          },
    
          blockquote: {
            fontStyle: 'italic',
            color: '#9CA3AF',
            borderLeftColor: '#ffd000',
            borderLeftWidth: '4px',
            padding: '1em 0 1em 1.5em',
            marginTop: '2em',
            marginBottom: '2em',
          },
    
          code: {
            color: 'white',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '0.2em 0.4em',
            borderRadius: '0.25em',
            fontSize: '0.875em',
          },
    
          pre: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5em',
            borderRadius: '0.5em',
            overflow: 'auto',
          },
        },
      },
    },
  },
},
 plugins: [require('@tailwindcss/typography')],
}

export default config