module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
    ],
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'quote-props': ['error', 'consistent-as-needed'],
        'camelcase': ['error', { properties: 'always' }],
        'comma-dangle': ['warn', 'always-multiline'],
        'object-curly-spacing': ['error', 'always'],
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        ],
        'no-unused-vars': ['warn'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],

        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 2,
                multiline: {
                    max: 1,
                    allowFirstLine: true,
                },
            },
        ],
    },
};
