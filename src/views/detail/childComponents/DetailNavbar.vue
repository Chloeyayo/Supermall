<template>
  <Navbar>
    <div slot="left" @click="backHome" class="left">&lt;</div>
    <div slot="center" class="title-wrapper">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="title"
        @click="navClick(index)"
        :class="{active:currentIndex===index}"
      >{{ item }}</div>
    </div>
  </Navbar>
</template>

<script>
import Navbar from "@/components/common/NavBar/NavBar.vue";

export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    backHome() {
      this.$router.push("/home");
    },
    navClick(index) {
      this.currentIndex = index;
      console.log(index);
    },
  },
  computed: {
    isActive(index) {
      return;
    },
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="less">
  .left{
    font-size: 22px;
  }
.title-wrapper {
  display: flex;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  .title {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
}
</style>