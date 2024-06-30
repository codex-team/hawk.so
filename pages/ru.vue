<template>
  <NuxtLayout name="ru">
    <div class="yard">
      <div class="landing">
        <illustration class="landing__illustration" />
        <div class="landing__content">
          <div class="landing__content-head">
            <div class="landing__content-head-left">
              <h1>
                Трекер ошибок
              </h1>

              <div class="description">
                Хоук улучшает качество продукта.<br/>
                Он отлавливает ошибки в ПО и помогает их устранить.<br/>
                Локализованная версия позволяет не зависеть от зарубежных сервисов.<br/>
              </div>
              <span>
                <div>Сервера в России</div>
                <div>Оплата по счету юр. лица</div>
                <div>Помощь с интеграцией</div>
              </span>
            </div>
          </div>
          <div>
          </div>
          <div class="landing__content-preview" :style="`transform: translateY(${Math.max(0, 150 - scroll * 0.35)}px)`">
            <img src="~/assets/images/hawk-desktop.png" alt="Hawk desktop preview">
          </div>
        </div>
        <br/>
        <Contact
        title="Свяжитесь с нами"
        titleSize="small"/>
      </div>
      <div class="section section--with-gradient">
        <div class="section__content">
          <h2 class="section__title">
            Возможности
          </h2>
          <features :features="features" />
        </div>
      </div>
  <!--  <div class="section section&#45;&#45;small">-->
  <!--    <a href="https://www.producthunt.com/posts/hawk-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hawk-2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=333015&theme=light" alt="Hawk - Open-source errors tracker | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>-->
  <!--  </div>-->
    <div class="content-blocks">
      <gridInfo/>
        <div class="contact-container">
          <Contact title="Подключайтесь"
          titleSize="medium"/>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import Illustration from '~/assets/svg/flying-hawk.svg?inline';
import IconSignIn from '~/assets/svg/sign-in.svg?inline';
import IconDownload from '~/assets/svg/download.svg?inline';
import Features, { Feature } from '~/components/features.vue';
import Stack, { StackItem } from '~/components/stack.vue';
import OpenSource from '~/components/open-source.vue';
import Number from '~/components/number.vue';
import UsedByTable, {UsedByItem} from '~/components/used-by-table.vue';
import UiButton from '~/components/ui-button.vue';
import Contact from '~/components/contact.vue';
import gridInfo from '~/components/grid-info.vue';

