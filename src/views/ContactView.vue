<script setup>
import { ref, reactive } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const isSending = ref(false)
const statusMessage = ref('')

// ЗАМЕНИ НА СВОЙ URL ИЗ ШАГА 2
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbypEPfB-Wh0WLcko1Ff_8bbEFIjqcCwPON4mAsLiQbUXwqMrw5sNG_0RP3D-OGi64L0ag/exec'

const submitForm = async () => {
  isSending.value = true
  statusMessage.value = 'Отправка...'

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(form)
    })

    if (response.ok) {
      statusMessage.value = '✅ Сообщение успешно отправлено!'
      // Очищаем форму
      form.name = ''; form.email = ''; form.message = ''
    }
  } catch (error) {
    statusMessage.value = '❌ Ошибка при отправке. Попробуйте позже.'
    console.error(error)
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <div class="container animate-fade">
    <h1>Контакты</h1>
    <div class="glass-card contact-box">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Имя</label>
          <input v-model="form.name" type="text" required placeholder="Иван">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="form.email" type="email" required placeholder="example@mail.com">
        </div>
        <div class="form-group">
          <label>Сообщение</label>
          <textarea v-model="form.message" required placeholder="Ваше предложение..."></textarea>
        </div>
        <button type="submit" :disabled="isSending" class="btn-send">
          {{ isSending ? 'Секунду...' : 'Отправить' }}
        </button>
      </form>
      <p class="status-info" v-if="statusMessage">{{ statusMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
.contact-box { max-width: 500px; margin: 0 auto; }
.form-group { display: flex; flex-direction: column; margin-bottom: 20px; text-align: left; }
input, textarea { 
  padding: 12px; 
  background: #0f172a; 
  border: 1px solid rgba(255,255,255,0.1); 
  color: white; 
  border-radius: 8px;
  margin-top: 5px;
}
.btn-send {
  width: 100%;
  padding: 12px;
  background: #38bdf8;
  color: #0f172a;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
.btn-send:disabled { opacity: 0.5; cursor: not-allowed; }
.status-info { margin-top: 15px; text-align: center; font-weight: 500; }
</style>
