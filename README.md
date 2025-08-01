# @softopus/eslint-config

A comprehensive ESLint configuration package for TypeScript projects in the Softopus organization. This config provides a standardized set of rules for code quality, formatting, and best practices.

## Features

- **TypeScript Support**: Full TypeScript linting with `@typescript-eslint`
- **Code Formatting**: Integrated Prettier configuration
- **Import Sorting**: Automatic import organization with `simple-import-sort`
- **Unused Code Detection**: Automatic removal of unused imports and variables
- **File Naming**: Enforces consistent file naming conventions
- **Path Aliases**: Prevents deep relative imports in favor of path aliases

## Installation

```bash
npm install --save-dev @softopus/eslint-config
# or
yarn add --dev @softopus/eslint-config
```

## Usage

### Basic Configuration

Create an `.eslintrc.js` file in your project root:

```javascript
module.exports = {
  extends: ["@softopus/eslint-config"],
};
```

### Advanced Configuration

For more control, you can extend the config and add your own rules:

```javascript
module.exports = {
  extends: ["@softopus/eslint-config"],
  rules: {
    // Your custom rules here
    "no-console": "warn", // Override the default 'error' to 'warn'
  },
};
```

### TypeScript Configuration

Make sure you have a `tsconfig.json` file in your project. The config automatically uses TypeScript parser and rules.

## Included Rules

### TypeScript Rules

- `@typescript-eslint/recommended`: Standard TypeScript linting rules
- Custom TypeScript rules for better type safety

### Import Management

- **Import Sorting**: Automatically organizes imports in the following order:
  1. Next.js imports
  2. Node.js built-ins
  3. External packages
  4. Internal aliases (`@/`, `~`, `#`)
  5. Relative imports

- **Unused Imports**: Automatically removes unused imports and warns about unused variables

### Code Quality

- **Console Prevention**: Prevents `console.log` statements in production code
- **File Naming**: Enforces snake_case for filenames (with exceptions for index files and test files)
- **Path Aliases**: Encourages use of path aliases instead of deep relative imports

### Formatting

- **Prettier Integration**: Consistent code formatting with Prettier
- **Trailing Commas**: Enforces trailing commas for cleaner diffs
- **Single Quotes**: Uses single quotes for strings
- **80 Character Width**: Maintains readable line lengths

## Configuration Options

### Prettier Settings

The config includes Prettier with the following defaults:

- `printWidth`: 80
- `trailingComma`: "all"
- `singleQuote`: true
- `endOfLine`: "lf"
- `semi`: true
- `tabWidth`: 2

### Import Groups

Imports are automatically sorted into these groups:

1. `["^next"]` - Next.js imports
2. `["^\\u0000"]` - Side-effect imports
3. `["^node:"]` - Node.js built-ins
4. `["^@?\\w"]` - External packages
5. `["^@/"]` - Internal aliases starting with @/
6. `["^~"]` - Internal aliases starting with ~
7. `["^#"]` - Internal aliases starting with #
8. `["^\\.\\./\\.\\./"]` - Parent directory imports
9. `["^\\.\\./"]` - Sibling directory imports
10. `["^\\./"]` - Current directory imports

## Peer Dependencies

This package requires the following peer dependencies:

- `eslint`: ^9.18.0

## Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix"
  }
}
```

## IDE Integration

### VS Code

Install the ESLint extension and add to your `.vscode/settings.json`:

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
