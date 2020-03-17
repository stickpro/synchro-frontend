<template>
  <div class="product">
    <div class="container-fluid">
      <div class="row">
        <BreadCrumbs :breadCrumbs="breadCrumbs" />
      </div>
      <div class="row">
        <div class="col-6 no-padding">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbs from '@/components/breadcrumbs/breadcrumbs.vue'

import { mapGetters } from 'vuex'
export default {
  components: { BreadCrumbs },
  async fetch({ store, params }) {
    // await store.dispatch('todos/getItem', params.id)
  },
  computed: {
    head() {
      return {
        // title: 'TODO ' + this.todo.name
      }
    },
    ...mapGetters({
      //  todo: 'todos/item'
    })
  },
  data() {
    return {
      product: {
        name: 'ARRI Controlled Lens Motor CLM-5 Basic Set',
        model: '00047586',
        stock: 'В наличии',
        price: '5350 Р',
        thumb: '/assets/temp/product/main.png',
        attibuteGroups: [
          {
            name: 'Основные',
            attibute: [
              { name: 'Тип сенсора', val: 'super 35' },
              { name: 'Физический размер сенсора', val: '27.7 х 14.6 мм' },
              { name: 'Диапазон ISO ', val: '320–6400' },
              { name: 'Динамический диапозон ', val: '18 стопов' }
            ]
          },
          {
            name: 'Дополнительные',
            attibute: [
              { name: 'Тип сенсора', val: 'super 35' },
              { name: 'Физический размер сенсора', val: '27.7 х 14.6 мм' },
              { name: 'Диапазон ISO ', val: '320–6400' },
              { name: 'Динамический диапозон ', val: '18 стопов' }
            ]
          },
          {
            name: 'Интерфейсы',
            attibute: [
              { name: 'Тип сенсора', val: 'super 35' },
              { name: 'Физический размер сенсора', val: '27.7 х 14.6 мм' },
              { name: 'Диапазон ISO ', val: '320–6400' },
              { name: 'Динамический диапозон ', val: '18 стопов' }
            ]
          }
        ],
        description:
          'F-7H - накамерный монитор с диагональю экрана 7 дюймов, разрешением панели 1920х1080 пикселей и поддержкой HDR (High Dynamic Range). Эти характеристики позволяют использовать F-7H в качестве видоискателя, предоставляя пользователю по-настоящему кинематографическое качество изображения с широким диапазоном цветопередачи, большим углом обзора и поддержкой различных форматов видео через SDI или HDMI вход. Функция преобразования цветовых установок позволяет просматривать изображения используя популярные LUT от камер ARRI, Canon, RED и Sony (S-Log1/2/3, Log-C/C-Long, RED Gamma3/4). 3G-SDI Level A/B, Audio Level Meter Display, Blue Only, Focus Assist, H/V Delay, H/V Flip, Key Lock, Luma(Y) Zone Check, Marker, Max Brightness On/Off, Mono, Range Error, Time Code Display, User Aspect, Various Scan Modes, Waveform/Vector, Zoom, Arri Camera Metadata.',
        images: [
          '/assets/temp/product/image2.png',
          '/assets/temp/product/image2.png',
          '/assets/temp/product/image2.png'
        ]
      },
      relatedProduct: [
        {
          name: 'URSA Strap Thigh (Крепеж для бедра)',
          href: '#',
          category: 'Звук',
          category_href: '#',
          img: '/assets/temp/product/image.png',
          price: '2911'
        },
        {
          name: 'ARRI Controlled Lens Motor CLM-4 Basic Set',
          href: '#',
          category: 'Оптика / аксессуары',
          category_href: '#',
          img: '/assets/temp/product/image1.png',
          price: null
        },
        {
          name: 'ARRI Controlled Lens Motor CLM-5 Basic Set',
          href: '#',
          category: 'Оптика / аксессуары',
          category_href: '#',
          img: '/assets/temp/product/image2.png',
          price: null
        },
        {
          name: 'ARRI cmotion pan-bar zoom',
          href: '#',
          category: 'Оптика / аксессуары',
          category_href: '#',
          img: '/assets/temp/product/image3.png',
          price: '2911'
        },
        {
          name: 'URSA soft strip rolls',
          href: '#',
          category: 'Звук',
          category_href: '#',
          img: '/assets/temp/product/image4.png',
          price: '3125'
        },
        {
          name: "Joe's Sticky Stuff - 1/2\" x 65'",
          href: '#',
          category: 'Расходные материалы',
          category_href: '#',
          img: '/assets/temp/product/image4.png',
          price: '10 211'
        },
        {
          name: 'URSA Strap Thigh (Крепеж для бедра)',
          href: '#',
          category: 'Звук',
          category_href: '#',
          img: '/assets/temp/product/image.png',
          price: '2911'
        },
        {
          name: 'ARRI Controlled Lens Motor CLM-4 Basic Set',
          href: '#',
          category: 'Оптика / аксессуары',
          category_href: '#',
          img: '/assets/temp/product/image1.png',
          price: null
        },
        {
          name: 'ARRI Controlled Lens Motor CLM-5 Basic Set',
          href: '#',
          category: 'Оптика / аксессуары',
          category_href: '#',
          img: '/assets/temp/product/image2.png',
          price: null
        },
        {
          name: 'ARRI cmotion pan-bar zoom',
          href: '#',
          category: 'Оптика / аксессуары',
          category_href: '#',
          img: '/assets/temp/product/image3.png',
          price: '2911'
        },
        {
          name: 'URSA soft strip rolls',
          href: '#',
          category: 'Звук',
          category_href: '#',
          img: '/assets/temp/product/image4.png',
          price: '3125'
        },
        {
          name: "Joe's Sticky Stuff - 1/2\" x 65'",
          href: '#',
          category: 'Расходные материалы',
          category_href: '#',
          img: '/assets/temp/product/image4.png',
          price: '10 211'
        }
      ],
      breadCrumbs: [
        {
          text: 'Каталог товаров',
          href: '#'
        },
        {
          text: 'Звук',
          href: '#'
        },
        {
          text: 'Ручные передатчики',
          href: '#'
        },
        {
          text: 'Arri Controller Lens Motor CLM-5 Basic set',
          active: true
        }
      ],
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  }
}
</script>