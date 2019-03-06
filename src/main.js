import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import formatting from "./utility/formatting";
import store from "./store";
import interceptors from "./interceptors";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$formatting = formatting;

interceptors();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
