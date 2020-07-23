<template>
  <div class="card">
    <div class="card-img-wrapper">
      <img class="card-img" :src="cardImg(card.id)" :alt="card.name">
      <i 
        class="material-icons card-icon" 
        v-if='isFavorite(card)' 
        @click='toggleFavorite(card)'
        >
          favorite
      </i>
      <i 
        class="material-icons card-icon" 
        v-else 
        @click='toggleFavorite(card)'
        >
          favorite_border
      </i>
    </div>
    <table class="card-info">
      <tr class="card-info__row">
        <td>Имя:</td>
        <td>{{card.name}}</td>
      </tr>
      <tr class="card-info__row">
        <td>Дата рождения:</td>
        <td>{{card.birth_year}}</td>
      </tr>
      <tr class="card-info__row">
        <td>Родная планета:</td>
        <td>{{card.home}}</td>
      </tr>
      <tr class="card-info__row">
        <td>Пол:</td>
        <td>{{card.gender}}</td>
      </tr>
      <tr class="card-info__row">
        <td>Рост:</td>
        <td>{{card.height}}</td>
      </tr>
      <tr class="card-info__row">
        <td>Вес:</td>
        <td>{{card.mass}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object
    }
  },
  methods: {
    cardImg(id) {
      return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    },
    toggleFavorite(card) {
      if (this.isFavorite(card)) {
        this.$store.commit('DELETE_FAVORITE', card)
      } else {
        this.$store.commit('ADD_FAVORITE', card)
      }
    },
    isFavorite(card) {
      const { favorites } = this.$store.getters;
      
      return Boolean( favorites.find(fav => fav.id === card.id) );
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    border: 1px solid #4f5b62;
    border-radius: 2rem;

    &-img {
      width: 100%;
      height: auto;
      max-width: 40rem;
      border-radius: 2rem 2rem 0 0;

      &-wrapper {
        position: relative;
      }
    }

    &-info {
      width: 100%;
      margin: 1rem 0;
      font-size: 2rem;
      line-height: 2.4rem;
      
      &__row {
        height: 4rem;
        
        td {
          vertical-align: middle;
          text-align: left;
        }

        :first-child {
          padding-left:1.5rem;
        }
      }
    }

    &-icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 4rem;
      color: #d50000;
      cursor: pointer;

      &:hover {
        font-size: 4.5rem;
      }

      &:active {
        font-size: 4rem;
      }
    }
  }
</style>