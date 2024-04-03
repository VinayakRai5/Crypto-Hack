import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import commonjs from 'vite-plugin-commonjs';
import { nodePolyfills } from 'vite-plugin-node-polyfills'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [nodePolyfills(),commonjs({
    filter(id) {
      if (id.includes('node_modules/redux-storage/build-es')) {
        return true;
      }
    },
  }),react()],
  server: {
    open: true,
    origin: 'api-cryptohack.onrender.com'
  },

});
