import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/

export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    vanillaExtractPlugin({
      identifiers: 'short'
    }),
    linterPlugin({
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      linters: [new EsLinter({ configEnv: configEnv }), new TypeScriptLinter()],
    }),
  ],
}));