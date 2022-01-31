import { createStore } from 'vuex'

export default createStore({
  state: {
    work:{},
  },
  mutations: {
    updateWorkCoordinate(state,payload){
      state.work = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
