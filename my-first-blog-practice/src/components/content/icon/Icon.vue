<template>
  <div class= "icon">
    <slot name= "left"></slot>
    <span v-for= "(item,index) in inconSrc" :key= "item">
      <img :src="item" alt="" :class= "{isClick:isClick,isHuge: isHuge}">
      <span>{{iconNum[index]}}</span>
    </span>
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: 'icon',
  props: {
    chooseIcon: {
      type: String,
      default() {
        return "text"
      }
    },
    iconNum: {
      type: Array,
      default() {
        return [] 
      }
    },
    isClick: {
      type: Boolean,
      default() {
        return false
      }
    },
    isHuge: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    inconSrc() {
      //console.log(this.$store.state);
      switch (this.chooseIcon) {
        case "text":
          return this.$store.state.iconSrcText;
          break;
        case "share":
          return this.$store.state.iconSrcShare;
          break;
        case "sendText":
          return this.$store.state.iconSrcSendText;
          break;
        case "aside":
          return this.$store.state.iconSrcAside;
          break;
      }
        
      
    }
  }
}
</script>

<style scoped>
  .icon img{
    width: 20px;
    height: 20px;
    padding: 0 3px;
    vertical-align: middle;
  }
  .icon .isClick{
    cursor: pointer;
  }
  .icon .isHuge{
    width: 30px;
    height: 30px;
  }
  .icon span{
    font-size: 12px;
    margin: 0 6px;
  }
</style>