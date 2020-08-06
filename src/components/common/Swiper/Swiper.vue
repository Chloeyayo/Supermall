<template>
  <swiper 
  ref="mySwiper" class="swiper" :options="swiperOption">
    <slot name="swiper-slide" ></slot>
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
        autoplay: this.autoplay,
        loop:true,
        initialSlide :1,
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
  props: {
    autoplay: {
      default:function(){
        return {
        delay: 2500,
        disableOnInteraction: true,
      }
      } ,
      loop:{
        default:true
      }
    },
  },
  mounted() {

    // console.log("Current Swiper instance object", this.swiper);
  },
  methods: {

  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
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