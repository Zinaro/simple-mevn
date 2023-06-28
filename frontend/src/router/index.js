import { createRouter, createWebHistory } from 'vue-router';
import Cart from '../views/CartPage.vue';
import ItemDetail from '../views/ItemDetailPage.vue';
import Items from '../views/ItemsPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
  ],
});

export default router;
