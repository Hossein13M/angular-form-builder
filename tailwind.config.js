const colors = require('tailwindcss/colors');

module.exports = {
    prefix: '',
    purge: {
        content: ['./src/**/*.{html,ts}'],
    },
    darkMode: 'class',
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            'blue-gray': colors.blueGray,
            'cool-gray': colors.coolGray,
            gray: colors.gray,
            'true-gray': colors.trueGray,
            'warm-gray': colors.warmGray,
            red: colors.rose,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            'light-blue': colors.lightBlue,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
