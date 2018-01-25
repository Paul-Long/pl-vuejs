import Vue from 'vue'
import App from './components/app/App'
import ElementUI from 'element-ui'
import router from './router'
import './components/app/element-variables.scss'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
