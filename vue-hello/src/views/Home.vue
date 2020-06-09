<template>
  <div class="home">
    home
    <h2>{{countAlias}}</h2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    increment() {
      //console.log(this.$store.state.count)
      this.$store.commit('increment')
      //console.log(this.$store.state.count)
    }
  },
  created() {
    this.increment();
    console.log('22',this)
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
</script>
