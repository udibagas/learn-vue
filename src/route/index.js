import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../pages/HomeView.vue";
import AboutView from "../pages/AboutView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  {
    path: "/products/:id",
    name: "product-detail",
    component: () => import("../pages/ProductDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
