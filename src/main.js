import Vue from "vue";
import App from "./App.vue";

// animation
import ScrollAnimation from "./components/animation/scrollAnimation";

Vue.directive("scrollanimation", ScrollAnimation);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
