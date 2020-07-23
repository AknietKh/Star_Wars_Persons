<template>
  <div class="search">
    <input 
      type="text" 
      class="search__input" 
      v-model.trim="searchValue"
      @keydown.enter="findPerson()"
    >
    <button class="search__btn" @click.prevent="findPerson()">
      <i class="material-icons">search</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    findPerson() {
      const person = this.searchValue;
      
      if(!person.trim()) {
        return;
      }

      this.$router.push(`?search=${person}`)

      this.$store.dispatch('FIND_PERSON', this.$route.query)
        .then(data => {
          this.searchValue = ''

          return data;
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    max-width: 40rem;
    margin: 0 auto;
    margin-bottom: 4rem;

    &__input {
      box-sizing: border-box;
      flex-grow: 0.9;
      width: 100%;
      height: 4rem; 
      border: 0.1rem solid #cccccc;
      border-right: none;
      border-radius: 3rem 0 0 3rem;
      background-color: #fff;
      padding: 0 2rem;
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.7rem;
      outline: none;
    }

    &__btn {
      flex-grow: 0.1;
      width: 9rem;
      height: 4rem;
      background-color: #37474f;
      border-color: transparent;
      border-radius: 0 3rem 3rem 0;
      border-left: none;
      outline: none;
      color: #ffffff;
      cursor: pointer;

      &:active {
        opacity: 0.9;
      }

      &:hover {
        background-color: #62727b;
      }
      
      i {
        font-size: 4rem;
      }
    }
  }
</style>