export default Vue.extend({
  components: {
    Illustration,
    IconSignIn,
    IconDownload,
    Features,
    Stack,
    UiButton,
    OpenSource,
    Number,
    UsedByTable,
    gridInfo,
  },
  layout: 'ru',
  data(): {
    /**
     * Features list description
     */
    features: Feature[],

    /**
     * Stack technologies
     */
    stack: StackItem[],

    /**
     * Scroll Y position
     */
    scroll: number,

    /**
     * Label for download app button,
     * will be changed after page load to fit user platform
     */
    downloadButtonLabel: string,

    /**
     * Href for download app button,
     * will be changed after page load to fit user platform
     */
    downloadButtonHref: string,

    /**
     * List of products to be displayed in 'Used by' section
     */
    usedBy: UsedByItem[];
    } {
    return {
      /**
       * Features list description
       */
      features: [
        {
          title: 'Отслеживайте ошибки',
          description: 'Хоук покажет, что пошло не по плану в вашей программе',
          picture: 'feature-list',
        },
        {
          title: 'Исследуйте детали',
          description: 'Хоук поможет понять и исправить причину проблемы',
          picture: 'feature-event',
        },
        {
          title: 'Следите за здоровьем ПО',
          description: 'Оценивайте и улучшайте качество вашего продукта',
          picture: 'feature-graph',
          style: 'margin-bottom: -21px',
        },
        {
          title: 'Оперативные уведомления',
          description: 'Не пропустите важные события, оставаясь на связи в Slack, Telegram или на почте',
          pictureComponent: 'features-be-notified',
        },
      ],

      /**
       * Stack technologies
       */
      stack: [
        {
          title: 'JavaScript',
          icon: 'svg/javascript.svg',
          url: 'https://github.com/codex-team/hawk.javascript',
        },
        {
          title: 'Ruby',
          icon: 'svg/ruby.svg',
        },
        {
          title: 'PHP',
          icon: 'svg/php.svg',
          url: 'https://github.com/codex-team/hawk.php',
        },
        {
          title: 'Go',
          icon: 'svg/go.svg',
          url: 'https://github.com/codex-team/hawk.go',
        },
        {
          title: 'Node.js',
          icon: 'svg/nodejs.svg',
          url: 'https://github.com/codex-team/hawk.nodejs',
        },
        {
          title: 'Scala',
          icon: 'svg/scala.svg',
          url: 'https://github.com/codex-team/hawk.scala',
        },
        {
          title: 'Python',
          icon: 'svg/python.svg',
          url: 'https://github.com/codex-team/hawk.python',
        },
        {
          title: 'Kotlin',
          icon: 'svg/kotlin.svg',
          url: 'https://github.com/codex-team/hawk.kotlin',
        },
        {
          title: 'Java',
          icon: 'svg/java.svg',
        },
        {
          title: 'Swift',
          icon: 'svg/swift.svg',
        },
      ],

      /**
       * Scroll Y position
       */
      scroll: 0,

      /**
       * Label for download app button,
       * will be changed after page load to fit user platform
       */
      downloadButtonLabel: 'Download for Desktop',

      /**
       * Href for download app button,
       * will be changed after page load to fit user platform
       */
      downloadButtonHref: 'https://github.com/codex-team/hawk.desktop',

      /**
       * List of products to be displayed in 'Used by' section
       */
      usedBy: [
        {
          title: 'TJ',
          logo: 'svg/used-by/tj.svg',
          url: 'https://tjournal.ru',
        },
        {
          title: 'Coub',
          logo: 'svg/used-by/coub.png',
          url: 'https://coub.com',
        },
        {
          title: 'DTF',
          logo: 'svg/used-by/dtf.svg',
          url: 'https://dtf.ru',
        },
        {
          title: 'Heyka',
          logo: 'svg/used-by/heyka.svg',
          url: 'https://heyka.app',
        },
        {
          title: 'vc.ru',
          logo: 'svg/used-by/vc.svg',
          url: 'https://vc.ru',
        },
        {
          title: 'Editor.js',
          logo: 'svg/used-by/editorjs.svg',
          url: 'https://editorjs.io',
        },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scroll = window.scrollY;
    }, { passive: true });

    this.updateDownloadButtomWithPlatform();
  },
  methods: {
    /**
     * Returns the visitor OS
     *
     * @returns platform code name
     */
    getPlatform(): string {
      const ua = window.navigator.userAgent.toLowerCase();

      if (ua.includes('windows')) {
        return 'Windows';
      } else if (ua.includes('mac')) {
        return 'macOS';
      } else if (ua.includes('linux')) {
        return 'Linux';
      }

      return 'Unknown';
    },

    /**
     * Update label and href of the Download button
     * corresponding by user platform
     */
    updateDownloadButtomWithPlatform(): void {
      const platform = this.getPlatform();

      switch (platform) {
        case 'Windows':
          this.downloadButtonLabel = 'Download for Windows';
          break;
        case 'macOS':
          this.downloadButtonLabel = 'Download for macOS';
          break;
        case 'Linux':
          this.downloadButtonLabel = 'Download for Linux';
          break;
        default:
          this.downloadButtonLabel = 'Download for Desktop';
          break;
      }
    },
  },
});
</script>

<style scoped lang="postcss">
@import url('@/assets/styles/variables.pcss');

@custom-media --screen-tall (min-height: 1200px);
@custom-media --screen-middle (max-width: 1170px);

.extra-indent_15px {
  margin-top: 15px;
}

.yard {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}

