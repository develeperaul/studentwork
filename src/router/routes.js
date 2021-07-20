
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "about", component: () => import('pages/About.vue') },
      { path: '/training', name: "training", component: () => import('pages/Training.vue') },
      { path: '/rate', name: "rate", component: () => import('pages/Rate.vue') },
      { path: '/begin',  name: "begin", component: () => import('pages/Begin.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
