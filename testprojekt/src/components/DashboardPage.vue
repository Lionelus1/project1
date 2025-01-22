<template>
  <div class="dashboard">
    <h1>Добро пожаловать в университет ЕНУ</h1>

    <!-- Новости -->
    <div class="news">
      <h2>Новости:</h2>
      <ul>
        <li>Разработчики Dota 2 сообщили дату окончания сюжетного события «Павшая корона» – ивент полностью завершится в середине января следующего года. Об этом было объявлено на официальном сайте игры.</li>
        <li>Предстоящие обновления будут включать улучшенную безопасность и новые функции.</li>
        <li>Будьте готовы к важным изменениям в пользовательском интерфейсе в следующем месяце.</li>
      </ul>
    </div>

    <!-- Кнопка перехода -->
    <button class="button" @click="goToNewPage">История Университета</button>
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
