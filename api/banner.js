/**
 * @author 冷暖自知
 * @date 2020/4/19 17:14
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

export default {
  bannerList() {
    return request({
      url: '/educms/cms-banner-front/list',
      method: 'get'
    })
  }
}
