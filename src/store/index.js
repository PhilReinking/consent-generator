import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


const state = {
  view: 'editor',

  saveOnDisk: false,

  company: undefined,
  name: undefined,
  email: undefined,
  privacy_url: undefined,
  legal_notice_url: undefined,

  activities: [],

};

const mutations = {
  setView: (state, payload) => {
    state.view = payload;
  },

  addActivity: (state, payload) => {
    state.activities.push(payload);
  },

  removeActivity: (state, payload) => {
    state.activities.splice(payload, 1)
  },

  toggleSave: (state) => {
    state.saveOnDisk = !state.saveOnDisk;
  }
};

export default new Vuex.Store({
  strict: debug,

  state,
  mutations,
})