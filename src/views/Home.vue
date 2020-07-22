<template>
  <div class="home">
    <app-search></app-search>
    <card-container></card-container>
    <app-pagination v-if="showPagination"></app-pagination>
  </div>
</template>

<script>
import CardContainer from '@/components/CardContainer.vue'
import Pagination from '@/components/Pagination.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  components: {
    CardContainer,
    'app-pagination': Pagination,
    'app-search': Search
  },
  computed: {
    showPagination() {
      const { perPage, totalCards } = this.$store.getters;

      return totalCards > perPage;
    }
  },
  created: function() {
    const current = parseInt(this.$route.query.page);
    
    if (current) {
      this.$store.commit('CHANGE_PAGE', current);
    }
    
    this.$store.dispatch('GET_CARDS');
  }
}
</script>