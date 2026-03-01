<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">ALEX_PROGER</div>
      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen" :class="{ 'active': isMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <ul class="nav-links" :class="{ 'nav-open': isMenuOpen }">
        <li><RouterLink to="/" @click="isMenuOpen = false">Главная</RouterLink></li>
        <li><RouterLink to="/projects" @click="isMenuOpen = false">Проекты</RouterLink></li>
        <li><RouterLink to="/skills" @click="isMenuOpen = false">Навыки</RouterLink></li>
        <li><RouterLink to="/contact" @click="isMenuOpen = false">Контакты</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<style scoped>
/* Копируй сюда стили хедера из своего App.vue (от .header до конца медиа-запросов хедера) */
.header { background: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.1); position: sticky; top: 0; z-index: 1000; width: 100%; }
.navbar { max-width: 1000px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; height: 70px; }
.logo { color: #38bdf8; font-weight: 800; font-size: 1.4rem; }
.nav-links { display: flex; gap: 30px; }
.nav-links a { color: #94a3b8; font-weight: 500; transition: 0.3s; }
.nav-links a:hover, .nav-links a.router-link-active { color: #38bdf8; }

@media (max-width: 768px) {
  .menu-toggle { display: flex; flex-direction: column; justify-content: space-between; width: 25px; height: 18px; background: transparent; border: none; }
  .bar { width: 100%; height: 2px; background-color: #f1f5f9; transition: 0.3s; }
  .nav-links { position: fixed; top: 70px; left: 0; width: 100%; height: calc(100vh - 70px); background: #1e293b; flex-direction: column; align-items: center; padding-top: 50px; gap: 40px; transform: translateX(100%); transition: 0.4s; }
  .nav-links.nav-open { transform: translateX(0); }
  .active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .active .bar:nth-child(2) { opacity: 0; }
  .active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
}
</style>
