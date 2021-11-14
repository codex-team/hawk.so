<template>
  <div class="composition">
    <div class="composition__icons">
      <div class="composition__icons-slack">
        <img :src="require('~/assets/svg/feature-slack.svg')" alt="Hawk can notify about errors via Slack">
      </div>
      <div class="composition__icons-telegram">
        <img :src="require('~/assets/svg/feature-telegram.svg')" alt="Hawk can notify about errors via Slack">
      </div>
      <div class="composition__icons-email">
        <img :src="require('~/assets/svg/feature-email.svg')" alt="Hawk can notify about errors via Email">
      </div>
    </div>
    <div class="composition__pic">
      <div class="composition__pic-layer-1">
        <div class="composition__pic-layer-2">
          <div class="composition__pic-layer-3">
            <img :src="require('~/assets/images/feature-notify.png')" alt="Hawk can notify about errors">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'features-be-notified',
});
</script>

<style lang="postcss" scoped>
@import url('@/assets/styles/variables.pcss');

.composition {
  display: flex;
  width: var(--layout-features-column-width);
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  --email-picture-width: 269px;
  --layers-margins: 20px;
  --channel-icon-size: 60px;

  @media (--screen-small) {
    width: 400px;
  }

  @media (--screen-mobile) {
    width: 90%;
    margin: 0 auto;

    --email-picture-width: 200px;
    --layers-margins: 10px;
    --channel-icon-size: 40px;
  }

  &__icons {
    position: absolute;
    transform: translateX(calc(  var(--email-picture-width) - calc(var(--email-picture-width) / 2) + calc(var(--layers-margins) * 2) - 10px  ));
    z-index: -1;


    &-slack,
    &-telegram,
    &-email {
      width: var(--channel-icon-size);
      height: var(--channel-icon-size);
      margin: 16px 0;

      img {
        width: 100%;
      }
    }
  }

  &__pic {
    &-layer-1,
    &-layer-2,
    &-layer-3 {
      background: #242732;
      box-shadow: 0 4px 24px 0 rgba(0,0,0,0.32);
      border-radius: 9px;
      display: flex;
      flex-shrink: 1;
    }

    &-layer-2,
    &-layer-3 {
      margin: var(--layers-margins) var(--layers-margins) calc(-1 * var(--layers-margins)) calc(-1 * var(--layers-margins));
    }

    &-layer-3 {
     display: flex;
    }

    img {
      margin: var(--layers-margins) calc(var(--layers-margins) * 0.75);
      width: var(--email-picture-width);
    }
  }
}
</style>
