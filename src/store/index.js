import { createStore } from 'vuex';

import userModule from './users/index.js';
import supplierModule from "./suppliers/index.js";

const store = createStore({
  modules: {
    user: userModule,
    suppliers: supplierModule,
  },
  state() {
    return {};
  },
  getters: {}
});

export default store;
