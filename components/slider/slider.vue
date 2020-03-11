<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <div class="swiper__slide">
          <div class="swiper__slide-title">Эксклюзивное предложение</div>
          <div class="swiper__slide-sub">Sound Devices MixPre-10T</div>
          <div class="swiper__slide-desc">флагманский портативный рекордер семейства MixPre Series</div>
          <button class="swiper__slide-btn btn-default">Подробнее</button>
          <img class="swiper__slide-img" :src="banner" />
        </div>
      </div>
    </div>
    <div class="swiper__slide-prev" slot="button-prev"></div>
    <div class="swiper__slide-next" slot="button-next"></div>
  </div>
</template>

<script>
import banner1 from '@/assets/temp/banner/1.png'
import banner2 from '@/assets/temp/banner/1.png'
export default {
  data() {
    return {
      banners: [banner1, banner2],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper__slide-next',
          prevEl: '.swiper__slide-prev'
        }
      }
    }
  }
}
</script>
