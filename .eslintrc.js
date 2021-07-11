module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    root: true,
    ignorePatterns: ['projects/**/*'],
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                ecmaVersion: 6,
                createDefaultProgram: true,
                project: ['tsconfig.json'],
            },
            extends: ['plugin:@angular-eslint/recommended', 'plugin:@angular-eslint/template/process-inline-templates'],
            rules: {
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        prefix: 'app',
                        style: 'camelCase',
                    },
                ],
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        type: 'element',
                        prefix: 'app',
                        style: 'kebab-case',
                    },
                ],
            },
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
            rules: {},
        },
    ],
};
