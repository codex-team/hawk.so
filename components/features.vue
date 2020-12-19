<template>
  <div class="features">
    <div
      v-for="(feature, i) in features"
      :key="'feature:' + i"
      class="features__item"
    >
      <div class="features__item-left">
        <div class="features__item-left-content">
          <div class="features__item-title">
            {{ feature.title }}
          </div>
          <div class="features__item-description">
            {{ feature.description }}
          </div>
        </div>
      </div>
      <div class="features__item-right">
        <div class="features__item-image">
          <img
            :src="require(`~/assets/images/${feature.picture}.png`)"
            :style="feature.style || ''"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

/**
 * Structure of a single feature
 */
export interface Feature {
  /**
   * Feature name
   */
  title: string;

  /**
   * Short caption
   */
  description: string;

  /**
   * Image path
   */
  picture: string;

  /**
   * Additional style overrides
   */
  style?: string | undefined;
}

export default Vue.extend({
  props: {
    /**
     * List of features
     */
    features: {
      type: Array as PropType<Feature[]>,
      required: true,
    },
  },
});
</script>

<style lang="postcss" scoped>

.features {
  &__item {
    display: flex;
    margin-bottom: 80px;

    @media (--screen-mobile) {
      flex-direction: column;
      text-align: center;
    }

    &-left {
      width: 30%;

      @media (--screen-mobile) {
        width: auto;
      }

      &-content {
        position: sticky;
        top: 0;
      }
    }

    &-right {
      margin-left: auto;

      @media (--screen-mobile) {
        margin-left: 0;
        margin-top: 20px;
      }
    }

    &-title {
      display: inline-block;
      font-size: 36px;
      font-weight: 800;
      color: var(--color-text-main);
      line-height: 45px;
      margin-bottom: 14px;
      padding-top: 24px;
      background-clip: text;
      background-image: linear-gradient(90deg,#98c9ff,#d7eaff);
      color: transparent;

      @media (--screen-small) {
        font-size: 24px;
        margin-bottom: 0px;
        padding-top: 10px;
      }
    }

    &-description {
      font-size: 17px;
      line-height: 27px;
      color: var(--color-text-second);

      @media (--screen-small) {
        font-size: 15px;
        line-height: 24px
      }
    }

    &-image {
      width: 620px;
      border-radius: 10px;
      box-shadow: 0 2px 44px 0 rgba(0,0,0,0.50);

      @media (--screen-small) {
        width: 400px;
      }

      @media (--screen-mobile) {
        width: 90%;
        margin: 0 auto;
      }

      img {
        width: 100%;
        vertical-align: bottom;
        border-radius: 12px;
      }
    }
  }
}
</style>
