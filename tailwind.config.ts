import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: '940px',
        background: '274px',
        card: '138px',
        addons: '450px'
      },
      boxShadow: {
        custom: '0px 4px 6px 0px rgba(54, 78, 126, 0.10)'
      },
      transitionProperty: {
        transform: 'transform'
      }
    },
    fontSize: {
      xs: '12px',
      base: '14px',
      s: '16px',
      sm: '18px',
      m: '24px',
      l: '32px',
      lg: '40px',
      xl: '56px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '940px',
      xl: '1280px'
    },
    colors: {}
  },
  darkMode: 'class',
  variants: {
    extend: {}
  },
  plugins: []
}

export default config
