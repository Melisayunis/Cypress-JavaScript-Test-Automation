const cypress = require('eslint-plugin-cypress');

module.exports = [
    {
        files: ['cypress/**/*.js'],

        plugins: {
            cypress
        },

        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                cy: 'readonly',
                Cypress: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                before: 'readonly',
                beforeEach: 'readonly',
                after: 'readonly',
                afterEach: 'readonly'
            }
        },

        rules: {
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],

            'no-var': 'error',
            'prefer-const': 'error',

            'eqeqeq': ['error', 'always'],
            'curly': ['error', 'all'],

            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'comma-dangle': ['error', 'never'],

            'space-before-blocks': ['error', 'always'],
            'keyword-spacing': 'error',

            'no-console': 'warn'
        }
    }
];