<template>
  <div id="app">
    <keep-alive>
    
    <router-view></router-view></keep-alive>
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
