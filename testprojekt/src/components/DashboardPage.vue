<template>
  <div class="dashboard">
    <h1>Добро пожаловать на Dashboard</h1>

    <!-- Новости -->
    <div class="news">
      <h2>Новости:</h2>
      <ul>
        <li>Новая версия приложения теперь доступна для скачивания!</li>
        <li>Предстоящие обновления будут включать улучшенную безопасность и новые функции.</li>
        <li>Будьте готовы к важным изменениям в пользовательском интерфейсе в следующем месяце.</li>
      </ul>
    </div>

    <!-- Кнопка перехода -->
    <button class="button" @click="goToNewPage">Перейти на новую страницу</button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    goToNewPage() {
      this.$router.push({ name: 'NewPage' });  // Переход на страницу с именем 'new-page'
    }
  }
}
</script>

<style scoped>
/* Стили для кнопок и новостей */
.button {
  padding: 10px 20px;
  background-color: #397bdd;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #3e72be;
}

.news {
  margin-bottom: 20px;
  font-size: 18px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
</style>
