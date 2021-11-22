import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import SyncfusionButton from "currenda-generic-vue/src/components/generic/SyncfusionButton.vue"

Vue.component("SyncfusionButton", SyncfusionButton);
Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
