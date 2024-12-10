import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.browser } },
	{
		rules: {
			quotes: ['error', 'single'],
			'no-duplicate-imports': 'error',
			'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
			'no-unused-vars': 'error',
			'no-multiple-empty-lines': 'error',
			'react/react-in-jsx-scope': 'off',
		},
	},
	{
		plugins: {
			react: pluginReact,
			'@typescript-eslint': tseslint,
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
];
