<template>
    <div>
      <h1>Страница Логина</h1>
      <form>
        <label for="login">Логин:</label>
        <input type="text" id="login" placeholder="Введите логин" />
  
        <label for="password">Пароль:</label>
        <input type="password" id="password" placeholder="Введите пароль" />
  
        <button type="submit">Войти</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
  };
  </script>
  
  <style scoped>
  /* Ваши стили */
  </style>
  