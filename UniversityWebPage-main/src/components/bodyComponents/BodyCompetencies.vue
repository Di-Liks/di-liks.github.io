<template>
  <div class="services">
    <div class="servicex-text-top1 titles-h2">
      13 лет совершенствуем<br> компетенции в Drupal<br> поддержке!
    </div>
    
    <div class="servicex-text-top2 text-16px">
      Разрабатываем и оптимизируем модули, расширяем<br> функциональность сайтов, обновляем дизайн
    </div>

    <div class="adv2-1">
      <div class="icons">
        <img alt="adv2" :src='require("@/assets/Competencies-1.svg")'>
      </div>     
      <div class="vector-D">
        <img alt="Vector" :src='require("@/assets/CompetenciesVector.svg")'>
      </div>
      <div class="text-16px text-1">
        Добавление<br> информации на сайт,<br> создание новых<br> разделов
      </div>
    </div>

    <div class="adv2-2">
      <div class="icons">
        <img alt="adv2" :src='require("@/assets/Competencies-2.svg")'>
      </div>
      <div class="vector-D">
        <img alt="Vector" :src='require("@/assets/CompetenciesVector.svg")'>
      </div>
      <div class="text-16px text-2">
        Разработка<br> и оптимизация<br> модулей сайта 
      </div>
    </div>

    <div class="adv2-3">
      <div class="icons">
        <img alt="adv2" :src='require("@/assets/Competencies-3.svg")'>
      </div>
      <div class="vector-D">
        <img alt="Vector" :src='require("@/assets/CompetenciesVector.svg")'>
      </div>
      <div class="text-16px text-1">
        Интеграция с CRM,<br> 1C, платежными<br> системами, любыми<br> веб-сервисами
      </div>
    </div>
    
    <div class="adv2-4">
      <div class="icons">
        <img alt="adv2" :src='require("@/assets/Competencies-4.svg")'>
      </div>
      <div class="vector-D">
        <img alt="Vector" :src='require("@/assets/CompetenciesVector.svg")'>
      </div>
      <div class="text-16px text-2">
        Любые доработки<br> функционала<br> и дизайна
      </div>
    </div>

    <div class="adv2-5">
      <div class="icons">
        <img alt="adv2" :src='require("@/assets/Competencies-5.svg")'>
      </div>
      <div class="vector-D">
        <img alt="Vector" :src='require("@/assets/CompetenciesVector.svg")'>
      </div>
      <div class="text-16px text-2">
        Аудит и мониторинг<br> безопасности Drupal<br> сайтов
      </div>
    </div>
    
    <div class="adv2-6">
      <div class="icons">
        <img alt="adv2" :src='require("@/assets/Competencies-6.svg")'>
      </div>
      <div class="vector-D">
        <img alt="Vector" :src='require("@/assets/CompetenciesVector.svg")'>
      </div>
      <div class="text-16px text-2">
        Миграция, импорт<br> контента и апгрейд<br> Drupal
      </div>
    </div>

    <div class="adv2-7">
      <div class="icons">
        <img alt="adv2" :src='require("@/assets/Competencies-7.svg")'>
      </div>
      <div class="vector-D">
        <img alt="Vector" :src='require("@/assets/CompetenciesVector.svg")'>
      </div>
      <div class="text-16px text-2">
        Оптимизация<br> и ускорение<br> Drupal-сайтов
      </div>
    </div>


    <div class="adv2-8">
      <div class="icons">
        <img alt="adv2" :src='require("@/assets/Competencies-8.svg")'>
      </div>
      <div class="vector-D">
        <img alt="Vector" :src='require("@/assets/CompetenciesVector.svg")'>
      </div>
      <div class="text-16px text-2">
        Веб-маркетинг,<br> консультации<br> и работы по SEO
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'BodyCompetencies',
  components: {
    
  }
}
</script>

<style scoped>
.services{
  padding-top: 100px;
  position: absolute;
  width: 100%;
  height: 716px;
  left: 0%;
  top: 650px;
  background: white;
}

.servicex-text-top1{
  position: absolute;
  width: 580px;
  height: 153px;
  left: 20%;
}
.servicex-text-top2{
  position: absolute;
  width: 493px;
  height: 44px;
  left: 20%;
  top: 271px;
}

.text-16px{
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
}
.text-1{
  position: absolute;
  left: 0%;
  right: 0%;
  top: 54.64%;
  bottom: 0%;
}
.text-2{
  position: absolute;
  left: 0%;
  right: 0%;
  top: 54.64%;
  bottom: 11.34%;
}
.titles-h2{
  text-align: left;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
}

.adv2-1{
  position: absolute;
  width: 182px;
  height: 194px;
  left: 20%;
  top: 378px;
}
.adv2-2{
  position: absolute;
  width: 182px;
  height: 194px;
  left: 36%;
  top: 378px;
}
.adv2-3{
  position: absolute;
  width: 182px;
  height: 194px;
  left: 54%;
  top: 378px;
}
.adv2-4{
  position: absolute;
  width: 182px;
  height: 194px;
  left: 70%;
  top: 378px;
}
.adv2-5{
  position: absolute;
  width: 182px;
  height: 194px;
  left: 20%;
  top: 622px;
}
.adv2-6{
  position: absolute;
  width: 182px;
  height: 194px;
  left: 36%;
  top: 622px;
}
.adv2-7{
  position: absolute;
  width: 182px;
  height: 194px;
  left: 54%;
  top: 622px;
}
.adv2-8{
  position: absolute;
  width: 182px;
  height: 194px;
  left: 70%;
  top: 622px;
}

.vector-D{
  position: absolute;
  left: -30.22%;
  right: 67.58%;
  top: 8.76%;
  bottom: 54.64%;

}

.icons{
  position: absolute;
  left: 0%;
  right: 55.49%;
  top: 0%;
  bottom: 58.25%;
}
</style>