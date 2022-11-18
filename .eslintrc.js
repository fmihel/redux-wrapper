module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: './webpack.config.js',
            },
        },
    },
    rules: {
        'no-console': 'off',
        'no-bitwise': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'no-useless-constructor': 'off',
        'no-unused-vars': 'warn',
        'class-methods-use-this': 'off',
        'no-plusplus': 'off',
        'max-classes-per-file': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-underscore-dangle': 'off',
        'max-len': 'off',
        indent: [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'windows',
        ],
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
    },
};
