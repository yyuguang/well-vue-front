/**
 * @author 冷暖自知
 * @date 2020/4/21 20:31
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {
  /**
   * 根据手机号发送短信
   * @param phone
   */
  getMobile(phone) {
    return request({
      url: '/edumsm/msm/send',
      method: 'post',
      params: {
        phone: phone
      }
    })
  },
  /**
   * 用户注册
   * @param formItem
   */
  submitRegister(formItem) {
    return request({
      url: '/eduucenter/edu-ucenter-front/register',
      method: 'post',
      data: formItem
    })
  }
}
