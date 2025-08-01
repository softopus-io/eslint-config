module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es2020: true,
    node: true,
    browser: true,
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "unused-imports",
    "unicorn",
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-var-requires": 1,
    "@typescript-eslint/no-empty-object-type": "error",
    "@typescript-eslint/no-unsafe-function-type": "error",
    "@typescript-eslint/no-wrapper-object-types": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"],

          ["^next"],

          ["^node:"],

          ["^@?\\w"],

          ["^@/"],
          ["^~"],
          ["^#"],

          ["^\\.\\./\\.\\./"],
          ["^\\.\\./"],
          ["^\\./"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "no-console": "error",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        case: "snakeCase",
        ignore: [
          "^index\\.(js|ts|jsx|tsx)$",
          "\\.test\\.(js|ts|jsx|tsx)$",
          "\\.spec\\.(js|ts|jsx|tsx)$",
          "\\.stories\\.(js|ts|jsx|tsx)$",
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["../../*"],
            message:
              "Use path aliases instead of deep relative imports. Consider using @/ or ~/ aliases.",
          },
        ],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "all",
        singleQuote: true,
        endOfLine: "lf",
        semi: true,
        tabWidth: 2,
      },
    ],
  },
};
