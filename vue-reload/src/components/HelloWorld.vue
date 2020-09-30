<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>
    <h1>{{abc}}</h1>
    <input type="text" placeholder="请输入"><br/>
    <button @click="addNum()">+1</button>
    <button @click="shuaxin()">子刷新</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  inject:['reload'],
  props: {
    msg: String
  },
  data() {
    return {
      abc:1,
    }
  },
  methods: {
    addNum(){
      this.abc++
    },
    shuaxin(){
      this.reload();
    }
  },
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
