const routes = [
  {
    path: "/",
    component: () => import("layouts/BoardLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("pages/login/InicioSesion.vue"),
      },
    ],
  },
  {
    path: "/portal",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "portal",
        component: () => import("pages/IndexPage.vue"),
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
