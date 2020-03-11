
import axios from 'axios'


// 后台接口的基础地址
const BASE_URL = 'http://api-haoke-dev.itheima.net';

// 创建axios的实例
const instance = axios.create({
    baseURL: BASE_URL
});
  

  // 注册拦截器（request和response）
  
  // Add a request interceptor
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
  // Add a response interceptor
  instance.interceptors.response.use(function (response) {

    const data = {
        status:response.data.status,
        description:response.data.description,
        data:response.data.body
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  
  export { BASE_URL }
  export default instance
