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
  height: 95vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 20;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);

  h1 {
    padding-top: 0px;
    margin-bottom: 1.5rem;
    font-size: 2rem;
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
    overflow-y: auto;
    padding: 1rem;
    border-radius: 3px;
    width: 600px;
    height: 95vh;
    background-color: #fff;
    box-shadow: 0 0 0 1000px rgba($color: #000000, $alpha: 0.5);
    @media (max-width: 768px) {
      top: 1rem;
      width: 90%;
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
