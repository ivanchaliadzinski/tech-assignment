<template>
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <button type="button" class="page-link" v-if="page!= 1" @click="pageStep(-1)"> Previous </button>
        </li>
        <li class="page-item">
          <button
              v-for="pageNumber in filteredPages" @click="switchPage(pageNumber)"
              :key=pageNumber
              type="button"
              class="page-link"
              :class="{ current: page == pageNumber}"
          > {{pageNumber}} </button>
        </li>
        <li class="page-item">
          <button type="button" @click="pageStep(1)" v-if="page < this.pages" class="page-link"> Next </button>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  emits: ['change-page'],
  methods: {
    switchPage(pageNumber){
      this.$emit('change-page', pageNumber);
    },
    pageStep(step) {
      const newPage = this.page + step;
      this.$emit('change-page', newPage);
    }
  },
  computed: {
    filteredPages() {
      return Array.from(
          {length: 10},
          (_, i) => i + this.page
      ).filter(item => item <= this.pages);
    },
  },
  props: {
    page: {
      type: Number,
      required: true,
      default: 1
    },
    pages: {
      type: Number,
      required: true,
      default: 1
    },
  },
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  display: flex;
}

.page-link {
    font-size: 20px;
    color: white;
    background-color: transparent;
    border: none;
    font-weight: 500;
}
.current {
  border-bottom: 3px solid white;
}
</style>
