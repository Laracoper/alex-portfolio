<template>
  <AppHeader />

  <main class="main-content">
    <RouterView />
  </main>

  <AppFooter />
</template>

<script setup>
import { ref } from 'vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
const isMenuOpen = ref(false)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}
</style>

<style scoped>
.header {
  background: #0f172a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}

.navbar {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  height: 70px;
}

.logo {
  color: #38bdf8;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: #94a3b8;
  font-weight: 500;
  transition: 0.3s;
  font-size: 1rem;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #38bdf8;
}

/* ГАМБУРГЕР */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: #f1f5f9;
  transition: 0.3s;
}

/* МОБИЛЬНАЯ ВЕРСИЯ (до 768px) */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: #1e293b;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    gap: 40px;
    /* Анимация выезда */
    transform: translateX(100%);
    transition: transform 0.4s ease-in-out;
  }

  .nav-links.nav-open {
    transform: translateX(0);
  }

  .nav-links a {
    font-size: 1.5rem;
    /* Крупнее на мобилках */
    color: #f1f5f9;
  }

  /* Крестик при открытии */
  .active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .active .bar:nth-child(2) {
    opacity: 0;
  }

  .active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

.main-content {
  padding-top: 20px;
}
</style>
