import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs du thème terminal
        'terminal-bg': '#1a1b26', // Fond bleu nuit/noir profond
        'terminal-text': '#a9b1d6', // Texte gris-bleu clair
        'terminal-green': '#9ece6a', // Succès, prompts
        'terminal-cyan': '#7dcfff', // Liens, infos
        'terminal-red': '#f7768e', // Erreurs, important
        'terminal-yellow': '#e0af68', // Avertissements
        'terminal-purple': '#bb9af7', // Accents spéciaux
        'terminal-border': '#414868', // Bordures subtiles
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#7dcfff' }
        }
      },
      backgroundImage: {
        'terminal-gradient': 'linear-gradient(135deg, #1a1b26 0%, #24283b 100%)',
        'scanlines': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
      },
    },
  },
  plugins: [],
};

export default config;

