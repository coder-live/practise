<template>
  <div class= "home-swiper">
    <swiper :options="swiperOption">
      <swiper-slide><img src="~assets/img/swiper/01.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="~assets/img/swiper/02.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="~assets/img/swiper/03.jpg" alt=""></swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>

</template>

<script>
import 'swiper/dist/css/swiper.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'homeswiper',
  components: {
    swiper,
    swiperSlide
  },
  data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }

}
</script>

<style scoped>
  .home-swiper{
    width: 69vw;
    height: 300px;
    position: relative;
  }
  .home-swiper img{
    width: 883px;
    height: 300px;
    opacity: .8;
    border-radius: 5px;
  }
  
 
</style>