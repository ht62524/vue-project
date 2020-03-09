import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/global.css";
import "./assets/fonts/iconfont.css";
import axios from "axios";

Vue.prototype.$http = axios;
Vue.prototype.$message = ElementUI.Message;
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
