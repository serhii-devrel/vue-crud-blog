// Core
import Vue from "vue";

// Router
import router from "./router";

// Store
import store from "./store";

// UI Kit
import vuetify from "./plugins/vuetify";

// Root
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
