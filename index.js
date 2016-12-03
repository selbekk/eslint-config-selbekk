module.exports = {
    env: {
        browser: true,
    },
    extends: 'airbnb',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        'import/no-unresolved': [2, { ignore: ['^[~]'] }],
        'import/extensions': [2, { js: 'never', less: 'always' }],
        'import/prefer-default-export': [0],
        'indent': [2, 4, { SwitchCase: 1 }],
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [0],
        'react/jsx-indent-props': [2, 4]
    }
};
