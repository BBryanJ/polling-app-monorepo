/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@repo/eslint-config/library.js'],
  parserOptions: {
    project: true,
  },
  rules: {
    "turbo/no-undeclared-env-vars": [
      "error",
      { allowList: ["NODE_ENV"] }
    ],
  }
};