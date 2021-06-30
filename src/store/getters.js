export default{
  itemList(state){
    return state.cartList||0
  },
  itemCount(state) {
    return state.cartList.length || 0;
  },
}