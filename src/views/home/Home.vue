<template>
  <div class="home-wrapper">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper :dataList="bannerList"></swiper>
    <Recommand :dataList="recommendList"></Recommand>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar/NavBar.vue";
import Swiper from "./childComps/Swiper"
import Recommand from "./childComps/Recommand"

import { getHomeData, getMultdata } from "@/network/home.js";
export default {
  name: "Home",
  data() {
    return {
      bannerList: [],
      recommendList: [],
      pageIndex: 1,
      
    };
  },
  components: {
    NavBar,
    Swiper,
    Recommand,
  },

  created() {
    getMultdata().then((res) => {
      this.bannerList = res.data.data.banner.list;
      this.recommendList = res.data.data.recommend.list;
      console.log(this.recommendList);
    });
  },
  mounted() {},
};
</script>

<style lang="scss" >

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
