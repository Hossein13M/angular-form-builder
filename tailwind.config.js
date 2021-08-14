const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    prefix: '',
    important: true,
    purge: {
        enable: true,
        content: ['./ngx-form-builder/src/lib/**/*.{html,ts}'],
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
