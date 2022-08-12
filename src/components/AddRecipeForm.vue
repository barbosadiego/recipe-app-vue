<template>
  <form class="form">
    <label for="title">Título</label>
    <input type="text" name="title" id="title" v-model="newRecipe.title" />

    <label for="description">Descrição</label>
    <textarea
      name="description"
      id="description"
      cols="30"
      rows="5"
      v-model="newRecipe.description"
    ></textarea>

    <label for="ingredients">Ingredientes</label>
    <input
      type="text"
      name="ingredients"
      id="ingredients"
      v-model="ingredientText"
    />

    <div class="ingredients-list" v-if="newRecipe.ingredients">
      <ul>
        <li v-for="(item, i) in newRecipe.ingredients" :key="i">
          {{ `${i + 1} - ${item}` }}
        </li>
      </ul>
    </div>

    <button class="btn" @click.prevent="addIngredient">
      Adicionar Ingrediente
    </button>

    <label for="method">Instruções</label>
    <textarea
      name="method"
      id="method"
      cols="30"
      rows="5"
      v-model="methodText"
    ></textarea>

    <div class="methods-list" v-if="newRecipe.methods">
      <ul>
        <li v-for="(item, i) in newRecipe.methods" :key="i">
          {{ `${i + 1} - ${item}` }}
        </li>
      </ul>
    </div>

    <button class="btn" @click.prevent="addMethod">Adicionar instrução</button>

    <div class="buttons">
      <button class="btn" @click.prevent="addRecipe">Adicionar Receita</button>
      <button class="btn" @click.prevent="isActive = false">Fechar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddRecipeForm',
  data(){
    return{
      isActive: false,
      ingredientText: '',
      methodText: '',
      newRecipe:{
        title: '',
        slug: '',
        description: '',
        ingredients: [],
        methods: [],
      },
    }
  },
  methods:{
    addIngredient(){
      if(this.ingredientText.length){
        this.newRecipe.ingredients.push(this.ingredientText);
        this.ingredientText = '';
      }
    },
    addMethod(){
      if(this.methodText.length){
        this.newRecipe.methods.push(this.methodText);
        this.methodText = '';
      }
    },
    addRecipe(){
      this.newRecipe.slug = this.newRecipe.title
        .normalize('NFD')
        .replace(/[^a-zA-Z\s]/g, "")
        .toLowerCase()
        .replace(/\s/g, '-')
      ;
      if(this.newRecipe.slug){
        this.$store.commit('ADD_RECIPE', this.newRecipe);
        this.setRecipes(this.newRecipe);
        this.isActive = false;
        this.clearRecipe();
      } else {
        window.alert('Por favor informe o título da receita.')
      }
    },
    getRecipes(){
      return JSON.parse(localStorage.getItem('recipes')) ?? [];
    },
    setRecipes(recipe){
      return localStorage.setItem('recipes', JSON.stringify(recipe));
    },
    clearRecipe(){
      this.newRecipe = {
        title: '',
        slug: '',
        description: '',
        ingredients: [],
        methods: [],
      }
    },
  },
  
};
</script>

<style lang="scss" scoped>
.form{
  display: grid;
  justify-items: start;
  gap: 1rem;

  input, 
  label,
  textarea{
    width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    outline: none;
    border: none;
  }

  label{
    font-size: 1.1rem;
  }

  input,
  textarea{
    padding: 10px;
    border: 1px solid #84f;
    border-radius: 3px;
  }

  textarea{
    resize: none;
  }

  hr{
    background-color: #84f;
  }

  .buttons{
    width: 100%;
    padding-top: 1rem;
    display: flex;
    gap: 1rem;
    border-top: 1px solid #84f;
  }
}

</style>
