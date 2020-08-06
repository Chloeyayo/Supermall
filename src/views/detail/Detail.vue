<template>
  <div class="detail">
    <DetailNavbar class="detail-navbar"></DetailNavbar>
    <BackTop @click.native="backtop" v-show="isBackTop" ref="backtop"></BackTop>
    <scroll class="scroll" ref="scroll" @scroll="getposition">
      <DetailSwiper :data="swiperImg"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="goodsParam"></DetailParamInfo>
      <DetailComment :comment="comment"></DetailComment>
      <GoodsList :goods="recommend"></GoodsList>
    </scroll>
  </div>
</template>

<script>
import scroll from "@/components/common/Bscroll/scroll";
import BackTop from "@/components/common/BackTop/BackTop";
import DetailNavbar from "./childComponents/DetailNavbar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParamInfo from "./childComponents/DetailParamInfo";
import DetailComment from "./childComponents/DetailComment";
import GoodsList from "@/components/common/Goods/GoodsList.vue"
import {refreshMixin} from "@/common/mixin.js"
import {
  getDetailData,
  getDetailRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "@/network/detail";
export default {
  name: "detail",
  data() {
    return {
      id: null,
      data: null,
      isBackTop: false,
      position: [],
      swiperImg: [],
      info: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      comment: {},
      recommend: [],
    };
  },
  mixins: [refreshMixin],
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 400);
      this.isBackTop=false
    },
    getposition(pos) {
      this.isBackTop=Math.abs(pos.y)>1000
    },
  },
  computed: {

  },

  components: {
    DetailNavbar,
    scroll,
    BackTop,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    GoodsList
  },
  created() {
    this.id = this.$route.params.iid;
    getDetailData(this.id).then((res) => {
      const data = res.data.result;
      this.data = data;
      this.swiperImg = data.itemInfo.topImages;
      this.info = data.itemInfo;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate != 0) {
        this.comment = data.rate.list[0];
      }
      getDetailRecommend().then((res) => {
        this.recommend = res.data.data.list;
        console.log(this.recommend);
      });
    });
  },
  mounted() {
    
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.refresh)
  },
};
</script>

<style>
.detail {
  /* 利用z-index覆盖 tabbar，不过这样不好，想换种方法 */
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
}
.detail {
  height: 100vh;
}
.detail-navbar {
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.scroll {
  height: calc(100vh - 44px);
}
</style>