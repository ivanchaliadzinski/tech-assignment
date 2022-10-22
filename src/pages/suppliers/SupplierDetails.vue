<template>
  <base-card>
    <div class="wrapper">
      <h3>{{ `${supplier?.id} - ${supplier?.name}` }}</h3>
      <p>{{ supplier?.description }}</p>
      <base-button @click="back">Back</base-button>
    </div>
  </base-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: ['id'],
  methods: {
    ...mapActions('suppliers', ['getSupplier']),
    back(){
      this.$router.replace('/suppliers');
    },
  },
  created() {
    this.getSupplier(this.id);
  },
  computed: {
    ...mapGetters('suppliers', ['supplier']),
  },
};
</script>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
