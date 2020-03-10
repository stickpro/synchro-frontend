<template>
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="header__top">
          <div class="header__top-section">
            <div class="header__top-item header__logo">
              <img src="@/assets/img/logo.svg" alt />
            </div>
            <ul v-if="menuTop" class="header__top-item header__top-item-menu">
              <li v-for="item in menuTop">
                <a href="index.href">{{ item.title }}</a>
              </li>
            </ul>
          </div>
          <div class="header__top-section">
            <div class="header__top-item no-padding">
              <div class="header__top-item-phone">
                <a href="#">+7 (495) 921-40-53</a>
                <div class="span">ПН -ПТ: C 10:00 до 17</div>
              </div>
            </div>
            <div class="header__top-item">
              <img src="@/assets/img/icon/time.svg" alt />
            </div>
            <div class="header__top-item">
              <img src="@/assets/img/icon/cart.svg" alt />
            </div>
            <div class="header__top-item">
              <img src="@/assets/img/icon/user.svg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import '@/assets/img/logo.svg'
export default {
  data() {
    return {
      menuTop: [
        { href: '#', title: 'Сотрудничество' },
        { href: '#', title: 'О компании' },
        { href: '#', title: 'Доставка' },
        { href: '#', title: 'Ремонт' },
        { href: '#', title: 'Новости' },
        { href: '#', title: 'Контакты' }
      ]
    }
  }
}
</script>
