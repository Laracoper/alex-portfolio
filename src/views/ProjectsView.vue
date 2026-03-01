<template>
  <div class="container animate-fade">
    <h1 class="page-title">Мои Проекты</h1>
    <p class="subtitle">Примеры работ, выполненные на Vue 3 и Tailwind/CSS</p>

    <div class="projects-grid">
      <!-- Цикл v-for берет данные из нашего импортированного JSON -->
      <div v-for="project in projects" :key="project.id" class="project-card glass-card">
        <div class="project-icon">{{ project.icon }}</div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="card-footer">
          <a href="#" class="btn-demo">Демо</a>
          <a href="#" class="btn-code">Код</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Импортируем данные напрямую из JSON файла
import projectsData from '../data/projects.json'

// Присваиваем импортированные данные переменной
const projects = projectsData
</script>

<style scoped>
.page-title {
  text-align: center;
  margin-bottom: 10px;
}
.subtitle {
  text-align: center;
  color: #94a3b8;
  margin-bottom: 40px;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  padding-bottom: 40px;
}
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.project-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}
.project-card h3 {
  color: #38bdf8;
  margin-bottom: 10px;
}
.project-card p {
  color: #f1f5f9;
  font-size: 0.95rem;
  line-height: 1.5;
  flex-grow: 1; /* Чтобы кнопки всегда были внизу */
  margin-bottom: 20px;
}
.card-footer {
  display: flex;
  gap: 15px;
}
.btn-demo, .btn-code {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: 0.3s;
}
.btn-demo {
  background: #38bdf8;
  color: #0f172a;
}
.btn-code {
  border: 1px solid #38bdf8;
  color: #38bdf8;
}
.btn-demo:hover { background: #7dd3fc; }
.btn-code:hover { background: rgba(56, 189, 248, 0.1); }

/* Анимация появления */
.animate-fade {
  animation: fadeIn 0.8s ease-in;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
