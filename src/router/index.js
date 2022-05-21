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
    path: "/components/avatar",
    component: () => import("../pages/components/Avatar.vue"),
  },
  {
    path: "/components/spinner",
    component: () => import("../pages/components/Spinner.vue"),
  },
  {
    path: "/components/card",
    component: () => import("../pages/components/Card.vue"),
  },

  {
    path: "/form-elements/general",
    component: () => import("../pages/form/General.vue"),
  },
  {
    path: "/form-elements/input",
    component: () => import("../pages/form/Input.vue"),
  },
  {
    path: "/form-elements/select",
    component: () => import("../pages/form/Select.vue"),
  },
  {
    path: "/form-elements/checkbox",
    component: () => import("../pages/form/Checkbox.vue"),
  },
  {
    path: "/form-elements/radio",
    component: () => import("../pages/form/Radio.vue"),
  },
  {
    path: "/form-elements/switch",
    component: () => import("../pages/form/Switch.vue"),
  },
  {
    path: "/form-elements/textarea",
    component: () => import("../pages/form/Textarea.vue"),
  },
  {
    path: "/utilities/backgrounds",
    component: () => import("../pages/utils/Backgrounds.vue"),
  },
  {
    path: "/layout/container",
    component: () => import("../pages/layout/Container.vue"),
  },
  {
    path: "/layout/section",
    component: () => import("../pages/layout/Section.vue"),
  },
  {
    path: "/layout/footer",
    component: () => import("../pages/layout/Footer.vue"),
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
