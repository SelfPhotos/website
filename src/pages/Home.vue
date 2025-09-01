
<script setup lang="ts">
import { ArrowDownTrayIcon, PhotoIcon } from "@heroicons/vue/24/outline";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ClockIcon,
  FolderIcon,
  ShieldCheckIcon,
  ServerStackIcon,
} from "@heroicons/vue/16/solid";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import bg1 from "@/assets/images/bg/bg-1.jpg";
import { useAppStore } from "@/stores/appStore";
import { ref } from "vue";
import {
  DISCORD_URL,
  getGithubDownloadMacOSUrl,
  getGithubDownloadWindowsUrl,
  getTencentDownloadMacOSUrl,
  getTencentDownloadWindowsUrl,
} from "@/config/url";
import { onWindowOpen } from "@/utils/common";
import { LanguageKind } from "@/types/enums";

const appStore = useAppStore();

const isShowMirrorBtn = ref(false);

const onDownloadClick = () => {
  if (appStore.osType !== "Windows" && appStore.osType !== "MacOS") {
    return;
  }
  isShowMirrorBtn.value = true;

  let url = "";
  if (appStore.language === "zh-CN" && appStore.osType === "Windows") {
    url = getTencentDownloadWindowsUrl();
  } else if (appStore.language === "zh-CN" && appStore.osType === "MacOS") {
    url = getTencentDownloadMacOSUrl();
  } else if (appStore.language !== "zh-CN" && appStore.osType === "Windows") {
    url = getGithubDownloadWindowsUrl();
  } else if (appStore.language !== "zh-CN" && appStore.osType === "MacOS") {
    url = getGithubDownloadMacOSUrl();
  }
  onWindowOpen(url);
};
const onMirrorDownloadClick = () => {
  let url = "";
  if (appStore.language === "zh-CN" && appStore.osType === "Windows") {
    url = getGithubDownloadWindowsUrl();
  } else if (appStore.language === "zh-CN" && appStore.osType === "MacOS") {
    url = getGithubDownloadMacOSUrl();
  } else if (appStore.language !== "zh-CN" && appStore.osType === "Windows") {
    url = getTencentDownloadWindowsUrl();
  } else if (appStore.language !== "zh-CN" && appStore.osType === "MacOS") {
    url = getTencentDownloadMacOSUrl();
  }
  onWindowOpen(url);
};
</script>

