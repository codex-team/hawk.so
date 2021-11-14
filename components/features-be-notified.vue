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
import Vue, {PropType} from "vue";

export default Vue.extend({
  name: "features-be-notified",
});
</script>

<style lang="postcss" scoped>
.composition {
  display: flex;
  width: var(--layout-features-column-width);
  justify-content: center;
  align-items: center;

  &__icons {
    position: absolute;
    transform: translateX(160px);
    z-index: -1;


    &-slack,
    &-telegram,
    &-email {
      width: 60px;
      height: 60px;
      margin: 16px 0;
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
      margin: 20px 20px -20px -20px;
    }

    &-layer-3 {
     display: flex;
    }

    img {
      margin: 20px 15px;
      width: 269px;
      height: 312px;
    }
  }
}
</style>
