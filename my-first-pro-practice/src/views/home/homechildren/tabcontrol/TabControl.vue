<template>
  <div class= "tab-control">
    <div v-for= "(item,index) in title" class= "tab-control-item"
    :class= "{active: index === currentIndex}"
    @click= "itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>

</template>

<script>
export default {
  name: '',
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    background-color: #fff;
    height: 44px;
    line-height: 44px;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
  }
  .active span{
    color: red;
    border-bottom: 2px solid red;
  }
</style>