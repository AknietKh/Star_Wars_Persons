<template>
  <header class="header">
    <h1 class="logo">Star Wars Persons</h1>
    <nav class="navigation">
      <a href='#' @click.prevent='goHome()'>Главная</a>
      <router-link to='/favorites'>Избранные</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    goHome() {
      const { isSearched } = this.$store.getters;
      const { fullPath } = this.$route;
      
      if (fullPath !== '/') {
        this.$router.push({name: 'Home'})
      }

      if (isSearched) {
        this.$store.commit('CHANGE_PAGE', 1);
        this.$store.dispatch('GET_CARDS');
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    min-height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    border-bottom: 2px solid #ffffff;
  }

  .logo {
    font-size: 4.2rem;
    font-weight: 600;
  }

  .navigation {
    max-width: 30rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 

    a {
      box-sizing: border-box;
      height: 3.2rem;
      font-size: 2.4rem;
      line-height: 4.2rem;
      text-decoration: none;
      color: #ffffff;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid #ffffff;
      }
      &:active {
        opacity: 0.8;
        border-bottom: 1px solid #ffffff;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .logo {
      font-size: 3rem;
    }
  }
</style>