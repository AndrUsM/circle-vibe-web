import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss';
import {pluginSass} from '@rsbuild/plugin-sass';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  
  html: {
    title: "Chat",
    favicon: './public/favicon.ico',
    appIcon: {
      name: 'Chat',
      icons: [
        { src: './public/favicon-16x16.png', size: 16 },
        { src: './public/favicon-32x32.png', size: 32 },
        { src: './public/android-chrome-192x192.png', size: 192 },
      ]
    }
  },
  plugins: [
    pluginReact({
      reactCompiler: true,
    }),
    pluginTailwindcss(),
    pluginSass(),
  ],
});
