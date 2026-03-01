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

// https://script.google.com/macros/s/AKfycbwELYCdT3ALhhayi6bLJJ7c9JKT96xkRnVDHPMC7zOo3iT02etfOqlao_VB0t2w6UEw/exec

// 8730910794:AAFBE6pKulD_9fIbL9uACNmo4x7WBAg3KaQ

// 824614833

// https://script.google.com/macros/library/d/1Cdx5RrKrvjMh5_cvspuzZ4H9zpcQfFSDtHfWglo5O1kU4KUwnZCDItx0/6

// https://script.google.com/macros/s/AKfycbwELYCdT3ALhhayi6bLJJ7c9JKT96xkRnVDHPMC7zOo3iT02etfOqlao_VB0t2w6UEw/exec