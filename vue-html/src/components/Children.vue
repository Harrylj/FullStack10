<template>
  <div class="hello">
    <h3>弟弟A2</h3>
    <p>接受兄弟A1传值=-------第{{ccc}}次,向---{{ddd}}</p>
  </div>
</template>

<script>
import Bus from "../api/Bus";   //注意引入
export default {
  name: 'Children',
  props: {
    msg: String
  },
  data() {
    return {
      ccc: "",
      ddd: ""
    };
  },
  created(){
    Bus.$on("zifu", (val_01, val_02) => {    //取  Bus.$on
      this.ccc = val_01;
      this.ddd = val_02;
    });
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
