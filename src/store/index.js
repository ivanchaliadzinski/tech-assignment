import { createStore } from 'vuex';

import userModule from './users/index.js';
import supplierModule from "./suppliers/index.js";
import quoteModule from "./quotes/index.js";

const store = createStore({
  modules: {
    user: userModule,
    suppliers: supplierModule,
    quotes: quoteModule,
  },
  state() {
    return {};
  },
  getters: {}
});

export default store;
