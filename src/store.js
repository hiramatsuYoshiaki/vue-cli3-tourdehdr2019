import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    page: "home",
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    clickHome: state => { state.page = "home"},
    clickWorks: state => { state.page = "works"},
    clickAbout: state => { state.page = "about"},
    clickContact: state => { state.page = "contact"},
  },
  actions: {

  }
})
