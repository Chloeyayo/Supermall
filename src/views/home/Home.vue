<template>
  <div class="home-wrapper">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <TabControl
      :items="tabControlList"
      @tabClick="tabClick"
      class="out-tab-control"
      v-show="Fixed"
      ref="outTabControl"
    ></TabControl>
    <scroll
      class="scroll-wrapper"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="getposition"
      @pullingUp="loadmore"
    >
      <swiper :dataList="bannerList" @imgLoad.once="swiperLoad"></swiper>
      <Recommand :dataList="recommendList"></Recommand>
      <Feature></Feature>
      <TabControl :items="tabControlList" @tabClick="tabClick" ref="tabControl"></TabControl>
      <GoodsList :goods="showGoods" class="goods-list"></GoodsList>
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
import { debounce } from "@/common/utils.js";

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
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentIndex: 'pop',
      position: 0,
      tabControlOffsetTop: 0,
      saveY: 0,
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
      switch (index) {
        case 0:
          this.currentIndex = "pop";
          break;
        case 1:
          this.currentIndex = "new";
          break;
        case 2:
          this.currentIndex = "sell";
          break;
      }
      this.$refs.outTabControl.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    getposition(pos) {
      this.position = pos;
    },
    loadmore(scroll) {
      this.getHomeDataM(this.currentIndex);

      setTimeout(() => {
        scroll.finishPullUp();
      }, 3000);
    },
    // imgload(){  //每次加载图片就刷新 解决下拉之后无法拖动的问题
    //   console.log("imgload");
    //   this.$refs.scroll.scroll.refresh();
    // },
    getMulttypeataM() {
      getMultdata().then((res) => {
        this.bannerList = res.data.data.banner.list;
        this.recommendList = res.data.data.recommend.list;
      });
    },
    getHomeDataM(type) {
      let page = this.goods[type].page + 1; //设置页数
      getHomeData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 400);
    },
    swiperLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
  },
  created() {
    this.getMulttypeataM();
    this.getHomeDataM("pop");
    this.getHomeDataM("new");
    this.getHomeDataM("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentIndex].list;
    },
    showBackTop() {
      return Math.abs(this.position.y) > 1000;
    },
    Fixed() {
      return Math.abs(this.position.y) > this.tabControlOffsetTop;
    },
  },
  mounted() {
    //每次加载图片就刷新 解决下拉之后无法拖动的问题
    //使用Bus进行爷孙传递 <先要在main.js里注册
    const de = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImgload", () => {
      de();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
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
    overflow: htypeden;
  }
}
.goods-list {
  padding: 0 2%;
}
.out-tab-control {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 9;
}
</style>
