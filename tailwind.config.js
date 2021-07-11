const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    prefix: '',
    important: true,
    purge: {
        content: ['./src/**/*.{html,ts}'],
    },
    darkMode: 'class',
    theme: {
        colors: colors,
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
