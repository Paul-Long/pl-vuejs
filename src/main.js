import Vue from 'vue'
import App from './components/app/App'
import ElementUI from 'element-ui'
import ViserVue from 'viser-vue'
import router from './router'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(ViserVue);

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
