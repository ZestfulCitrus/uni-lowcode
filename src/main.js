import Vue from 'vue'
import App from './App'
// main.js
import uView from "uview-ui";
import rtvue from "./components"
import rtvueOption from "./pages/sidebar/option-bar"



Vue.use(uView);
Vue.use(rtvue)
Vue.config.productionTip = false
Vue.use(rtvueOption)


App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
