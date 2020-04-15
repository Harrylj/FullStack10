<template>
  <div id="app">
    <HelloWorld msg="兄弟之间传值"/>
    <children/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Children from './components/Children.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Children
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
