<template>
  <div class='tab-bar-item' @click= "itemClick">
    <div v-if="!active"><slot name= "item-img"></slot></div>
    <div v-else><slot name= "item-img-act"></slot></div>
    <div :style="ColorActive"><slot name= "item-txt"></slot></div>
    
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      //active: true,
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"      
    }
  },
  computed: {
    active() {
      return this.$route.path === this.path
    },
    ColorActive() {
      //console.log(this.$route.path)
      return this.active ? { color:this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      if( this.$route.path !== this.path ) {
        this.$router.replace( this.path );
        // console.log(this.$route.path)
        // console.log(this.path)
        // console.log(1)
      }
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    list-style: none;
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
    box-shadow: 0 -2px 1px rgba(100,100,100,.1);
  }
  .tab-bar-item img{
    margin-top: 5px;
    width: 25%;
    background-color: #FFF;
  }
 
</style>