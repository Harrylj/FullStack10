<template>
    <div class="info">
    <h1>欢迎您--{{UserId}}</h1>
    <h2>1</h2>
    <h2>2</h2>
    <h3>3</h3>
    <h4>4</h4>
    <h5>5</h5>
    <van-button size="small" type="primary" @click="btnLeave" >退出登录</van-button>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
        UserId:localStorage.getItem('SDTZUSRRID')
      };
    },
    created() {
      console.log(localStorage.getItem('SDTZUSRRID'))
      this.$base.ljlog('info')
    },
    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      btnLeave(){
        localStorage.removeItem('SDTZUSRRID')
        this.$toast('退出成功')
        this.$router.push('/login')
      },
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
.info{
  h1{
    font-size: 16px;
  }
}
</style>