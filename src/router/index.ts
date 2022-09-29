import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "@/views/pages/Dashboard/DashboardView.vue";
import DefaultLayout from "@/views/containers/DefaultLayout.vue";
import ScoreHistory from "@/views/pages/ScoreHistory/ScoreHistory.vue";
import LayoutHideHeader from "@/views/containers/LayoutHideHeader.vue";
import LoginView from "@/views/pages/Login/LoginView.vue";
import NotFound from "@/views/pages/NotFound/NotFound.vue";
import CommonMistake from "@/views/pages/CommonMistake/CommonMistake.vue";
import Meeting from "@/views/pages/Meeting/Meeting.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "default",
    redirect: '/dashboard',
    component: DefaultLayout,
    meta: { auth: true },
    children: [
      {
        path: "meet",
        component: Meeting
      },
      {
        path: "dashboard",
        component: DashboardView,
      },
      {
        path: "scores",
        component: ScoreHistory,
      },
      {
        path: "mistakes",
        component: CommonMistake,
      },
    ],
  },
  {
    path: "/signin",
    name: "Singin",
    meta: { auth: false },
    component: LayoutHideHeader,
    children: [
      {
        path: "",
        component: LoginView,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("USER_TOKEN");

  if (to.meta.auth && !token) {
    next("/signin");
  } else {
    next();
  }
});

export default router;
