import Vue from 'vue';
import { Container, Header, Main, Button, Input, Table, TableColumn } from 'element-ui';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Button);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);

new Vue({
  render: h => h(App),
}).$mount('#app')
