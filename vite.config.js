import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import config from './config.json'

export default defineConfig({
    server: {
        port: config.port,
    },
    
    plugins: [svelte()],
});
