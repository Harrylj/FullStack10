// const axios = require('axios').default;
import baseUrl from './baseUrl'
import md5 from 'js-md5'
import qs from 'qs'

const axios = require('axios');
console.log(baseUrl)
// import axios from 'axios'

axios.defaults.baseURL = baseUrl.baseUrl;
axios.defaults.timeout = 3000;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function setNewData(oldData) {
    var data = JSON.parse(JSON.stringify(oldData || {})) //保存原始数据
    data = data || {}
    data.app_key = 'SDMALLKEY'
    data.timestamp = Date.parse(new Date()) / 1000
    delete data['stack-key']
    var keys = []
    for (var k in data) {
        if (data[k] === 0 || data[k] === false || data[k]) {
            keys.push(k)
        } else {
            // delete data[k]
        }
    }
    for (var j = 0; j < keys.length; j++) {
        keys[j] = keys[j].toLowerCase()
    }
    keys = keys.sort()
    var signStr = ''
    for (var i = 0; i < keys.length; i++) {
        for (var key in data) {
            if (key.toLowerCase() == keys[i]) {
                signStr += keys[i] + data[key]
            }
        }
    }
    // console.log(signStr + '1qazxsw2')
    data.sign = md5(signStr + '1qazxsw2').toUpperCase()
    return data
}
// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    if (config.baseURL.indexOf('mall.dc.sdtzcd.com/api') != -1) {
        if (config.method == 'get') {
            config.params = setNewData(config.params)
        } else {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
            config.data = qs.stringify(setNewData(config.data))
        }
    }
    return config
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// axios.create({
//     baseURL: baseUrl,
//     timeout: 3000,
//     headers: {'X-Custom-Header': 'foobar'}
// });

export default axios