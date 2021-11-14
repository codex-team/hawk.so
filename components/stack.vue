<template>
  <div class="stack">
    <component
      :is="item.url ? 'a' : 'div'"
      v-for="(item, index) in items"
      :key="index"
      class="stack__item"
      :href="item.url || ''"
    >
      <img :src="require(`~/assets/${item.icon}`)" :alt="item.title">
    </component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Structure of stack item
 */
export interface StackItem {
  /**
   * Icon path
   */
  icon: string;

  /**
   * Technology title
   */
  title: string;

  /**
   * Catcher URL
   */
  url?: string;
}

export default Vue.extend({
  props: {
    /**
     * List of stack items
     */
    items: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="postcss" scoped>
.stack {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  align-content: center;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;

  @media (--screen-mobile) {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }

  &__item {
    background: #1D212A;
    border-radius: 14px;
    padding: 22px;
    display: flex;
    justify-content: center;
    will-change: transform;
    transition: transform 150ms ease-in;
    cursor: pointer;
    align-items: center;

    &:hover {
      transform: scale(1.15) rotate(-7deg);
    }

    &:nth-child(2n):hover {
      transform: scale(1.15) rotate(7deg)
    }

    @media (--screen-mobile) {
      padding: 10px;
    }

    img {
      @media (--screen-mobile) {
        transform: scale(0.6);
      }
    }

    @media (--screen-mobile-extra-small) {
      /* transform: scale(0.6); */
    }

    &:last-child {
      @media (--screen-mobile) {
        display: none;
      }
    }
  }
}
</style>
