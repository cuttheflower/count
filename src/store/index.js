import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    add(state) {
      state.count++
    },
    minus(state) {
      state.count--
    },
    add3(state, num) {
      state.count += num
    },
    minus3(state, num) {
      state.count -= num
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('add3', 3)
      }, 500);
    },
    minusAsync(context) {
      setTimeout(() => {
        context.commit('minus3', 3)
      }, 500);
    }
  },
  modules: {
  }
})
