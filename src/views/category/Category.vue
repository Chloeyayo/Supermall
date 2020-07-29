<template>
  <swiper :options="swiperOption">
    <swiper-slide>1</swiper-slide>
    <swiper-slide>2</swiper-slide>
    <swiper-slide>3</swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import 'swiper/css/swiper.css'
export default {
  name: "Category",
  data() {
    return {
      swiperOption:{
        autoplay:{
          delay:100
        },
        loop:true
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style scoped>
</style>
