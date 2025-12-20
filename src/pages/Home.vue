
<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ClockIcon,
  FolderIcon,
  ShieldCheckIcon,
  ServerStackIcon,
} from "@heroicons/vue/16/solid";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/vue/20/solid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { useAppStore } from "@/stores/appStore";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { DISCORD_URL } from "@/config/url";
import { onWindowOpen } from "@/utils/common";
import { LanguageKind } from "@/types/enums";

const appStore = useAppStore();

const currentIndex = ref(0);
let timer: any = null;

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % 3;
  }, 3000);
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <section
    class="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
    style="
      background: radial-gradient(at 40% 20%, #ffb87a 0, transparent 50%),
        radial-gradient(at 80% 0, #1fddff 0, transparent 50%),
        radial-gradient(at 0 50%, #ffdbde 0, transparent 50%),
        radial-gradient(at 80% 50%, #ff85ad 0, transparent 50%),
        radial-gradient(at 0 100%, #ffb58a 0, transparent 50%),
        radial-gradient(at 80% 100%, #6b66ff 0, transparent 50%),
        radial-gradient(at 0 0, #ff85a7 0, transparent 50%);
    "
  >
    <div class="container mx-auto px-6 relative z-10">
      <div class="px-12 py-36 flex flex-col items-center">
        <h2
          class="text-6xl lg:text-8xl font-bold text-gray-800 mb-6 leading-tight"
        >
          {{ $t("message.app.name") }}
        </h2>

        <div class="mb-24 relative" style="width: 100%">
          <transition name="fade-slide" mode="out-in">
            <h4
              :key="currentIndex"
              class="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight absolute text-center"
              style="color: rgb(243, 74, 32); left: 0; right: 0"
            >
              <span v-if="currentIndex === 0">{{
                $t("message.home.scanTip")
              }}</span>
              <span v-else-if="currentIndex === 1">{{
                $t("message.home.backupTip")
              }}</span>
              <span v-else-if="currentIndex === 2">{{
                $t("message.home.viewTip")
              }}</span>
            </h4>
          </transition>
        </div>

        <p
          class="text-1xl lg:text-3xl text-gray-600 leading-relaxed mb-18 text-center lg:px-36"
        >
          {{ $t("message.home.tip") }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Popover
            v-if="appStore.language === LanguageKind.zh"
            v-slot="{ open }"
            class="relative"
          >
            <PopoverButton
              :class="open ? 'text-white' : ''"
              class="bg-blue-600 text-white px-24 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap flex items-center"
            >
              <img
                src="@/assets/images/feedback_logo/wechat.svg"
                alt="Discord"
                class="w-6 h-6 mr-2"
              />
              “爱看相册”微信公众号
            </PopoverButton>

            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <PopoverPanel class="absolute -top-55 left-20 z-10 transform p-4">
                <img
                  src="@/assets/images/weChatQrcode.png"
                  alt="weChatQrcode"
                  class="w-50 h-50"
                />
              </PopoverPanel>
            </transition>
          </Popover>
          <a
            v-else
            class="bg-blue-600 text-white px-24 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap flex items-center"
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

          <a
            class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center"
            href="#video"
          >
            <PlayCircleIcon class="w-6 h-6 mr-2" />
            {{ $t("message.home.watchVideo") }}
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="video" class="py-20 bg-gray-50">
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
                src="//www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=115181359202344&bvid=BV1gyHdzjENf&cid=32298960916&p=1&autoplay=1&mute=1&loop=1&fjw=0&danmaku=0"
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
                src="https://www.youtube.com/embed/E5cNWbYKUkc?autoplay=1&mute=1&loop=1&playlist=E5cNWbYKUkc"
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
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          {{ $t("message.home.section.platform.title") }}
        </h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div
          class="bg-white rounded-2xl px-8 py-16 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
        >
          <div
            class="w-25 h-25 mx-auto mb-8 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300"
          >
            <img
              src="@/assets/images/logo/windows.svg"
              alt="Windows"
              class="w-13 h-13"
            />
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Windows</h3>
        </div>
        <div
          class="bg-white rounded-2xl px-8 py-16 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
        >
          <div
            class="w-25 h-25 mx-auto mb-8 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300"
          >
            <img
              src="@/assets/images/logo/mac.svg"
              alt="MacOS"
              class="w-13 h-13"
            />
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">MacOS</h3>
        </div>
        <div
          class="bg-white rounded-2xl px-8 py-16 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
        >
          <div
            class="w-25 h-25 mx-auto mb-8 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300"
          >
            <img
              src="@/assets/images/logo/linux_white.svg"
              alt="Linux"
              class="w-13 h-13"
            />
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Linux</h3>
        </div>
        <div
          class="bg-white rounded-2xl px-8 py-16 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
        >
          <div
            class="w-25 h-25 mx-auto mb-8 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300"
          >
            <img
              src="@/assets/images/logo/android.svg"
              alt="Android"
              class="w-13 h-13"
            />
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Android</h3>
        </div>
        <div
          class="bg-white rounded-2xl px-8 py-16 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
        >
          <div
            class="w-25 h-25 mx-auto mb-8 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300"
          >
            <img
              src="@/assets/images/logo/ios_white.svg"
              alt="iOS"
              class="w-13 h-13"
            />
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">iOS</h3>
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
                  <p
                    class="text-gray-600 leading-relaxed"
                    style="white-space: pre-line"
                  >
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

<style scoped>
/* 进入时（下一行） */
.fade-slide-enter-from {
  transform: translateY(50%) scale(0.8);
  opacity: 0;
}
.fade-slide-enter-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-to {
  transform: translateY(0) scale(1);
  opacity: 1;
}

/* 离开时（当前行） */
.fade-slide-leave-from {
  transform: translateY(0) scale(1);
  opacity: 1;
}
.fade-slide-leave-active {
  transition: all 0.6s ease;
}
.fade-slide-leave-to {
  transform: translateY(-50%) scale(0.8);
  opacity: 0;
}
</style>
