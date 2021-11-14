<template>
  <div class="yard">
    <div class="landing">
      <illustration class="landing__illustration" />

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
            <ui-button
              label="Open in browser"
              link="//garage.hawk.so"
              primary
            >
              <template v-slot:icon>
                <icon-sign-in />
              </template>
            </ui-button>
             <ui-button
              :label="downloadButtonLabel"
              :link="downloadButtonHref"

            >
              <template v-slot:icon>
                <icon-download />
              </template>
            </ui-button>
          </div>
        </div>
        <div class="landing__content-preview" :style="`transform: translateY(${Math.max(0, 150 - scroll * 0.35)}px)`">
          <img src="~/assets/images/hawk-desktop.png" alt="Hawk desktop preview">
        </div>
      </div>
    </div>
    <div class="section section--with-gradient">
      <div class="section__content">
        <h2 class="section__title">
          Features
        </h2>
        <features :features="features" />
      </div>
    </div>

    <div class="section section--small">
      <div class="section__content">
        <h2 class="section__title">
          Supports your stack
        </h2>
        <div class="section__description">
          Hawk has integrations for most of languages. And their count continuously increases.
        </div>
        <stack :items="stack" />
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
import UiButton from '~/components/ui-button.vue';

export default Vue.extend({
  components: {
    Illustration,
    IconSignIn,
    IconDownload,
    Features,
    Stack,
    UiButton,
  },
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
    } {
    return {
      /**
       * Features list description
       */
      features: [
        {
          title: 'Track errors',
          description: 'Hawk will show you what’s going wrong in your application',
          picture: 'feature-list',
        },
        {
          title: 'Discover details',
          description: 'Hawk will help to understand and resolve the problem',
          picture: 'feature-event',
        },
        {
          title: 'Watch app health',
          description: 'You can monitor and rate the quality of your product',
          picture: 'feature-graph',
          style: 'margin-bottom: -21px',
        },
        {
          title: 'Be notified',
          description: 'Do not miss important events staying alerted via Slack, Telegram or Email',
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
      max-width: var(--layout-main-col-width);
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

        @media (--screen-mobile) {
          padding-right: 0;
        }

        h1 {
          color: #FFFFFF;
          font-size: 49px;
          font-weight: 700;
          margin: 0 0 22px 0;

          @media (--screen-small) {
            font-size: 34px;
            margin-bottom: 16px;
          }

          @media (--screen-mobile) {
            font-size: 26px;
          }
        }

        .description {
          font-weight: 500;
          color: var(--color-text-main);
          letter-spacing: 0.33px;
          font-size: 20px;
          line-height: 30px;
          max-width: 638px;

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
      will-change: transform;

      img {
        width: 100%;
        vertical-align: bottom;
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

.section {
  position: relative;
  padding-top: 100px;

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
    color: var(--color-text-main);
    font-size: 18px;
    line-height: 28px;
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 400px;
    background-clip: text;
    background-image: linear-gradient(270deg, #6781B4 1%, #BAD6FE 99%);
    color: transparent;
    font-weight: 500;

     @media (--screen-mobile) {
       font-size: 15px;
       line-height: 24px;
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
