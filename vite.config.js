import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev
export default defineConfig(({ command }) => {
  return {
    // Если запускаем билд для Гитхаба — ставим путь репозитория, 
    // если просто разработка (npm run dev) — используем корень '/'
    base: command === 'build' ? '/alex-portfolio/' : '/',
    
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})


// https://script.google.com/macros/s/AKfycbypEPfB-Wh0WLcko1Ff_8bbEFIjqcCwPON4mAsLiQbUXwqMrw5sNG_0RP3D-OGi64L0ag/exec

// https://script.google.com/macros/s/AKfycby62JEwVnYZGVP3kSLdSXftA0lRiPzwx8tX8l58nj44i7KYv3qO-q90vSYk5stXggn93Q/exec
