<template>
  <div class="footer-conteiner">
    <img class="footer-D" :src='require("@/assets/Footer-D.svg")'>
    <img class="footer-d-small" :src='require("@/assets/Footer-d-small.svg")'>
    <div class="footer-form">
      <div class="footer-btm">
        <div class="footer-btm-text">
          оставить заявку
        </div>
      </div>
      <input name="name" id="footer-name" type="text" class="footer-block-input" placeholder="Ваше имя" required>
      <input name="number" id="footer-number" type="text" class="footer-block-input" placeholder="Телефон" required>
      <input name="email" id="footer-email" type="email" class="footer-block-input" placeholder="E-mail" required>
      <textarea name="message" id="footer-message" placeholder="Ваш комментарий" rows="8" class="footer-block-input"></textarea>
      <input name="footer-policy" type="checkbox" class="footer-checkbox" id="footer-policy">
      <div class="footer-checkbox-text">
        Отправляя заявку, я даю согласие на обработку своих <br> персональных данных
      </div>
    </div>
    <div class="footer-info">
      <div class="footer-info-text-1">
        Оставить заявку на поддержку сайта
      </div>
      <div class="footer-info-text-2">
        Срочно нужна поддержка сайта? Ваша команда не успевает<br>
        справиться самостоятельно или предыдущий подрядчик не<br>
        справился с работой? Тогда вам точно к нам! Просто оставьте<br>
        заявку и наш менеджер с вами свяжется!
      </div>
      <div class="footer-phone">
        <img class="footer-phone-1" :src='require("@/assets/Footer-phone.svg")'>
        <div class="footer-phone-2">
          8 800 222-26-73
        </div>
      </div>
      <div class="footer-mail">
        <img class="footer-mail-1" :src='require("@/assets/Footer-mail.svg")'>
        <div class="footer-mail-2">
          info@drupal-coder.ru
        </div>
      </div>
    </div>
    <div class="footer-block">
      <img class="footer-vector" :src='require("@/assets/Footer-vector.svg")'>
      <div class="footer-block-text">
        Проект ООО «Инитлаб», Краснодар, Россия. <br> Drupal является зарегистрированной торговой маркой Dries Buytaert.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageFooter',
    components: {
      
    }
  }
</script>
<style scoped>
.footer-conteiner{
  position: absolute;
  width: 100%;
  height: 816px;
  left: 0px;
  top: 8562px;
  background: linear-gradient(261.2deg, rgba(255, 255, 255, 0.276) -114.85%, rgba(255, 255, 255, 0) 69.04%), #040613;
}
.footer-form{
  position: absolute;
  width: 480px;
  height: 478px;
  left: 50%;
  top: 117px;
}
.footer-btm{
  position: absolute;
  height: 60px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #F14D34;
  border-radius: 5px;
}
.footer-btm-text{
  position: absolute;
  width: 138px;
  height: 12px;
  left: calc(50% - 138px/2);
  top: calc(50% - 12px/2);
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height, or 100% */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #FFFFFF;
}
.footer-checkbox-text{
  position: absolute;
  width: 428px;
  height: 31px;
  left: 38px;
  top: calc(50% - 31px/2 + 143.5px);
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
}
.footer-checkbox{
  position: absolute;
  width: 25px;
  height: 25px;
  left: 0px;
  top: 370px;
  
}
.footer-block-input {
    width: 480px;
    max-width: 100%;
    margin-bottom: 7px;
    background: transparent;
    border: 1px solid rgba(256,256,256,.3);
    border-radius: 5px;
    line-height: 1.2;
    font-weight: 500;
    font-size: 14px;
    padding: 18px 24px;
    color: white;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.footer-info{
  position: absolute;
  width: 100%;
  height: 439px;
  top: 117px;
}
.footer-info-text-1{
  position: absolute;
  width: 480px;
  height: 102px;
  left: 10%;
  top: 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: #FFFFFF;
  text-align: left;
}
.footer-info-text-2{
  position: absolute;
  width: 480px;
  height: 88px;
  left: 10%;
  top: 121px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  opacity: 0.7;
  text-align: left;
}
.footer-phone{
  position: absolute;
  width: 305px;
  height: 48px;
  left: 10%;
  top: 351px;
  align-items: left;
  text-align: left;
}
.footer-phone-1{
  position: absolute;
  width: 24px;
  height: 24px;
  left: 0%;
  top: 28%;
  opacity: 0.5;
}
.footer-phone-2{
  position: absolute;
  width: 263px;
  height: 48px;
  left: 10%;
  top: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}
.footer-mail{
  position: absolute;
  width: 247px;
  height: 27px;
  left: 10%;
  top: 404px;
  align-items: left;
  text-align: left;
}
.footer-mail-1{
  width: 28px;
  height: 24px;
  left: 0%;
  top: 28%;
  opacity: 0.5;
}
.footer-mail-2{
  position: absolute;
  width: 203px;
  height: 27px;
  left: 15%;
  top: 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #FFFFFF;  
}
.footer-block{
  position: absolute;
  width: 100%;
  height: 150px;
  left: 0px;
  top: 666px; 
} 
.footer-block-text{
  position: absolute;

  height: 40px;
  left: 130px;
  top: 56px;
  text-align: left;
}
.footer-vector{
  width: 100%;
  height: 0px;
  left: 0px;
  top: 0px; 
  opacity: 0.3;
  border: 1px solid #FFFFFF;
}
.footer-D{
  position: absolute;
  width: 461.57px;
  height: 276.56px;
  right : 0%;
  bottom: 0% ;
  filter: drop-shadow(0px 2.62227px 0px #3D2323) drop-shadow(0px 23.2258px 8.99064px rgba(0, 13, 37, 0.25));

}
.footer-d-small{
  position: absolute;
  width: 245.54px;
  height: 147.12px;
  left: 50%rrr;
  top: 0px;
  filter: drop-shadow(0px 4.97875px 0px #3D2323) drop-shadow(0px 44.0975px 17.07px rgba(0, 13, 37, 0.25));
}
</style>