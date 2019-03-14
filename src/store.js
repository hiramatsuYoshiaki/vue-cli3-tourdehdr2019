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
    home: state => { state.page = "home"},
    works: state => { state.page = "works"},
    about: state => { state.page = "about"},
    contact: state => { state.page = "contact"},
    // project: state => { state.page = "project"},
    // studio: state => { state.page = "studio"},
  },
  actions: {

  }
})
