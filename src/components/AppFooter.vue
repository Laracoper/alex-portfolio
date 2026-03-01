<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <p class="copyright">© {{ new Date().getFullYear() }} — Built with Vue 3</p>
        <p class="tagline">Modern Frontend Developer Portfolio</p>
      </div>
      
      <div class="footer-socials">
        <!-- Замени ссылки на свои -->
        <a href="https://github.com/laracoper" target="_blank" class="social-link">GitHub</a>
        <a href="https://t.me/universal_picture" target="_blank" class="social-link">Telegram</a>
        <a href="mailto:mihas56789@gmail.com" class="social-link">Email</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 60px;
  background: rgba(15, 23, 42, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px 20px;
}

.footer-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.copyright {
  color: #f1f5f9;
  font-weight: 600;
  font-size: 0.95rem;
}

.tagline {
  color: #64748b;
  font-size: 0.85rem;
}

.footer-socials {
  display: flex;
  gap: 20px;
}

.social-link {
  color: #94a3b8;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #38bdf8;
}

/* Мобильная адаптация */
@media (max-width: 600px) {
  .footer-container {
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }
}
</style>
