<template>
<div class="detail">
  <Navbar>
    <div slot="center">详情页</div>
  </Navbar>
</div>
</template>

<script>
import Navbar from '@/components/common/NavBar/NavBar.vue'
export default {
  data() {
    return {
      id: null,
      list: {},
    };
  },
  components:{
    Navbar
  },
  created() {
    let data = JSON.parse(this.$route.query.list);
    this.list = Object.assign({}, data);
    this.id = this.list.goodsId;
  },
};
</script>

<style>
</style>