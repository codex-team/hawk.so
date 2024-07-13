<template>
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
            <div class="landing__content-head-left-advantages">
              <h2 class="landing__content-head-left-advantages-text">Сервера в России</h2>
              <h2 class="landing__content-head-left-advantages-text">Оплата по счету юр. лица</h2>
              <h2 class="landing__content-head-left-advantages-text">Помощь с интеграцией</h2>
            </div>
          </div>
        </div>
        <div class="landing__content-preview" :style="`transform: translateY(${Math.max(0, 150 - scroll * 0.35)}px)`">
          <img src="~/assets/images/hawk-desktop.png" title="Hawk — российский трекер ошибок" alt="Изображение супер-современного интерфейса Hawk'a">
        </div>
      </div>
      <div class="contact-container">
        <Contact
          :mail="mail"
          @update:mail="updateMail"
          title="Свяжитесь с нами"
          titleSize="small"
          style="margin-top: 115px;
                padding: 0 30px;"/>
      </div>
    </div>
    <div class="section section--with-gradient">
      <div class="section__content">
        <h2 class="section__title">
          Возможности
        </h2>
        <features :features="features" />
      </div>
    </div>
    <div class="content-blocks">
      <gridInfo/>
        <div class="contact-container, contact-container__backgrounded">
          <Contact
            inputActive
            title="Подключайтесь"
            titleSize="medium"
            :mail="mail"
            @update:mail="updateMail"/>
        </div>
      </div>
    </div>
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
    Contact,
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

    /**
     * Mail that was left by user
     */
    mail: string;
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
          title: 'Следите за здоровьем ПО',
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

      mail: '',
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

    updateMail(newMail: string) {
      this.mail = newMail;
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
  head() {
    return {
      title: "Хоук — российский трекер ошибок",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Мониторинг ошибок в ПО с серверами в России и открытым исходным кодом'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Хоук — российский трекер ошибок'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Мониторинг ошибок в ПО с серверами в России и открытым исходным кодом'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://hawk.so/hawk-ru-og-image.png'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://hawk.so/ru'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Хоук — российский трекер ошибок'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Мониторинг ошибок в ПО с серверами в России и открытым исходным кодом'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://hawk.so/hawk-ru-og-image.png'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://hawk.so/ru'
        },
      ]
    }
  }
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
  font-family: "Roboto-Regular", Helvetica;
  position: relative;
  background: #080E20;
  align-items: center;

  &__illustration {
    width: 100%;
    position: absolute;
  }

  &__content {
    position: relative;
    flex-shrink: 0;

    &-head {
      margin: 120px auto 50px;
      padding: 0 var(--layout-paddings-horisontal);
      justify-content: center;
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
        align-items: center;

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
            font-size: 30px;
          }
        }

        &-advantages {
          display: flex;
          justify-content: space-between;
          color: #F2F6FF;
          font-weight: 700;
          width: 100%;
          line-height: 30px;
          gap: 40px;
          font-size: 22px;
          margin-top: 13px;

          @media (--screen-middle) {
            gap: 20px;
          }

          @media (--screen-mobile) {
            display: grid;
            font-weight: 600;
            font-size: 16px;
            gap: 0px;
          }

          &-text {
            flex: 1 0 auto;
            letter-spacing: 0;
            white-space: nowrap;
            margin: 0;
            font-size: inherit;
          }
        }

        .description {
          font-weight: 500;
          color: #dbe6ffce;
          letter-spacing: 0.33px;
          font-size: 20px;
          line-height: 30px;
          overflow-wrap: normal;
          width: 100%;
          padding-bottom: 13px;

          @media (--screen-small) {
            font-size: 18px;
            line-height: 26px;
          }

          @media (--screen-mobile) {
            font-size: 14px;
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

      @media (--screen-mobile) {
        padding-top: 60px;
        transform: none !important;
        border-radius: 7px;
        box-shadow: none;
      }

      @media (--screen-small) {
        width: 90%;
      }
    }
  }
}

.contact-container {
  width: 100%;
  height: fit-content;

  &__backgrounded {
    border-radius: 8px;
    margin-top: 16px;
    padding: 40px 30px;
    background-color: #242936;
  }
}

.content-blocks {
  padding: 30px 40px;
  display: inline-grid;
  justify-content: center;

  @media (--screen-mobile) {
    padding: 20px 20px;
  }
}

.section {
  position: relative;
  padding-top: 100px;

  @media (--screen-middle) {
    padding-top: 70px;
  }

  @media (--screen-mobile) {
    padding-top: 40px;
  }

  padding-bottom: 80px;

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
      font-size: 50px;
      margin-bottom: 30px;
    }

    @media (--screen-mobile) {
      font-size: 30px;
      text-align: center;
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
