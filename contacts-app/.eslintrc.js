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
    jsx: true,
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': [2, 'never'],
    'react/prop-types': 0,
    'require-jsdoc': 0,
    'object-curly-spacing': ['warn', 'always'],
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2],
    'max-len': ['error', { 'code': 140 }],
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
   'no-trailing-spaces': ['warn', { 'skipBlankLines': true }]
  }
}