<template>
  <section
    class="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
    style="
      background-image: linear-gradient(
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.1)
        ),
        url('@/assets/images/bg/bg-1.jpg');
    "
    :style="{
      backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.1)
        ),
        url(${bg1})`,
    }"
  >
    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="flex-1 lg:flex-[2] text-center lg:text-left">
          <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
            <h1
              class="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              {{ $t("message.app.name") }}
              <span class="block text-3xl lg:text-4xl text-blue-600 mt-2">
                {{ $t("message.app.slogan1") }}
              </span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              {{ $t("message.app.slogan2") }}
            </p>
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                class="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap flex items-center"
                href="#"
                @click.prevent="onDownloadClick"
              >
                <arrow-down-tray-icon class="w-5 h-5 mr-2" />
                {{
                  $t("message.home.downloadInstaller", {
                    platform: appStore.osType,
                  })
                }}
              </a>
              <a
                class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
                href="#features"
              >
                {{ $t("message.home.learnMoreFeatures") }}
              </a>
            </div>
            <div
              class="mt-8 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start"
            >
              <a
                v-show="isShowMirrorBtn"
                class="text-sm text-gray-500 inline-block"
                href="#"
                @click.prevent="onMirrorDownloadClick"
              >
                {{ $t("message.home.mirror") }}
              </a>
              <a class="text-sm text-gray-500 inline-block" href="/download">
                {{ $t("message.home.otherPlatform") }}
              </a>
            </div>
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-center lg:justify-end gap-4">
          <div
            class="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center"
          >
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              {{ $t("message.home.joinWechat") }}
            </h3>
            <div
              class="w-48 h-48 mx-auto mb-4 bg-white rounded-lg shadow-lg flex items-center justify-center"
            >
              <img
                class="w-full h-full object-cover rounded-lg"
                src="@/assets/images/weChatQrcode.png"
                alt="微信公众号二维码"
              />
            </div>
            <p class="text-gray-600">{{ $t("message.home.scanWechatTip") }}</p>
          </div>
          <a
            v-show="appStore.language === LanguageKind.en"
            class="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap flex items-center justify-center"
            href="#"
            @click.prevent="onWindowOpen(DISCORD_URL)"
          >
            <img
              src="@/assets/images/feedback_logo/discord.svg"
              alt="Discord"
              class="w-6 h-6 mr-2"
            />
            Join Our Discord
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          {{ $t("message.home.section.video.title") }}
          <span class="text-blue-600 block">{{
            $t("message.home.section.video.subtitle")
          }}</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t("message.home.section.video.content") }}
        </p>
      </div>
      <div class="max-w-5xl mx-auto">
        <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="aspect-video relative">
            <div
              class="absolute inset-0 bg-cover bg-center bg-no-repeat cursor-pointer group"
            >
              <iframe
                v-if="appStore.language === LanguageKind.zh"
                ref="iframeRef"
                width="100%"
                src="//www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=114495338840193&bvid=BV1h179zAEpm&cid=29928132339&p=1&autoplay=1&mute=1&loop=1&fjw=0&danmaku=0"
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                style="border-radius: 12px; height: 100%"
              ></iframe>
              <iframe
                v-else
                ref="iframeRef"
                width="100%"
                src="https://www.youtube.com/embed/60HYwOIEV2g?autoplay=1&mute=1&loop=1&playlist=60HYwOIEV2g"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                style="border-radius: 12px; height: 100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="features" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          {{ $t("message.home.section.features.title") }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t("message.home.section.features.subtitle") }}
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
          >
            <device-phone-mobile-icon class="text-white text-2xl w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            {{ $t("message.home.section.features.backup.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("message.home.section.features.backup.subtitle") }}
          </p>
        </div>
        <div
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
          >
            <computer-desktop-icon class="text-white text-2xl w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            {{ $t("message.home.section.features.scan.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("message.home.section.features.scan.subtitle") }}
          </p>
        </div>
        <div
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
          >
            <clock-icon class="text-white text-2xl w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            {{ $t("message.home.section.features.timeline.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("message.home.section.features.timeline.subtitle") }}
          </p>
        </div>
        <div
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
          >
            <folder-icon class="text-white text-2xl w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            {{ $t("message.home.section.features.folders.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("message.home.section.features.folders.subtitle") }}
          </p>
        </div>
        <div
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
          >
            <shield-check-icon class="text-white text-2xl w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            {{ $t("message.home.section.features.offline.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("message.home.section.features.offline.subtitle") }}
          </p>
        </div>
        <div
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
          >
            <server-stack-icon class="text-white text-2xl w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            {{ $t("message.home.section.features.storage.title") }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("message.home.section.features.storage.subtitle") }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          {{ $t("message.router.faq") }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t("message.home.section.faq.subtitle") }}
        </p>
      </div>
      <div class="max-w-4xl mx-auto">
        <div class="space-y-4">
          <div
            v-for="item in appStore.homeFAQCount"
            :key="item"
            class="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="w-full px-8 py-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <h3 class="text-lg font-semibold text-gray-800 pr-4">
                  {{ $t(`message.faqs.${item}.q`) }}
                </h3>
                <div class="flex-shrink-0">
                  <ChevronDownIcon
                    :class="open ? 'rotate-180' : ''"
                    class="h-5 w-5 text-2xl text-blue-600 transition-transform duration-200"
                  />
                </div>
              </DisclosureButton>
              <DisclosurePanel class="px-8 pb-6">
                <div class="bg-white rounded-xl p-6 shadow-sm">
                  <p class="text-gray-600 leading-relaxed">
                    {{ $t(`message.faqs.${item}.a`) }}
                  </p>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <a
          class="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap inline-block"
          href="/faq"
        >
          {{ $t("message.home.section.faq.learnMore") }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
