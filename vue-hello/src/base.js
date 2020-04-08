
import router from './router'

const baseConfig =  {
    goback:function(){
        router.back();
    }
}
export default baseConfig;
/*
export default {
    install(Vue) {
      Vue.prototype.globalGetData = function () {
        console.log('getData');
      };
    }
  }
  
*/