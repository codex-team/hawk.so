<template>
  <div class="block">
    <div class="grid">
      <div class="block">
        <div class="block-left">
          <div class="title">Open Source</div>
          <div class="text">Исходный код открыт для исследования и обслуживания</div>
        </div>
        <div class="block-left">
          <div class="title">100 000 000</div>
          <div class="text">Событий обрабатывается<br>каждый день</div>
        </div>
      </div>
      <div class="block-bottom">
        <div class="title">Проверено продуктами</div>
        <div class="text">Hawk используется рядом хорошо известных продуктов.<br>И еще большим количеством менее известных.</div>
        <div class="products">
          <VcIcon class="svg" style="fill: red;"/>
          <DtfIcon class="svg"/>
          <EditorIcon class="svg"/>
          <HeykaIcon class="svg"/>
          <TjIcon class="svg"/>
        </div>
      </div>
    </div>
    <div class="block-bottom">
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
      <div class="text">Хоук имеет интеграции с популярными<br/>технологиями и фреймворками. </div>
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

<style>
.grid {
  display: grid;
  gap: 16px;
}
.block {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.block-left {
  background-color: #242936;
  display: grid;
  gap: 12px;
  border-radius: 9px;
  width: 278px;
  height: auto;
  padding: 40px 30px;
}

.block-bottom {
  background-color: #242936;
  display: grid;
  gap: 12px;
  height: auto;
  border-radius: 9px;
  width: auto;
  padding: 40px 30px;
}

.title {
  font-family: "Roboto";
  font-size: 24px;
  line-height: 28.13px;
  font-weight: 700;
  color: #DBE6FF;
  text-align: center;
}

.text {
  font-family: "Roboto";
  font-size: 14px;
  line-height: 18px;
  color: rgba(219, 230, 255, 0.6);
  text-align: center;
}

.products {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 32px;

  .svg {
    width: auto;
    height: auto;
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
