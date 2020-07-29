<template>
  <div id="app">
    <router-view></router-view>
    <TabBarWrapper></TabBarWrapper>
  </div>
</template>
<script>
import TabBarWrapper from './components/content/mainTabBar/TabBarWrapper'
export default {
  components:{
    TabBarWrapper
  }
}
</script>
<style lang='less'>
@import url('assets/css/base.css');

</style>
