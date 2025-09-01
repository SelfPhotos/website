import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { LOCAL_STORAGE_KEY, LanguageKind, OsTypeKind } from "@/types/enums";

export const useAppStore = defineStore("app", () => {
  const osType = ref<OsTypeKind>(OsTypeKind.Windows);
  const language = ref<LanguageKind>(LanguageKind.en);
  const languageOptions = reactive([
    { kind: LanguageKind.zh, name: "中文" },
    { kind: LanguageKind.en, name: "English" },
  ]);

  const homeFAQCount = ref(4);
  const totalFAQCount = ref(9);
  const totalTermsCount = ref(9);
  const totalPrivacysCount = ref(6);

  function init() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) osType.value = OsTypeKind.Android;
    else if (/iPad|iPhone|iPod/.test(userAgent)) osType.value = OsTypeKind.iOS;
    else if (/mac/i.test(userAgent)) osType.value = OsTypeKind.MacOS;
    else if (/linux/i.test(userAgent)) osType.value = OsTypeKind.Linux;
    else osType.value = OsTypeKind.Windows;

    const language = localStorage.getItem(LOCAL_STORAGE_KEY.Language);
    if (language === LanguageKind.en || language === LanguageKind.zh) {
      changeLanguage(language);
    } else {
      const url = window.location.href;
      if (url.indexOf("aikanxiangce.com") >= 0) {
        changeLanguage(LanguageKind.zh);
      } else {
        let defaultLanguage = navigator.language;
        switch (defaultLanguage) {
          case LanguageKind.zh:
            changeLanguage(LanguageKind.zh);
            break;
          default:
            changeLanguage(LanguageKind.en);
        }
      }
    }
  }
  function changeLanguage(value: LanguageKind) {
    localStorage.setItem(LOCAL_STORAGE_KEY.Language, value);
    language.value = value;
  }

  return {
    osType,
    language,
    languageOptions,
    init,
    changeLanguage,
    homeFAQCount,
    totalFAQCount,
    totalTermsCount,
    totalPrivacysCount,
  };
});
