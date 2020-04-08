<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Installed CLI Plugins</h3>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>


<!-- 上边框 -->
<div class="van-hairline--top"></div>



<div class="van-ellipsis">这是一段宽度限制 250px 的文字，后面的内容会省略</div>

  </div>
</template>

<script>

// import Button from 'vant/lib/button';
// import 'vant/lib/button/style';

import Vue from 'vue';
import { Button } from 'vant';
import 'vant/lib/index.css'

Vue.use(Button);
export default {
  name: 'HelloWorld',
  props: {
    msg: String,

  },
  data() {
    return {
      visible: true
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
