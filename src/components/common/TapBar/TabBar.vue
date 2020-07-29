<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}
</style>