<template>
  <div class="home-wrapper">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="scroll-wrapper"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="getposition"
      @pullingUp="loadmore"
    >
      <swiper :dataList="bannerList"></swiper>
      <Recommand :dataList="recommendList"></Recommand>
      <Feature></Feature>
      <TabControl :items="tabControlList" @tabClick="tabClick" class="tab-control"></TabControl>
      <GoodsList :list="showGoods" class="goods-list"></GoodsList>
    </scroll>
    <BackTop @click.native="backtop" v-show="showBackTop"></BackTop>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar/NavBar.vue";
import Swiper from "./childComps/Swiper";
import Recommand from "./childComps/Recommand";
import Feature from "./childComps/Feature";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/common/Goods/GoodsList";
import scroll from "@/components/common/Bscroll/scroll";
import BackTop from "@/components/common/BackTop/BackTop";

import { getHomeData, getMultdata } from "@/network/home.js";
export default {
  name: "Home",
  data() {
    return {
      bannerList: [],
      recommendList: [],
      tabControlList: [
        {
          title: "流行",
          path: "pop",
        },
        {
          title: "新款",
          path: "news",
        },
        {
          title: "精选",
          path: "sell",
        },
      ],
      goods: {
        0: { page: 1, list: [] },
        1: { page: 1, list: [] },
        2: { page: 1, list: [] },
      },
      tabIndex: 0,
      position: 0,
    };
  },
  components: {
    NavBar,
    Swiper,
    Recommand,
    Feature,
    TabControl,
    GoodsList,
    scroll,
    BackTop,
  },
  methods: {
    tabClick(index) {
      this.tabIndex = index;
    },
    getposition(pos) {
      this.position = pos;
    },
    loadmore(scroll) {
      this.getHomeDataM(this.tabIndex);
      console.log("pullingUp");
      console.log(this.goods[this.tabIndex].page);
      setTimeout(() => {
        scroll.finishPullUp();
      },2000);
    },
    getMultidataM() {
      getMultdata().then((res) => {
        this.bannerList = res.data.data.banner.list;
        this.recommendList = res.data.data.recommend.list;
      });
    },
    getHomeDataM(Id) {
      let pageIndex = this.goods[Id].page; //设置页数
      let genreId = Id + 1; //设置名称
      getHomeData(genreId, pageIndex).then((res) => {
        this.goods[Id].list.push(...res.data.data.list);
        this.goods[Id].page += 1;
      });
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 400);
    },
  },
  created() {
    this.getMultidataM();
    this.getHomeDataM(0);
    this.getHomeDataM(1);
    this.getHomeDataM(2);
  },
  computed: {
    showGoods() {
      return this.goods[this.tabIndex].list;
    },
    showBackTop() {
      return Math.abs(this.position.y) > 1000;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" >
.home-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .scroll-wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .tab-control {
    position: sticky;
    top: 45px;
    z-index: 8;
  }
}
.goods-list {
  padding: 0 2%;
}
</style>
