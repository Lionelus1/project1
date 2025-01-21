import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue'; // Исправленный путь
import DashboardPage from './components/DashboardPage.vue'; // Путь к компоненту Dashboard

const routes = [
  {
    path: '/',
    name: 'Login', // Страница логина
    component: LoginPage, // Используем компонент напрямую
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,  // Путь к пустой странице Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
