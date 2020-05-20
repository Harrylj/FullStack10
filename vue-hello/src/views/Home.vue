<template>
  <div class="home">
    home
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

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
}
</script>
