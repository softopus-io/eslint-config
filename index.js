import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

export default [
  { ignores: [".yarn/", "node_modules/", "scripts/"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      unicorn: unicorn,
      prettier: prettierPlugin,
    },
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-unsafe-function-type": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^next"],
            ["^\\u0000"],
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
          singleQuote: false,
          endOfLine: "lf",
          semi: true,
          tabWidth: 2,
        },
      ],
    },
  },
  prettier,
];
