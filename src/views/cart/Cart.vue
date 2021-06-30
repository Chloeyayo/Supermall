<template>
  <div class="cart-wrapper">
    <NavBar class="nav-bar">
      <div class="title" slot="center">购物车({{itemCount}})</div>
    </NavBar>
    <scroll class="scroll">
      <Items  class="item" v-for="(item, index) in itemList" :key="index" :item="item"></Items>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar/NavBar.vue";
import scroll from "@/components/common/Bscroll/scroll";
import Items from "./child/Item"
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  activated() {
    console.log(this.$store.getters.itemList);
  },
  computed: {
    ...mapGetters(["itemList", "itemCount"]),
  },
  components: {
    NavBar,
    scroll,
    Items,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.scroll {
  margin-top: 44px;
  height: calc(100vh - 44px - 49px);
}

</style>
