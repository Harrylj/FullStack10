<template>
  <div class="hello">
    <h5>{{ msg }}</h5>
    <p>
    <h3>哥哥A1</h3>
    <button @click="cyy">按钮</button> 点击按钮向弟弟A2传值
  </div>
</template>

<script>
import Bus from "../api/Bus";   //注意引入
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      a: 1 
    }
  },
  methods:{
    cyy() {
      Bus.$emit("zifu", this.a++, "子组件向兄弟组件传值");    //存 Bus.$emit
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
