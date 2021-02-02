import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colorState: "blue",
  },
  mutations: {
    updateColor(state, color) {
      state.colorState = color;
    },
  },
  actions: {
    updateColor({ commit }, payload) {
      console.log(payload)
      commit("updateColor", payload);
    },
  },
  modules: {},
});
