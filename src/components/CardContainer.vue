<template>
  <div class="card-container">
    <p v-if="isEmpty" class="card-container__empty">Данные отсутсвуют</p>
    <person-card 
      v-else 
      v-for="card in cards"
      :key='card.id'
      :card='card'>
    </person-card>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'CardContainer',
  components: {
    'person-card': Card
  },
  props: {
    cards: {
      type: Array
    }
  },
  computed: {
    isEmpty() {
      return !this.cards.length;
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &__empty {
      font-size: 4rem;
      line-height: 4rem;
      margin: 0 auto;
    }
  }
</style>