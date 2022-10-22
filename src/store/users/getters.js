export default {
    user(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return !!state.user?.auth_token || !!state.user?.token;
    },
    isLoading(state) {
        return state.loading;
    },
    error(state) {
        return state?.error;
    }
};
