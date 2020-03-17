<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-7 no-padding">
        <section class="about">
          <div class="about__title normal-title">О компании</div>
          <div
            class="about__sub-title sub-title"
          >SYNCHRO – кинооборудование от производителя с доставкой</div>
          <div
            class="about__text normal-text"
          >Компания SYNCHRO начала свою деятельность в далеком 1992 году. И вот уже 25 лет мы предлагаем своим покупателям профессиональное кинооборудование, телеоборудование, оборудование для вещания и все, что только может понадобиться для всех, кто создает видеоконтент. Но кто же мы?</div>
          <div class="about__sub-title sub-title">Будем знакомы</div>
          <div
            class="about__text normal-text"
          >Наша компания – это дружный коллектив, который собрал настоящих профессионалов в своем деле. Мы не просто продаем оборудование для видеооператоров и звукорежиссеров. Мы живем тем, что делаем, постоянно совершенствуемся и стремимся предлагать своим клиентам исключительно лучшее. Каждый из нас – опытный специалист в области телевидения и радиовещания. И мы действительно разбираемся в том, что предлагаем покупателям.</div>
          <div
            class="about__sub-title sub-title"
          >В своей работе компания SYNCHRO придерживается трех ключевых принципов:</div>
          <ul class="coloboration__list">
            <li>
              <span class="list-circle"></span>Предоставлять только то оборудование, в котором мы уверены на 100%;
            </li>
            <li>
              <span class="list-circle"></span>Не работать с посредниками и перекупщиками;
            </li>
            <li>
              <span class="list-circle"></span>Сотрудничать с ведущими производителями:Sony, Swit, AATON, Sachtler, Nagra, Libec, Sanken, Lectrosonics, SWIT, TVLogic, Postium, Sound Device, Porta Brace, BONElectronics, Ambient и другими.
            </li>
          </ul>
          <div
            class="about__text normal-text"
          >Гибкая ценовая политика, по-настоящему индивидуальный подход, первоклассное оборудование для съемок кино и телеоборудование – все это сделало SYNCHRO лидером в своем сегменте, чьи достоинства уже успели оценить далеко не только любители, но и настоящие профессионалы в видео- и аудиопроизводстве.</div>
          <div
            class="about__text normal-text"
          >Мы работали с такими компаниями, как НТВ, ОРТ, ТВЦ, Ren-TV, TNT, «Культура» и т.д., предоставляя комплексные решения в каждом конкретном случае, начиная от поставок оборудования от производителя, заканчивая созданием больших съемочных павильонов. И в любом случае клиент получал прекрасный результат за разумные деньги.</div>
        </section>
      </div>
      <div class="col-4 offset-md-1">
        <section class="certificate">
          <div class="certificate__title normal-title">Сертификаты</div>
          <div class="certificate__image">
            <ul>
              <li class="certificate__image-item" v-for="certificate in certificates">
                <img :data-src="certificate.img" src="~assets/img/null.png" alt class="lazyload" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  transition: 'intro',
  data() {
    return {
      certificates: [
        { img: '/assets/temp/cert/MaskGroup.png' },
        { img: '/assets/temp/cert/MaskGroup-1.png' },
        { img: '/assets/temp/cert/MaskGroup-2.png' },
        { img: '/assets/temp/cert/MaskGroup-3.png' },
        { img: '/assets/temp/cert/MaskGroup-4.png' },
        { img: '/assets/temp/cert/MaskGroup-5.png' },
        { img: '/assets/temp/cert/MaskGroup-6.png' },
        { img: '/assets/temp/cert/MaskGroup-7.png' },
        { img: '/assets/temp/cert/MaskGroup-8.png' },
        { img: '/assets/temp/cert/MaskGroup-9.png' },
        { img: '/assets/temp/cert/MaskGroup-10.png' },
        { img: '/assets/temp/cert/MaskGroup-11.png' }
      ]
    }
  }
}
</script>