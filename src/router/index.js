import { createWebHistory, createRouter } from "vue-router";
import RmHome from "@/views/RmHome.vue";
import RmCharacter from "@/views/RmCharacter"
import RmLocation from "@/views/RmLocation"
import RmEpisodes from "@/views/RmEpisodes"

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
  },
  {
    path: "/location",
    name: "location",
    component: RmLocation
  },
  {
    path: "/episodes",
    name: "episodes",
    component: RmEpisodes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;