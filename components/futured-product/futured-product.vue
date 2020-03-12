<template>
  <div class="container-fluid">
    <div class="futured-product-title normal-title">Популярные товары</div>

    <div class="row">
      <div class="futured-product__grid" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <section class="card" v-for="product in products" v-if="products">
            <div class="card__info">
              <a :href="product.href">
                <div class="card__image">
                  <img :src="product.img" alt />
                </div>
                <div class="card__name">{{ product.name }}</div>
              </a>
              <div class="card__category">
                <a :href="product.category_href"></a>
                {{ product.category }}
              </div>
            </div>
            <div class="card__button" v-if="product.price">
              <div class="card__price">{{ product.price }}</div>
              <button class="card__button-card">
                <svgicon name="button-cart" width="16" height="16" />
              </button>
            </div>
            <div class="card__button" v-else>
              <button class="card__no-price">По запросу</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 8,
        spaceBetween: 16,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
          1440: {
            slidesPerView: 6
          },
          767: {
            slidesPerView: 'auto'
          },
          479: {
            slidesPerView: 2
          }
        }
      },
      products: [
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
        },
        
      ]
    }
  }
}
</script>