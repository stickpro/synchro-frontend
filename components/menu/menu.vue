<template>
  <section class="menu">
    <div class="container-fluid no-padding">
      <div class="row">
        <div class="menu__section">
          <button class="menu__section-btn" @click="show = !show">
            <svgicon
              :name="!show ? 'catalog' : 'close'"
              class="menu__section-btn-icon"
              width="16"
              height="16"
            />Каталог товаров
          </button>
        </div>
        <div class="menu__section-search">
          <div class="menu__search">
            <input type="text" class="menu__search-input" name="search" placeholder="Поиск..." />
          </div>
        </div>
      </div>
      <transition name="fade">
      <div class="row" v-show="show">
        <div class="menu__dropdown">
          <ul class="menu__dropdown-menu">
            <li class="menu__dropdown-main" v-for="item in menu">
              <a :href="item.href">{{ item.title }}</a>
              <ul class="menu__dropdown-sub" v-if="item.child">
                <li v-for="child in item.child">
                  <a :href="child.href">{{ child.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </transition>
    </div>
  </section>
</template>

<script>
import '@/static/assets/img/icon/bundle'
export default {
  data() {
    return {
      menu: [
        {
          href: '#',
          title: 'Камеры',
          child: [
            { href: '#', title: 'Кинокамеры' },
            { href: '#', title: 'Видеокамеры и камкордеры' },
            { href: '#', title: 'PTZ камеры' },
            { href: '#', title: 'VR камеры' },
            { href: '#', title: 'Видоискатели' },
            { href: '#', title: 'Обвес' },
            { href: '#', title: 'Резервное хранение данных' },
            { href: '#', title: 'Конвертеры' }
          ]
        },
        {
          href: '#',
          title: 'Оптика',
          child: [
            { href: '#', title: 'Кинообъективы' },
            { href: '#', title: 'Фотообъективы' },
            { href: '#', title: 'Байонеты/ Адаптеры/ Экстендеры' },
            { href: '#', title: 'Фильтры' },
            { href: '#', title: 'Компендиумы' },
            { href: '#', title: 'Радиофокусы' },
            { href: '#', title: 'Фоллоу фокусы' }
          ]
        },
        {
          href: '#',
          title: 'Свет',
          child: [
            { href: '#', title: 'Направленные LED светильники' },
            { href: '#', title: 'LED светильники' },
            { href: '#', title: 'LED комплекты' },
            { href: '#', title: 'RGB LED Светильники' },
            { href: '#', title: 'Гибкие LED светильники' },
            { href: '#', title: 'LED светильники с линзой френеля' },
            { href: '#', title: 'Накамерный свет' },
            { href: '#', title: 'Штативы для освещения' },
            { href: '#', title: 'Управление светом' }
          ]
        },
        {
          href: '#',
          title: 'Звук',
          child: [
            { href: '#', title: 'Радиомикрофонные системы' },
            { href: '#', title: 'Микрофоны' },
            { href: '#', title: 'Рекордеры' },
            { href: '#', title: 'Тайм-код системы' },
            { href: '#', title: 'Микрофонные удочки' },
            { href: '#', title: 'Ветрозащита' },
            { href: '#', title: 'Крепежи для передатчиков' },
            { href: '#', title: 'Наушники' },
            { href: '#', title: 'Держатели микрофонов' }
          ]
        },
        {
          href: '#',
          title: 'Мониторы',
          child: [
            { href: '#', title: 'Производственные видеомониторы' },
            { href: '#', title: 'Накамерные мониторы' },
            { href: '#', title: 'Видеомониторы в стойку' },
            { href: '#', title: 'Видеорекордеры' },
            { href: '#', title: 'Аккумуляторные площадки' },
            { href: '#', title: 'Аксессуары' }
          ]
        },
        {
          href: '#',
          title: 'Видеосендеры',
          child: [
            { href: '#', title: 'Системы в сборе' },
            { href: '#', title: 'Приёмники' },
            { href: '#', title: 'Передатчики' },
            { href: '#', title: 'Антенны' }
          ]
        },
        {
          href: '#',
          title: 'Аккумуляторы',
          child: [
            { href: '#', title: 'Аккумуляторы' },
            { href: '#', title: 'Зарядные устройства' },
            { href: '#', title: 'Распределители питания' },
            { href: '#', title: 'Power box' },
            { href: '#', title: 'Аккумуляторные площадки' }
          ]
        },
        {
          href: '#',
          title: 'Системы стабилизации',
          child: [
            { href: '#', title: 'Разгрузка' },
            { href: '#', title: 'Штативы в сборе' },
            { href: '#', title: 'Головы' },
            { href: '#', title: 'Триподы' },
            { href: '#', title: 'Слайдеры' },
            { href: '#', title: 'Моноподы' },
            { href: '#', title: 'Площадки' },
            { href: '#', title: 'Электронные стабилизаторы' }
          ]
        },
        {
          href: '#',
          title: 'Экипировка',
          child: [
            { href: '#', title: 'Кофр для мониторов' },
            { href: '#', title: 'Кофр для удочек' },
            { href: '#', title: 'Кофр для штатива' },
            { href: '#', title: 'Сумки для аксессуаров' },
            { href: '#', title: 'Транспортные кофры' },
            { href: '#', title: 'Дождевые чехлы' },
            { href: '#', title: 'Сумки для звука' },
            { href: '#', title: 'Сумки для камер' }
          ]
        },
        {
          href: '#',
          title: 'Коммутация',
          child: [
            { href: '#', title: 'Кабели' },
            { href: '#', title: 'Разъемы' }
          ]
        },
        {
          href: '#',
          title: 'Расходные материалы',
          child: [{ href: '#', title: 'Тейпы' }]
        }
      ],
      show: false
    }
  }
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  z-index: 100;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  z-index: 100;
}
</style>