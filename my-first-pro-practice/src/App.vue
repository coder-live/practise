<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "./components/content/MainTabBar"
import {request} from './network/request'
export default {
  name: 'App',
  data() {
    return {
      banner : '',
      dKeyword : ''
    }
  },
  components: {
    MainTabBar
  }
  //created() {
    // request({
    //   url: '/home/multidata'
    // }).then(res => {
    //   this.banner = res.data.data.banner.list;
    //   this.dKeyword = res.data.data.dKeyword.list;
    //   console.log(this.banner);
    // },err => {
    //   console.log(err);
    // })
  //}
}
</script>
<style>
  @import "assets/css/base.css";
</style>