import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    tailwindConfig: './tailwind.config.js',
    vite: {
        plugins: [
            Icons({
            compiler: 'jsx',
            jsx: 'react',
            }),
        ],
    }
});

