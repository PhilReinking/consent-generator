import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const state = {
  view: "editor",

  saveOnDisk: false,

  company: undefined,
  name: undefined,
  email: undefined,
  privacy_url: undefined,
  legal_notice_url: undefined,

  activities: [],
};

const mutations = {
  SET_VIEW: (state, payload) => {
    state.view = payload;
  },

  TOGGLE_SAVE: (state) => {
    state.saveOnDisk = !state.saveOnDisk;
  },

  SET_COMPANY: (state, payload) => {
    state.company = payload;
  },
  SET_NAME: (state, payload) => {
    state.name = payload;
  },
  SET_EMAIL: (state, payload) => {
    state.email = payload;
  },
  SET_PRIVACY_URL: (state, payload) => {
    state.privacy_url = payload;
  },
  SET_LEGAL_NOTICE_URL: (state, payload) => {
    state.legal_notice_url = payload;
  },

  ADD_ACTIVITY: (state, payload) => {
    state.activities.push(payload);
  },
  REMOVE_ACTIVITY: (state, payload) => {
    state.activities.splice(payload, 1);
  },

  INIT_STORE: (state) => {
    for (let prop in state) {
      let item = localStorage.getItem(prop);
      if (item) {
        state[prop] = item;
      }
    }
  },
};

const actions = {
  setView: ({ commit, dispatch }, payload) => {
    commit("SET_VIEW", payload);
    dispatch("refreshLocalStorage");
  },

  toggleSave: ({ commit, dispatch }) => {
    commit("TOGGLE_SAVE");
    dispatch("refreshLocalStorage");
  },

  setCompany: ({ commit, dispatch }, payload) => {
    commit("SET_COMPANY", payload);
    dispatch("refreshLocalStorage");
  },
  setName: ({ commit, dispatch }, payload) => {
    commit("SET_NAME", payload);
    dispatch("refreshLocalStorage");
  },
  setEmail: ({ commit, dispatch }, payload) => {
    commit("SET_EMAIL", payload);
    dispatch("refreshLocalStorage");
  },
  setPrivacyUrl: ({ commit, dispatch }, payload) => {
    commit("SET_PRIVACY_URL", payload);
    dispatch("refreshLocalStorage");
  },
  setLegalNoticeUrl: ({ commit, dispatch }, payload) => {
    commit("SET_LEGAL_NOTICE_URL", payload);
    dispatch("refreshLocalStorage");
  },

  addActivity: ({ commit, dispatch }, payload) => {
    commit("ADD_ACTIVITY", payload);
    dispatch("refreshLocalStorage");
  },
  removeActivity: ({ commit, dispatch }, payload) => {
    commit("REMOVE_ACTIVITY", payload);
    dispatch("refreshLocalStorage");
  },

  refreshLocalStorage({ dispatch, state }) {
    if (state.saveOnDisk) {
      dispatch("saveCurrentStateToLocalStorage");
    } else {
      dispatch("clearLocalStorage");
    }
  },
  saveCurrentStateToLocalStorage({ state }) {
    for (var prop in state) {
      let item = state[prop];
      if (item) {
        localStorage.setItem(prop, item);
      }
    }
  },
  clearLocalStorage({ state }) {
    for (var prop in state) {
      localStorage.removeItem(prop);
    }
  },
};

export default new Vuex.Store({
  strict: debug,

  state,
  mutations,
  actions,
});
