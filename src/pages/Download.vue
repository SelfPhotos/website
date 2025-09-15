<script setup lang="ts">
import {
  ANDROID_VERSION,
  DESKTOP_VERSION,
  getDownloadAndroidUrl,
  getGithubDownloadMacOSUrl,
  getGithubDownloadWindowsUrl,
  getTencentDownloadMacOSUrl,
  getTencentDownloadWindowsUrl,
} from "@/config/url";
import { useAppStore } from "@/stores/appStore";
import { LanguageKind } from "@/types/enums";
import { onWindowOpen } from "@/utils/common";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";

const appStore = useAppStore();

const onWindowsDownloadClick = () => {
  let url = "";
  if (appStore.language === LanguageKind.zh) {
    url = getTencentDownloadWindowsUrl();
  } else {
    url = getGithubDownloadWindowsUrl();
  }
  onWindowOpen(url);
};
const onMacOSDownloadClick = () => {
  let url = "";
  if (appStore.language === LanguageKind.zh) {
    url = getTencentDownloadMacOSUrl();
  } else {
    url = getGithubDownloadMacOSUrl();
  }
  onWindowOpen(url);
};
const onAndroidDownloadClick = () => {
  let url = getDownloadAndroidUrl();
  onWindowOpen(url);
};
</script>

<template>
  <div>
    <section class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          {{ $t("message.download.title") }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          {{ $t("message.download.subtitle") }}
        </p>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
          >
            <div class="text-center">
              <div
                class="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300"
              >
                <img src="@/assets/images/logo/windows.svg" alt="Windows" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">Windows</h3>
              <div class="text-sm text-gray-500 mb-6 space-y-1">
                <div>
                  {{ $t("message.download.version") }}: v{{ DESKTOP_VERSION }}
                </div>
                <div>{{ $t("message.download.size") }}: 286 MB</div>
                <div>{{ $t("message.download.windowsTip") }}</div>
              </div>
              <button
                class="w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl flex items-center justify-center"
                @click="onWindowsDownloadClick"
              >
                <arrow-down-tray-icon class="mr-2 w-5 h-5" />{{
                  $t("message.download.downloadButton")
                }}
              </button>
            </div>
          </div>
          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
          >
            <div class="text-center">
              <div
                class="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300"
              >
                <img src="@/assets/images/logo/mac.svg" alt="MacOS" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">MacOS</h3>
              <div class="text-sm text-gray-500 mb-6 space-y-1">
                <div>
                  {{ $t("message.download.version") }}: v{{ DESKTOP_VERSION }}
                </div>
                <div>{{ $t("message.download.size") }}: 63 MB</div>
                <div>{{ $t("message.download.macosTip") }}</div>
              </div>
              <button
                class="w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl flex items-center justify-center"
                @click="onMacOSDownloadClick"
              >
                <arrow-down-tray-icon class="mr-2 w-5 h-5" />{{
                  $t("message.download.downloadButton")
                }}
              </button>
            </div>
          </div>
          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
          >
            <div class="text-center">
              <div
                class="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gray-100"
              >
                <img src="@/assets/images/logo/linux.svg" alt="Linux" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">Linux</h3>
              <div class="text-sm text-gray-500 mb-6 space-y-1">
                <div>{{ $t("message.download.version") }}: --</div>
                <div>{{ $t("message.download.size") }}: --</div>
                <div>--</div>
              </div>
              <button
                class="w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-not-allowed bg-gray-100 text-gray-700"
              >
                {{ $t("message.download.comingSoon") }}
              </button>
            </div>
          </div>
          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative border-2 border-blue-500"
          >
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span
                class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap"
              >
                {{ $t("message.download.latest") }}
              </span>
            </div>
            <div class="text-center">
              <div
                class="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300"
              >
                <img src="@/assets/images/logo/android.svg" alt="Android" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">Android</h3>
              <div class="text-sm text-gray-500 mb-6 space-y-1">
                <div>
                  {{ $t("message.download.version") }}: v{{ ANDROID_VERSION }}
                </div>
                <div>{{ $t("message.download.size") }}: 4.9 MB</div>
                <div>{{ $t("message.download.androidTip") }}</div>
              </div>
              <button
                class="w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl flex items-center justify-center"
                @click="onAndroidDownloadClick"
              >
                <arrow-down-tray-icon class="mr-2 w-5 h-5" />{{
                  $t("message.download.downloadButton")
                }}
              </button>
            </div>
          </div>
          <div
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
          >
            <div class="text-center">
              <div
                class="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gray-100"
              >
                <img src="@/assets/images/logo/ios.svg" alt="iOS" />
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">iOS</h3>
              <div class="text-sm text-gray-500 mb-6 space-y-1">
                <div>{{ $t("message.download.version") }}: --</div>
                <div>{{ $t("message.download.size") }}: --</div>
                <div>--</div>
              </div>
              <button
                class="w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-not-allowed bg-gray-100 text-gray-700"
              >
                {{ $t("message.download.comingSoon") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
