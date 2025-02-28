import { createI18n } from "vue-i18n";

// default lang
import enUSLocale from "@/locales/lang/en-US";
import zhCNLocale from "@/locales/lang/zh-CN";
// import deDELocale from "@/locales/lang/de-DE";
// import esESLocale from "@/locales/lang/es-ES";
// import frFRLocale from "@/locales/lang/fr-FR";
// import itITLocale from "@/locales/lang/it-IT";
// import ptPTLocale from "@/locales/lang/pt-PT";
// import ruRULocale from "@/locales/lang/ru-RU";
// import hiINLocale from "@/locales/lang/hi-IN";
// import jaJPLocale from "@/locales/lang/ja-JP";

export const i18n = createI18n({
  locale: "en-US",
  legacy: false,
  messages: {
    // "de-DE": deDELocale,
    "en-US": enUSLocale,
    // "es-ES": esESLocale,
    // "fr-FR": frFRLocale,
    // "hi-IN": hiINLocale,
    // "it-IT": itITLocale,
    // "ja-JP": jaJPLocale,
    // "pt-PT": ptPTLocale,
    // "ru-RU": ruRULocale,
    "zh-CN": zhCNLocale,
  },
});
