import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/qna",
    name: "qna",
    component: () => import("@/views/QnAView.vue"),
    redirect: "/qna/list",

    children: [
      {
        path: "list",
        name: "qnalist",
        component: () => import("@/components/QnA/QnAlist.vue"),
      },

      {
        path: "detail/:no",
        name: "QnADetail",
        component: () => import("@/components/QnA/QnAdetail.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
