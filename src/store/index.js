import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

import discussion from "./modules/discussion";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 7 }),
      removeItem: (key) => Cookies.remove(key),
    }),
  ],
  modules: {
    discussion,
    user,
  },
});
