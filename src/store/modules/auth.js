import api from '../../api/imgur';

const state = { token: null };

const getters = { isLoggedIn: ({ token }) => !!token };

const actions = {
  login() { api.login(); },
  logout({ commit }) {
    commit('setToken', null);
  },
};

const mutations = {
  setToken({ token }, value) {
    token = value;
  },
};

export default {
  state, getters, actions, mutations,
};
