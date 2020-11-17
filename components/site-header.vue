<template>
  <div class="site-header">
    <div class="site-header__inner">
      <a
        class="site-header__logo"
        href="/"
      >
        <img
          src="~/assets/images/hawk-logo.png"
          alt="Hawk.so logo"
        >
        Hawk
      </a>
      <div class="site-header__menu">
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Download</a>
        <a href="">Docs</a>
      </div>

      <a class="site-header__signin">
        <icon-sign-in />
        To Garage
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import IconSignIn from "~/assets/svg/sign-in.svg?inline";
import Vue from 'vue';

export default Vue.extend({
  components: {
    IconSignIn,
  }
});
</script>

<style>
  .site-header {
    height: 50px;
    background: var(--color-bg-header);
    color: var(--color-text-main);
    font-size: 15px;
    font-weight: 500;

    a {
      color: inherit;
      text-decoration: none;
    }

    &__inner {
      display: flex;
      align-items: center;
      height: 100%;
      max-width: var(--layout-main-col-width);
      margin: 0 auto;
      padding: 0 var(--layout-paddings-horisontal);
    }

    &__logo {
      display: flex;
      align-items: center;
      margin-right: 55px;
      font-weight: 900;
      font-size: 15px;
      color: #FFFFFF !important;
      letter-spacing: 0.38px;
      text-align: left;

      img {
        width: 24px;
        margin-right: 7px;
      }
    }

    &__menu {
      a {
        display: inline-block;
        margin-right: 30px;
      }
    }

    &__signin {
      display: flex;
      align-items: center;
      margin-left: auto;

      svg {
        margin-right: 6px;
      }
    }
  }
</style>
