import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class', // Use class-based dark mode for manual toggle control
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Javanese Wedding Color Palette - Light Theme
                'ivory': '#FAF8F5',
                'gold': '#C9A961',
                'gold-dark': '#8B7355',
                'brown': '#4A3728',
                'maroon': '#722F37',
                'cream': '#F5EFE6',
                // Dark Theme Colors
                'dark-bg': '#1A1510',
                'dark-surface': '#2A231D',
                'dark-card': '#352D25',
                'dark-text': '#E8E0D8',
                'dark-text-secondary': '#B8AFA5',
            },
            fontFamily: {
                'serif': ['Playfair Display', 'serif'],
                'sans': ['Poppins', 'sans-serif'],
                'javanese': ['Satisfy', 'cursive'],
            },
            backgroundImage: {
                'batik-pattern': "url('/images/batik-pattern.svg')",
                'ornament': "url('/images/ornament.svg')",
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-in-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
export default config

