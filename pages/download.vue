<template>
  <div class="page-download">
    <page-container>
      <page-header>
        Download
      </page-header>

      <p>
        For now you can try Hawk Web — browser-version of Garage.
      </p>

      <ui-button
        label="Open in browser"
        link="//beta.hawk.so"
        primary
      >
        <template v-slot:icon>
          <icon-sign-in />
        </template>
      </ui-button>

      <p>
        The desktop application for Windows, MacOS and Linux currently under testing stage.
      </p>

      <ui-button
        label="Download for macOS"
        link="https://github.com/codex-team/hawk.desktop"
      >
        <template v-slot:icon>
          <icon-download />
        </template>
      </ui-button>
    </page-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageContainer from '~/components/page-container.vue';
import PageHeader from '~/components/page-header.vue';
import IconSignIn from '~/assets/svg/sign-in.svg?inline';
import IconDownload from '~/assets/svg/download.svg?inline';
import UiButton from '~/components/ui-button.vue';

export default Vue.extend({
  components: {
    PageContainer,
    PageHeader,
    IconSignIn,
    IconDownload,
    UiButton,
  },
});
</script>

<style lang="postcss" scoped>
.page-download {
  p {
    margin-top: 50px;
    line-height: 1.5em;
  }

  .button {
    margin-top: 20px;
  }
}
</style>
