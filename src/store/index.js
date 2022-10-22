import { createStore } from 'vuex';

import userModule from './users/index.js';

const store = createStore({
  modules: {
    user: userModule,
  },
  state() {
    return {};
  },
  getters: {}
});

export default store;
