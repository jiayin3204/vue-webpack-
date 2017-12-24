import Vue from 'vue'
import App from './App'
import router from './router';

Vue.config.productionTip = false;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// 引入本身样式
import './assets/less/index.less';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
