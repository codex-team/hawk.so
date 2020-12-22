<template>
  <div>
    <page-container>
      <page-header>
        Pricing
      </page-header>
      The pricing list will be displayed soon. There will be a Free plan and some advanced ones.
    </page-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '~/components/page-header.vue';
import PageContainer from '~/components/page-container.vue';

export default Vue.extend({
  components: {
    PageContainer,
    PageHeader,
  },
});
</script>

<style lang="postcss" scoped>

</style>
