import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmployeeView from "../views/Employee.vue";
import PersonalArea from "../views/PersonalArea.vue";
import AgentPage from "../views/AgentPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/emp",
    name: "employee",
    component: EmployeeView,
  },
  {
    path: "/pers",
    name: "pers",
    component: PersonalArea,
  },
  {
    path: "/agent",
    name: "agent",
    component: AgentPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
