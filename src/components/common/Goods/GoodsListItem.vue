<template>
  <div class="goods-list-item">
    <img :src="list.thumbnail" alt />
    <div class="title">{{list.goodsName}}</div>
    <div class="info">
      <span class="actual-price">{{list.actualPrice}} </span> 
      <span class="sales">★{{list.sales}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Object,
  },
};
</script>

<style>
.goods-list-item {
  font-size: 12px;
  width: 48%;
}
.goods-list-item .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
.goods-list-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.goods-list-item .info{
  text-align: center;
}
.goods-list-item .actual-price{
  color: rgb(219, 89, 89);
}
</style>