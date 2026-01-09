import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint' // Ensure you ran: npm install --save-dev typescript-eslint

export default tseslint.config(
  // 1. Global ignores (replaces globalIgnores)
  { ignores: ['dist'] },
  
  // 2. Base Configuration for JS/TS/React
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    // 3. Define plugins only once
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Pull in the rules from the plugins manually to avoid conflicts
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // 4. Your custom rules
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  }
)