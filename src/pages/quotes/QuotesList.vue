<template>
  <div>
    <section>
      <base-dialog :show="isLoading" loader title="Loading..."></base-dialog>
      <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
        <p>{{ exportErrorMessage(error) }}</p>
      </base-dialog>
      <base-card>
        <ul v-if="hasQuotes">
          <li class="header">
            <h2>List of Quotes:</h2>
          </li>
          <quote-item
              v-for="quote in quotes"
              :key="quote.id"
              :title="quote.title"
              :created="quote.created"
              :id="quote.id"
          ></quote-item>
        </ul>
        <h3 v-else>No Quotes.</h3>
        <div class="navigation">
          <base-pagination
              :page="page"
              :pages="pages"
              @change-page="changePage"
          ></base-pagination>
        </div>
      </base-card>
    </section>
  </div>
</template>

<script>
import QuoteItem from './QuoteItem';
import { mapActions, mapGetters } from 'vuex';
import BaseDialog from "@/components/interface/BaseDialog";
import exportErrorMessage from "@/utils/exportErrorMessage";
export default {
  data() {
    return {
      page: 1,
    };
  },
  components: {
    BaseDialog,
    QuoteItem,
  },
  methods: {
    ...mapActions('quotes', ['getQuotes']),
    fetchQuotes() {
      this.getQuotes({ page: this.page });
    },
    changePage(page){
      this.page = page;
    },
    handleError(){
      this.clearError();
    },
    exportErrorMessage
  },
  created() {
    this.fetchQuotes();
  },
  computed: {
    ...mapGetters('quotes', ['quotes', 'isLoading', 'hasQuotes', 'count', 'error']),
    pages(){
      return Math.ceil(this.count / 10);
    }
  },
  watch: {
    page(currentValue, previousValue){
      if (currentValue && currentValue !== previousValue) {
        this.fetchQuotes();
      }
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation {
  background-color: $dark_slate_blue;
  padding: 10px;
  border-radius: 10px;
}
</style>
