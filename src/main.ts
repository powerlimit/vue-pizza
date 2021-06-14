import Vue from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueProgressBar from 'vue-progressbar';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vClickOutside from 'v-click-outside';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(vClickOutside);

const options = {
  color: '#FE5F1E',
  failedColor: '#800',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
};

Vue.use(VueProgressBar, options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
