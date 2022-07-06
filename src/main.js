import Vue from 'vue';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
