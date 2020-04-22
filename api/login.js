/**
 * @author 冷暖自知
 * @date 2020/4/21 20:48
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {
  //登录
  submitLogin(userInfo) {
    return request({
      url: '/eduucenter/edu-ucenter-front/login',
      method: 'post',
      data: userInfo
    })
  },
  //根据token获取用户信息
  getLoginInfo() {
    return request({
      url: '/eduucenter/edu-ucenter-front/getLoginInfo',
      method: 'get',
      // headers: {'token': cookie.get('guli_token')}
    })
    //headers: {'token': cookie.get('guli_token')}
  }
}
