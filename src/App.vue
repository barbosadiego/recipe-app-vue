<template>
  <div id="app">

    <h1>Receitas</h1>
    <button @click="isActive = !isActive" class="add-btn btn">Adicionar receita</button>
    
    <RecipeList v-if="recipe" />
   
    <transition mode="out-in">
      <section class="add-recipes" v-if="isActive">
        <h2>Adicionar nova receita</h2>
        <AddRecipeForm />
      </section>
    </transition>

  </div>
</template>

<script>
import RecipeList from '@/components/RecipeList.vue'
import AddRecipeForm from '@/components/AddRecipeForm.vue'

export default {
  name: 'TheApp',
  components:{
    RecipeList,
    AddRecipeForm,
  },
  data(){
    return {
      isActive: false,
    }
  },
  computed:{ 
    recipe(){
      return this.$store.state.recipe
    },
  },
  created(){
    this.$store.commit('START')
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

a{
  text-decoration: none;
}

.v-enter,
.v-leave-to{
  transform: translate3d(0,-20px,0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active{
  transition: all .3s;
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

  .add-recipes{
    display: flex;
    flex-direction: column;
    width: 600px;
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0 0 0 1000px #00000080;
    position: fixed;
    overflow-y: scroll;
    z-index: 20;
    border-radius: 3px;
    top: 1rem;
    @media (max-width:768px) {
      height: 95%;
      max-width: 90%;
    }
  }

  h2{
    margin: 1rem 0;
    padding: 0;
  }
}
</style>