.landing {
  position: relative;
  background: #080E20;

  &__illustration {
    width: 100%;
    position: absolute;
  }

  &__content {
    position: relative;

    &-head {
      width: 830px;
      margin: 170px auto 50px;
      padding: 0 var(--layout-paddings-horisontal);
      display: flex;

      @media (--screen-tall) {
        margin: 170px auto;
      }

      @media (--screen-middle) {
        padding: 0 40px;
        margin: 130px auto 0;
      }

      @media (--screen-small) {
        margin: 80px auto -50px;
      }

      @media (--screen-small) {
        flex-direction: column;
      }

      &-left {
        padding-right: 50px;
        gap: 18px;
        padding-bottom: 13px;
        position: relative;

        @media (--screen-mobile) {
          padding-right: 0;
        }

        h1 {
          color: #F2F6FF;
          font-size: 89px;
          font-weight: 700;
          margin: 0 0 22px 0;

          @media (--screen-small) {
            font-size: 60px;
            margin-bottom: 16px;
          }

          @media (--screen-mobile) {
            font-size: 26px;
          }
        }

        span {
          display: flex;
          justify-content: space-between;
          color: #F2F6FF;
          font-weight: 700;
          width: 775px;
          line-height: 30px;
          font-size: 22px;
          &div {
            flex: 1 0 auto;
            font-family: "Roboto-Bold", Helvetica;
            left: 0;
            letter-spacing: 0;
            position: fixed;
            top: 0;
            white-space: nowrap;
          }
        }

        .description {
          font-weight: 500;
          font-family: "Roboto-Medium", "Helvetica";
          color: #dbe6ffce;
          letter-spacing: 0.33px;
          font-size: 20px;
          line-height: 30px;
          width: 830px;
          padding-bottom: 13px;

          @media (--screen-small) {
            font-size: 18px;
            line-height: 26px;
          }

          @media (--screen-mobile) {
            font-size: 16px;
            line-height: 22px;
          }
        }
      }

      &-right {
        margin-left: auto;

        .button {
          display: flex;
        }

        @media (--screen-small) {
          margin-left: 0;
          margin-top: 30px;

          .button {
            display: inline-flex;
            margin-right: 20px;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .02)
          }
        }

        @media (max-width: 560px) {
          .button {
            display: inline-flex;
            width: 240px;
          }
        }

        .button:not(:last-of-type) {
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
      will-change: transform;

      img {
        width: 100%;
        vertical-align: bottom;
        background-image: linear-gradient(90deg, #1E202A 0%, #1E202A 4%, #242732 5%, #242732 24%, #2F3341 25%, #2F3341 100%);
      }

      @media (--screen-middle) {
        width: var(--layout-main-col-width);
      }

      @media (max-width: 1080px) {
        width: calc(var(--layout-main-col-width) * 0.95);
      }

      @media (--screen-tall) {
        transform: none !important;
      }

      @media (--screen-small) {
        width: 90%;
      }
    }
  }
}

.contact-container {
  width: auto;
  height: fit-content;
  border-radius: 8px;
  margin-top: 16px;
  padding: 40px 30px;
  background-color: #242936;
}

.content-blocks {
  display: inline-grid;
  justify-content: center;
}

.section {
  position: relative;
  padding-top: 100px;
  padding-bottom: 80px;

  h2 {
    font-family: Roboto;
    font-size: 70px;
    font-weight: 700;
    line-height: 82.03px;
    text-align: left;
  }

  &--with-gradient::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transform: scaleY(-1);
    background-image: linear-gradient(180deg, rgba(24,27,35,0.00) 0%, #080E20 100%);
    height: 500px;
    z-index: -1;
  }

  &__content {
    max-width: var(--layout-main-col-width);
    margin: 0 auto;
    padding: 0 var(--layout-paddings-horisontal);
  }

  &__title {
    font-weight: 800;
    font-size: 70px;
    color: #F2F6FF;
    letter-spacing: 0;
    margin-bottom: 50px;

    @media (--screen-small) {
      font-size: 40px;
      margin-bottom: 30px;
    }

    @media (--screen-mobile) {
      text-align: center;
    }
  }

  &__description {
    display: inline-block;
    color: var(#DBE6FFCE);
    width: 830px;
    font-size: 18px;
    line-height: 28px;
    margin: 0 auto;
    margin-bottom: 50px;
    background-clip: text;
    background-image: linear-gradient(270deg, #6781B4 1%, #BAD6FE 99%);
    color: transparent;
    font-weight: 500;

     @media (--screen-mobile) {
       font-size: 15px;
       line-height: 1.5em;
       margin-bottom: 30px;
    }
  }

  &--small {
    text-align: center;
  }

  &--small &__title {
    font-size: 37px;
    margin-bottom: 30px;

    @media (--screen-mobile) {
      font-size: 26px;
      margin-bottom: 10px;
    }
  }
}
</style>
