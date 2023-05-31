const routes = [
  {
    path: "/",
    component: () => import("layouts/BoardLayout.vue"),
    children: [
      {
        path: "",
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
        path: "",
        name: "portal",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/usuarios",
        name: "usuarios",
        component: () => import("pages/Usuarios/UsuariosMain.vue"),
      },
      {
        path: "/usuarios/editar",
        name: "usuariosEdit",
        component: () => import("pages/Usuarios/UsuariosEditar.vue"),
      },
      {
        path: "/usuarios/agregar",
        name: "usuariosAdd",
        component: () => import("pages/Usuarios/AddUsuario.vue"),
      },
      {
        path: "/marcas",
        name: "marcas",
        component: () => import("pages/Marcas/MarcasMain.vue"),
      },
      {
        path: "/marcas/editar",
        name: "marcasEdit",
        component: () => import("pages/Marcas/EditMarca.vue"),
      },
      {
        path: "/marcas/agregar",
        name: "marcasAdd",
        component: () => import("pages/Marcas/AddMarca.vue"),
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
