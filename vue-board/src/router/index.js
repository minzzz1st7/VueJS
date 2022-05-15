import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import BoardView from "@/views/BoardView.vue";
import BoardWrite from "@/components/board/BoardWrite.vue";
import BoardList from "@/components/board/BoardList.vue";
import BoardDetail from "@/components/board/BoardDetail.vue";
import BoardModify from "@/components/board/BoardModify.vue";
import BoardDelete from "@/components/board/BoardDelete.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/board",
    name: "board",
    component: BoardView,
    redirect: "/board/list",
    children: [
      {
        path: "/list",
        name: "list",
        component: BoardList,
      },
      {
        path: "/write",
        name: "write",
        component: BoardWrite,
      },
      {
        path: "/detail",
        name: "detail",
        component: BoardDetail,
      },
      {
        path: "/modify",
        name: "modify",
        component: BoardModify,
      },

      {
        path: "/delete",
        name: "delete",
        component: BoardDelete,
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
