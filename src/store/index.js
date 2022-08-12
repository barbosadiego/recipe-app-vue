import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipe:[]
  },
  getters: {
  },
  mutations: {
    ADD_RECIPE(state, payload){
      state.recipe.push(payload);
      localStorage.setItem('recipes', JSON.stringify(this.recipe));
    },
    START(state){
      const data = JSON.parse(localStorage.getItem('recipes'));
      console.log(data)
      if(data) state.recipe.push( ...state.recipe, data );
      else return
    }
  },
  actions: {
  },
  modules: {
  }
})
