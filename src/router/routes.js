const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "about",
        component: () => import("pages/About.vue"),
        meta: { "safe-t": false }
      },
      {
        path: "/training",
        name: "training",
        component: () => import("pages/Training.vue"),
        meta: { "safe-t": false }
      },
      {
        path: "/training/traininglist",
        name: "traininglist",
        component: () => import("pages/TrainingList.vue"),
        meta: { "safe-t": false }
      },
      {
        path: "/training/traininglist/:id",
        name: "trainingitem",
        component: () => import("pages/TrainingItem.vue")
      },

      {
        path: "/rate",
        name: "rate",
        component: () => import("pages/Rate.vue"),
        meta: { "safe-t": false }
      },
      {
        path: "/rate/table/:region_id&:important_id",
        name: "table",
        component: () => import("pages/RateTable.vue")
      },
      {
        path: "/begin",
        name: "begin",
        component: () => import("pages/Begin.vue"),
        meta: { "safe-t": false }
      }
    ]
  },
  {
    path: "/carousel",
    name: "screen-start",
    component: () => import("layouts/CarouselLayout.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
