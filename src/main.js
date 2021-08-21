import Vue from 'vue'
import App from './App'
// main.js
import uView from "uview-ui";
import rtvue from "./components"
import rtvueOption from "./pages/sidebar/option-bar"
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    page: {
      options:[]
    }
  },
  mutations: {
    changePage (state,newPage) {
      state.page=newPage
    },
    saveImage(state,Image){
      state.page.imagebase64=Image
    }
  }
})


Vue.use(uView);
Vue.use(rtvue)
Vue.config.productionTip = false
Vue.use(rtvueOption)


App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
