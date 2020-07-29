<template>
  <Swiper>
    <div slot="swiper-slide" v-for="(item, index) in dataList" :key="index" class="swiper-slide">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </div>
  </Swiper>
</template>

<script>
import Swiper from "@/components/common/Swiper/Swiper.vue";

export default {
  components:{
    Swiper
  },
  props: {
    dataList:Array
  }
};
</script>

<style>
</style>