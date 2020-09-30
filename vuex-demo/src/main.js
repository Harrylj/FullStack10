import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

/*
const store = new Vuex.Store({
  state:{
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ],
    tryNum:0,
    tryHrefMessage:'0',
  },
  getters:{ //添加getters
    saleProducts: (state) => {
      let saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  },
  mutations:{ //添加mutations
    minusPrice (state, payload ) {
      let newPrice = state.products.forEach( product => {
        product.price -= payload
      })
    },
    SET_TRY(state,file){
      state.tryNum = file.num;
      state.tryHrefMessage = file.Message;
      state.tryHrefMy = file.My;
      console.log('3- ',file)
    },
  },
  actions:{ //添加actions
    minusPriceAsync( context, payload ) {
      setTimeout( () => {
        context.commit('minusPrice', payload ); //context提交
      }, 1000)
    }
  },
})
*/
// Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
const moduleA = {
  state:{
    products: [
      {name: '鼠标', price: 200},
      {name: '键盘', price: 400},
      {name: '耳机', price: 600},
      {name: '显示屏', price: 800}
    ],
    tryNum:0,
    tryHrefMessage:'0',
  },
  mutations:{ //添加mutations
    minusPrice (state, payload ) {
      let newPrice = state.products.forEach( product => {
        product.price -= payload
      })
    },
  },
}
const moduleB = {
  state:{
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ],
    tryNum:1,
    tryHrefMessage:'1',
  },
  mutations:{ //添加mutations
    minusPrice (state, payload ) {
      let newPrice = state.products.forEach( product => {
        product.price += payload
      })
    },
  },
}
const store = new Vuex.Store({
  modules: {
    a: moduleA,   // store.state.a // -> moduleA 的状态
    b: moduleB    // store.state.b // -> moduleB 的状态
  }
})

// 注入到根实例
new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  render: h => h(App)
})
