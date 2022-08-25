import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { defaultLocale, localeOptions } from '@/constants/config';
import BootstrapVue from 'bootstrap-vue';
import VueScrollTo from 'vue-scrollto';
import Colxx from '@/components/Common/Colxx.vue';
import App from './App.vue';
import router from './router';
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import '@/assets/fonts/simple-line-icons/css/simple-line-icons.css';
import '@/assets/fonts/iconsmind/style.css';
// ez nem biztos, hogy kell
import '@/assets/css/vendor/dropzone.min.css';
import '@/assets/css/vendor/bootstrap.min.css';
import '@/assets/css/sass/themes/piaf.light.purple.scss';

const lineClamp = require('vue-line-clamp');

Vue.component('b-colxx', Colxx);

Vue.use(lineClamp, {
  // plugin options
});

Vue.use(VueScrollTo);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(VueI18n);

const messages = { en, es };

// eslint-disable-next-line eqeqeq
const locale = (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id == localStorage.getItem('currentLanguage')).length > 0) ? localStorage.getItem('currentLanguage') : defaultLocale;
const i18n = new VueI18n({
  locale,
  fallbackLocale: 'en',
  messages,
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
