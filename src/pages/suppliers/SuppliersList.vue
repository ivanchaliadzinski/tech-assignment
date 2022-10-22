<template>
  <div>
    <section>
      <base-dialog :show="isLoading" loader title="Loading..."></base-dialog>
      <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
        <p>{{ exportErrorMessage(error) }}</p>
      </base-dialog>
      <base-card>
        <ul v-if="hasSuppliers">
          <li class="header">
            <h2>List of suppliers:</h2>
          </li>
          <supplier-item
              v-for="supplier in suppliers"
              :key="supplier.id"
              :name="supplier.name"
              :id="supplier.id"
              :router="this.$router"
          ></supplier-item>
        </ul>
        <h3 v-else>No Suppliers.</h3>
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
import SupplierItem from './SupplierItem';
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
    SupplierItem,
  },
  created() {
    this.fetchSuppliers();
  },
  methods: {
    ...mapActions('suppliers', ['getSuppliers']),
    fetchSuppliers() {
      this.getSuppliers({ page: this.page });
    },
    changePage(page){
      this.page = page;
    },
    handleError(){
      this.clearError();
    },
    exportErrorMessage
  },
  computed: {
    ...mapGetters('suppliers', ['suppliers', 'isLoading', 'hasSuppliers', 'count', 'error']),
    pages(){
      return Math.ceil(this.count / 10);
    }
  },
  watch: {
    page(currentValue, previousValue){
      if (currentValue && currentValue !== previousValue) {
        this.fetchSuppliers();
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
