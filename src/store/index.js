import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.js'
import databse from './database.js'
import layout from './layout.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    something: 'test'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    databse,
    layout
  }
})
