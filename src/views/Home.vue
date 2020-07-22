<template>
  <div class="home">
    <card-container></card-container>
    <app-pagination></app-pagination>
  </div>
</template>

<script>
import CardContainer from '@/components/CardContainer.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Home',
  components: {
    CardContainer,
    'app-pagination': Pagination
  },
  created: function() {
    this.$store.dispatch('GET_CARDS')
  }
}
</script>