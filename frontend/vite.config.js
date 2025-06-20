import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 3000,
		proxy: {
			'/api': {
				target: 'http://backend:3001',
				changeOrigin: true,
			},
		},
		watch: {
			usePolling: true,
		},
	},
});
