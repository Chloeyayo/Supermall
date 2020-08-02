<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bsrcoll from "better-scroll";
export default {
  data() {
    return {
      scroll:null,
      
    }
  },
  props:{
    probeType:{
      type:Number,
      default:1
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    },
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    }
  },
  mounted() {
    let wrapper = this.$refs.wrapper;
    this.scroll = new Bsrcoll(wrapper, {
      click: true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    });
    this.scroll.on("scroll",pos=>{
      this.$emit('scroll', pos)
    });
    this.scroll.on("pullingUp",()=>{
      this.$emit("pullingUp",this.scroll)      
    })
  },
};
</script>

<style>
</style>