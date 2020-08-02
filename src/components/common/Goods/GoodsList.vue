<template>
  <div class="goods-list">
    <GoodsListItem class="item" :list="item" v-for="(item, index) in list" :key="index"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  components: {
    GoodsListItem,
  },
  props:{
    list:Array
  }
};
</script>

<style lang="less">
.goods-list{
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}
</style>