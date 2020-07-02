import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";
const LOCAL_STORAGE_KEY = "gdpr-consent-generator.com";

// check if a config exists in local storage
const storedConfig = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

const state = {
  saveOnDisk: false,

  company: undefined,
  name: undefined,
  email: undefined,
  privacy_url: undefined,
  legal_notice_url: undefined,

  activities: [],

  // merge loaded config with default settings
  ...storedConfig,

  view: "editor",
};

const mutations = {
  setView: (state, payload) => {
    state.view = payload;
  },

  toggleSave: (state) => {
    state.saveOnDisk = !state.saveOnDisk;

    // remove saved config, if turned off
    if (!state.saveOnDisk) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }    
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
  updateActivity: (state, payload) => {
    state.activities[payload.index] = payload.item;
  },
  removeActivity: (state, payload) => {
    state.activities.splice(payload, 1);
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
  }
});

export default store;
