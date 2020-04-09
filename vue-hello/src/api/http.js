// const axios = require('axios').default;
import baseUrl from './baseUrl'


console.log(baseUrl)
const axios = require('axios');
// import axios from 'axios'

axios.defaults.baseURL = baseUrl.baseUrl;
axios.defaults.timeout = 3000;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios.create({
//     baseURL: baseUrl,
//     timeout: 3000,
//     headers: {'X-Custom-Header': 'foobar'}
// });

export default axios