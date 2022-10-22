export default {
  quotes(state) {
    return state.quotes;
  },
  error(state) {
    return state.error;
  },
  count(state) {
    return state.count;
  },
  hasQuotes(state) {
    return state.quotes && state.quotes.length > 0;
  },
  isLoading(state){
    return state.loading;
  }
};
