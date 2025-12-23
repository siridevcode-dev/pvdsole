/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6f0f5',
                    100: '#cce1eb',
                    200: '#99c3d7',
                    300: '#66a5c3',
                    400: '#3387af',
                    500: '#00699b',
                    600: '#005a87',
                    700: '#004a73',
                    800: '#003b5f',
                    900: '#002b4a',
                    950: '#001d33',
                },
                secondary: {
                    50: '#fef7e6',
                    100: '#fdefcc',
                    200: '#fbdf99',
                    300: '#f9cf66',
                    400: '#f7bf33',
                    500: '#f5af00',
                    600: '#c48c00',
                    700: '#936900',
                    800: '#624600',
                    900: '#312300',
                },
                accent: {
                    50: '#e8f5e9',
                    100: '#c8e6c9',
                    200: '#a5d6a7',
                    300: '#81c784',
                    400: '#66bb6a',
                    500: '#4caf50',
                    600: '#43a047',
                    700: '#388e3c',
                    800: '#2e7d32',
                    900: '#1b5e20',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'NotoSansLao', 'system-ui', 'sans-serif'],
                lao: ['NotoSansLao', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.3s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
        },
    },
    plugins: [],
}
