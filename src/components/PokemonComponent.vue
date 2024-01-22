<template>
  <li>
    <h3>{{ pokemon.name.french }}</h3>
    <br />
    <img :src="'/thumbnails/' + pokemon.id + '.png'" alt="" />
    <button v-if="ajout == true" v-on:click="sendAdd(pokemon, index)">
      Ajouter
    </button>
    <button v-else v-on:click="sendDel(pokemon, index)">Supprimer</button>
  </li>
</template>

<script>
export default {
  name: "PokemonComponent",
  props: ["pokemon", "index", "ajout"],
  methods: {
    sendAdd(pokemon, index) {
      this.$emit("ajout", pokemon, index);
    },
    sendDel(pokemon, index) {
      this.$emit("suppression", pokemon, index);
    },
  },
};
</script>

<style></style>
