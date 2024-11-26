import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	console.log(mode);
	return {
		base: './',
		plugins: [react(), tsconfigPaths()],
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
					importers: [
						// ...
					],
				},
			},
		},
		define: {
			'process.env': process.env,
		},
	};
});
