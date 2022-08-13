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
      console.log(payload)
      localStorage.setItem('recipes', JSON.stringify(state.recipe));
    },
    START(state){
      const data = JSON.parse(localStorage.getItem('recipes'));
      console.log(data)
      if(data) {
        try{
          state.recipe.push( ...data );
        } catch(e){
          localStorage.removeItem('recipes');
          console.log(e);
        }
      } 
    }
  },
  actions: {
  },
  modules: {
  }
})
