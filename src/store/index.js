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
        level: "1",
        category: "nodejs"
      },
      {
        id: 1,
        title: "webpack中,包含用户环境信息的变量是",
        key: "process.env",
        level: "1",
        category: "nodejs"
      },
      {
        id: 2,
        title: "vuecli中,区分开发或者生产环境的常量是process.?.?",
        key: "process.env.NODE_ENV",
        level: "1",
        category: "nodejs"
      },
      {
        id: 3,
        title: ""
      }
    ],
    userPut: "",
    index: 0,
    log: []
  },
  getters: {
    current: function(state) {
      return state.list[state.index];
    },
    listLen: state => state.list.length
  },
  mutations: {
    updateList(state, payload) {
      state = payload;
    },
    updateUserPut(state, payload) {
      state = payload;
    },
    updateLog(state, payload) {
      state.log.push(payload);
      if (state.index < state.list.length - 1) {
        state.index++;
      } else {
        state.index = state.list.length - 1;
      }
    }
  },
  actions: {
    pushLog({ commit }, payload) {
      commit("updateLog", payload);
    }
  }
});
