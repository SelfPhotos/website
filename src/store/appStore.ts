import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
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

      const language = localStorage.getItem("language");
      if (language) {
        this.changeLanguage(language);
      } else {
        const url = window.location.href;
        if (url.indexOf("aikanxiangce.com") >= 0) {
          this.changeLanguage("zh-CN");
        } else {
          let defaultLanguage = navigator.language;
          switch (defaultLanguage) {
            case "en-US":
            case "zh-CN":
              break;
            default:
              defaultLanguage = "en-US";
          }
          this.changeLanguage(defaultLanguage);
        }
      }
    },
    changeOsType(val: "Windows" | "MacOS" | "Linux" | "Android" | "iOS") {
      this.osType = val;
    },
    changeLanguage(newLanguage: string) {
      localStorage.setItem("language", newLanguage);
      this.language = newLanguage;
    },
  },
});
