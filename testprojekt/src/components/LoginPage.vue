<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Переменные для логина и пароля
const login = ref('');
const password = ref('');

// Получаем доступ к роутеру
const router = useRouter();

// Функция, которая срабатывает при нажатии кнопки
const handleSubmit = () => {
  console.log('Логин:', login.value);
  console.log('Пароль:', password.value);

  // Переход на страницу Dashboard при успешном входе
  router.push('/dashboard');
};
</script>

<template>
  <div class="container">
    <!-- Блок с изображением -->
    <div class="image-container">
      <img src="/images/serve.png" alt="Описание картинки" />
    </div>

    <!-- Блок с формой -->
    <div class="form-container">
      <!-- Поле для ввода логина -->
      <label for="login">Логин:</label>
      <input type="text" id="login" v-model="login" placeholder="Введите логин" />

      <!-- Поле для ввода пароля -->
      <label for="password">Пароль:</label>
      <input type="password" id="password" v-model="password" placeholder="Введите пароль" />

      <!-- Кнопка -->
      <button @click="handleSubmit">Войти</button>
    </div>
  </div>
</template>

<style scoped>
/* Стили для страницы логина */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.image-container img {
  width: 300px;
  height: auto;
  display: block;
  margin: 0 auto 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

label {
  margin: 10px 0 5px;
  font-weight: bold;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
