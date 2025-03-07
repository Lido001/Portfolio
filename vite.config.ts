import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: process.env.DEPLOY_ENV === 'github' ? '/home/' : '/',
  optimizeDeps: {
    include: ["@emailjs/browser"],
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
// });


