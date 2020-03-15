<template>
  <section class="brand">
  <div class="container-fluid">
    <div class="brand__title normal-title">Товары по брендам</div>
    <div class="row">
      <div class="brand__grid">
        <section class="brand__item" v-for="brand in brands" v-if="brands">
          <div class="brand__item-info">
            <a :href="brand.link" class="brand__item-link">
              <img :data-src="brand.img" src="~assets/img/null.png"  alt class="lazyload" />
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        { link: '#', img: '/assets/temp/brand/Group_3.png' },
        { link: '#', img: '/assets/temp/brand/Group_4.png' },
        { link: '#', img: '/assets/temp/brand/Group_5.png' },
        { link: '#', img: '/assets/temp/brand/Group_6.png' },
        { link: '#', img: '/assets/temp/brand/Group_7.png' },
        { link: '#', img: '/assets/temp/brand/Group_8.png' },
        { link: '#', img: '/assets/temp/brand/Group_9.png' },
        { link: '#', img: '/assets/temp/brand/Group_10.png' },
        { link: '#', img: '/assets/temp/brand/Group_11.png' },
        { link: '#', img: '/assets/temp/brand/Group_12.png' },
        { link: '#', img: '/assets/temp/brand/Group_13.png' },
        { link: '#', img: '/assets/temp/brand/Group_14.png' },
        { link: '#', img: '/assets/temp/brand/Group_15.png' },
        { link: '#', img: '/assets/temp/brand/Group_16.png' },
        { link: '#', img: '/assets/temp/brand/Group_17.png' },
        { link: '#', img: '/assets/temp/brand/Group_18.png' },
        { link: '#', img: '/assets/temp/brand/Group_19.png' },
        { link: '#', img: '/assets/temp/brand/Group_20.png' },
        { link: '#', img: '/assets/temp/brand/Group_21.png' },
        { link: '#', img: '/assets/temp/brand/Group_22.png' },
        { link: '#', img: '/assets/temp/brand/Group_23.png' },
        { link: '#', img: '/assets/temp/brand/Group_24.png' },
        { link: '#', img: '/assets/temp/brand/Group_25.png' },
        { link: '#', img: '/assets/temp/brand/Group_26.png' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// brand
.brand {
  margin-top: 3.5rem;
  &__title {
    margin-bottom: 1.5rem;
  }
  &__item {
    &-info {
      width: 208px;
      height: 90.5px;
      background: #fff;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(144px, 207px));
    grid-gap: 1rem;
    width: 100%;
  }
}
</style>