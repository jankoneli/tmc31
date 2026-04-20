import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	server: {
		allowedHosts: ["31.tmc9a.my.id", "localhost", "192.168.18.7"]
	}
});
