<template>
  <base-card>
    <h3>{{ `${supplier?.id} - ${supplier?.name}` }}</h3>
    <p>{{ supplier?.description }}</p>
    <base-button @click="back">Back</base-button>
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

<style scoped>

</style>
