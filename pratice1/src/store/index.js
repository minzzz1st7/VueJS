import Vue from "vue";
import Vuex from "vuex";
import http from "@/api/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    qnas: [],
    qna: null,
    ans: null,
  },
  getters: {},
  mutations: {
    SET_QNAS(state, data) {
      console.log(data);
      state.qnas = data;
      console.log(state.qnas);
    },
  },
  actions: {
    getQnAs({ commit }) {
      http
        .get(`/qna/list`)
        .then(({ data }) => {
          commit("SET_QNAS", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAns() {
      http
        .get(`/qna/ans/` + this.state.qna.articleno)
        .then(({ data }) => {
          this.state.ans = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchQnAs({ commit }, keyword) {
      http
        .get(`/qna/search/` + keyword)
        .then(({ data }) => {
          commit("SET_QNAS", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    registAns({ commit }, ans) {
      console.log(commit);
      console.log(ans);
      http
        .post(`/qna/ansreg/`, null, {
          params: ans,
        })
        .then((response) => {
          console.log(response);
          this.dispatch("getAns");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
