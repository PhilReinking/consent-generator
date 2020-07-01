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

const LOCAL_STORAGE_KEY = "consent-storage";

const mutations = {
  setView: (state, payload) => {
    state.view = payload;
  },

  toggleSave: (state) => {
    state.saveOnDisk = !state.saveOnDisk;
  },

  setCompany: (state, payload) => {
    state.company = payload;
  },
  setName: (state, payload) => {
    state.name = payload;
  },
  setEmail: (state, payload) => {
    state.email = payload;
  },
  setPrivacyUrl: (state, payload) => {
    state.privacy_url = payload;
  },
  setLegalNoticeUrl: (state, payload) => {
    state.legal_notice_url = payload;
  },

  addActivity: (state, payload) => {
    state.activities.push(payload);
  },
  removeActivity: (state, payload) => {
    state.activities.splice(payload, 1);
  },

  initStore: (state) => {
    let storedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedState) {
      storedState = JSON.parse(storedState);
      for (let prop in storedState) {
        state[prop] = storedState[prop];
      }
    }
  },
};

let store = new Vuex.Store({
  strict: debug,

  state,
  mutations,
});

store.subscribe((mutation, state) => {
  if (state.saveOnDisk) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  } else {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
});

export default store;
