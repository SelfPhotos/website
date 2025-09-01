<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  BILIBILI_URL,
  DISCORD_URL,
  GITHUB_URL,
  X_URL,
  YOUTUBE_URL,
} from "@/config/url";
import { onWindowOpen } from "@/utils/common";
import { PhotoIcon } from "@heroicons/vue/24/outline";
import { onMounted, ref } from "vue";

const locationHref = ref("");

onMounted(() => {
  locationHref.value = window.location.href;
});
</script>

<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div class="flex items-center space-x-2 mb-6">
            <img
              src="@/assets/images/logo/logo.png"
              alt="logo"
              class="w-8 h-8"
            />
            <span class="text-xl font-['Pacifico']">{{
              $t("message.app.name")
            }}</span>
          </div>
          <p class="text-gray-400 leading-relaxed">
            {{ $t("message.app.slogan1") }} {{ $t("message.app.slogan2") }}
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-6">
            {{ $t("message.footer.about") }}
          </h4>
          <ul class="space-y-3 text-gray-400">
            <li>
              <a
                class="hover:text-white transition-colors cursor-pointer"
                href="/faq"
              >
                {{ $t("message.router.faq") }}
              </a>
            </li>
            <li>
              <a
                class="hover:text-white transition-colors cursor-pointer"
                href="/releases"
              >
                {{ $t("message.router.releases") }}
              </a>
            </li>
            <li>
              <a
                class="hover:text-white transition-colors cursor-pointer"
                href="/terms"
              >
                {{ $t("message.router.terms") }}
              </a>
            </li>
            <li>
              <a
                class="hover:text-white transition-colors cursor-pointer"
                href="/privacy"
              >
                {{ $t("message.router.privacy") }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-6">
            {{ $t("message.footer.join") }}
          </h4>
          <ul class="space-y-3 text-gray-400">
            <li>
              <a
                class="hover:text-white transition-colors cursor-pointer flex items-center"
                href="#"
                @click.prevent="onWindowOpen(DISCORD_URL)"
              >
                <img
                  src="@/assets/images/feedback_logo/discord.svg"
                  alt="discord"
                  class="w-4 h-4 mr-2"
                />
                {{ $t("message.feedback.Discord") }}
              </a>
            </li>
            <li>
              <a
                class="hover:text-white transition-colors cursor-pointer flex items-center"
                href="#"
                @click.prevent="onWindowOpen(X_URL)"
              >
                <img
                  src="@/assets/images/feedback_logo/x_dark.svg"
                  alt="X"
                  class="w-4 h-4 mr-2"
                />
                {{ $t("message.feedback.X") }}
              </a>
            </li>
            <li>
              <Popover v-slot="{ open }" class="relative">
                <PopoverButton
                  :class="open ? 'text-white' : ''"
                  class="hover:text-white transition-colors cursor-pointer flex items-center"
                >
                  <img
                    src="@/assets/images/feedback_logo/wechat.svg"
                    alt="微信公众号"
                    class="w-4 h-4 mr-2"
                  />
                  {{ $t("message.feedback.Wechat") }}
                </PopoverButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <PopoverPanel class="absolute -top-55 z-10 transform p-4">
                    <img
                      src="@/assets/images/weChatQrcode.png"
                      alt="weChatQrcode"
                      class="w-50 h-50"
                    />
                  </PopoverPanel>
                </transition>
              </Popover>
            </li>
            <li>
              <Popover v-slot="{ open }" class="relative">
                <PopoverButton
                  :class="open ? 'text-white' : ''"
                  class="hover:text-white transition-colors cursor-pointer flex items-center"
                >
                  <img
                    src="@/assets/images/feedback_logo/rednote.svg"
                    alt="小红书"
                    class="w-4 h-4 mr-2"
                  />
                  {{ $t("message.feedback.Rednote") }}
                </PopoverButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <PopoverPanel class="absolute -top-55 z-10 transform p-4">
                    <img
                      src="@/assets/images/rednoteQrcode.png"
                      alt="小红书"
                      class="w-50 h-50"
                    />
                  </PopoverPanel>
                </transition>
              </Popover>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-6">
            {{ $t("message.footer.follow") }}
          </h4>
          <div class="space-y-4">
            <a
              class="hover:text-white transition-colors cursor-pointer flex items-center"
              href="#"
              @click.prevent="onWindowOpen(GITHUB_URL)"
            >
              <img
                src="@/assets/images/feedback_logo/github_dark.svg"
                alt="Github"
                class="w-4 h-4 mr-2"
              />
              <span>{{ $t("message.feedback.Github") }}</span>
            </a>
            <a
              class="hover:text-white transition-colors cursor-pointer flex items-center"
              href="#"
              @click.prevent="onWindowOpen(YOUTUBE_URL)"
            >
              <img
                src="@/assets/images/feedback_logo/youtube.svg"
                alt="Youtube"
                class="w-4 h-4 mr-2"
              />
              <span>{{ $t("message.feedback.Youtube") }}</span>
            </a>
            <a
              class="hover:text-white transition-colors cursor-pointer flex items-center"
              href="#"
              @click.prevent="onWindowOpen(BILIBILI_URL)"
            >
              <img
                src="@/assets/images/feedback_logo/bilibili.svg"
                alt="Bilibili"
                class="w-4 h-4 mr-2"
              />
              <span>{{ $t("message.feedback.Bilibili") }}</span>
            </a>
          </div>
        </div>
      </div>
      <div
        v-if="locationHref.indexOf('aikanxiangce.com') >= 0"
        class="border-t border-gray-800 pt-8"
      >
        <div class="flex flex-col md:flex-row justify-between items-center">
          <a
            class="hover:text-white transition-colors cursor-pointer text-gray-400 text-sm"
            href="https://beian.miit.gov.cn/"
            target="_blank"
          >
            陇ICP备2025017537号-1
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
