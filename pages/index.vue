<template>
  <div class="home">
    <section class="slider">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-8 slider__slider">
            <Slider />
          </div>
          <div class="col-12 col-sm-12 col-lg-4 slider__slider">
            <div class="slider__delivery">
              <div class="slider__delivery-title">Доставка</div>
              <div class="slider__delivery-sub">
                Мы осуществляем доставку как по
                <br />Москве, так и по России
              </div>
              <a href="#" class="btn-link">Подробнее</a>
            </div>
            <div class="slider__repair">
              <div class="slider__repair-title">Ремнот оборудования</div>
              <div class="slider__repair-sub">
                Ремонтируем звуковое оборудование,
                <br />мониторы, объективы, штативы
              </div>
              <a href="#" class="btn-link">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="futured-product">
      <FuturedProduct />
    </section>
    <section class="brand">
      <Brand />
    </section>
  </div>
</template>

<script>
import '@/static/assets/img/icon/bundle/'

import Slider from '@/components/slider/slider'
import FuturedProduct from '@/components/futured-product/futured-product'
import Brand from '@/components/brand/brand.vue'
export default {
  components: { Slider, FuturedProduct, Brand },
  data() {
    return {
      drawer: false,
      title: 'Console',
      snackbar: true
    }
  },
  methods: {}
}
</script>
