<template>
  <div
    class="site-header"
    :class="{
      'site-header--menu-showed': mobileMenuShowed
    }"
  >
    <div class="site-header__inner">
      <span class="site-header__menu-toggler" @click="toggleMobileMenu">
        Menu
      </span>

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
        <a href="https://docs.hawk.so/">Документация</a>
        <div
          class="site-header__menu__local-version"
        >
          <img src="~/assets/svg/locale-version.svg" class="site-header__menu__local-version-svg"/>
          <div class="text-container">Локализованная версия</div>
        </div>
      </div>
      <a
        href="https://github.com/codex-team/hawk.mono"
        class="site-header__menu-logo"
      >
        <img
          src="~/assets/svg/ru/github.svg"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IconSignIn from '~/assets/svg/sign-in.svg?inline';

export default Vue.extend({
  components: {
    IconSignIn,
  },
  data() {
    return {
      /**
       * Visibility state of menu that is hidden on mobile devices by default
       */
      mobileMenuShowed: false,
    };
  },
  methods: {
    /**
     * Shows/Hides the mobile menu
     */
    toggleMobileMenu(): void {
      this.mobileMenuShowed = !this.mobileMenuShowed;
    },
  },
});
</script>

<style lang="postcss">
  .site-header {
    height: 50px;
    background: var(--color-bg-header);
    color: var(--color-text-main);
    font-size: 15px;
    font-weight: 500;

    @media (--screen-mobile) {
      height: auto;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    &__inner {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      height: 100%;
      max-width: var(--layout-main-col-width);
      margin: 0 auto;
      padding: 0 var(--layout-paddings-horisontal);

      @media (--screen-mobile) {
        flex-direction: column;
        align-items: flex-start;
      }
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

      @media (--screen-mobile) {
        margin-right: 0;
        padding: 15px 0;
      }

      img {
        width: 24px;
        margin-right: 7px;
      }
    }

    &__menu {
      display: flex;
      flex-direction: row;
      flex-shrink: 0;
      align-items: center;

      @media (--screen-mobile) {
        display: none;
      }

      ^&--menu-showed & {
        @media (--screen-mobile) {
          display: block;
          padding-bottom: 12px;
        }
      }

      a {
        display: flex;
        margin-right: 30px;

        @media (--screen-mobile) {
          display: block;
          padding: 10px 0;
          margin-right: 0;
        }
      }

      &-toggler {
        display: none;

        position: absolute;
        right: 10px;
        height: calc(24px + 15px * 2);
        align-items: center;
        padding: 10px;

        @media (--screen-mobile) {
          display: flex;
        }
      }

      &__local-version {
        width: auto;
        height: 32px;
        display: flex;
        place-items: center;
        border-radius: 35px;
        padding: 1px 13px;
        gap: 10px;
        background: linear-gradient(248.21deg, #0075FF 25.68%, #B56BFF 107.97%);

        @media (--screen-mobile) {
          display: none;
        }

        .text-container {
          font-weight: 500;
          font-size: 15px;
          line-height: 30px;
          color: white;
        }
      }
    }

    &__menu-logo {
      margin-left: auto;

      @media (--screen-mobile) {
        display: none;
      }
    }

    &__signin {
      display: flex;
      align-items: center;
      margin-left: auto;

      @media (--screen-mobile) {
        display: none;
        margin-left: 0;
        padding: 10px 0;
        margin-bottom: 10px;
        margin-top: 10px;
      }

      ^&--menu-showed & {
        @media (--screen-mobile) {
          display: flex;
        }
      }

      svg {
        margin-right: 6px;
      }
    }
  }
</style>
