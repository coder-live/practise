<template>
  <div class= "rec">
    <div v-for= "item in recommend" class= "rec-item">
      <a :href="item.link">
        <img :src="item.image" alt=""/>
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: '',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .rec{
    display: flex;
    padding: 10px 0 15px;
    border-bottom: 6px solid #eee;
  }
  .rec-item{
    flex: 1;
    text-align: center;

  }
  .rec-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>