module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    //"extends": "eslint:recommended",
    "extends": "airbnb/base",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "$": true
        
    },
    "rules": {
        'no-console': 'off',
        'no-bitwise':'off',
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-useless-constructor":"off",
        "no-unused-vars":"warn",
        'class-methods-use-this':"warn",
        'no-plusplus':'off',
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};