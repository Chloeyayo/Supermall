import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex)
const state={
  cartList:[{"iid":"1jw0sr2","desc":"建议零售价\t¥129.00\t\n面料名称\t奥戴尔\t主面料成分\t棉\t主面料成分的含量\t95（%）\n图案\t纯色\t风格\t文艺\n款式\t套头\t袖长\t短袖\t工艺\t拼贴/拼接     88803","price":"56.64","title":"2018 新款女装上衣文艺棉麻短袖t恤 V领衫T恤女短袖女T桖","img":"//s11.mogucdn.com/p2/170301/106341701_4kfgdd3001475k8h1l365al2k5ed6_640x960.jpg","count":1},{"iid":"1jw0sr2","desc":"建议零售价\t¥129.00\t\n面料名称\t奥戴尔\t主面料成分\t棉\t主面料成分的含量\t95（%）\n图案\t纯色\t风格\t文艺\n款式\t套头\t袖长\t短袖\t工艺\t拼贴/拼接     88803","price":"56.64","title":"2018 新款女装上衣文艺棉麻短袖t恤 V领衫T恤女短袖女T桖","img":"//s11.mogucdn.com/p2/170301/106341701_4kfgdd3001475k8h1l365al2k5ed6_640x960.jpg","count":1}]
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
})