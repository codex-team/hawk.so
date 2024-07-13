<template>
  <div class="block">
    <div class="grid">
      <div class="block">
        <div class="grid__block">
          <div class="title">Open Source</div>
          <div class="text">Исходный код открыт<br/>для исследования и обслуживания</div>
        </div>
        <div class="grid__block">
          <div class="title">100 000 000</div>
          <div class="text">Событий обрабатывается<br>каждый день</div>
        </div>
      </div>
      <div class="grid__block">
        <div class="title">Проверено продуктами</div>
        <div class="text">Hawk используется рядом хорошо известных продуктов.<br>И еще большим количеством менее известных.</div>
        <div class="products">
          <VcIcon class="svg, products__box1"/>
          <DtfIcon class="svg, products__box2"/>
          <EditorIcon class="svg, products__box3"/>
          <HeykaIcon class="svg, products__box4"/>
          <TjIcon class="svg, products__box5"/>
        </div>
      </div>
    </div>
    <div class="grid__block">
      <div class="stack">
        <div class="cell">
          <img src='~/assets/svg/ru/vue.svg' class="svg"/>
        </div>
        <div class="cell">
          <img src='~/assets/svg/ru/vite.svg' class="svg"/>
        </div>
        <div class="cell">
          <img src='~/assets/svg/ru/webpack.svg' class="svg"/>
        </div>
        <div class="cell">
          <img src='~/assets/svg/ru/js.svg' class="svg"/>
        </div>
        <div class="cell">
          <img src='~/assets/svg/ru/node.svg' class="svg"/>
        </div>
        <div class="cell">
          <img src='~/assets/svg/ru/kotlin.svg' class="svg"/>
        </div>
        <div class="cell">
          <img src='~/assets/svg/ru/python.svg' class="svg"/>
        </div>
        <div class="cell">
          <img src='~/assets/svg/ru/go.svg' class="svg"/>
        </div>
        <div class="cell">
          <img src='~/assets/svg/ru/php.svg' class="svg"/>
        </div>
      </div>
      <div class="title">Поддерживает<br/>ваши технологии</div>
      <div class="text">Хоук имеет интеграции с популярными<br/>технологиями и фреймворками. </div>
    </div>
  </div>
</template>

<script lang="ts">
import VcIcon from '~/assets/svg/ru/vc.svg?inline';
import DtfIcon from '~/assets/svg/ru/dtf.svg?inline';
import EditorIcon from '~/assets/svg/ru/editorjs.svg?inline';
import HeykaIcon from '~/assets/svg/ru/heyka.svg?inline';
import TjIcon from '~/assets/svg/ru/notex.svg?inline';


import Vue from 'vue';
export default Vue.extend({
  components: {
    VcIcon,
    DtfIcon,
    EditorIcon,
    HeykaIcon,
    TjIcon,
  },
  data() {
    return {
      svgUrls: [
      ]
    };
  }
});
</script>

<style scoped>
@import url('@/assets/styles/variables.pcss');
.grid {
  display: grid;
  gap: 16px;
  @media (--screen-mobile) {
    grid-template-columns: repeat(auto-fill, 100%);
  }

  &__block {
    background-color: #242936;
    display: grid;
    align-items: center;
    gap: 12px;
    border-radius: 9px;
    width: auto;
    height: auto;
    padding: 40px 30px;

    @media(--screen-mobile) {
      padding: 20px 30px;
    }
  }
}

.block {
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (--screen-mobile) {
    justify-content: unset;
    display: grid;
    width: auto;
  }
}

.title {
  font-size: 24px;
  line-height: 28.13px;
  font-weight: 700;
  color: #DBE6FF;
  text-align: center;
}

.text {
  font-size: 14px;
  line-height: 18px;
  color: rgba(219, 230, 255, 0.6);
  text-align: center;
}

.products {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  .svg {
    width: auto;
    height: auto;
  }

  @media (--screen-mobile) {
    display: grid;
    align-items: center;
    justify-items: center;

    &__box1 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    &__box2 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    &__box3 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    &__box4 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }

    &__box5 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stack {
  justify-content: center;
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  gap: 20px; /* Зазор между элементами */
  margin-bottom: 20px;

  .svg {
    width: auto;
    height: auto;
  }
}
</style>
