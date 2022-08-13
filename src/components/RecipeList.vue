<template>
  <section class="recipes-list">

    <ul class="recipe">

      <li v-for="(item, index) in recipe" :key="index">

        <h3>{{ item.title }}</h3>

        <p>{{ shorten(item.description) }}</p>

        <router-link :to="`/recipe/${item.slug}`"
          @click.native="viewRecipe = true">
          <button class="btn">ver receita</button>
        </router-link>

      </li>

    </ul>

    <transition>
      <router-view v-if="viewRecipe">
        <RecipePage />
      </router-view>
    </transition>

  </section>
</template>

<script>
import RecipePage from '@/components/RecipePage.vue'

export default {
  name: 'RecipeList',
  components:{
    RecipePage,
  },
  data(){
    return{
      viewRecipe: false,
    }
  },
  methods: {
    shorten(text) {
      return text.length > 75 ? `${text.slice(0, 75)}...` : text;
    },
  },
  computed:{ 
    recipe(){
      return this.$store.state.recipe
    },
  },
};
</script>

<style lang="scss" scoped>
.recipes-list {
  max-width: 800px;
  padding-bottom: 50px;

  .recipe {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-items: stretch;
      margin: 1rem;
      width: 90%;
    }

    li {
      background-color: #fff;
      padding: 1rem;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      p {
        margin-bottom: 1rem;
        flex: 1;
      }
    }
  }
}
</style>
