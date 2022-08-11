<template>
  <section class="recipe-modal">

    <div class="recipe-info">
      <router-link to="/" class="close">
        <button class="btn">voltar</button>
      </router-link>

      <h1>{{ recipe[0].title }}</h1>
      <p>{{ recipe[0].description }}</p>

      <div class="ingredients" v-if="recipe[0].ingredients != ''">
        <h2>ingredientes</h2>
        <ul>
          <li v-for="(item, i) in recipe[0].ingredients" :key="i">
            {{ `${i + 1} - ${item}` }}
          </li>
        </ul>
      </div>

      <div class="methods" v-if="recipe[0].methods != ''">
        <h2>modo de preparo</h2>
        <ul>
          <li v-for="(item, i) in recipe[0].methods" :key="i">
            {{ `${i + 1} - ${item}` }}
          </li>
        </ul>
      </div>
    </div>

  </section>

</template>

<script>
export default {
  name: 'RecipePage',
  computed: {
    recipe() {
      return this.$store.state.recipe.filter(
        (recipe) => recipe.slug === this.$route.params.slug,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe-modal {
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    text-transform: capitalize;
    margin: 1rem 0;
  }

  li {
    margin: 1.5rem 0;
    font-size: 1rem;
  }

  .recipe-info{
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 3px;
    width: 600px;
    background-color: #fff;
    box-shadow: 0 0 0 1000px rgba($color: #000000, $alpha: 0.5);
    z-index: 10;
    @media (max-width: 768px) {
      top: 1rem;
      max-width: 90%;
    }

    .close{
      position: relative;
      right: 0px;
      display: flex;
      justify-content: flex-end;
    }

    .ingredients ul, .methods ul{
      background-color: rgba($color: #000, $alpha: .1);
      padding: 1rem;
      border-radius: 3px;
    }
  }
}
</style>
