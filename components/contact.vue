<template>
  <div class="box">
    <div class="contact">
      <div :class="[`div-${$props.titleSize}`, `div`]">{{ $props.title }}</div>
      <p class="team-hawk-so-t-me">
        Чтобы начать сотрудничество или получить больше информации, напишите нам на
        <a href="mailto:team@hawk.so"> team@hawk.so</a>
        или в телеграм
        <a href="https://t.me/+xWe73YEfIVRlNmYy">t.me/hawk-support</a>.
        <br /> <!-- Переносим текст на новую строку -->
        <span class="text-wrapper">
          Либо оставьте почту:
        </span>
      </p>
      <div class="bottom-container">
        <div class="frame">
          <input
            :value="inputData"
            :class="['input-style', inputActive && 'input-style-active']"
            @input="inputData = $event.target.value"
            type="text"
            placeholder="dev@yourproduct.ru" />
        </div>
        <button class="div-wrapper">
          <div @click="notify($props.inputData)" class="text-wrapper-3">Получить информацию</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contact',
  props: {
    title: {
      type: String,
    },
    inputActive: {
      type: Boolean,
    },
    titleSize: {
      type: String,
    },
    inputData: {
      type: String,
    },
  },
  methods: {
    notify: function(message: string): void {
      fetch('https://notify.bot.codex.so/u/6PI3KB10U6ZV', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          'message': message
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    },
  }
});
</script>

<style>
@import url('@/assets/styles/variables.pcss');

.box {
  max-width: 560px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
}

.team-hawk-so-t-me {
  display: inline;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: #f2f6ff;
  margin-bottom: 16px;
  word-break: normal;

  @media (--screen-mobile) {
    font-size: 14px;
  }
}

a {
  color: #379fff;
  display: inline;
}

.div {
  color: #f2f6ff;
  font-family: "Roboto-Bold", Helvetica;
  font-weight: 700;
  margin-bottom: 20px;
  white-space: nowrap;

  &-medium {
    font-size: 36px;

    @media (--screen-mobile) {
      font-size: 26px;
    }
  }

  &-small {
    font-size: 26px;

    @media (--screen-mobile) {
      font-size: px;
    }
  }
}

.bottom-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;

  @media (--screen-mobile) {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr;
  }
}

.frame {
  background-color: #252832;
  border-radius: 8px;
  display: flex;
  flex-grow: 1;
}

.div-wrapper {
  cursor: pointer;
  align-items: center;
  border-width: 0px;
  background-color: #0d75d4;
  border-radius: 8px;
  gap: 10px;
  padding: 10px 12px;
  box-shadow: none;

  @media (--screen-mobile) {
    text-align: start;
  }

  &:hover {
    background-color: #0b64b7;
  }
}

.input-style {
  background-color: #242832;
  color: #DBE6FF;
  font-weight: 400;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  flex: 1;

  &-active {
    background-color: #323B4C;

    &::placeholder {
      color: #DBE6FF;
      opacity: 1;
    }
  }
}

.text-wrapper-3 {
  cursor: pointer;
  color: #f2f6ff;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
}
</style>
