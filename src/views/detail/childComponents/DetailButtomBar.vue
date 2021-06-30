<template>
  <div class="buttom-bar">
    <div class="bottom_left">
      <div class="service">
        <i class="icon iconfont icon-kefu"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon iconfont icon-dianpu"></i>
        <span>店铺</span>
      </div>
      <div class="collect" @click="goCart">
        <i class="icon iconfont icon-shoucang"></i>
        <span>购物车</span>
      </div>
    </div>
    <div class="bottom_right">
      <div class="cart" @click="addcart">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
methods: {
  addcart(){
    this.$emit('addcart')
  },
  goCart(){
    this.$router.push("/cart")
  }
},
}
</script>

<style>
@import url("//at.alicdn.com/t/font_1883178_2kkqar1056d.css");
.buttom-bar{
  background-color: #ffffff;
  height: 49px;
  position: relative;  
  display: flex;
  text-align: center;
}
.bottom_left {
  display: flex;
  flex: 1;
}

.bottom_left > div {
  flex: 1;
  border-right: 0.04rem solid rgba(128, 128, 128, 0.2);
}
.bottom_left .icon {
display: block;
height: 25px;
font-size: 30px;
margin-top: 2px;
}
.bottom_left .collect .icon{
  font-size: 28px ;
}
.bottom_left span{
font-size: 12px;

}


.bottom_right {
  display: flex;
  flex: 1;
}
.bottom_right > div {
  flex: 1;
  line-height: 49px;
  font-size: 16px;
}
.cart {
  background-color: rgb(255, 174, 0);
}
.buy {
  background-color: var(--color-tint);
  color: white;
}
</style>