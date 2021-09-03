import { createWebHistory, createRouter } from "vue-router";
import RmHome from "@/views/RmHome.vue";
import RmCharacter from "@/views/RmCharacter"

const routes = [
  {
    path: "/",
    name: "Home",
    component: RmHome,
  },
  {
    path: "/character",
    name: "character",
    component: RmCharacter,
  },
  {
    path: "/character",
    name: "pages",
    component: RmCharacter
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;