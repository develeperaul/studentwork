
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "about", component: () => import('pages/About.vue') },
      { path: '/training', name: "training", component: () => import('pages/Training.vue') },
      { path: '/training/traininglist', name: "traininglist", component: () => import('pages/TrainingList.vue')},
      { path: '/training/traininglist/:id', name: "trainingitem", component: () => import('pages/TrainingItem.vue')} ,
      
      
      { path: '/rate', name: "rate", component: () => import('pages/Rate.vue') },
      { path: '/rate/table', name: "table", component: () => import('pages/RateTable.vue') },
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
