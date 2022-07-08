import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmployeeView from "../views/Employee.vue";
import PersonalArea from "../views/PersonalArea.vue";
import AgentPage from "../views/AgentPage.vue";
import NewTasks from "../views/NewTasks.vue";
import CustomerBase from "../views/CustomerBase.vue";
import AdminPage from "../views/AdminPage.vue";

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
  {
    path: '/newtasks',
    name: 'newtask',
    component: NewTasks
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerBase
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
