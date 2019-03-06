import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//https://vuex.vuejs.org
export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, isLoading) {
      state.loading = isLoading;
    }
  },
  actions: {}
});
