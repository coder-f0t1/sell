<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods"></router-link>
        商品</div>
      <div class="tab-item">
       <router-link to="/ratings"></router-link>
        评论</div>
      <div class="tab-item">
        <router-link to="/seller"></router-link>
        商家</div>
    </div>
<!-- 路由链 -->
<!-- <router-view></router-view> -->
  </div>
</template>

<script>
import header from './components/header/header.vue';
export default{
  components: {
    'v-header': header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height:40px
      .tab-item
        flex:1
        text-align:center
</style>
