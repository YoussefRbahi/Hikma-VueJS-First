import { createStore } from 'vuex'

export default createStore({
  state: {
    filteredUniversities: [],
    universities: [],
    programs: []
  },
  mutations: {
    setUniversities(state, universities) {
      state.universities = universities
    },
    setPrograms(state, programs) {
      state.programs = programs
    },
    setFilteredUniversities(state, universities) {
      state.filteredUniversities = universities
    }
  },
  actions: {},
  getters: {
    getUniversities(state) {
      return state.universities
    },
    getPrograms(state) {
      return state.programs
    },
    getFilteredUniversities(state) {
      return state.filteredUniversities
    }
  }
})
