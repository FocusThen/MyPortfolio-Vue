import Vue from "vue";
import App from "./App.vue";
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);

import VueMeta from "vue-meta";

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});
// animation
import ScrollAnimation from "./components/animation/scrollAnimation";

Vue.directive("scrollanimation", ScrollAnimation);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
