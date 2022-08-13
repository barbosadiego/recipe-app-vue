import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipe:[],
    isActive: false,
  },
  getters: {
  },
  mutations: {
    ADD_RECIPE(state, payload){
      state.recipe.unshift(payload);
      console.log(payload)
      localStorage.setItem('recipes', JSON.stringify(state.recipe));
    },
    START(state){
      const data = JSON.parse(localStorage.getItem('recipes'));
      if(data) {
        try{
          state.recipe.push( ...data );
        } catch(e){
          localStorage.removeItem('recipes');
        }
      } 
    },
    SHOW_ADD_RECIPE_FORM(state){
      state.isActive = !state.isActive;
    }
  },
  actions: {
  },
  modules: {
  }
})
