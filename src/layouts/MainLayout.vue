<template>
  <div>
    <app-loader v-if='isLoading'></app-loader>
    <div class="main-layout">
      <app-header></app-header>
      <main class="main-content">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    'app-loader': Loader
  },
  computed: {
    isLoading() {
      return this.$store.getters.status === 'request';
    }
  }
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