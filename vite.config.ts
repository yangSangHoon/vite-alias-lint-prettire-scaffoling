import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    },
    server: {
        https: true
    }
});
