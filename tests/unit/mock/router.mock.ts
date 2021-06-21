import { routes } from "@/router";
import { config } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

const mockRouter = createRouter({
  history: createWebHistory(),
  routes,
});
config.global.plugins.push(mockRouter);
