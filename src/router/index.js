import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/get-started", component: () => import("../pages/GetStarted.vue") },
  { path: "/integration", component: () => import("../pages/Integration.vue") },
  {
    path: "/customization",
    component: () => import("../pages/Customization.vue"),
  },
  {
    path: "/variables",
    component: () => import("../pages/Variables.vue"),
  },
  { path: "/elements", component: () => import("../pages/elements/index.vue") },
  {
    path: "/elements/button",
    component: () => import("../pages/elements/Button.vue"),
  },
  {
    path: "/elements/image",
    component: () => import("../pages/elements/Image.vue"),
  },
  {
    path: "/elements/progressbar",
    component: () => import("../pages/elements/Progressbar.vue"),
  },
  {
    path: "/elements/table",
    component: () => import("../pages/elements/Table.vue"),
  },
  {
    path: "/elements/tag",
    component: () => import("../pages/elements/Tag.vue"),
  },
  {
    path: "/elements/tooltip",
    component: () => import("../pages/elements/Tooltip.vue"),
  },
  {
    path: "/components/alert",
    component: () => import("../pages/components/Alert.vue"),
  },
  {
    path: "/404",
    name: "PageNotExist",
    component: () => import("../pages/404.vue"),
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
