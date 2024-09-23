/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@repo/eslint-config/library.js'],
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
  }
};