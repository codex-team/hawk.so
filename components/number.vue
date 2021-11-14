<template>
  <div class="num">
    <div class="num__value">
     {{ value }}
    </div>
    <div class="num__caption">
      {{ caption }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";

export default Vue.extend({
  name: 'number',
  props: {
    value: {
      type: String as PropType<string>,
      required: true
    },
    caption: {
      type: String as PropType<string>,
      required: true
    }
  }
});
</script>

<style scoped>
@import url('@/assets/styles/variables.pcss');

.num {
  --vertical-padding: 149px;
  --number-size: 170px;
  --caption-size: 27px;
  --margin-size: 19px;

  @media (--screen-small) {
    --vertical-padding: 30px;
    --number-size: 45px;
    --caption-size: 15px;
    --margin-size: 10px;
  }

  text-align: center;
  padding: var(--vertical-padding) 0;

  &__value {
    font-weight: 900;
    font-size: var(--number-size);
    color: transparent;;
    background-clip: text;
    background-image: linear-gradient(270deg, #D7EAFF 1%, #499FFF 99%);
  }

  &__caption {
    font-weight: 500;
    font-size: var(--caption-size);
    color: var(--color-text-main);
    text-shadow: 0 11px 17px rgba(4,5,8,0.68);
    margin-top: var(--margin-size);
  }
}
</style>
