// Core
import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Articles from "../views/Articles.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Articles",
    component: Articles,
  },
  {
    path: "/articles/:id",
    name: "Edit Article",
    component: () => import("../views/EditArticle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
