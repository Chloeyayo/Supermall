<template>
  <Swiper :autoplay="false" :loop="true" class="swiper">
  <div slot="swiper-slide" class="swiper-slide"
   v-for="(item, index) in data" :key="index">
   <img :src="item" alt="">
   </div>
</Swiper>
</template>

<script>
import Swiper from "@/components/common/Swiper/Swiper.vue"

export default {
  props: {
    data:Array
  },
  components:{
    Swiper,
  },
}
</script>

<style>
.swiper-slide{
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.swiper img{
  height: 300px;
  width: auto;
  margin: 0;
}

</style>