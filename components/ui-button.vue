<template>
  <component
    :is="link ? 'a' : 'div'"
    class="button"
    :class="{
      'button--primary': primary,
      'button--secondary': !primary,
      'button--demo': demo,
    }"
    :href="link"
  >
    <slot name="icon" />
    {{ label }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    /**
     * Label for button
     */
    label: {
      type: String,
      default: '',
    },

    /**
     * Pass true to make button primary
     */
    primary: {
      type: Boolean,
      default: false,
    },

    /**
     * Pass true to make button look for demo version
     */
    demo: {
      type: Boolean,
      default: false,
    },

    /**
     * Link href attribute
     */
    link: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="postcss" scoped>

.button {
  display: inline-flex;
  align-items: center;
  padding: 16px 26px;
  background-color: #0E1621;
  background-image: linear-gradient(180deg, #0E1621 0%, #101520 99%);
  box-shadow: 0 15px 25px -1px rgba(12,16,29,0.37);
  border-radius: 17px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--color-text-main);
  letter-spacing: 0.23px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 100ms ease;
  will-change: background-color, background-image, box-shadow;
  text-decoration: none;

  &:hover {
    background-color: #0E1621;
    background-image: linear-gradient(180deg, #0E1621 100%, #101520 0%);
    box-shadow: 0 15px 30px -1px rgba(12,16,29,0.55);
    color: #fff;
  }

  &--primary {
    background-color: #fff;
    background-image: linear-gradient(180deg, #EBF1F9 0%, #FFFFFF 99%);
    box-shadow: 0 15px 25px -1px rgba(255,255,255,0.10);
    color: var(--color-text-inversed);

    &:hover {
      background-color: #fff;
      background-image: linear-gradient(180deg, #fff 0%, #FFFFFF 99%);
      box-shadow: 0 15px 29px -1px rgba(255,255,255,0.18);
      color: var(--color-text-inversed);
    }
  }

  &--demo {
    background-color: #fff;
    background-image: linear-gradient(#3ca8ff, #0275ed 98.74%);
    color: #fff;

    &:hover {
      background-color: #fff;
      background-image: linear-gradient(#3ca8ff, #0275ed 99.74%);
      color: #fff;
    }
  }

  svg {
    margin-right: 20px;
    flex-shrink: 0;
  }
}

</style>
