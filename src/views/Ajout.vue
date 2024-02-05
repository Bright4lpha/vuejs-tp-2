<template>
  <form>
    <div>
        <label for="nom">Nom</label>
        <input type="text" id="nom" />
    </div>
    <div>
        <label for="lien">Lien image</label>
        <input type="text" id="lien" />
    </div>
    <div>
        <label for="attaque">Attaque spéciale</label>
        <input type="text" id="attaque" />
    </div>
    <button v-on:click="sendAdd()">Ajouter</button>
  </form>
</template>

<script>
export default {
  name: "Ajout",
  methods: {
    sendAdd() {
      this.$emit("ajout");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
