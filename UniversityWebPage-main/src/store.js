import { createStore } from 'vuex';
import * as getters from './getters.js';
import * as mutations  from './mutations.js';


const store = createStore({
  state () {
    return {
      count: 1
    }
  },
  getters: {
    [getters.GET_COUNT](state){
      return state.count
    }
  },
  mutations: {
    [mutations.INCREMENT_COUNT](state){
      state.count++
    }
  }
})

export default store;