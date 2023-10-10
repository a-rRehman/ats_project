import ApiServices from "@/services/api";

const state = {
  // token: "",
};
const getters = {
  getToken: (state) => state.token,
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

const actions = {
  //Fetching hr registertion
  async fetchHrRegistertion({ commit }, hrData) {
    const response = await ApiServices.hr_registeration(hrData);
    return response;
    // console.log(response);
  },

  //Fetching Candidate Registration
  async fetchCandidateRegistration(candidateData) {
    const response = await ApiServices.candidate_registeration(candidateData);
    return response;
    // console.log(response);
  },

  //Fetching user Login
  async fetchUserLogin({ commit }, userData) {
    const response = await ApiServices.hr_login(userData);
    commit("setToken", response.access_token);
    return response;
  },

  //Fetching User Logout
  async fetchUserLogout({ commit }) {
    const token = localStorage.getItem("access_token");
    const response = await ApiServices.user_logout(token);
    return response;
  },

  //hr Crud

  //Create Job Post
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
