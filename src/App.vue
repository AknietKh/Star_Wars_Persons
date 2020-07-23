<template>
  <div id="app">
    <component :is='layout'>
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout';
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/reset.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    background-color: #102027;
  }

  html {
    font-size: 10px;    
  }

  @media only screen and (max-width: 1000px) {
    html {
      font-size: 7px;
    }
  }

</style>
