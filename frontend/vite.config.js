//import { reactRouter } from "@react-router/dev/vite";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'
import daisyui from 'daisyui';
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    //reactRouter(),
    tsconfigPaths(),
    [daisyui],
  ],
});