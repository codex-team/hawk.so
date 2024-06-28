<template>
  <div class="box">
    <div class="contact">
      <div class="div">Свяжитесь с нами</div>
      <p class="team-hawk-so-t-me">
        <span class="text-wrapper">
          Чтобы начать сотрудничество или получить больше информации, напишите нам на
        </span>
        <span class="span"> team@hawk.so</span>
        <span class="text-wrapper"> или в телеграм </span>
        <span class="span"> t.me/hawk-support</span>
        <span class="text-wrapper">.</span>
        <br /> <!-- Переносим текст на новую строку -->
        <span class="text-wrapper">
          Либо оставьте почту:
        </span>
      </p>
      <div class="bottom-container">
        <div class="frame">
          <input class="input-style" type="text" placeholder="dev@yourproduct.ru" />
        </div>
        <button class="div-wrapper">
          <div class="text-wrapper-3">Получить информацию</div>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  width: 560px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Выравнивание по левому краю */
  text-align: left; /* Выравнивание текста по левому краю */
  width: 100%; /* Занимает всю ширину родительского блока */
}

.team-hawk-so-t-me {
  display: inline; /* Обычное поведение текста */
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: #f2f6ff;
  margin-bottom: 20px;
  word-break: break-word; /* Позволяет переносить длинные слова */
}

.text-wrapper,
.span {
  display: inline; /* Устанавливаем inline, чтобы они вели себя как обычный текст */
}

.text-wrapper {
  color: #f2f6ff;
}

.span {
  color: #379fff;
}

.div {
  color: #f2f6ff;
  font-family: "Roboto-Bold", Helvetica;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
  white-space: nowrap;
}

.bottom-container {
  display: flex;
  justify-content: space-between; /* Размещает элементы на одной строке */
  width: 100%;
  margin-top: 10px; /* Небольшой отступ между frame и div-wrapper */
}

.frame {
  align-items: center;
  background-color: #242832; /* Цвет фона для frame */
  border-radius: 8px;
  display: flex;
  margin-right: 10px;
  gap: 10px;
  flex: 1; /* Растягивает элемент до максимальной ширины */
}

.div-wrapper {
  align-items: center;
  background-color: #0d75d4; /* Цвет фона для div-wrapper */
  border-radius: 8px;
  display: inline-flex;
  gap: 10px;
  padding: 10px 12px;
  flex: 1; /* Растягивает элемент до максимальной ширины */
  box-shadow: none;
}

.input-style {
  background-color: #242832; /* Цвет фона для input */
  color: #ffffff4c; /* Цвет текста для input */
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  flex: 1; /* Занимает все доступное пространство внутри frame */
}

.text-wrapper-3 {
  color: #f2f6ff;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
}
</style>
