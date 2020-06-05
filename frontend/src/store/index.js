import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import accounts from './modules/accounts'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    todo,
    accounts,
  },
})