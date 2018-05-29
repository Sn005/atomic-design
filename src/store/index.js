import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
  isDrawer: false
})

const mutations = {
  toggleDrawer (state) {
    state.isDrawer = !state.isDrawer
  }
}

const actions = {
  toggleDrawer ({ commit }) {
    commit('toggleDrawer')
  }
}

const getters = {
  isDrawer: state => state.isDrawer
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
