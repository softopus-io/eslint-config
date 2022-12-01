module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2020: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/ban-types': [1, { types: { object: false } }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 180,
        trailingComma: 'all',
        singleQuote: true,
        endOfLine: 'lf',
        semi: true,
        tabWidth: 2,
      },
    ],
  },
};
