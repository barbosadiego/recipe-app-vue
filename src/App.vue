<template>
  <div id="app">

    <h1>Receitas</h1>
    <button @click="isActive = !isActive" class="add-btn btn">Adicionar receita</button>

    <div class="recipes-list" v-if="recipe">

      <ul class="recipe">

        <li v-for="(item, index) in recipe" :key="index">
          <h3>{{item.title}}</h3>
          <p>{{shorten(item.description)}}</p>
          <button class="btn">ver receita</button>
        </li>

      </ul>

    </div>

    <section class="add-recipes" v-show="isActive">

      <h2>Adicionar nova receita</h2>

      <form class="form">

        <label for="title">Título</label>
        <input type="text" name="title" id="title">

        <label for="desc">Descrição</label>
        <textarea name="desc" id="desc" cols="30" rows="5"></textarea>

        <label for="ingredients">Ingredientes</label>
        <input type="text" name="ingredients" id="ingredients">

        <button class="btn" @click.prevent="">Adicionar Ingrediente</button>

        <label for="method">Instruções</label>
        <textarea name="method" id="method" cols="30" rows="5"></textarea>

        <button class="btn" @click.prevent="">Adicionar instrução</button>

        <div class="buttons">
          <button class="btn" @click.prevent="">Adicionar Receita</button>
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
    }
  },
  methods:{
    shorten(text){
      return `${text.slice(0,75)}...`
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

        p{
          margin-bottom: 1rem;
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
