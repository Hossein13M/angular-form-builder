const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    prefix: '',
    important: true,
    purge: {
        enable: true,
        content: ['./src/**/*.{html,ts}'],
        preserveHtmlElements: false,
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
