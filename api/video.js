/**
 * @author 冷暖自知
 * @date 2020/4/24 17:25
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

const api_name = '/eduvod/video'

export default {

  getPlayAuth(videoId) {
    return request({
      url: `${api_name}/getVideoPlayAuth`,
      method: 'post',
      params: {
        id: videoId
      }
    })
  }

}
