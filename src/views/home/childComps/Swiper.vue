<template>
  <Swiper>
    <div slot="swiper-slide" v-for="(item, index) in dataList" :key="index" class="swiper-slide">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad">
      </a>
    </div>
  </Swiper>
</template>

<script>
import Swiper from "@/components/common/Swiper/Swiper.vue";

export default {
  methods: {
    imgLoad(){
      this.$emit('imgLoad')
    }
  },
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