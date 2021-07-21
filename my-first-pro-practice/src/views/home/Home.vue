<template>
  <div id="home">
    <nav-bar class= "nav-home"><div slot= "center">购物街</div></nav-bar>
    <home-swiper :banner= "banner"/>
    <home-recommend :recommend="recommend"/>
    <feature/>
    <tab-control :title= "['流行','新款','精选']" class= "tab-control"/>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
    </ul>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
    </ul>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "components/common/navbar/NavBar"

import HomeSwiper from "./homechildren/HomeSwiper"
import HomeRecommend from "./homechildren/HomeRcommend"
import Feature from "./homechildren/Feature"
import TabControl from "./homechildren/tabcontrol/TabControl"

import {getHomedata} from "network/home.js"

export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    Feature,
    TabControl
  },
  data() {
    return {
      //res = null,
      banner : [],
      recommend : [],
    }
  },
  // created() {
  //   getHomedata().then(res => {
  //     this.banner = res.data.data.banner.list;
  //     this.recommend = res.data.data.recommend.list;
  //     //console.log(this.banner);
  //   },err => {})
  // }
}
</script>
<style scoped>
  #home{
    padding-top: 44px;
  }
  .nav-home{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: deeppink;
    color: white;
    z-index: 10;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>