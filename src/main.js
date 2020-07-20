import Vue from 'vue'
import App from './App.vue'

//icon
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter,
  faInstagram,
  faCodepen,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGithub, faTwitter, faInstagram, faCodepen, faLinkedinIn)
//<font-awesome-icon :icon="['fab', 'font-awesome']" />
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Scroll
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)

//  meta and SEO
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

// Google analitics
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: ['UA-172948733-1'],
  autoTracking: {
    screenview: true,
  },
  checkDuplicatedScript: true,
})

// animation
import ScrollAnimation from './components/animation/scrollAnimation'

Vue.directive('scrollanimation', ScrollAnimation)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app')
