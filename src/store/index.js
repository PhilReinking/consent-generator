import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


const state = {
  view: 'editor',

  company: 'Deck9',
  name: 'Philipp Reinking',
  email: 'privacy@deck9.co',
  privacy_url: 'https://privacy.deck9.co',
  legal_notice_url: 'https://deck9.co/legal_notice',

};

const mutations = {
  setView: (state, payload) => {
    state.view = payload;
  }
};

export default new Vuex.Store({
  strict: debug,

  state,
  mutations,
})