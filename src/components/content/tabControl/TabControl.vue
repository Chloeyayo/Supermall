<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{active:index===currentIndex}"
      @click="tabClick(index)"
      v-for="(item, index) in items"
      :key="index"
    >
      <span>{{item.title}}</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    },
  },
};
</script>

<style lang="less">
.tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  .tab-control-item {
    padding: 0 5px;
    flex: 1;
    span {
      text-align: center;
      font-size: 16px;
      height: 40px;
      line-height: 40px;
    }
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
}
</style>