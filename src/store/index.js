import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colorState: "red",
    bgColor: "bg_red"
  },
  mutations: {
    updateColor(state, color) {
      state.colorState = color;
    }, updateColorBg(state, color) {
      state.bgColor = color;
    },
  },
  actions: {
    updateColor({ commit }, payload) {
      commit("updateColor", payload);
    }, updateColorBg({ commit }, payload) {
      commit("updateColorBg", payload);
    },
  },
  modules: {},
});
