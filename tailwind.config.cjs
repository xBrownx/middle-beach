/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'nav-gradient': 'linear-gradient(#000 0 0, #FFF 0 0)',
        'availability': "url('https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/availability/availability-background-optimised.jpg')",
        'availability-mobile': "url('https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/availability/mobile-background-optimised.jpg')",
      },
      backgroundSize: {
        'nav-size': '0 2px',
        'nav-size-hover': '100% 2px',
      },
      boxShadow: {
        'modal': '0 4px 30px rgba(0, 0, 0, 0.4)',
      },
      filter: {
        'location-button': 'invert(20%) sepia(82%) saturate(370%) hue-rotate(130deg) brightness(94%) contrast(92%)',
      },
      fontFamily: {
        headline: ["Gotham-Black"],
        subHeadline: ["'Gotham-Medium'", 'sans-serif']
      },
      colors: {
        background: {
          primary: '#ded9d0',
          secondary: '#162425',
          modal: 'rgba(22, 74, 73, 0.3)'
        },
        font: {
          primary: '#E4002B',
          secondary: "#0093AD",
        },
        button: {
          primary: "#164A49",
        },
        foreground: 'hsl(var(--foreground))',
        progress: '#DED9D0',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      gap: {
        'avail': '0.76%'
      }
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};