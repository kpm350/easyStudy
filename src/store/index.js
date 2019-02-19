import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    list: [
      {
        id: 0,
        title: "使用 nodejs 创建文件夹的方法是",
        key: "mkdir",
        level: "",
        category: "nodejs"
      },
      {
        id: 1,
        title: "1",
        key: "1",
        level: "",
        category: "nodejs"
      },
      {
        id: 2,
        title: "2",
        key: "2",
        level: "",
        category: "nodejs"
      }
    ],

    index: 0,
    log: []
  },
  getters: {
    current: function(state) {
      return state.list[state.index];
    }
  },
  mutations: {
    updateList(state, payload) {
      state = payload;
    },
    updateLog(state, payload) {
      state.log.push(payload);
      state.index++;
    }
  },
  actions: {
    next({ commit }, payload) {
      commit("updateLog", payload);
    }
  }
});
