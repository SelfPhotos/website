<template>
  <header
    class="d-flex align-center justify-center px-16"
    style="
      height: 64px;
      border-top-width: 0;
      border-right-width: 0;
      border-left-width: 0;
      border-bottom-width: thin;
      border-color: rgba(var(--v-border-color), var(--v-border-opacity));
      border-style: solid;
    "
  >
    <div class="d-flex" style="max-width: 1296px; flex: 1">
      <div style="flex: 1" class="d-flex align-center">
        <img
          class="cursor-pointer pr-1"
          width="auto"
          height="40"
          src="@/assets/logo.png"
          @click="router.push('/')"
        />
        <div
          class="cursor-pointer"
          style="
            color: rgb(68, 71, 70);
            font-family: 'Product Sans', Arial, Helvetica, sans-serif;
            font-size: 20px;
          "
          @click="router.push('/')"
        >
          {{ appStore.language === "zh-CN" ? "爱看相册" : "Self Photos" }}
        </div>
      </div>
      <div class="d-flex align-center ga-1">
        <v-menu open-on-hover>
          <template #activator="value">
            <v-btn
              class="text-none"
              rounded="lg"
              variant="text"
              v-bind="value.props"
            >
              {{ $t("message.feedback.Wechat") }}
            </v-btn>
          </template>
          <div>
            <img src="@/assets/weChatQrcode.png" width="200" />
          </div>
        </v-menu>
        <v-btn class="text-none" rounded="lg" variant="text" @click="goGithub">
          {{ $t("message.feedback.Github") }}
          <template #append>
            <span class="material-symbols-outlined" style="font-size: 20px">
              open_in_new
            </span>
          </template>
        </v-btn>
        <v-btn class="text-none" rounded="lg" variant="text" @click="goDiscord">
          {{ $t("message.feedback.Discord") }}
          <template #append>
            <span class="material-symbols-outlined" style="font-size: 20px">
              open_in_new
            </span>
          </template>
        </v-btn>
        <v-btn
          class="text-none"
          variant="text"
          rounded="lg"
          @click="router.push('/download')"
        >
          {{ $t("message.Download") }}
        </v-btn>
        <v-select
          v-model="languageValue"
          :items="languageOption"
          variant="outlined"
          hide-details
          width="150"
          rounded="lg"
          density="compact"
        >
          <template #item="{ props, item }">
            <v-list-item
              v-bind="props"
              :subtitle="$t(`message.locale.${item.value}`)"
            />
          </template>
        </v-select>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import localJson from "@/locales/locale.json";
import { onMounted, reactive, ref, watch } from "vue";
import { useAppStore } from "@/store/appStore";
import { DISCORD_URL, GITHUB_URL } from "@/config/url";
import { setTitle } from "@/utils/common";

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();
const appStore = useAppStore();

const languageValue = ref<string>("en-US");
const languageOption = reactive(localJson);

onMounted(() => {
  languageValue.value = appStore.language;
});

watch(
  () => languageValue.value,
  (val) => {
    locale.value = val;
    appStore.changeLanguage(val);
    setTitle(route.path, appStore.language);
  }
);

function goDiscord() {
  window.open(DISCORD_URL, "_blank");
}
function goGithub() {
  window.open(GITHUB_URL, "_blank");
}
</script>
