<template>
  <div class="yard-footer">
    <div class="yard-footer__inner">
      <div class="yard-footer__left">
        <a
          href="/"
          class="yard-footer__title"
        >
          Hawk
        </a>
        <div class="yard-footer__desc">
          Errors catcher. Reimagined.
        </div>
        <div class="yard-footer__made-by">
          Made by <a href="https://codex.so">CodeX</a>

          <a class="yard-footer__made-by-icon" href="https://github.com/codex-team">
            <img src="~/assets/svg/github.svg" alt="CodeX GitHub">
          </a>

          <a class="yard-footer__made-by-icon" href="https://twitter.com/codex_team">
            <img src="~/assets/svg/twitter.svg" alt="CodeX Twitter">
          </a>

          <a class="yard-footer__made-by-icon" href="https://instagram.com/codex_team">
            <img src="~/assets/svg/instagram.svg" alt="CodeX Instagram">
          </a>
        </div>
      </div>
      <div class="yard-footer__right">
        <div class="menu">
          <section
            v-for="(item, index) in menu"
            :key="'section:' + index"
            class="menu__section"
          >
            <div class="menu__title">
              {{ item.section }}
            </div>
            <div
              class="menu__section-links"
              :class="{
                'menu__section-links--multicolumn': item.items.length > 3
              }"
            >
              <a
                v-for="(link, i) in item.items"
                :key="'link:' + i"
                class="menu__item"
                :href="link.url"
              >
                {{ link.label }}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      menu: [
        {
          section: 'About Hawk',
          items: [
            {
              label: 'Features',
              url: '/features',
            },
            {
              label: 'Pricing',
              url: '/pricing',
            },
            {
              label: 'Documentation',
              url: '/docs',
            },
          ],
        },
        {
          section: 'Product',
          items: [
            {
              label: 'Hawk web',
              url: '//beta.hawk.so',
            },
            {
              label: 'PC/Mac/Linux',
              url: '//desktop.hawk.so',
            },
            {
              label: 'Hawk Android',
              url: '//android.hawk.so',
            },
          ],
        },
        {
          section: 'Integrations',
          items: [
            {
              label: 'JavaScript',
              url: 'https://github.com/codex-team/hawk.javascript',
            },
            {
              label: 'PHP',
              url: 'https://github.com/codex-team/hawk.php',
            },
            {
              label: 'Python',
              url: 'https://github.com/codex-team/hawk.python',
            },
            {
              label: 'Node.js',
              url: 'https://github.com/codex-team/hawk.nodejs',
            },
            {
              label: 'Go',
              url: 'https://github.com/codex-team/hawk.go',
            },
            {
              label: 'Ruby',
              url: 'https://github.com/codex-team/hawk.ruby',
            },
            {
              label: 'Java',
              url: 'https://github.com/codex-team/hawk.java',
            },
            {
              label: 'Kotlin',
              url: 'https://github.com/codex-team/hawk.kotlin',
            },
            {
              label: 'View all »',
              url: '',
            },
          ],
        },
      ],
    };
  },
});
</script>

<style lang="postcss" scoped>
a {
  text-decoration: none;
  color: inherit;
}

.yard-footer {
  display: flex;
  font-size: 15px;
  line-height: 26px;
  color: var(--color-text-second);
  padding: 150px 0 100px;

  @media (--screen-medium){
    padding-bottom: 30px;
  }


  a:hover {
    color: var(--color-text-main)
  }

  &__inner {
    display: flex;
    max-width: var(--layout-main-col-width);
    margin: 0 auto;
    padding: 0 var(--layout-paddings-horisontal);
    flex-basis: 100%;

    @media (--screen-mobile) {
      flex-direction: column;
    }
  }

  &__left {
    margin-right: auto;

    @media (--screen-mobile) {
      margin-right: 0;
      margin-top: 30px;
      order: 2;
    }
  }

  &__right {
    flex-grow: 2;
    margin-left: 120px;

    @media (--screen-mobile) {
      margin-left: 0;
    }
  }

  &__title {
    display: block;
    font-size: 27px;
    font-weight: 800;
    color: var(--color-text-main);
    margin-bottom: 5px;
  }

  &__made-by {
    border-top: 1px solid var(--color-border-light);
    padding-top: 10px;
    margin-top: 10px;
    font-size: 14px;

    &-icon {
      display: inline-block;
      margin-left: 8px;
      vertical-align: middle;
      transition: transform 150ms ease-in;
      will-change: transform;

      &:hover {
        transform: scale(1.35) rotate(-10deg)
      }

      &:nth-of-type(2n+1):hover {
        transform: scale(1.35) rotate(10deg)
      }
    }
  }
}

.menu {
  display: flex;
  flex-grow: 2;
  justify-content: space-between;

  @media (--screen-mobile) {
    flex-direction: column;
  }

  &__section {
    flex-grow: 1;

    &:not(:last-of-type){
      @media (--screen-mobile) {
        margin-bottom: 30px;
      }
    }

    &-links {
      display: grid;
      grid-template-columns: 1fr;

      &--multicolumn {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

  }

  &__title {
    font-size: 16px;
    margin-bottom: 13px;
    font-weight: 800;
    color: var(--color-text-main);
  }

  &__item {
    padding: 2px 0;
  }
}
</style>
