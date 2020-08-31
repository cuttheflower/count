import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//按需引入element UI
import {
  Card,
  Button,
  Row,
  Col
} from 'element-ui'
Vue.use(Card)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
