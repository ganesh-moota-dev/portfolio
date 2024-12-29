import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";

const globalEventBus = new Vue();
Vue.prototype.$globalEventBus = globalEventBus;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
