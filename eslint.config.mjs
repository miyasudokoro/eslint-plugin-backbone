/** @author https://github.com/miyasudokoro */

import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin-js';
import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';

export default [
    js.configs.recommended,
    jsdoc.configs[ 'flat/recommended' ],
    {
        'plugins': {
            '@stylistic/js': stylistic
        },
        'ignores': [
            'node_modules/**',
            'build/**'
        ],
        'languageOptions': {
            'ecmaVersion': 'latest',
            'sourceType': 'commonjs',
            'globals': {
                ...globals.node
            }
        },
        'rules': {
            '@stylistic/js/brace-style': [
                2,
                '1tbs'
            ],
            'default-case': 2,
            'func-style': [
                2,
                'declaration'
            ],
            'guard-for-in': 2,
            '@stylistic/js/no-floating-decimal': 2,
            'no-nested-ternary': 2,
            'no-undefined': 2,
            'radix': 2,
            '@stylistic/js/keyword-spacing': 2,
            '@stylistic/js/no-multi-spaces': 2,
            '@stylistic/js/wrap-iife': 2,
            '@stylistic/js/semi': 2
        }
    },
    {
        'files': [ '**/*.mjs' ],
        'languageOptions': {
            'ecmaVersion': 'latest',
            'sourceType': 'module',
            'globals': {
                ...globals.node
            }
        }
    }
];
