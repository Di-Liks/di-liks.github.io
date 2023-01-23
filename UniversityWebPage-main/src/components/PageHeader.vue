<template>
  <div class="header-segment-container">
    <div class="header-video">
      <video  class="header-media" src="@/assets/header-video.mp4" autoplay muted loop></video>
    </div>
   <img class="header-druplicon" :src='require("@/assets/header-druplicon.svg")'>
    <img class="header-Drupal-coder" :src='require("@/assets/header-drupal-coder.svg")'>
    <div class="header-navigation-1">
      <router-link to="/bodySupport">ПОДДЕРЖКА САЙТОВ</router-link>
    </div>
    <div class="header-navigation-2">
      <router-link to="/bodyTariffs">ТАРИФЫ</router-link>
    </div>
    <div class="header-navigation-3">  
      <router-link to="/bodyPartners">НАШИ РАБОТЫ</router-link>
    </div>
    <div class="header-navigation-4">
      <router-link to="/bodyReviews">ОТЗЫВЫ</router-link>
    </div>
    <div class="header-navigation-5">
      <router-link to="/pageFooter">КОНТАКТЫ</router-link>
    </div>
  <div class="header-contact">
    8 800 222-26-73
  </div>
  <div class="header-language">
    RU
  </div>
  <img class="header-arrow-lang" :src='require("@/assets/header-arrow-lang.svg")'>  
  <div>
    <div class="header-segment-header-text-1">
      Поддержка <br>сайтов на Drupal
    </div>
    <div class="header-segment-header-text-2">
      Сопровождение и поддержка сайтов <br>на CMS Drupal любых версий и запущенности
    </div>
    <div class="header-button-rater-text">
      тарифы
    </div>
    <div class="header-button-rater-container">
      <div class="header-button-rater"></div>
    </div>
  </div>
  <div class="header-rectangle-1">
    <img class="header-rectangle" :src='require("@/assets/header-rectangle.svg")'>
  </div>
  <div class="header-segment-1">
    #1
  </div>
    <img class="header-cup" :src='require("@/assets/header-cup.png")'>
  <div class="header-segment-inside-1">
    Drupal-разработчик <br>в России по версии <br>Рейтинга Рунета
  </div>
    <div class="header-segment-info-2">
      <img class="header-rectangle" :src='require("@/assets/header-rectangle.svg")'>
      <div class="header-segment-top">
        +3
      </div>
      <div class="header-segment-inside-2">
        средний опыт<br> специалистов более<br> 3 лет
      </div>
    </div>
    <div class="header-segment-info-3">
      <img class="header-rectangle" :src='require("@/assets/header-rectangle.svg")'>
      <div class="header-segment-top">
        14
      </div>
      <div class="header-segment-inside-2">
        лет опыта в сфере<br> Drupal
      </div>
    </div>
    <div class="header-segment-info-4">
      <img class="header-rectangle" :src='require("@/assets/header-rectangle.svg")'>
      <div class="header-segment-top">
        200+
      </div>
      <div class="header-segment-inside-2">
        модулей и тем<br> в формате DrupalGive
      </div>
    </div>
      <div class="header-segment-info-5">
      <img class="header-rectangle" :src='require("@/assets/header-rectangle.svg")'>
      <div class="header-segment-top">
        35 000
      </div>
      <div class="header-segment-inside-2">
        часов поддержки<br> сайтов на Drupal
      </div>
    </div>
    <div class="header-segment-info-6">
      <img class="header-rectangle" :src='require("@/assets/header-rectangle.svg")'>
      <div class="header-segment-top">
        200+
      </div>
      <div class="header-segment-inside-2">
        проектов<br> на поддержке
      </div>
    </div>
</div>
</template>
  
<script>
  export default {
    name: 'PageHeader',
    components: {
      
    }
  }
</script>

