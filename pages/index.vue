<template>
  <div>
    <div class="landing">
      <illustration class="landing__illustration"/>

      <div class="landing__content">
        <div class="landing__content-head">
          <div class="landing__content-head-left">
            <h1>
              Errors catcher. Reimagined.
            </h1>

            <div class="description">
              We'll help to improve your product's quality. You’ll see all the errors and problems in your code and we'll help to resolve them.
            </div>
          </div>
          <div class="landing__content-head-right">
            <div class="button button--primary">
              <icon-sign-in />
              Download for macOS
            </div>
            <div class="button button--secondary">
              <icon-sign-in />
              Open in browser
            </div>
          </div>
        </div>
        <div class="landing__content-preview">
          <img src="~/assets/images/hawk-desktop.png" alt="Hawk desktop preview">
        </div>
      </div>
    </div>
    <div class="features">
      Features
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Illustration from '~/assets/svg/flying-hawk.svg?inline'
import IconSignIn from "~/assets/svg/sign-in.svg?inline";


export default Vue.extend({
  components: {
    Illustration,
    IconSignIn
  }
})
</script>

<style scoped>
.landing {
  position: relative;
  background: #080E20;

  &__illustration {
    width: 100%;
  }

  &__content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    &-head {
      max-width: var(--layout-main-col-width);
      margin: 185px auto;
      padding: 0 var(--layout-paddings-horisontal);
      display: flex;

      &-left {
        h1 {
          color: #FFFFFF;
          font-size: 49px;
          line-height: 24px;
          font-weight: 700;
          margin: 0 0 38px 0;
        }

        .description {
          font-weight: 500;
          color: var(--color-text-main);
          letter-spacing: 0.33px;
          font-size: 20px;
          line-height: 30px;
          max-width: 638px;
        }
      }

      &-right {
        margin-left: auto;

        .button--primary {
          margin-bottom: 20px;
        }
      }
    }

    &-preview {
      position: relative;
      box-shadow: 0 12px 44px 0 rgba(0,0,0,0.50), inset 0 0 0 1px rgba(255,255,255,0.06);
      border-radius: 7px;
      overflow: hidden;
      width: calc(var(--layout-main-col-width) * 1.1);
      margin: 0 auto;
      z-index: 1;

      img {
        width: 100%;
        vertical-align: bottom;
      }
    }
  }
}

.button {
  display: flex;
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
  transition: all 150ms ease;
  will-change: background-color, background-image, box-shadow;

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

  svg {
    margin-right: 20px;
    flex-shrink: 0;
  }
}

.features {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transform: scaleY(-1);
    background-image: linear-gradient(180deg, rgba(24,27,35,0.00) 0%, #080E20 100%);
    height: 500px;
  }
}
</style>
