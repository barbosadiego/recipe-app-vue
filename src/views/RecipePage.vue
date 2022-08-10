<template>
  <section>
    <h1>{{ recipe[0].title }}</h1>
    <p>{{ recipe[0].description}}</p>
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
