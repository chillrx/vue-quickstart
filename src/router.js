import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/add-todo",
      name: "addTodo",
      component: () => import("./views/addTodo.vue")
    },
    {
      path: "/edit-todo/:id",
      name: "editTodo",
      component: () => import("./views/editTodo.vue"),
      props: true
    }
  ]
});
