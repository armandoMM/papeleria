const routes = [
  {
    path: "/shop",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "index", component: () => import("pages/IndexPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/BoardLayout.vue"),
    children: [
      {
        path: "login",
        component: () => import("pages/login/InicioSesion.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
