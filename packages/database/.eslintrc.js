/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    "turbo/no-undeclared-env-vars": [
      "error",
      { allowList: ["NODE_ENV"] }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  plugins: ['@typescript-eslint'],
};