<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.page-container {
  max-width: var(--layout-main-col-width);
  margin: 0 auto;
  padding: 60px var(--layout-paddings-horisontal);
  color: var(--color-text-main);

  @media (--screen-mobile){
    padding-bottom: 30px;
  }
}
</style>
