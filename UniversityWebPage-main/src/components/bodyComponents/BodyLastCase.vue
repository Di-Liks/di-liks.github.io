<template>
  <div class="cases">
    <h2>
      Последние кейсы
    </h2>


    <table class="segment-container">
      <tr>
        <td>
          <img class="sub-segment-img" :src='require("@/assets/last_cases_1_380x215.jpg")' />
          <div class="segment-black-header-text-container segment-black-header-text">
            Настройка выгрузки YML для Яндекс.Маркета
          </div>
          <div class="segment-black-date-container segment-black-date">
            22.04.2019
          </div>
          <div class="segment-text-container segment-text">
            Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.
          </div>
        </td>
        <td columns="2">
          <div class="segment-white-header-text-without-date-container segment-white-header-text">
            Настройка выгрузки YML для Яндекс.Маркета
          </div>
          <img class="segment-2-img" :src='require("@/assets/last_cases_2_780x475.jpg")' />
        </td>
      </tr>
      <tr>
        <td>
          <div class="segment-white-header-text-with-date-container">
            <div class="segment-white-header-text">
              Настройка выгрузки YML для Яндекс.Маркета
            </div>
            <div class="segment-white-date-container segment-white-date">
              22.04.2019
            </div>
          </div>
          <img class="segment-1-img" :src='require("@/assets/last_cases_3_380x475.jpg")' />
        </td>
        <td>
          <div class="segment-white-header-text-with-date-container">
            <div class="segment-white-header-text">
              Настройка выгрузки YML для Яндекс.Маркета
            </div>
            <div class="segment-white-date-container segment-white-date">
              22.04.2019
            </div>
          </div>
          <img class="segment-1-img" :src='require("@/assets/last_cases_4_380x475.jpg")' />
        </td>
        <td>
          <img class="sub-segment-img" :src='require("@/assets/last_cases_5_380x215.jpg")' />
          <div class="segment-black-header-text-container segment-black-header-text">
            Настройка выгрузки YML для Яндекс.Маркета
          </div>
          <div class="segment-black-date-container segment-black-date">
            22.04.2019
          </div>
          <div class="segment-text-container segment-text">
            Эти слова совершенно справедливы, однако гипнотический рифф продолжает паузный пласт.
          </div>
        </td>
      </tr>
      <tr>
        <td columns="2">
          <div class="segment-white-header-text-without-date-container segment-white-header-text">
            Настройка выгрузки YML для Яндекс.Маркета
          </div>
          <img class="segment-2-img" :src='require("@/assets/last_cases_6_780x475.jpg")' />
        </td>
        <td>
          <div class="segment-white-header-text-with-date-container">
            <div class="segment-white-header-text">
              Настройка выгрузки YML для Яндекс.Маркета
            </div>
            <div class="segment-white-date-container segment-white-date">
              22.04.2019
            </div>
          </div>
          <img class="segment-1-img" :src='require("@/assets/last_cases_7_380x475.jpg")' />
        </td>
      </tr>
    </table>

 

    <div class="button-show-more-container">
      <div class="button-show-more-text">
        Показать ещё
      </div>
      <div class="button-show-more"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BodyLastCase',
    components: {
      
    }
  }
</script>

<style scoped>
/* Для заголовка сделать класс на всё приложение*/
.cases{
  position: absolute;
  left: 9%;
  top: 4237px;
}


.sub-segment-img {
  height: 215px;
  width: 380px;
}

.segment-1-img {
  height: 475px;
  width: 380px;
}

.segment-2-img {
  height: 475px;
  width: 780px;
}

.segment-width-1 {
  width: 380px;
}

.segment-width-2 {
  width: 780px;
}

.segment-container {
  max-width: 1220px;
  min-height: 1485px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  margin: auto;
}

.segment-container>tr>td {
  height: 475px;
  padding-left: 10px;
  padding-right: 10px;
}

.segment-black-header-text-container {
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  text-align: left;
}

.segment-black-header-text {
  /* TODO: add 'Montserrat' font */
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #050C33;
}

.segment-white-header-text-without-date-container {
  max-width: 320px;
  margin-left: 40px;
  margin-top: 391px;
  position: absolute;
}

.segment-white-header-text-with-date-container {
  max-width: 320px;
  margin-left: 40px;
  margin-top: 361px;
  position: absolute;
}

.segment-white-header-text {
  /* TODO: add 'Montserrat' font */
  text-align: left;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
}

.segment-text-container {
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.segment-text {
  /* TODO: add 'Montserrat' font */
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #050C33;
  opacity: 0.7;
}

.segment-black-date-container {
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
}

.segment-black-date {
  /* TODO: add 'Montserrat' font */
  text-align: left;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #050C33;
  opacity: 0.5;
}

.segment-white-date-container {
  width: 320px;
  margin-top: 5px;
}

.segment-white-date {
  /* TODO: add 'Montserrat' font */
  text-align: left;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  opacity: 0.5;
}

.button-show-more-container {
  width: 260px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}

.button-show-more {
  width: 260px;
  height: 60px;
  box-sizing: border-box;
  opacity: 0.2;
  border: 1px solid #050C33;
  border-radius: 5px;
}

.button-show-more-text {
   /* TODO: add 'Montserrat' font */
  position: absolute;
  width: 260px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 60px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #050C33;
}
</style>