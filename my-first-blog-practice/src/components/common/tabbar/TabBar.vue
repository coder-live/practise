<template>
  <div id= "tab-bar">
    <div id="title" @click= "titleClick">萧逸博客</div>
    <div v-for="(item,index) in tbi" 
      class= "tab-bar-item" 
      :class= "{active:currentIndex===index}"
      :path= "path"
      @click= "itemClick(index)" :key= "item">
      {{item}}
    </div>
    <div class="search">
      <input type="text" 
      placeholder= "please write s.t. you searching">
      <a href=""><i>搜索</i></a>
    </div>
    
  </div>

</template>

<script>

export default {
  name: 'tabbar',
  components: {
    
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  props: {
    tbi: {
      type: Array,
      default() {
        return []
      }
    },
    path: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$route.path === this.path[index] || this.$router.replace(this.path[index]);
      //console.log(this.$route.path)
      console.log(this.currentIndex)
    },
    titleClick() {
      this.$router.replace("/home")
    }
  },
  created() {
    //console.log(this.currentIndex)
  },
  watch: {
    "$route": function( to,from ){
      this.currentIndex = this.path.indexOf(to.path)
    }
  }
}
</script>

<style scoped>
  #title{
    font-size: 22px;
    line-height: 54px;
    padding-left: 30px;
    cursor: pointer;
  }
  #tab-bar{
    display: flex;
    background-color: #fff;
    height: 61px;
    color: #333;
    user-select: none;
    box-shadow: 0 2px 2px rgba(102,102,102,.4);
  }
  .tab-bar-item{
    flex: 1;
    justify-content: center;
    text-align: center;
    padding: 18px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .search{
    width: 30%;
    height: 33px;
    text-align: center;
    padding: 17px;
  }
  .search input{
    width: 18vw;
    height: 25px;
    padding: 0 10px;
    border-radius: 10px;
    margin-right: 5px;
    outline: none;
  }
  .search a{
    text-decoration: none;
    color: #222;
    margin-left: 5px;
  }
  .active{
    color: red;
  }
</style>