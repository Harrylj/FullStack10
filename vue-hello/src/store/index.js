import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
console.log('use vuex')
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
// store.commit('increment')
// console.log(store.state.count) // -> 1
export default store