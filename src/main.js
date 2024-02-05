import { createApp } from "vue";
import App from "./App.vue";
import Pokemon from "./components/PokemonComponent.vue";
import router from "./router";

const app = createApp(App).use(router);
app.component("pokemon", Pokemon);
app.mount("#app");
