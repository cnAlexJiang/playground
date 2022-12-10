import api from './index'
// axios
import request from '@/utils/request'
// 获取accesToken
export function fetchArticle(data) {
  return request({
    url: api.article,
    method: 'get',
    params: data,
  })
}

