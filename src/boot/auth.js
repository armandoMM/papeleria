import { boot } from "quasar/wrappers";

export default boot(({ router, store }) => {
  router.beforeEach((to, from) => {
    // if (to.path.includes("/registro/") && !sessionStorage.getItem("token")) {
    if (to.name !== "login" && !store.state.papeleria.usuario) {
      return { name: "login" };
    } else {
      return true;
    }
  });

  // Router.afterEach((to, from) => {
  //   window.scrollTo({ top: 0 });
  // });
});
