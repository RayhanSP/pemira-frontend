import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
      "next/core-web-vitals",
      "next/typescript",
      'plugin:prettier/recommended'
  ),
  {
    rules: {
      'import/no-cycle': 'error',
      'react/display-name': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error', // or "error"
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'prettier/prettier': [
        'error',
        {
          semi: false,
          endOfLine: 'lf', // Example: Ensure consistent line endings
          singleQuote: true, // Example: Use single quotes
          trailingComma: 'es5', // Example: Add trailing commas where valid in ES5
        },
      ],
    },
  },
];

export default eslintConfig;
