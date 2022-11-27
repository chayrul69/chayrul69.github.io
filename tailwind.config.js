/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                background: '#393E46',
                primary: '#6D9886',
                secondary: '#F2E7D5',
                third: '#F7F7F7',
                hover: '#7D8F69',
                background_secondary: '#557153',

            },
            screens: {
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
}