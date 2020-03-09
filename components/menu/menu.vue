<template>
  <section class="menu">
    <div class="container-fluid">
      <div class="row">
        <div class="menu__section">
          <button class="menu__section-btn" @click="show = !show">
            <svgicon
              :name="!show ? 'catalog' : 'close'"
              class="menu__section-btn-icon"
              width="16"
              height="16"
            />
            Каталог товаров
          </button>
        </div>
        <div class="menu__section-search">
          <div class="menu__search">
            <input
              type="text"
              class="menu__search-input"
              name="search"
              placeholder="Поиск..."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/img/icon/bundle'
export default {
  data() {
    return {
      menu: [
        { href: '#', title: 'Сотрудничество' },
        { href: '#', title: 'О компании' },
        { href: '#', title: 'Доставка' },
        { href: '#', title: 'Ремонт' },
        { href: '#', title: 'Новости' },
        { href: '#', title: 'Контакты' }
      ],
      show: false
    }
  }
}
</script>
<style lang="scss">
.menu {
  &__search {
       &::before {
        content: "";
        width: 1rem;
        height: 1rem;
        position: absolute;
        top: 4.2rem;
        margin-left: 1rem;
        background: url("../../assets/img/icon/search.svg") center no-repeat;
      }
  }
}
</style>