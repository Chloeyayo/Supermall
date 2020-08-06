import { debounce } from "@/common/utils.js";

export const refreshMixin={
  data() {
    return {
      refresh:null,
    }
  },
  mounted() {
    //每次加载图片就刷新 解决下拉之后无法拖动的问题
    //使用Bus进行爷孙传递 <先要在main.js里注册
    const de = debounce(this.$refs.scroll.refresh, 50);
    this.refresh=() => {
      de();
    }
    this.$bus.$on("itemImageLoad", this.refresh);
  }
}