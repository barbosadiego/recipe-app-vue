<template>
  <div id="app">

    <h1>Receitas</h1>
    <button @click="isActive = !isActive" class="add-btn btn">Adicionar receita</button>

    <div class="recipes-list" v-if="recipe">

      <ul class="recipe">
        
        <li v-for="(item, index) in $store.state.recipe" :key="index">
          <h3>{{item.title}}</h3>
          <p>{{shorten(item.description)}}</p>
          <router-link :to="`/recipe/${item.slug}`" @click.native="viewRecipe = !viewRecipe">
            <button class="btn">ver receita</button>
          </router-link>
        </li>

      </ul>
    </div>
    
    <router-view v-if="viewRecipe"></router-view>

    <section class="add-recipes" v-show="isActive">

      <h2>Adicionar nova receita</h2>

      <form class="form">

        <label for="title">Título</label>
        <input type="text" name="title" id="title" v-model="newRecipe.title">

        <label for="description">Descrição</label>
        <textarea name="description" id="description" cols="30" rows="5" 
          v-model="newRecipe.description"
        ></textarea>

        <label for="ingredients">Ingredientes</label>
        <input type="text" name="ingredients" id="ingredients" 
          v-model="ingredientText"
        >

        <div class="ingredients-list" v-if="newRecipe.ingredients">
          <ul>
            <li v-for="item, i in newRecipe.ingredients" :key="i">
              {{`${i + 1} - ${item}`}}
            </li>
          </ul>
        </div>

        <button class="btn" @click.prevent="addIngredient">Adicionar Ingrediente</button>

        <label for="method">Instruções</label>
        <textarea name="method" id="method" cols="30" rows="5" v-model="methodText"></textarea>

        <div class="methods-list" v-if="newRecipe.methods">
          <ul>
            <li v-for="item, i in newRecipe.methods" :key="i">
              {{`${i + 1} - ${item}`}}
            </li>
          </ul>
        </div>

        <button class="btn" @click.prevent="addMethod">Adicionar instrução</button>

        <div class="buttons">
          <button class="btn" @click.prevent="addRecipe">Adicionar Receita</button>
          <button class="btn" @click.prevent="isActive = false">Fechar</button>
        </div>
      </form>

    </section>

  </div>
</template>

<script>

export default {
  name: 'TheApp',
  data(){
    return {
      isActive: false,
      viewRecipe: true,
      ingredientText: '',
      methodText: '',
      newRecipe:{
        title: '',
        slug: '',
        description: '',
        ingredients: [],
        methods: [],
      }
    }
  },
  methods:{
    shorten(text){
      return `${text.slice(0,75)}...`
    },
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
      this.newRecipe.slug = this.newRecipe.title.toLowerCase().replace(/\s/g, '-')
      this.$store.commit('ADD_RECIPE', this.newRecipe);
      this.isActive = false;
    }
  },
  computed:{ 
    recipe(){
      return this.$store.state.recipe
    },
  }
}
</script>

<style lang="scss">

*{
  box-sizing: border-box;
}

body, h1, h2, p, ul{
  margin: 0px;
  padding: 0px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
  min-height: 100vh;
}

ul{
  list-style: none;
}

.btn{
  background-color: #84f;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  text-transform: capitalize;
  transition: .1s;

  &:active{
    background: lighten(#84f, 5%);
    @media (max-width:768px){
      box-shadow: unset;
    }
  }

  &:hover{
    box-shadow: 0 0 0 3px rgba(137, 68, 255, 0.5);
    @media (max-width:768px){
      box-shadow: unset;
    }
  }
}

#app{
  background-color: #f1f1f1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    padding-top: 2rem;
  }

  .add-btn{
    margin: 1rem 0;
  }

  .recipes-list{
    max-width: 800px;

    .recipe{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      @media (max-width:768px){
        grid-template-columns: 1fr;
        margin: 1rem;
      }

      li{
        background-color: #fff;
        padding: 1rem;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p{
          margin-bottom: 1rem;
          flex: 1;
        }
      }
    }
  }

  .add-recipes{
    display: flex;
    flex-direction: column;
    width: 600px;
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0 0 0 1000px #00000080;
    position: absolute;
    z-index: 10;
    border-radius: 3px;
    margin: 1rem;
    @media (max-width:768px) {
      max-width: 90%;
    }

    h2{
      margin: 1rem 0;
      padding: 0;
    }

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
  }
}
</style>
