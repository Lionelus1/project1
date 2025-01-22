import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue'; // Подключаем LoginPage
import DashboardPage from './components/DashboardPage.vue'; // Подключаем DashboardPage

const routes = [
  {
    path: '/', // Главная страница
    name: 'Login',
    component: LoginPage, // Новый компонент для логина
  },
  {
    path: '/dashboard', // Страница Dashboard
    name: 'Dashboard',
    component: DashboardPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
