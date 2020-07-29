<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="red">
      <img slot="icon" src="@/assets/img/tabbar/home.svg" alt />
      <img slot="icon-active" src="@/assets/img/tabbar/home_active.svg" alt />
      <div slot="name">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img slot="icon" src="@/assets/img/tabbar/category.svg" alt />
      <img slot="icon-active" src="@/assets/img/tabbar/category_active.svg" alt />
      <div slot="name">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <img slot="icon" src="@/assets/img/tabbar/shopcart.svg" alt />
      <img slot="icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt />
      <div slot="name">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img slot="icon" src="@/assets/img/tabbar/profile.svg" alt />
      <img slot="icon-active" src="@/assets/img/tabbar/profile_active.svg" alt />
      <div slot="name">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from '../../common/TapBar/TabBar'
import TabBarItem from "../../common/TapBar/TabBarItem";
export default {
  components:{
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>