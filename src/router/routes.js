
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Selts', component: () => import('pages/Selts.vue') },
      { path: '/K5', component: () => import('pages/K5.vue') },
      { path: '/Sarento', component: () => import('pages/Sorento.vue') },
      { path: '/Stinger', component: () => import('pages/Stinger.vue') },
      { path: '/Soul', component: () => import('pages/Soul.vue') },
      { path: '/Cornival', component: () => import('pages/Cornival.vue') },
      { path: '/K8', component: () => import('pages/K8.vue') },
      { path: '/Emale', component: () => import('components/Emale.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
