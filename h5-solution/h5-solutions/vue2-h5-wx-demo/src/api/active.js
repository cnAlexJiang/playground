import api from './index'
// axios
import request from '@/utils/request'
// 获取accesToken
export function getActiveList(data) {
  return request({
    url: api.activeList,
    method: 'get',
    params: data,
  })
}


export function getUserList(data) {
  return request({
    url: api.activityUser,
    method: 'get',
    params: data,
  })
}


export function joinAct(data) {
  return request({
    url: api.joinAct,
    method: 'post',
    data: data,
  })
}
