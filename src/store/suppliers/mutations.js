export default {
  setSuppliers(state, payload) {
    state.suppliers = payload;
  },
  setCount(state, payload) {
    state.count = payload;
  },
  setSupplier(state, payload) {
    state.supplier = payload;
  },
  setStartLoad(state) {
    state.loading = true;
  },
  setFinishLoad(state) {
    state.loading = false;
  },
  setError(state, payload) {
    state.error = payload;
  }
};
