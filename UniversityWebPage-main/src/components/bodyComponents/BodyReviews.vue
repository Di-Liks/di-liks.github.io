<template>
<div class="BodyReviews-case">
  <div class="BodyReviews-name">
    Отзывы
  </div>
  <img class="BodyReviews-custom" :src='require("@/assets/BodyReviews-custom.svg")'>
  <div class="BodyReviews-window-1">
  </div>
  <div class="BodyReviews-window-2">
  </div>
  <div class="BodyReviews-window-3">
    <div class="BodyReviews-window-3-name">
      Команда Drupal Coder вызвала<br>только положительные<br>впечатления!
    </div>
    <img class="BodyReviews-windew-3-custom" :src='require("@/assets/BodyReviews-window-3-custom.png")'>
    <div class="BodyReviews-window-3-text">
      Нуреев Александр, менеджер проекта Winamp<br>Russian Community
    </div>
    <img class="BodyReviews-windew-custom" :src='require("@/assets/BodyReviews-window-custom.svg")'>
    <img class="BodyReviews-windew-left" :src='require("@/assets/BodyReviews-left.svg")'>
    <img class="BodyReviews-windew-right" :src='require("@/assets/BodyReviews-right.svg")'>
    <div class="BodyReviews-windew-number">
      01 <div class="BodyReviews-windew-number-dop">/ 14</div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'BodyReviews',
    components: {
      
    }
  }
</script>

<style scoped>
.BodyReviews-case{
  position: absolute;
  width: 1440px;
  height: 586px;
  left: 0px;
  top: 7179px;
}
.BodyReviews-name{
  position: absolute;
  width: 180px;
  height: 51px;
  left: 630px;
  top: 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #050C33;
}
.BodyReviews-custom{
  position: absolute;
  width: 493px;
  height: 493px;
  left: 0%;
  top: -89px;
}
.BodyReviews-window-1{
  box-sizing: border-box;
  position: absolute;
  width: 724px;
  height: 466px;
  left: 358px;
  top: 97px;
  background: #FFFFFF;
  opacity: 0.34;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 60px rgba(162, 162, 162, 0.25);
  border-radius: 5px;
}
.BodyReviews-window-2{
  box-sizing: border-box;
  position: absolute;
  width: 852px;
  height: 457px;
  left: 294px;
  top: 129px;
  background: #FFFFFF;
  opacity: 0.5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 60px rgba(162, 162, 162, 0.25);
  border-radius: 5px;
}
.BodyReviews-window-3{
  position: absolute;
  width: 980px;
  height: 416px;
  left: 230px;
  top: 170px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 60px rgba(162, 162, 162, 0.25);
  border-radius: 5px;
}
.BodyReviews-window-3-name{
  position: absolute;
  width: 440px;
  height: 87px;
  left: 128px;
  top: 167px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-decoration-line: underline;
  color: #050C33;
  align-items: left;
  text-align: left;
}
.BodyReviews-windew-3-custom{
  position: absolute;
  width: 200px;
  height: 46px;
  left: 128px;
  top: 80px;
}
.BodyReviews-window-3-text{
  position: absolute;
  width: 380px;
  height: 46px;
  left: 128px;
  top: 282px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #050C33;
  opacity: 0.5;
  align-items: left;
  text-align: left;
}
.BodyReviews-windew-custom{
  position: absolute;
  width: 0px;
  height: 282.5px;
  left: 628.5px;
  top: 67px;
  opacity: 0.2;
  border: 1px solid #000000;
}
.BodyReviews-windew-left{
  position: absolute;
  width: 16px;
  height: 32px;
  left: 710px;
  top: 202px;
}
.BodyReviews-windew-right{
  position: absolute;
  width: 16px;
  height: 32px;
  left: 884px;
  top: 202px;
}
.BodyReviews-windew-number{
  position: absolute;
width: 82px;
height: 28px;
left: 756px;
top: 204px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 28px;
display: flex;
align-items: center;
color: #050C33;
}
.BodyReviews-windew-number-dop{
  opacity: 0.2;
}
</style>