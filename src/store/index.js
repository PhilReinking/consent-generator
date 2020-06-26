import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


const state = {
  view: 'activities',

  company: 'Deck9',
  name: 'Philipp Reinking',
  email: 'privacy@deck9.co',
  privacy_url: 'https://privacy.deck9.co',
  legal_notice_url: 'https://deck9.co/legal_notice',

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
  }
};

export default new Vuex.Store({
  strict: debug,

  state,
  mutations,
})