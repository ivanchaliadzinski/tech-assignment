export default {
    setUser(state, payload) {
        state.user = payload;
    },
    setStartLoad(state) {
        state.loading = true;
    },
    setFinishLoad(state) {
        state.loading = false;
    },
    setError(state, payload) {
        state.error = payload;
    },
};
