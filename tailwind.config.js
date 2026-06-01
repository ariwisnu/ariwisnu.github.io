/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // "Night Approach" — midnight cockpit palette
        ink: {
          DEFAULT: '#0a0f1c', // page base
          900: '#070b16',
          800: '#0e1426', // panel
          700: '#141d33', // elevated panel
          600: '#1b2542', // raised
        },
        line: '#202c49', // hairlines / borders
        sky: {
          // primary accent — runway approach cyan (intentionally shadows default sky scale)
          DEFAULT: '#38bdf8',
          bright: '#7dd3fc',
          dim: '#0284c7',
        },
        beam: {
          // secondary warm accent — runway / caution lights (used sparingly)
          DEFAULT: '#fbbf24',
          bright: '#fcd34d',
          dim: '#7c5306',
        },
        fog: {
          DEFAULT: '#e7ecf8', // primary text
          muted: '#98a7c7', // secondary text
          faint: '#5f6e90', // tertiary / labels
        },
        warn: '#f87171',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 30px -8px rgba(56, 189, 248, 0.5)',
        'glow-beam': '0 0 28px -8px rgba(251, 191, 36, 0.45)',
        card: '0 22px 60px -32px rgba(0, 0, 0, 0.9)',
      },
      keyframes: {
        pulse2: { '0%,100%': { opacity: '0.45' }, '50%': { opacity: '1' } },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        drift: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '15%,85%': { opacity: '1' },
          '100%': { transform: 'translateX(50%)', opacity: '0' },
        },
      },
      animation: {
        pulse2: 'pulse2 2.6s ease-in-out infinite',
        rise: 'rise 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 7s linear infinite',
      },
    },
  },
  plugins: [],
}
