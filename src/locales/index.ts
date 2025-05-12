import { createI18n } from "vue-i18n";

// default lang
import enUSLocale from "@/locales/lang/en-US";
import zhCNLocale from "@/locales/lang/zh-CN";

export const i18n = createI18n({
  locale: "en-US",
  legacy: false,
  messages: {
    "en-US": enUSLocale,
    "zh-CN": zhCNLocale,
  },
});
