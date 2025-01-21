<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Импортируем useRouter для навигации

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
  <div>
    <router-view /> <!-- Это место будет содержать компоненты в зависимости от маршрута -->
  </div>
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
/* Общий контейнер */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Центрирование по высоте экрана */
}

/* Стили для картинки */
.image-container img {
  width: 300px; /* Установите нужный размер */
  height: auto; /* Сохраняйте пропорции изображения */
  display: block;
  margin: 0 auto 20px; /* Центрирование и отступ от формы */
}

/* Центрирование всего контейнера с формой */
.form-container {
  display: flex;
  flex-direction: column; /* Элементы располагаются по вертикали */
  align-items: center; /* Центрирование по горизонтали */
  text-align: center;
}

/* Стили для меток */
label {
  margin: 10px 0 5px;
  font-weight: bold;
}

/* Стили для текстовых полей */
input {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Стили для кнопки */
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
