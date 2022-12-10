import api from './index'
import qs from 'qs'
// axios
import request from '@/utils/request'
// 获取accesToken
export function getCategoryTree() {
  return request({
    url: api.categoryeTree,
    method: 'get'
  })
  //
}
// 分类列表模糊搜索名称
export function getVagueCategory(params) {
  return request({
    url: api.vagueCategory,
    method: 'get',
    params: params
  })
  //
}

