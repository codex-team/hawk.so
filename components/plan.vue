<template>
  <div class="plan">
    <div class="plan__name">
      {{ plan.name }}
    </div>
    <div class="plan__description">
      {{ plan.description }}
    </div>
    <a class="plan__button" :href="plan.buttonHref">
      {{ plan.buttonText }}
    </a>
    <div class="plan__price">
      {{ plan.price }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Plan from "~/components/types/plan"

export default Vue.extend({
  name: "plan",
  props: {
   plan: Object as PropType<Plan>,
  }
})
</script>

<style scoped>
  .plan {
    background: var(--color-bg-header);
    border-radius: 7px;
    padding: 20px 25px;
    color: var(--color-text-second);
    font-size: 14px;
    white-space: nowrap;

    &__name {
      color: var(--color-text-main);
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    &__description {
      font-weight: 500;
      margin-bottom: 28px;
    }

    &__price {
      font-weight: 600;
    }

    &__button {
      border-radius: 15px;
      padding: 7px 10px;
      margin-top: -2px;
      background: var(--color-bg-button-primary);
      color: var(--color-text-main);
      font-size: 11px;
      line-height: 1em;
      letter-spacing: 0.14px;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
      float: right;

      &:hover {
        background: #306EF8;
      }
    }
  }
</style>
