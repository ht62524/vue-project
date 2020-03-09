import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/login.vue";
import Home from "../components/home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/home", component: Home }
];

const router = new VueRouter({
  routes
});

// 挂在路由守卫对象
router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    return next();
  }
  //获取token
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) {
    return next("/login");
  }
  next();
});
//to将要去的路径
//from 代表从哪个路径来
//next 是一个函数，表示放行
//next() 放行
//next('/login') 强制跳转到login

export default router;
