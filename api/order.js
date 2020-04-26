/**
 * @author 冷暖自知
 * @date 2020/4/26 9:42
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

const api_name = '/orderservice/edu-order'
export default {

  /**
   * 创建订单
   * @param courseId
   */
  createOrder(courseId) {
    return request({
      url: `${api_name}/createOrder`,
      method: 'post',
      params: {
        courseId: courseId
      }
    })
  },
  /**
   * 根据id获取订单
   * @param orderId
   */
  getById(orderId) {
    return request({
      url: `${api_name}/getOrderInfoById`,
      method: 'get',
      params: {
        orderId: orderId
      }
    })
  },
  /**
   * 生成微信支付二维码
   * @param orderNo
   */
  createNative(orderNo) {
    return request({
      url: '/orderservice/edu-pay-log/createNative/',
      method: 'post',
      params: {
        orderNo: orderNo
      }
    })
  },
  /**
   * 根据订单号获取订单支付状态
   * @param orderNo
   */
  queryPayStatus(orderNo) {
    return request({
      url: '/orderservice/edu-pay-log/queryPayStatus/',
      method: 'get',
      params: {
        orderNo: orderNo
      }
    })
  }
}
