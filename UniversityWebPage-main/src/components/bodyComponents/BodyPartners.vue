<template>
  <div class="BodyPartners-case">
    <div class="BodyPartners-case-name">
      С нами работают
    </div>
    <div class="BodyPartners-case-text">
      Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои<br>сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
    </div>
    <div class="first_slick">
      <div class="block_img">
          <img src="@/assets/PartnersSlick-1.png" alt="comp">
      </div>
      <div class="block_img">
          <img src="@/assets/PartnersSlick-2.png" alt="comp">
      </div>
      <div class="block_img">
          <img src="@/assets/PartnersSlick-3.png" alt="comp">
      </div>
      <div class="block_img">
          <img src="@/assets/PartnersSlick-1.png" alt="comp">
      </div>
      <div class="block_img">
          <img src="@/assets/PartnersSlick-2.png" alt="comp">
      </div>
      <div class="block_img">
          <img src="@/assets/PartnersSlick-3.png" alt="comp">
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'BodyPartners',
  components: {
  },

}
</script>

<style scoped>
.BodyPartners-case{
  position: absolute;
  width: 1440px;
  height: 477px;
  left: 0px;
  top: 7925px;
}
.BodyPartners-case-name{
  position: absolute;
  width: 390px;
  height: 51px;
  left: 525px;
  top: 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  text-align: center;
  color: #050C33;
}
.BodyPartners-case-text{
  position: absolute;
  width: 740px;
  height: 44px;
  left: 350px;
  top: 61px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #050C33;
  opacity: 0.7;
}
</style>