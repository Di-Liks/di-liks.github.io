<template>
  <div class="footer-conteiner">
    (c) Лихачев Кирилл 2022,
    (c) Крылов Артем 2022,
    (c) Ликсуков Дмитрий 2022.
    <div class="footer-form">
      <div class="footer-btm">
        <div class="footer-btm-text">
          оставить заявку
        </div>
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
left: 830px;
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
</style>