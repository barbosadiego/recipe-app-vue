<template>
  <section class="recipe-modal" @click="handleClick">

    <div class="recipe-info">

      <h1>{{ recipe[0].title }}</h1>
      <p>{{ recipe[0].description }}</p>

      <div>
        <h2>ingredientes</h2>
        <ul>
          <li v-for="(item, i) in recipe[0].ingredients" :key="i">
            {{ `${i + 1} - ${item}` }}
          </li>
        </ul>
      </div>

      <div>
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
  methods: {
    handleClick({target, currentTarget}) {
      console.log(target, currentTarget);
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

  .recipe-info{
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 3px;
    max-width: 600px;
    background-color: #fff;
    box-shadow: 0 0 0 1000px rgba($color: #000000, $alpha: 0.5);
    z-index: 10;
    @media (max-width: 768px) {
      top: 1rem;
      max-width: 90%;
    }
  }

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    text-transform: capitalize;
    margin: 1rem 0;
  }

  li {
    margin: 0.5rem 0;
  }
}
</style>
