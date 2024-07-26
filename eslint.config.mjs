import pluginJs from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import pluginSort from 'eslint-plugin-sort';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: {globals: globals.es2021, parser: typescriptParser}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ['**/*/*.js', '*.js', '*.svg', '*.json', '*.png', 'package.json', 'package-lock.json', 'yarn.lock'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
      promise: promisePlugin,
      react: pluginReact,
      sort: pluginSort,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 2,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/no-empty-interface': 0,
      '@typescript-eslint/no-explicit-any': ['error'],
      '@typescript-eslint/no-shadow': ['error'],
      camelcase: 2,
      'import/default': 0,
      'import/extensions': [
        'error',
        'never',
        {
          constant: 'always',
          jpg: 'always',
          json: 'always',
          model: 'always',
          png: 'always',
          style: 'always',
          svg: 'always',
        },
      ],
      'import/named': 0,
      'import/namespace': 0,
      'import/no-anonymous-default-export': 0,
      'import/no-cycle': 2,
      'import/no-deprecated': 0,
      'import/no-duplicates': 2,
      'import/no-extraneous-dependencies': 'off',
      'import/no-named-as-default': 0,
      'import/no-unused-modules': 0,
      'import/no-useless-path-segments': 2,
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'external',
              pattern: '@(react|react-native)',
              position: 'before',
            },
            {
              group: 'internal',
              pattern: '@/**',
            },
          ],
          pathGroupsExcludedImportTypes: ['internal', 'react'],
        },
      ],
      'import/prefer-default-export': 0,
      'no-nested-ternary': 2,
      'no-shadow': 'off',
      'no-undef': 'off',
      'prefer-destructuring': 2,
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
      'react-hooks/exhaustive-deps': 'off',
      'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx', '.d.ts'],
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
];
