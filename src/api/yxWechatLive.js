import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/yxWechatLive',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/yxWechatLive/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'api/yxWechatLive',
    method: 'put',
    data
  })
}

export function sync() {
  return request({
    url: 'api/yxWechatLive/synchro',
    method: 'get'
  })
}

export function addGoods(data) {
  return request({
    url: 'api/yxWechatLive/addGoods',
    method: 'post',
    data
  })
}
export default { add, edit, del, sync, addGoods }
