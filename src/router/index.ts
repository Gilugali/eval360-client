import {
  createMemoryHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "Example",
    component: () => import("@/views/Dashboard.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
