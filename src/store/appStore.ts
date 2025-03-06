import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    isInChina: false,
    osType: "Windows" as "Windows" | "MacOS" | "Linux" | "Android" | "iOS",
    language: "en-US" as string,
  }),
  getters: {},
  actions: {
    init() {
      const userAgent = navigator.userAgent;
      if (userAgent.indexOf("Windows NT") !== -1) {
        this.changeOsType("Windows");
      } else if (userAgent.indexOf("Mac OS X") !== -1) {
        this.changeOsType("MacOS");
      } else if (userAgent.indexOf("Linux") !== -1) {
        this.changeOsType("Linux");
      } else if (userAgent.indexOf("Android") !== -1) {
        this.changeOsType("Android");
      } else if (
        userAgent.indexOf("iPhone") !== -1 ||
        userAgent.indexOf("iPad") !== -1
      ) {
        this.changeOsType("iOS");
      }

      if (navigator.language === "zh-CN") {
        this.changeIsInChina(true);
      } else {
        this.changeIsInChina(false);
      }

      let defaultLanguage = navigator.language;
      switch (defaultLanguage) {
        case "de-DE":
        case "en-US":
        case "es-ES":
        case "fr-FR":
        case "hi-IN":
        case "it-IT":
        case "ja-JP":
        case "pt-PT":
        case "ru-RU":
        case "zh-CN":
          break;
        default:
          defaultLanguage = "en-US";
      }
      this.changeLanguage(defaultLanguage);
    },
    changeIsInChina(val: boolean) {
      this.isInChina = val;
    },
    changeOsType(val: "Windows" | "MacOS" | "Linux" | "Android" | "iOS") {
      this.osType = val;
    },
    changeLanguage(newLanguage: string) {
      this.language = newLanguage;
    },
  },
});
