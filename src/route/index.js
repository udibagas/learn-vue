import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../pages/HomeView.vue";
import AboutView from "../pages/AboutView.vue";
import AdminView from "../pages/AdminView.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/LoginView.vue"),
  },
  { path: "/", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  {
    path: "/products/:id",
    name: "product-detail",
    component: () => import("../pages/ProductDetail.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../pages/AdminView.vue"),
    // guard
    // beforeEnter: (to, from, next) => {
    //   console.log(to, from);
    //   // Simulate an authentication check
    //   const isAuthenticated = localStorage.getItem("token");
    //   if (isAuthenticated) {
    //     next();
    //   } else {
    //     next({ name: "login" }); // Redirect to About if not authenticated
    //   }
    // },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next();
    return;
  }

  const isAuthenticated = localStorage.getItem("token");
  if (isAuthenticated) {
    next();
  } else {
    next({ name: "login" }); // Redirect to About if not authenticated
  }
});

export default router;
