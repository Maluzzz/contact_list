module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'google'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': [2, 'never'],
    'react/prop-types': 0,
    'require-jsdoc': 0,
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2]
  }
}
