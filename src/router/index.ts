import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "@/views/pages/Login/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "default",
    redirect: '/dashboard',
    component: () => import(/* webpackChunkName: "view-layout" */"@/views/containers/DefaultLayout.vue"),
    meta: { auth: true },
    children: [
      {
        path: "meet",
        component: () =>  import(/* webpackChunkName: "view-meet" */"@/views/pages/Meeting/Meeting.vue"),
      },
      {
        path: "dashboard",
        component: () => import(/* webpackChunkName: "view-dashboard" */"@/views/pages/Dashboard/DashboardView.vue"),
      },
      {
        path: "scores",
        component: () => import(/* webpackChunkName: "view-scores" */"@/views/pages/ScoreHistory/ScoreHistory.vue"),
      },
      {
        path: "mistakes",
        component: () => import(/* webpackChunkName: "view-mistakes" */"@/views/pages/CommonMistake/CommonMistake.vue"),
      },
      {
        path: "/saved-question",
        component: () => import(/* webpackChunkName: "view-question" */"@/views/pages/SaveQuestion/SaveQuestion.vue")
      }
    ],
  },
  {
    path: "/signin",
    name: "Singin",
    meta: { auth: false },
    component: () => import(/* webpackChunkName: "view-signin" */"@/views/pages/Login/LoginView.vue"),
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import (/* webpackChunkName: "view-dashboard" */"@/views/pages/NotFound/NotFound.vue") },
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
