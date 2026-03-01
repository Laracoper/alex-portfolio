<template>
  <div class="container animate-fade">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-badge">Доступен для новых проектов</div>
      <h1>Привет, я <span class="highlight">Frontend Developer</span></h1>
      <p class="hero-text">
        Создаю современные, быстрые и удобные веб-приложения на Vue 3. 
        Люблю чистый код и продуманный UX.
      </p>
      <div class="hero-actions">
        <RouterLink to="/projects" class="btn-primary">Смотреть работы</RouterLink>
        <RouterLink to="/contact" class="btn-outline">Связаться со мной</RouterLink>
      </div>
    </section>

    <!-- About Section -->
    <section class="info-grid">
      <div class="glass-card info-card">
        <h3>🚀 Мои цели</h3>
        <p>Постоянно развиваюсь в экосистеме Vue. В планах — изучение Nuxt 3 и глубокое погружение в TypeScript для создания масштабируемых систем.</p>
      </div>
      <div class="glass-card info-card">
        <h3>🛠️ Подход к работе</h3>
        <p>Верю, что интерфейс должен быть интуитивным. Использую Vite для быстрой сборки и Tailwind/CSS для гибкой стилизации.</p>
      </div>
      <div class="glass-card info-card">
        <h3>📚 Обучение</h3>
        <p>Активно изучаю Best Practices во фронтенде, слежу за обновлениями Vue и экспериментирую с анимациями в вебе.</p>
      </div>
    </section>

    <!-- Detailed Text Section -->
    <section class="about-text glass-card">
      <h2>Немного обо мне</h2>
      <p>Я начал свой путь в веб-разработке с изучения основ HTML и CSS, но быстро понял, что настоящая магия происходит на стороне JavaScript. Сейчас я фокусируюсь на Vue 3, используя Composition API, что позволяет мне писать модульный и переиспользуемый код.</p>
      <p>Этот проект — не просто портфолио, а демонстрация того, как можно собрать полноценное SPA (Single Page Application) без бэкенда, используя современные инструменты и интеграции, такие как Google Sheets для обработки форм.</p>
    </section>
  </div>
</template>

<style scoped>
.hero-section { text-align: center; padding: 60px 0; max-width: 800px; margin: 0 auto; }
.hero-badge { background: rgba(56, 189, 248, 0.1); color: #38bdf8; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; display: inline-block; margin-bottom: 20px; border: 1px solid #38bdf8; }
.highlight { color: #38bdf8; }
.hero-text { font-size: 1.2rem; color: #94a3b8; margin-bottom: 30px; line-height: 1.6; }
.hero-actions { display: flex; gap: 15px; justify-content: center; }

.info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 40px 0; }
.info-card h3 { color: #38bdf8; margin-bottom: 10px; }
.info-card p { font-size: 0.95rem; color: #f1f5f9; line-height: 1.5; }

.about-text { padding: 40px; margin-bottom: 60px; }
.about-text h2 { margin-bottom: 20px; color: #38bdf8; }
.about-text p { margin-bottom: 15px; line-height: 1.7; color: #cbd5e1; }

.btn-primary { background: #38bdf8; color: #0f172a; padding: 12px 25px; border-radius: 8px; font-weight: bold; }
.btn-outline { border: 1px solid #38bdf8; color: #38bdf8; padding: 12px 25px; border-radius: 8px; font-weight: bold; }

@media (max-width: 600px) {
  .hero-actions { flex-direction: column; }
}
</style>
