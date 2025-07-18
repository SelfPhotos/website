import vuetify from "./vuetify";
import router from "../router";
import { createPinia } from "pinia";
import { i18n } from "@/locales/index";

const pinia = createPinia();

import type { App } from "vue";

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia).use(i18n);
}
