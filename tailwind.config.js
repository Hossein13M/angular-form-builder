module.exports = {
    prefix: '',
    purge: {
        content: ['./src/**/*.{html,ts}'],
    },
    darkMode: 'class',
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
