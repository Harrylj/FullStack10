
import router from './router'
import http from '@/api/http.js'
// console.log(http)
const baseConfig = {
  goback:function () {
    router.back();
  },
  // 通用输出
  ljlog:function(a){
    if(a){
      // console.log('lj ',a)
    }
    
  },
  newHttp: (url, method, params, callback, errCallback) => {
    http({ url: url, method: method, params: method == 'get' ? params : null, data: method == 'post' ? params : null, baseURL: 'https://mall.dc.sdtzcd.com/api/' }).then((res) => {
        if (callback) {
            callback(res)
        }
    }).catch(error => {
        if (errCallback) {
            errCallback(error)
        }
    })
  },
  /*
  newHttp:function (){
    //  alert(1)
    //  console.log(http,router)
  }
  */
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