<template>
  <div class="os">
    <div class="os__content">
      <div class="os__title">
        Open source
      </div>
      <div class="os__desc">
        Hawk is an open-source product. Every part of it is available for investigation, improvement, and&nbsp;discussion.
      </div>
      <a
        class="os__link"
        :href="reposUrl"
        target="_blank"
      >
        Discover the Code »
      </a>
      <div class="os__repo">
        <a
          class="os__repo-container"
          :href="reposUrl"
          target="_blank"
        >
          <img :src="require('~/assets/svg/github.svg')" alt="Hawk repositories list on github.com">
          <h4>
            31 repo
          </h4>
          <div class="os__repo-desc">
            4 years since the&nbsp;Initial commit
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'open-source',
  data(): {
    /**
     * Link to all hawk repost list
     */
    reposUrl: string;
  }{
    return {
      reposUrl: 'https://github.com/codex-team?q=hawk&type=&language=&sort='
    }
  }
});
</script>

<style lang="postcss" scoped>
.os {
  background-image: linear-gradient(172deg, #14161E 0%, #202430 100%, #202430 100%);

  --vertical-paddings: 144px;
  --row-gap: 40px;
  --title-size: 70px;
  --desc-size: 34px;
  --link-size: 24px;
  --repo-image-size: 82px;
  --repo-heading-size: 34px;
  --color-high-contrasted: #F2F6FF;

  padding: var(--vertical-paddings) 0;
  color: var(--color-text-second);

  @media (--screen-small) {
    --vertical-paddings: 30px;
    --row-gap: 20px;
    --title-size: 26px;
    --desc-size: 15px;
    --link-size: 15px;
    --repo-image-size: 44px;
    --repo-heading-size: 20px;
  }

  &__content {
    max-width: var(--layout-main-col-width);
    margin: 0 auto;
    padding: 0 var(--layout-paddings-horisontal);

    @media (--screen-small) {
      text-align: center;
    }

    @supports (display: grid) {
      display: grid;
      grid-template-columns: auto 274px;
      column-gap: 205px;
      row-gap: var(--row-gap);
      grid-template-rows: auto;
      grid-template-areas:
            "title-area right-area"
            "content-area right-area"
            "footer-area right-area";

      @media (--screen-mobile) {
        grid-template-columns: auto;
        grid-template-areas:
                "title-area"
                "content-area"
                "right-area"
                "footer-area";
      }
    }
  }

  &__title {
    font-weight: 600;
    font-size: var(--title-size);
    color: var(--color-high-contrasted);
    letter-spacing: 0;
  }

  &__desc {
    grid-area: content-area;

    font-weight: 500;
    font-size: var(--desc-size);
    line-height: 1.26em;
    color: transparent;;
    background-clip: text;
    background-image: linear-gradient(270deg, #6781B4 1%, #BAD6FE 99%);

    @media (--screen-small) {
      line-height: 1.5em;
    }
  }

  &__link {
    grid-area: footer-area;

    font-weight: 500;
    font-size: var(--link-size);

    &:hover {
      color: var(--color-high-contrasted);
    }
  }

  &__repo {
    grid-area: right-area;
    display: flex;

    &-container {
      margin: auto 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      border: 1px solid rgba(121,138,175,0.39);
      border-radius: 23px;
      padding: 68px 64px 53px;
      text-align: center;
      cursor: pointer;
      transition: all 100ms ease;

      @media (--screen-small) {
        margin: 0;
        flex-basis: 100%;
        padding: 27px 20px 20px;
      }

      &:hover {
        border: 1px solid rgba(153, 196, 255, 0.2);
        box-shadow: 0 1px 11px rgba(88, 165, 255, 0.12);
      }
    }

    img {
      width: var(--repo-image-size);
    }

    h4 {
      font-weight: 600;
      font-size: var(--repo-heading-size);
      color: var(--color-high-contrasted);
      margin: 15px 0 16px;

      @media (--screen-small) {
        margin: 15px 0 5px;
      }
    }

    &:hover h4 {
      text-shadow: 0 0 3px rgba(242, 246, 255, 0.63)
    }

    &-desc {
      font-family: var(--font-mono);
      font-size: 13px;
      line-height: 1.55em;

      @media (--screen-small) {
        font-size: 11px;
      }
    }
  }
}
</style>
