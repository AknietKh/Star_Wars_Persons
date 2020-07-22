<template>
  <div class="main-layout">
    <app-header></app-header>
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss" scoped>
  .main-layout {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    box-sizing: border-box;
    flex-grow: 1;
    width: 100%;
    padding: 4rem 10rem;
  }
</style>