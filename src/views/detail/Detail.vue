<template>
  <div class="detail">
    <DetailNavbar class="detail-navbar" :currentIndex="currentIndex" @navClick="navClick"></DetailNavbar>
    <BackTop @click.native="backtop" v-show="isBackTop" ref="backtop"></BackTop>
    <scroll class="scroll" ref="scroll" @scroll="getposition">
      <DetailSwiper :data="swiperImg"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="goodsParam" ref="info"></DetailParamInfo>
      <DetailComment :comment="comment" ref="comment"></DetailComment>
      <GoodsList :goods="recommend" ref="recommend"></GoodsList>
    </scroll>
    <DetailButtomBar @addcart="addcart" class="buttom-bar"></DetailButtomBar>
  </div>
</template>

<script>
import scroll from "@/components/common/Bscroll/scroll";
import { debounce } from "@/common/utils.js";

import BackTop from "@/components/common/BackTop/BackTop";
import DetailNavbar from "./childComponents/DetailNavbar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParamInfo from "./childComponents/DetailParamInfo";
import DetailComment from "./childComponents/DetailComment";
import DetailButtomBar from "./childComponents/DetailButtomBar";
import GoodsList from "@/components/common/Goods/GoodsList.vue";
import { refreshMixin } from "@/common/mixin.js";
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
      currentIndex: 0,
      position: [],
      swiperImg: [],
      info: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      comment: {},
      recommend: [],
      offset: [],
    };
  },
  mixins: [refreshMixin],
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      debounce(() => {
        this.offset.push(0);
        this.offset.push(this.$refs.info.$el.offsetTop - 44);
        this.offset.push(this.$refs.comment.$el.offsetTop - 44);
        this.offset.push(this.$refs.recommend.$el.offsetTop - 44);
        console.log("created -> this.offset", this.offset);
      }, 30)();
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 400);
      this.isBackTop = false;
      this.currentIndex = 0;
    },
    getposition(pos) {
      this.isBackTop = Math.abs(pos.y) > 1000;
      for (let index = 0; index < this.offset.length; index++) {
        const element = this.offset[index];
        if (-pos.y > element && this.currentIndex != index && -pos.y) {
          this.currentIndex = index;
        }
      }
    },
    navClick(index) {
      this.$refs.scroll.scrollTo(0, -this.offset[index], 300);
      this.currentIndex = index;

      this.isBackTop = index != 0;
    },
    addcart() {
      let product = {
        iid: this.id,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        title: this.goods.title,
        img: this.swiperImg[0],
      };
      this.$store.dispatch('addCart', product)      
    },
  },
  computed: {},

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
    DetailButtomBar,
    GoodsList,
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
      this.$nextTick();
    });
    getDetailRecommend().then((res) => {
      this.recommend = res.data.data.list;
    });
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", this.refresh);
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
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  background-color: #fff;
}
.scroll {
  height: calc(100vh - 44px - 49px);
}
.buttom-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>