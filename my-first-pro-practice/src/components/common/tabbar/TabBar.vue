
<template>
  <div id= "tab-bar">
    <slot></slot>
    
  </div>

</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    padding: 0;
    margin: 0;
    background-color: #eee;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

  }
  
</style>