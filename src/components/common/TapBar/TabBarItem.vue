<template>
  <div class="tab-bar-item" @click="click()" >
    <div v-if="isActive">
      <slot name="icon-active"></slot>
    </div>
    <div v-else>
      <slot name="icon"></slot>
    </div>
    <div :style="isActiveStyle">
      <slot name="name" ></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    click() {
      this.$router.push(this.path).catch((err) => err);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 15px;
}
img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin: 4px 0 3px;
}
.active {
  color: red;
}
</style>