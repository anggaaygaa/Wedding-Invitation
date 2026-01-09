import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Naruto Anime Color Palette - Light Theme
                'ivory': '#FFF8F0',
                'gold': '#FF6B35',           // Naruto Orange (primary)
                'gold-dark': '#E55A2B',      // Darker orange
                'brown': '#1A1A2E',          // Ninja dark blue
                'maroon': '#E63946',         // Sharingan red
                'cream': '#FFF5E6',          // Scroll cream
                // Additional Naruto Colors
                'naruto-orange': '#FF6B35',
                'naruto-yellow': '#FFB347',
                'konoha-green': '#2D5A27',
                'chakra-blue': '#4169E1',
                'sharingan-red': '#E63946',
                'uchiha-navy': '#16213E',
                'scroll-cream': '#FFF5E6',
                'leaf-green': '#228B22',
                // Dark Theme Colors
                'dark-bg': '#0D1117',
                'dark-surface': '#161B22',
                'dark-card': '#21262D',
                'dark-text': '#F0F6FC',
                'dark-text-secondary': '#8B949E',
            },
            fontFamily: {
                'serif': ['Playfair Display', 'serif'],
                'sans': ['Poppins', 'sans-serif'],
                'ninja': ['Satisfy', 'cursive'],
            },
            backgroundImage: {
                'konoha-pattern': "url('/images/konoha-pattern.svg')",
                'cloud-pattern': "url('/images/cloud-pattern.svg')",
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-in-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 8s linear infinite',
                'chakra-pulse': 'chakraPulse 2s ease-in-out infinite',
                'leaf-fall': 'leafFall 10s linear infinite',
                'sharingan-spin': 'sharinganSpin 3s linear infinite',
                'smoke-poof': 'smokePoof 0.5s ease-out',
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
                chakraPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(65, 105, 225, 0.5)' },
                    '50%': { boxShadow: '0 0 40px rgba(65, 105, 225, 0.8)' },
                },
                leafFall: {
                    '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
                    '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
                },
                sharinganSpin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                smokePoof: {
                    '0%': { transform: 'scale(0)', opacity: '1' },
                    '100%': { transform: 'scale(2)', opacity: '0' },
                },
            },
        },
    },
    plugins: [],
}
export default config

