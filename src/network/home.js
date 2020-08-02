import { request } from './request'

export function getHomeData(genreId,pageIndex) {
  return request({
    url: 'https://nfxts.520shq.com/localQuickPurchase/ogMongoAction/queryByGId?genreId='+genreId,
    params: {
      // genreId,
      // pageIndex,
      pageSize: 30,
      pageIndex
    }
  })
}

export function getMultdata(){
  return request({
    url:'http://123.207.32.32:8000/home/multidata'
  })
}
