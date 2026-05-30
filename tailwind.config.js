/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Radar / instrument-panel palette
        phosphor: {
          DEFAULT: '#3df3a8',
          bright: '#86ffd1',
          dim: '#1f6b4d',
        },
        amber: {
          DEFAULT: '#ffb000',
          bright: '#ffcf5c',
          dim: '#6e4d00',
        },
        radar: {
          bg: '#04100c',
          panel: '#091814',
          'panel-2': '#0c211b',
          line: '#16332b',
          muted: '#6f9d8c',
          text: '#cdeee0',
        },
        warn: '#ff5d52',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px -6px rgba(61, 243, 168, 0.45)',
        'glow-amber': '0 0 24px -6px rgba(255, 176, 0, 0.45)',
        panel: '0 12px 40px -20px rgba(0,0,0,0.9)',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.15' } },
        pulse2: { '0%,100%': { opacity: '0.55' }, '50%': { opacity: '1' } },
        flicker: {
          '0%,19%,21%,55%,57%,100%': { opacity: '1' },
          '20%,56%': { opacity: '0.7' },
        },
        rise: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        blink: 'blink 1.6s steps(1) infinite',
        pulse2: 'pulse2 2.4s ease-in-out infinite',
        flicker: 'flicker 4s linear infinite',
        rise: 'rise 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
