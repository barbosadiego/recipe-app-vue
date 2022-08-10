import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipe:[
      {
        title: 'Pé de Moleque',
        slug: 'pe-de-moleque',
        description: 'Doce tradicional nordestino',
        ingredients: ['1/2 kg de amendoim torrado e descascado', '1/2 kg de açúcar', '1 lata de leite condensado', '3 colheres de margarina'],
        methods: ['Colocar na panela o amendoim, o açúcar e a margarina', 'Levar ao fogo, mexendo sempre', 'Quando começar a formar uma calda, coloque o leite condensado', 'Mexa bem, até soltar do fundo da panela, como brigadeiro', 'Coloque no tabuleiro untado com margarina', 'Deixe esfriar e corte em pedaços']
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
