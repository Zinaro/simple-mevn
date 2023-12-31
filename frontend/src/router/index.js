import { createRouter, createWebHistory } from 'vue-router';
import Cart from '../views/CartPage.vue';
import ItemDetail from '../views/ItemDetailPage.vue';
import Items from '../views/ItemsPage.vue';
import NotFound from '../views/NotFoundPage.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/items',
      component: Items,
    },
    {
      path: '/items/:itemId',
      component: ItemDetail,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
});

export default router;
