<!--<template>-->
<!--  <div>-->
<!--    <page-container>-->
<!--      <page-header>-->
<!--        Pricing-->
<!--      </page-header>-->

<!--      <div class="plans">-->
<!--        <plan-->
<!--          v-for="plan in plans"-->
<!--          :key="plan.name"-->
<!--          :plan="plan"-->
<!--        />-->
<!--      </div>-->

<!--      <div class="all">-->
<!--        <img :src="require(`~/assets/svg/check.svg`)">-->
<!--        All the plans include all available features.-->
<!--      </div>-->

<!--      <table class="features">-->
<!--        <tr>-->
<!--          <th>-->
<!--            <h2 class="small-heading">-->
<!--              Features-->
<!--            </h2>-->
<!--          </th>-->
<!--          <th-->
<!--            v-for="(plan, index) in plans"-->
<!--            :key="'p' + index"-->
<!--            width="12%"-->
<!--          >-->
<!--            {{ plan.name }}-->
<!--          </th>-->
<!--        </tr>-->
<!--        <tr-->
<!--          v-for="feature in features"-->
<!--          :key="feature"-->
<!--        >-->
<!--          <td>-->
<!--            {{ feature }}-->
<!--          </td>-->
<!--          <td>-->
<!--            <img :src="require(`~/assets/svg/check.svg`)">-->
<!--          </td>-->
<!--          <td>-->
<!--            <img :src="require(`~/assets/svg/check.svg`)">-->
<!--          </td>-->
<!--          <td>-->
<!--            <img :src="require(`~/assets/svg/check.svg`)">-->
<!--          </td>-->
<!--          <td>-->
<!--            <img :src="require(`~/assets/svg/check.svg`)">-->
<!--          </td>-->
<!--        </tr>-->
<!--      </table>-->

<!--      <div class="text">-->
<!--        <h2 class="small-heading">-->
<!--          Open-source?-->
<!--        </h2>-->

<!--        <p>Hawk is an open-source service that means anyone can use it for their organization. Meanwhile, Hawk is a multi-layer micro-service-based product processing many high-load streams. Managing such a system is challenging. It requires a professional DevOps and SRE team, not a trivial cloud-based architecture, and so on. We offer a ready-to-use solution supporting by our team, and it takes a cost.</p>-->
<!--      </div>-->

<!--      <div class="text">-->
<!--        <h2 class="small-heading">-->
<!--          Free for non-profit products-->
<!--        </h2>-->

<!--        <p>Hawk is created by CodeX — a team of digital specialists around the world interested in building high-quality open source products on a global market.</p>-->
<!--        <p>If you want free unlimited access to a non-profit product, contact us at team@hawk.so</p>-->
<!--      </div>-->

<!--      <div class="text">-->
<!--        <h2 class="small-heading">-->
<!--          Payment support-->
<!--        </h2>-->

<!--        <p>More information about payments can be found in the Hawk Docs under the <a href="https://docs.hawk.so/payments">Payments</a> section. For our contact — see the <a href="https://docs.hawk.so/contacts">Contacts</a> page.</p>-->
<!--      </div>-->
<!--    </page-container>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import Vue from 'vue';-->
<!--import IPlan from '~/components/types/plan';-->
<!--import PageContainer from '~/components/page-container.vue';-->
<!--import PageHeader from '~/components/page-header.vue';-->
<!--import Plan from '~/components/plan.vue';-->

