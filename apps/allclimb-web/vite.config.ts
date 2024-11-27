import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	const isDevelop = process.env.VITE_DEVELOP === 'true';

	return {
		base: './',
		plugins: [react(), tsconfigPaths(), mkcert()],
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			},
		},
		define: {
			'process.env': process.env,
		},
		server: {
			https: isDevelop
				? {
						key: fs.readFileSync(
							path.resolve(__dirname, 'key.pem'),
						),
						cert: fs.readFileSync(
							path.resolve(__dirname, 'cert.pem'),
						),
					}
				: undefined,
		},
	};
});
