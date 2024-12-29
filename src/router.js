import Vue from "vue";
import VueRouter from "vue-router";
import ROUTES from "@/enums/Routes";

import About from "@/components/about/About.vue";
import SkillSet from "./components/skill-set/SkillSet.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: ROUTES.HOME },
  { path: "/about", name: ROUTES.ABOUT, component: About },
  { path: "/skills", name: ROUTES.SKILLS, component: SkillSet },
  { path: "*", redirect: { name: ROUTES.HOME } },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
