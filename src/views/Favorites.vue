<template>
  <div class="favorites">
    <card-container :cards='favorites'></card-container>
  </div>
</template>

<script>
import CardContainer from '@/components/CardContainer.vue'

export default {
  name: 'Favorites',
  components: {
    CardContainer
  },
  computed: {
    favorites() {
      return this.$store.getters.favorites;
    }
  }
}
</script>