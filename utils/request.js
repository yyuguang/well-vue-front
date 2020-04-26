/**
 * @author 冷暖自知
 * @date 2020/4/19 17:07
 * @version 1.0
 * @Description 封装axios
 */

import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import cookie from 'js-cookie'

/**
 * 创建axios实例
 * @type {AxiosInstance}
 */
const service = axios.create({
  baseURL: 'http://localhost:9001', // api的base_url
  timeout: 20000 // 请求超时时间
})
/**
 * http request 拦截器
 */
service.interceptors.request.use(
  config => {
    //debugger
    if (cookie.get('well_token')) {
      config.headers['token'] = cookie.get('well_token');
    }
    return config
  },
  err => {
    return Promise.reject(err);
  })
/**
 * http response 拦截器
 */
service.interceptors.response.use(
  response => {
    //debugger
    if (response.data.code == 28004) {
      window.location.href = "/login"
      return
    } else {
      if (response.data.code !== 20000) {
        //25000：订单支付中，不做任何提示
        if (response.data.code != 25000) {
          Message({
            message: response.data.message || 'error',
            type: 'error',
            duration: 5 * 1000
          })
        }
      } else {
        return response;
      }
    }
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
  });

export default service
