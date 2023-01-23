<template>
  <div>
    <BodyCompetencies />
    <BodySupport />
    <BodyTariffs />
    <BodyLastCase />
    <BodyTeam />
    <BodyReviews />
    <BodyPartners />
  </div>
</template>
  
<script>
import BodyCompetencies from './bodyComponents/BodyCompetencies.vue'
import BodySupport from './bodyComponents/BodySupport.vue'
import BodyLastCase from './bodyComponents/BodyLastCase.vue'
import BodyTariffs from './bodyComponents/BodyTariffs.vue'
import BodyTeam from './bodyComponents/BodyTeam.vue'
import BodyReviews from './bodyComponents/BodyReviews.vue'
import BodyPartners from './bodyComponents/BodyPartners.vue'

export default {
  name: 'PageBody',
  components: {
    BodyCompetencies,
    BodySupport,
    BodyLastCase,
    BodyTariffs,
    BodyTeam,
    BodyReviews,
    BodyPartners
  }

}
</script>

<style scoped>
</style>