<template>
  <div class="container">
    <h1 class="page-title">Технологический стек</h1>
    
    <div class="skills-grid">
      <!-- Категория 1 -->
      <div class="skill-category glass-card">
        <h3>Frontend Development</h3>
        <div class="icon-list">
          <div class="icon-item">
            <Icon icon="logos:vue" width="40" />
            <span>Vue 3</span>
          </div>
          <div class="icon-item">
            <Icon icon="logos:javascript" width="40" />
            <span>JavaScript</span>
          </div>
          <div class="icon-item">
            <Icon icon="logos:html-5" width="40" />
            <span>HTML5</span>
          </div>
          <div class="icon-item">
            <Icon icon="logos:css-3" width="40" />
            <span>CSS3</span>
          </div>
        </div>
      </div>

      <!-- Категория 2 -->
      <div class="skill-category glass-card">
        <h3>Tools & Deployment</h3>
        <div class="icon-list">
          <div class="icon-item">
            <Icon icon="logos:git-icon" width="40" />
            <span>Git</span>
          </div>
          <div class="icon-item">
            <Icon icon="logos:vitejs" width="40" />
            <span>Vite</span>
          </div>
          <div class="icon-item">
            <Icon icon="logos:github-icon" width="40" class="white-icon" />
            <span>GitHub</span>
          </div>
          <div class="icon-item">
            <Icon icon="logos:visual-studio-code" width="40" />
            <span>VS Code</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* justify-items: center; */
  gap: 30px;
  margin-top: 40px;
}
.skill-category h3 {
  margin-bottom: 25px;
  color: var(--accent);
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 10px;
}
.icon-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s;
}
.icon-item:hover {
  transform: scale(1.1);
}
.icon-item span {
  font-size: 0.9rem;
  font-weight: 500;
}
/* Если иконка гитхаба сливается с фоном */
.white-icon {
  filter: brightness(0) invert(1);
}
</style>
