import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

const compat = new FlatCompat({
    // import.meta.dirname is available after Node.js v20.11.0
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended
})

const eslintConfig = [
    ...compat.config({
        ignorePatterns: ['eslint.config.mjs', 'next.config.mjs', 'postcss.config.mjs', 'tailwind.config.ts', 'out/', 'node_modules/'],
        env: {
            browser: true,
            es2021: true
        },
        extends: [
            'next/core-web-vitals',
            'eslint:recommended',
            'plugin:react/recommended',
            'plugin:react/jsx-runtime',
            'plugin:react-hooks/recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
            'plugin:prettier/recommended'
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            project: './tsconfig.json'
        },
        plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'prettier'],
        rules: {
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            'sort-imports': [
                'error',
                {
                    ignoreCase: true,
                    ignoreDeclarationSort: true,
                    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
                }
            ],
            '@typescript-eslint/explicit-function-return-type': 'warn'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    })
]

export default eslintConfig
