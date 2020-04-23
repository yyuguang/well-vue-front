/**
 * @author 冷暖自知
 * @date 2020/4/23 17:38
 * @version 1.0
 * @Description
 */
import request from '@/utils/request'

const api_name = '/eduservice/index-front'
export default {
  getPageList(page, limit) {
    return request({
      url: `${api_name}/teacherPageList`,
      method: 'get',
      params: {
        pageNum: page,
        pageSize: limit
      }
    })
  },
  getTeacherCourseById(teacherId) {
    return request({
      url: `${api_name}/getTeacherCourseById`,
      method: 'get',
      params: {
        id: teacherId
      }
    })
  }
}
