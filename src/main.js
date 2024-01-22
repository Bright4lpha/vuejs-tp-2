import { createApp } from "vue";
import App from "./App.vue";
import Pokemon from "./components/PokemonComponent.vue";

const app = createApp(App);
app.component("pokemon", Pokemon);
app.mount("#app");
