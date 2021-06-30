<template>
  <div>
     <!-- <cart-check-button
      @click.native="checkClick"
      :isChecked="item.checked"
      ref="checkButtonRef"
    /> -->
    <div class="item-img" >
      <img :src="item.img" alt="" />
    </div>
    <div class="item-info" >
      <p class="item-title">{{ item.title }}</p>
      <p class="item-desc">{{ item.desc }}</p>
      <span class="item-price">￥{{ item.price }}</span>
      <span class="item-count">x{{ item.count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>