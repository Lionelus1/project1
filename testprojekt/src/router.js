import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue'; // Убедитесь, что путь правильный
import DashboardPage from './components/DashboardPage.vue'; // Пустая страница Dashboard

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage, // Компонент для логина
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage, // Пустая страница Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
