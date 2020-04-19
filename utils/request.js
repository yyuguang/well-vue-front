/**
 * @author 冷暖自知
 * @date 2020/4/19 17:07
 * @version 1.0
 * @Description 封装axios
 */

import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9001', // api的base_url
  timeout: 20000 // 请求超时时间
})
export default service
