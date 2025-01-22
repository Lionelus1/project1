import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';   // Подключаем LoginPage
import DashboardPage from './components/DashboardPage.vue';   // Подключаем новый компонент DashboardPage
import NewPage from './components/NewPage.vue';       // Подключаем новый компонент для новой страницы

const routes = [
  {
    path: '/',  // Главная страница (Login)
    name: 'Login',
    component: LoginPage,  // Компонент для страницы логина
  },
  {
    path: '/dashboard',  // Страница Dashboard
    name: 'Dashboard',
    component: DashboardPage,  // Компонент для DashboardPage
  },
  {
    path: '/new-page',  // Путь для новой страницы
    name: 'NewPage',    // Имя маршрута для новой страницы
    component: NewPage,  // Компонент новой страницы
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
