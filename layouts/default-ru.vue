<template>
  <div>
    <site-header-ru />
    <Nuxt />
    <site-footer />
  </div>
</template>

<script>
import Vue from 'vue';
import SiteFooter from '~/components/site-footer.vue';

export default Vue.extend({
  components: {
    SiteFooter,
  },
});
</script>

<style>
html {
  font-family: 'Roboto',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  background: var(--color-bg-main);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
