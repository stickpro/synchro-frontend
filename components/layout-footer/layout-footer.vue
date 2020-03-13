<template>
  <section class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <div class="footer__logo">
            <img src="@/assets/img/logo.svg" alt />
          </div>
        </div>
        <div class="col-8 no-padding">
          <div class="footer__row">
            <div class="footer__section">
              <ul class="footer__menu" v-if="menuFooter">
                <li class="footer__menu-item" v-for="item in menuFooter">
                  <a :href="item.href">{{ item.title }}</a>
                </li>
              </ul>
            </div>
            <div class="footer__section">
              <a class="footer__cart" href="#">
                Корзина
                <span class="footer__cart-count">0 ₽</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-2 no-padding">
          <div class="footer__phone">
            <a href="#">+7 (495) 921-40-53</a>
            <div class="footer__phone-span">ПН -ПТ: C 10:00 до 17</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 offset-md-2 no-padding hidden-xs">
          <div class="footer__bot">
            <ul class="footer__category" v-if="mainCategory">
              <li class="footer__category-item" v-for="item in mainCategory">
                <a :href="item.href">{{ item.title }}</a>
              </li>
            </ul>
            <ul class="footer__social" v-if="social">
              <li class="footer__social-item" v-for="item in social">
                <a :href="item.link">
                  <svgicon :name="item.icon" class="footer__social-icon" width="16" height="16" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__politics">
      <p
        class="footer__politics-text"
      >Предложение не является публичной офертой. Наличие оборудования уточняйте по телефону у наших менеджеров.</p>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      menuFooter: [
        { href: '#', title: 'Сотрудничество' },
        { href: '#', title: 'О компании' },
        { href: '#', title: 'Доставка' },
        { href: '#', title: 'Ремонт' },
        { href: '#', title: 'Новости' },
        { href: '#', title: 'Контакты' }
      ],
      mainCategory: [
        { href: '#', title: 'Звук' },
        { href: '#', title: 'Свет' },
        { href: '#', title: 'Камеры / аксессуары' },
        { href: '#', title: 'Мониторы / сендеры' },
        { href: '#', title: 'Экипировка' },
        { href: '#', title: 'Оптика / аксессуары' },
        { href: '#', title: 'Штативы / гимбалы' },
        { href: '#', title: 'Коммутация' },
        { href: '#', title: 'Расходные материалы' }
      ],
      social: [
        { link: '#', icon: 'vk' },
        { link: '#', icon: 'fb' },
        { link: '#', icon: 'ig' }
      ]
    }
  }
}
</script>