<template>
  <div class="site-header">
    <div class="site-header__inner">
      <a href="">Features</a>
      <a href="">Pricing</a>
      <a href="">Download</a>
      <a href="">Docs</a>
    </div>
  </div>
</template>

<style lang="postcss">
  .site-header {
    display: flex;
    align-items: center;
    height: 50px;
    background: var(--color-bg-header);
    color: var(--color-text-main);
    font-size: 15px;
    font-weight: 500;

    a {
      color: inherit;
    }

    &__inner {
      max-width: var(--layout-main-col-width);
      margin: 0 auto;
    }
  }
</style>