<!--export default Vue.extend({-->
<!--  components: {-->
<!--    PageContainer,-->
<!--    PageHeader,-->
<!--    Plan,-->
<!--  },-->
<!--  data(): {-->
<!--    plans: IPlan[],-->
<!--    features: string[]-->
<!--    } {-->
<!--    return {-->
<!--      plans: [-->
<!--        {-->
<!--          name: 'Free',-->
<!--          description: 'up to 100K events / mo',-->
<!--          price: '0$ / mo',-->
<!--          buttonText: 'Get Started',-->
<!--          buttonHref: 'https://garage.hawk.so/?plan=free',-->
<!--        },-->
<!--        {-->
<!--          name: 'Startup',-->
<!--          description: 'up to 200K events / mo',-->
<!--          price: '20$ / mo',-->
<!--          buttonText: 'Get Started',-->
<!--          buttonHref: 'https://garage.hawk.so/?plan=startup',-->
<!--        },-->
<!--        {-->
<!--          name: 'Pro',-->
<!--          description: 'up to 1M events / mo',-->
<!--          price: '100$ / mo',-->
<!--          buttonText: 'Get Started',-->
<!--          buttonHref: 'https://garage.hawk.so/?plan=pro',-->
<!--        },-->
<!--        {-->
<!--          name: 'Enterprise',-->
<!--          description: 'Customized volume',-->
<!--          price: 'Personal',-->
<!--          buttonText: 'Contact us',-->
<!--          buttonHref: 'mailto:team@hawk.so?subject=Custom plan request',-->
<!--        },-->
<!--      ],-->
<!--      features: [-->
<!--        'Error catchers for 10 languages',-->
<!--        'Notifications to Slack, Telegram and Email',-->
<!--        'Custom notification filters',-->
<!--        'Unlimited Projects',-->
<!--        'Unlimited team members',-->
<!--        'App Health graph',-->
<!--        'Assignees',-->
<!--        'Filtering and sorting',-->
<!--        'Event marks',-->
<!--        'Suspected Commits',-->
<!--        '30 days events storing',-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->

<!--<style lang="postcss" scoped>-->
<!--  .plans {-->
<!--    display: flex;-->
<!--    width: 100%;-->
<!--    justify-content: space-between;-->

<!--    @media (&#45;&#45;screen-mobile){-->
<!--      flex-direction: column;-->
<!--    }-->

<!--    .plan {-->
<!--      flex-grow: 1;-->

<!--      @media (&#45;&#45;screen-medium){-->
<!--        padding: 15px;-->

<!--        >>> .plan__button {-->
<!--          margin-top: -4px;-->
<!--        }-->
<!--      }-->

<!--      &:not(:last-of-type){-->
<!--        margin-right: 20px;-->

<!--        @media (&#45;&#45;screen-medium){-->
<!--          margin-right: 7px;-->
<!--        }-->

<!--        @media (&#45;&#45;screen-mobile){-->
<!--          margin-right: 0;-->
<!--          margin-bottom: 10px;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .all {-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--    margin: 60px 0 40px;-->

<!--    img {-->
<!--      margin-right: 10px;-->
<!--    }-->

<!--    @media (&#45;&#45;screen-mobile){-->
<!--      font-size: 14px;-->

<!--      img {-->
<!--        width: 14px;-->
<!--        margin-right: 14px;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .features {-->
<!--    width: 100%;-->
<!--    border-collapse: collapse;-->
<!--    max-width: var(&#45;&#45;layout-page-content-max-width);-->

<!--    @media (&#45;&#45;screen-mobile){-->
<!--      font-size: 13px;-->
<!--      line-height: 1.45em;-->

<!--      img {-->
<!--        width: 14px;-->
<!--      }-->
<!--    }-->

<!--    th {-->
<!--      padding-bottom: 20px;-->
<!--    }-->

<!--    tr:not(:last-of-type) td {-->
<!--      border-bottom: 1px solid var(&#45;&#45;color-border-light);-->
<!--    }-->

<!--    th, td {-->
<!--      text-align: left;-->

<!--      &:not(:first-of-type) {-->
<!--        text-align: center;-->
<!--      }-->
<!--    }-->

<!--    td {-->
<!--      padding: 10px 0;-->
<!--    }-->
<!--  }-->

<!--  .text {-->
<!--    margin-top: 115px;-->
<!--    max-width: var(&#45;&#45;layout-page-content-max-width);-->
<!--    font-size: 16px;-->
<!--    line-height: 1.5em;-->
<!--    margin-bottom: 100px;-->

<!--    @media (&#45;&#45;screen-mobile){-->
<!--      margin-top: 60px;-->
<!--      font-size: 14px;-->
<!--      margin-bottom: 0;-->
<!--    }-->

<!--    p {-->
<!--      margin: 16px 0;-->
<!--    }-->

<!--    a {-->
<!--      color: var(&#45;&#45;color-bg-button-primary)-->
<!--    }-->
<!--  }-->
<!--</style>-->
