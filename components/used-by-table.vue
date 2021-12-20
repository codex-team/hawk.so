<template>
  <div class="used-by">
    <a
      v-for="(item, index) in items"
      :key="index"
      class="used-by__item"
      :data-title="item.title"
      :href="item.url"
      target="_blank"
    >
      <img
        :src="require(`~/assets/${item.logo}`)"
        :alt="`${item.title} is used Hawk`"
      />
    </a>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";

/**
 * Product description for 'used-by' block
 */
export interface UsedByItem {
  /**
   * Product title
   */
  title: string;

  /**
   * Product logo
   */
  logo: string;

  /**
   * Product website URL
   */
  url: string;
}

export default Vue.extend({
  name: 'number',
  props: {
    /**
     * List of logos items
     */
    items: {
      type: Array as PropType<UsedByItem[]>,
      required: true,
    },
  }
});
</script>

<style scoped>
@import url('@/assets/styles/variables.pcss');

.used-by {
  --gap: 40px;
  --row-gap: 40px;

  @media (--screen-small) {
    --gap: 0;
    --row-gap: 30px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: var(--gap);
  row-gap: var(--row-gap);
  max-width: 400px;
  margin: 0 auto;

  &__item {
    display: block;
    cursor: pointer;
    transition: transform 150ms ease;

    &:hover {
      transform: perspective(15px) rotateX(3deg);
    }

    @media (--screen-small) {
      img {
        width: auto !important;
        max-height: 25px;
      }
    }

    &[data-title="DTF"] img {
      @media (--screen-small) {
        max-height: 18px;
      }
    }

    &[data-title="Coub"] img {
      width: 50px;
    }

    &[data-title="TJ"] img {
      margin-right: -10px;
      margin-bottom: -5px;
    }

    &[data-title="Heyka"] img {
      margin-top: -8px;
      margin-left: -15px;

      @media (--screen-small) {
        margin-left: 0;
      }
    }
  }
}
</style>
