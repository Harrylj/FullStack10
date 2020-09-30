<template>
  <div id="app">
    
    <transition :name="transitionName">
      <!-- <router-view :class="transitionName?'transitionBody':''"></router-view> -->
      <router-view :class="transitionName?'transitionBody':'transitionBody-no'"></router-view>
    </transition>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/info">info</router-link> |
      <router-link to="/try">try</router-link>
    </div>
    <!-- <router-view/> -->
  </div>
</template>
<script>


export default {
  data () {
      return {
        transitionName: 'transitionLeft',
      }
  },
   watch: {
      '$route'(to, from) {
          // 不滑数组
          const no  = ['/about']
          // 右滑
          // const arr = []
          const arr = ['/','/login', '/info', '/shopOrder-detail', '/change-password']
          // 不滑
          if(no.indexOf(to.path)== 0){
            this.transitionName = null;
            console.log(1)
          }
          // 左右滑
          else{
            console.log(from)
            // this.transitionName = arr.indexOf(to.path) > arr.indexOf(from.path) ? 'transitionLeft' : 'transitionRight'
            this.transitionName = (arr.indexOf(to.path) >= 0 ? 'transitionLeft' : 'transitionRight');
          }
          
          // console.log(to)
          console.log('aaaaaa=',no.indexOf(to.path))
          console.log('bbbbbb=',arr.indexOf(to.path))
          
      }
  }

}

</script>

<style lang="scss">

.transitionBody{
//  transition: all 0.4s ease-out;
  transition: all 0 ease-out;
}
.transitionBody-no{
 transition: all 0 ease-out;
}
.transitionLeft-enter,
.transitionRight-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.transitionLeft-leave-active,
.transitionRight-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
.transitionLeft-enter-active,
.transitionRight-enter-active {  //防止过渡时元素抖动
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

#nav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

#nav {
  padding: 30px 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
