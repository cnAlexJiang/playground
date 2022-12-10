/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  esbuild: {
    keepNames: true,
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    port: 3601,
  },
  test: {
    globals: true,
  },
  plugins: [
    Inspect(),
    ...VitePluginNode({
    // Nodejs native Request adapter
    // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
    // you can also pass a function if you are using other frameworks, see Custom Adapter section
      adapter: 'express',

      // tell the plugin where is your project entry
      appPath: './src/index.ts',

      // Optional, default: 'viteNodeApp'
      // the name of named export of you app from the appPath file
      exportName: 'viteNodeApp',

      // Optional, default: 'esbuild'
      // The TypeScript compiler you want to use
      // by default this plugin is using vite default ts compiler which is esbuild
      // 'swc' compiler is supported to use as well for frameworks
      // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
      tsCompiler: 'swc',
      swcOptions: {
        jsc: {
          keepClassNames: true,
        },
      },
    }),
  ],
});
