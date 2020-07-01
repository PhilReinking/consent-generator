import "./less/app.less";
import Vue from "vue";
import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  beforeCreate() {
    this.$store.commit("initStore");
  },
}).$mount("#app");