<style scoped>
.header-segment-container{
  position: absolute;
  width: 100%;
  height: 650px;
  left: 0px;
  top: 0px;
  color: #FFFFFF;
}
.header-video{
  position: relative;
}
.header-media{
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
}
.header-druplicon{
position: absolute;
width: 830.21px;
height: 1154.92px;
left: -73px;
top: -215.75px;
}
.header-Drupal-coder{
  position: absolute;
  width: 136.99px;
  height: 19.24px;
  left: 129.9px;
  top: 34px;
}
a{
  text-decoration: none;
  color: #FFFFFF;
}
.header-navigation-1{
  position: absolute;
  width: 141px;
  height: 10px;
  left: calc(50% - 141px/2 - 321.5px);
  top: 39px;
  /*font-family: 'Ubuntu';*/
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.header-navigation-2{
  position: absolute;
  width: 56px;
  height: 10px;
  left: calc(50% - 56px/2 - 193px);
  top: 39px;
  /*font-family: 'Ubuntu';*/
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.8;
}
.header-navigation-3{
  position: absolute;
  width: 98px;
  height: 10px;
  left: calc(50% - 98px/2 - 86px);
  top: 39px;
  /*font-family: 'Ubuntu';*/
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.8;
}
.header-navigation-4{
  position: absolute;
  width: 56px;
  height: 10px;
  left: calc(50% - 56px/2 + 21px);
  top: 39px;
  /*font-family: 'Ubuntu';*/
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.8;
}
.header-navigation-5{
  position: absolute;
  width: 71px;
  height: 10px;
  left: calc(50% - 71px/2 + 114.5px);
  top: 39px;
  /*font-family: 'Ubuntu';*/
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.8;
}
.header-contact{
  position: absolute;
  width: 144px;
  height: 14px;
  right: 211px;
  top: 37px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 14px;
}
.header-language{
  position: absolute;
width: 22px;
height: 14px;
right: 151px;
top: 37px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 14px;
}
.header-arrow-lang{
position: absolute;
width: 7px;
height: 3.5px;
right: 131px;
top: 42px;
opacity: 0.24;
}
.header-segment-header-text-1{
  position: absolute;
  width: 506px;
  height: 120px;
  left: 130px;
  bottom: 340px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 60px;
  /* or 115% */
  display: flex;
  align-items: center;
  text-align: left;
}
.header-segment-header-text-2{
  position: absolute;
  width: 486px;
  height: 56px;
  left: 130px;
  bottom: 269px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  opacity: 0.8;
  text-align: left;
}
.header-button-rater-container{
  box-sizing: border-box;
  position: absolute;
  width: 220px;
  height: 60px;
  left: 130px;
  top: 436px;
  border: 2px solid #F14D34;
  border-radius: 5px;
}
.header-button-rater-text{
  position: absolute;
  width: 219.21px;
  height: 12px;
  left: 130.79px;
  top: 460px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.header-rectangle-1{
  position: absolute;
  width: 3px;
  height: 80px;
  left: 746px;
  top: 238px;;
}
.header-rectangle{
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #F14D34;
}
.header-segment-1{
  position: absolute;
  height: 59px;
  left: 759px;
  right: 640px;
  top: 213px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  display: flex;
  align-items: center;
}
.header-cup{
  position: absolute;
  width: 59px;
  height: 58px;
  left: 800px;
  top: 204px;
}
.header-segment-inside-1{
  position: absolute;
  height: 45px;
  left: 759px;
  right: 533px;
  top: 271px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  opacity: 0.7;
  text-align: left;
}
.header-segment-top{
  position: absolute;
  height: 29px;
  left: 13px;
  right: 1px;
  top: 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: left;

}
.header-segment-inside-2{
  position: absolute;
  height: 45px;
  left: 13px;
  right: 18px;
  top: 33px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  opacity: 0.7;
  text-align: left;
}
.header-segment-info-2{
  position: absolute;
  width: 180px;
  height: 80px;
  left: 933px;
  top: 238px;
  text-align: left;
}
.header-segment-info-3{
  position: absolute;
  width: 180px;
  height: 80px;
  left: 1146px;
  top: 238px;
  text-align: left;
}
.header-segment-info-4{
  position: absolute;
  width: 180px;
  height: 80px;
  left: 746px;
  top: 416px;
  text-align: left;
}
.header-segment-info-5{
  position: absolute;
  width: 180px;
  height: 80px;
  left: 933px;
  top: 416px;
  text-align: left;
}
.header-segment-info-6{
  position: absolute;
  width: 180px;
  height: 80px;
  left: 1146px;
  top: 416px;
  text-align: left;
}


</style>