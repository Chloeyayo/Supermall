<template>
  <div class="recommand-wrapper">
    <div class="recommand-item" v-for="item in dataList" :key="item.id">
      <a :href="item.link">
        <img class="recommand-img" :src="item.image" />
        <div class="recommand-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: Array,
  },
};
</script>

<style lang="less">
.recommand-wrapper {
  display: flex;
  width: 100%;
  border-bottom: 8px solid #eee;
  .recommand-item {
    flex: 1;
    text-align: center;
  }
  .recommand-img {
    width: 70px;
    height: 70px;
    margin: 14px 0 10px;
  }
  .recommand-title {
    font-size: 14px;
    margin-bottom: 25px;
  }
}
</style>