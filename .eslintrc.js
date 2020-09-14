module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jquery: true
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
    },
};
