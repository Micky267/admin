import Vue from 'vue'
import Vuex from 'vuex'
import permission from '@/store/modules/permission'
import user from '@/store/modules/user'
import getters from './getter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    permission,
    user
  }
})
