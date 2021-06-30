export default{
  addCount(state,payload){
    payload.count+=1
  },
  addItem(state,payload){
    state.cartList.push(payload)
  }
}