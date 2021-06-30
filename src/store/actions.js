export default{
  addCart(context, payload) {
    let oldItem=context.state.cartList.find(item=>item.iid===payload.iid)
    if (oldItem) {
      context.commit("addCount",oldItem)
    } else {
      payload.count = 1
      context.commit("addItem",payload)
    }
  }
}