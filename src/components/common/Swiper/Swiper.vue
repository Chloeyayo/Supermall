<template>
  <swiper ref="mySwiper" class="swiper" :options="swiperOption">
    <slot name="swiper-slide"></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "@/assets/css/base.scss";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,

        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, false);
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
};
</script>

<style>
.swiper-slide img {
  width: 100%;
  height: auto;
  margin: 0;
}

.swiper-pagination-bullet {
  opacity: 0.3;
}
.swiper-pagination-bullet-active {
  background-color: red;
  opacity: 1;
}
</style>