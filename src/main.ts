import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";

import "@/style.css";
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(pinia).use(VueQueryPlugin).mount("#app");
