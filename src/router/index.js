import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component : () => import('../views/FrontView.vue'),
      children:[
        {
          path: '',
          name: 'home',
          component: () => import("../views/HomeView.vue")
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/CartView.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/ProductsView.vue')
        },
        {
          path: 'products/:id',
          name: 'product',
          component: () => import('../views/ProductView.vue')
        },
        
      ],
    },
    {
      path:'/login',
      component: () => import('../views/dashboard/LoginView.vue'),
     },
    {
      path:'/admin',
      component: () => import('../views/dashboard/DashboardView.vue'),
      children:[
        {
          path:'products',
          component: () => import('../views/dashboard/AdminProductsView.vue'),
        },
        {
          path:'order',
          component: () => import('../views/dashboard/OrderView.vue'),
        }
      ]
    }
  ]
})

export default router;
