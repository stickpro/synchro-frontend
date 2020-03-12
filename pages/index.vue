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
  <section class="html">
    <HtmlBlock :html="htmlData" />
  </section>
</div>
</template>

<script>
import '@/static/assets/img/icon/bundle/'

import Slider from '@/components/slider/slider'
import FuturedProduct from '@/components/futured-product/futured-product'
import Brand from '@/components/brand/brand.vue'
import HtmlBlock from '@/components/htmlBlock/htmlBlock.vue'

export default {
  components: { Slider, FuturedProduct, Brand, HtmlBlock },
  data() {
    return {
      drawer: false,
      title: 'Console',
      snackbar: true,
      htmlData: 
        {
          title: 'О компании',
          text:
            "СИНХРО - поставщик профессионального оборудования для кино </br> Московская компания СИНХРО - крупнейший поставщик техники для киноиндустрии на рынке России и стран ЕАЭС </br> «СИНХРО» - официальный  дистрибьютор производителя кинооборудования таких компаний как Oconnor, Sachtler, Chrosziel, GEN ENERGY, TVLOGIC, SWIT, FreeFly, Litepanels, Hawk-Woods, Ambient, Sound Devices, AATON, SmallHD, Vaxis, Audio Ltd., Lectrosonics и  многих др.  Мы занимаемся комплексными  поставками оборудования, гарантийным и постгарантийный ремонтом,  для профессиональных киностудий и рентал компаний, звукорежиссерам и операторам."
        },
    }
  },
  methods: {}
}
</script>
