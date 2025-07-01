import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ✅ Use this if deploying at root (e.g., https://yourdomain.com/)
  plugins: [react()],
});
