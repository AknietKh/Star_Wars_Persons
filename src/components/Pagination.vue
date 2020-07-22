<template>
  <div class="pagination">
      <div class="pagination__left">
        <a href="#" v-if="hasPrev" @click.prevent="changePage(prevPage)">Предыдущая</a>
      </div>
      <div class="pagination__mid">
        <ul>
          <li v-if="hasFirst"><a href="#" @click.prevent="changePage(1)">1</a></li>
          <li v-if="hasFirst">...</li>
          <li v-for="page in pages" :key='page'>
            <a href="#" @click.prevent="changePage(page)" :class="{ current: currentPage == page }">
              {{ page }}
            </a>
          </li>
          <li v-if="hasLast">...</li>
          <li v-if="hasLast"><a href="#" @click.prevent="changePage(totalPages)">{{ totalPages }}</a></li>
        </ul>
      </div>
      <div class="pagination__right">
        <a href="#" v-if="hasNext" @click.prevent="changePage(nextPage)">Следующая</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pageRange: {
      type: Number,
      default: 1
    }
  },
  computed: {
    pages() {
      let pages = [];

      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }

      return pages;
    },
    rangeStart() {
      let start = this.currentPage - this.pageRange;

      return (start > 0) ? start : 1;
    },

    rangeEnd() {
      let end = this.currentPage + this.pageRange;
      
      return (end < this.totalPages) ? end : this.totalPages;
    },
    currentPage() {
      return this.$store.getters.currentPage;
    },
    totalPages() {
      const { totalCards, perPage } = this.$store.getters;

      return Math.ceil(totalCards / perPage)
    },
    hasPrev() {
      return this.currentPage > 1;
    },
    hasNext() {
      return this.currentPage < this.totalPages
    },
    hasFirst() {
      return this.rangeStart !== 1;
    },
    hasLast() {
      return this.rangeEnd !== this.totalPages;
    },
    nextPage() {
      return this.currentPage + 1;
    },
    prevPage() {
      return this.currentPage - 1;
    }
  },
  methods: {
    changePage(page) {
      const { query } = this.$route;
      
      if (query.search) {
        this.$router.push(`?search=${query.search}&page=${page}`)
      } else {
        this.$router.push(`?page=${page}`);
      }

      this.$store.commit('CHANGE_PAGE', page);
      this.$store.dispatch('GET_CARDS', this.$route.query);
    }
  }

}
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  height: 4.4rem;
  display: flex;
  justify-content: space-between;
  margin: 3rem auto 3rem;
  padding: 0 1.5rem;
  max-width: 128rem;

  &__left {
    width: 20%;
    float: left;
  }

  &__right {
    width: 20%;
    float: right;
  }

  a {
    display: block;
    max-width: 16rem;
    height: 4.4rem;
    text-align: center;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 4.2rem;
    color: #999999;
    padding: 0 2rem;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #cccccc;
    text-decoration: none;
    margin: 0 0.6rem;

    &.current {
      border-color: #607d8b;
      color: #607d8b;
    }
  }

  &__mid {
    display: flex;
    justify-content: center;
    width: 60%;

    li {
      display: inline-block;
    }
  }

}
</style>