import { request } from './request'

export function getHomeData(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

export function getMultdata(){
  return request({
    url:'http://123.207.32.32:8000/home/multidata'
  })
}
