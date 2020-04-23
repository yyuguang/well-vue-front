/**
 * @author 冷暖自知
 * @date 2020/4/23 21:12
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

const api_name = '/eduservice/course-front'
export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/coursePageList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  /**
   * 获取课程二级分类
   */
  getNestedTreeList() {
    return request({
      url: '/eduservice/edu-subject/list',
      method: 'get'
    })
  },
  getCourseInfoById(courseId) {
    return request({
      url: `${api_name}/getCourseInfoById`,
      method: 'get',
      params: {
        courseId: courseId
      }
    })
  }
}
