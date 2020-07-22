<template>
  <div class="card">
    <img class="card-img" :src="cardImg(card.id)" :alt="card.name">
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
    }

    &-info {
      width: 100%;
      margin: 1rem 0;
      font-size: 2.4rem;
      line-height: 3rem;
      
      &__row {
        height: 4rem;

        td {
          vertical-align: middle;
          text-align: left;
          padding: 0 1rem;
        }
      }
    }
  }
</style>