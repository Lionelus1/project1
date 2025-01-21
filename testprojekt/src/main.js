import { createApp } from 'vue';
import App from './App.vue';  // Импортируем корневой компонент App.vue
import router from './router';  // Импортируем настройки маршрутов

createApp(App)
  .use(router)  // Подключаем Vue Router
  .mount('#app');  // Монтируем приложение
