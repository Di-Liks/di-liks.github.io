<template>
  <PageHeader />
  <PageBody />
  <PageFooter />
</template>

<script>
  import PageHeader from './components/PageHeader.vue'
  import PageBody from './components/PageBody.vue'
  import PageFooter from './components/PageFooter.vue'
  export default {
    name: 'App',
    components: {
      PageHeader,
      PageBody,
      PageFooter
    }
  }
</script>
<!-- 
} -->

<style>
  @font-face {
    font-family: 'Montserrat';
    font-display: auto;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url('https://fonts.googleapis.com/css?family=Montserrat&display=swap') format('woff2'), url('http://hb.bizmrg.com/fonts/montserrat/400.woff') format('woff');
    font-weight: 50;
    font-style: normal;
  }
  #app {
    font-family: 'Montserrat';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }


</style>
