export default {
  setQuotes(state, payload) {
    state.quotes = payload;
  },
  setCount(state, payload) {
    state.count = payload;
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
