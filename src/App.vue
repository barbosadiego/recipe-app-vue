<template>
  <div id="app">

    <h1>Receitas</h1>
    <button>Adicionar receita</button>

    <section class="add-recipes">

      <h2>Adicionar nova receita</h2>

      <form class="form">

        <label for="title">Título</label>
        <input type="text" name="title" id="title">

        <label for="desc">Descrição</label>
        <textarea name="desc" id="desc" cols="30" rows="10"></textarea>

        <label for="ingredients">Ingredientes</label>
        <input type="text" name="ingredients" id="ingredients">

        <button @click.prevent="">Adicionar Ingrediente</button>

        <label for="method">Instruções</label>
        <textarea name="method" id="method" cols="30" rows="10"></textarea>

        <button @click.prevent="">Adicionar instrução</button>

        <div class="buttons">
          <button @click.prevent="">Adicionar Receita</button>
          <button @click.prevent="">Fechar</button>
        </div>

      </form>

    </section>

  </div>
</template>

<style lang="scss">

</style>
