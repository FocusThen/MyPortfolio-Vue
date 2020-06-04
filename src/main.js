import Vue from "vue";
import App from "./App.vue";
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);

import VueMeta from "vue-meta";

Vue.use(VueMeta);
// animation
import ScrollAnimation from "./components/animation/scrollAnimation";

Vue.directive("scrollanimation", ScrollAnimation);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount("#app");
