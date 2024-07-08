<template>
  <div class="footer">
    <div class="footer__inner">
      <div class="footer__inner-text-1">Hawk</div>
      <div class="footer__inner-text-2">© 2018—2024</div>
      <div>О проекте</div>
      <div>Документация</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="postcss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;

  &__inner {
    display: flex;
    margin: 120px 0;
    border-radius: 14px;
    padding: 10px 20px;
    gap: 20px;
    background: #242936;

    color: #DBE6FF;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;

    &-text-1 {
      font-weight: 700;
    }

    &-text-2 {
      color: rgba(219, 230, 255, 0.60);
    }
  }
}
</style>
