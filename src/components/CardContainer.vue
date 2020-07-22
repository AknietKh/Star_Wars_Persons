<template>
  <div class="card-container">
    <person-card 
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
  computed: {
    cards() {
      return this.$store.getters.personCards;
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>