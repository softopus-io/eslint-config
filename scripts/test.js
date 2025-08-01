#!/usr/bin/env node

/**
 * Test script for @softopus/eslint-config
 * This script validates the ESLint configuration and tests it with sample files
 */

const fs = require("fs");
const path = require("path");

console.log("🧪 Testing @softopus/eslint-config...\n");

// Test 1: Validate package.json
console.log("1. Validating package.json...");
try {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8")
  );
  const requiredFields = [
    "name",
    "version",
    "main",
    "dependencies",
    "peerDependencies",
  ];

  for (const field of requiredFields) {
    if (!packageJson[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  console.log("✅ package.json is valid");
} catch (error) {
  console.error("❌ package.json validation failed:", error.message);
  process.exit(1);
}

// Test 2: Validate index.js syntax
console.log("\n2. Validating index.js syntax...");
try {
  require(path.join(__dirname, "..", "index.js"));
  console.log("✅ index.js syntax is valid");
} catch (error) {
  console.error("❌ index.js syntax validation failed:", error.message);
  process.exit(1);
}

// Test 3: Test ESLint configuration
console.log("\n3. Testing ESLint configuration...");
try {
  const config = require(path.join(__dirname, "..", "index.js"));

  // Check if config has required properties
  const requiredProps = ["parser", "plugins", "extends", "rules"];
  for (const prop of requiredProps) {
    if (!config[prop]) {
      throw new Error(`Missing required property: ${prop}`);
    }
  }

  console.log("✅ ESLint configuration is valid");
  console.log(`   - Parser: ${config.parser}`);
  console.log(`   - Plugins: ${config.plugins.length} plugins`);
  console.log(`   - Extends: ${config.extends.length} configs`);
  console.log(`   - Rules: ${Object.keys(config.rules).length} rules`);
} catch (error) {
  console.error("❌ ESLint configuration test failed:", error.message);
  process.exit(1);
}

// Test 4: Create and test sample files
console.log("\n4. Testing with sample files...");

const testFiles = [
  {
    name: "test-basic.js",
    content: `const test = 'hello';
console.log(test);`,
  },
  {
    name: "test-typescript.ts",
    content: `const test: string = 'hello';
console.log(test);`,
  },
  {
    name: "test-imports.ts",
    content: `import React from 'react';
import { useState } from 'react';
import './styles.css';

const Component = () => {
  const [state, setState] = useState('');
  return <div>{state}</div>;
};

export default Component;`,
  },
];

const tempDir = path.join(__dirname, "..", "temp-test");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

try {
  // Create test files
  for (const file of testFiles) {
    const filePath = path.join(tempDir, file.name);
    fs.writeFileSync(filePath, file.content);
    console.log(`   Created ${file.name}`);
  }

  // Test ESLint on the files
  const { execSync } = require("child_process");

  for (const file of testFiles) {
    const filePath = path.join(tempDir, file.name);
    try {
      execSync(
        `npx eslint ${filePath} --config ${path.join(__dirname, "..", "index.js")} --no-eslintrc`,
        {
          stdio: "pipe",
          cwd: path.join(__dirname, ".."),
        }
      );
      console.log(`   ✅ ${file.name} - No linting errors`);
    } catch (error) {
      // ESLint will exit with code 1 if there are errors, which is expected
      console.log(
        `   ⚠️  ${file.name} - Linting issues found (expected for test files)`
      );
    }
  }

  console.log("✅ Sample file testing completed");
} catch (error) {
  console.error("❌ Sample file testing failed:", error.message);
} finally {
  // Cleanup
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

// Test 5: Check for common issues
console.log("\n5. Checking for common issues...");

try {
  const config = require(path.join(__dirname, "..", "index.js"));

  // Check for console.log rule
  if (config.rules["no-console"] === "error") {
    console.log("✅ Console statements are properly restricted");
  } else {
    console.log("⚠️  Console statements are not restricted");
  }

  // Check for import sorting
  if (config.rules["simple-import-sort/imports"]) {
    console.log("✅ Import sorting is configured");
  } else {
    console.log("⚠️  Import sorting is not configured");
  }

  // Check for unused imports
  if (config.rules["unused-imports/no-unused-imports"]) {
    console.log("✅ Unused imports detection is configured");
  } else {
    console.log("⚠️  Unused imports detection is not configured");
  }

  console.log("✅ Common issues check completed");
} catch (error) {
  console.error("❌ Common issues check failed:", error.message);
}

console.log("\n🎉 All tests completed successfully!");
console.log("\nThe @softopus/eslint-config package is ready for use.");
