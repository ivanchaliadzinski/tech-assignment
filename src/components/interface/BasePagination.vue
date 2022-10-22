<template>
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <button
              v-for="pageNumber in pages" @click="switchPage(pageNumber)"
              :key=pageNumber
              type="button"
              class="page-link"
              :class="{ current: page == pageNumber}"
          > {{pageNumber}} </button>
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
    }
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
