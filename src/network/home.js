import { request } from './request'

export function getHomeData(pageIndex) {
  return request({
    url: 'https://nfxts.520shq.com/localQuickPurchase/ogMongoAction/queryByGId?genreId=1',
    data: {
      pageIndex,
      pageSize: 10
    }
  })
}

export function getMultdata(){
  return request({
    url:'http://123.207.32.32:8000/home/multidata'
  })
}