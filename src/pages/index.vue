<template>
  <div
    class="d-flex flex-column align-center position-relative px-16"
    style="min-height: calc(100vh - 64px)"
    v-intersect="{
      handler: (isIntersecting: boolean, entries: any) => {
        homeIntersecting = entries[0].intersectionRatio >= 0.5 || homeIntersecting;
      },
      options: {
        threshold: [0, 0.5, 1.0],
      },
    }"
  >
    <v-row
      style="max-width: 1296px; width: 100%; margin: 0; padding: 80px 0 0 0"
    >
      <v-col cols="5" class="d-flex flex-column justify-center align-start">
        <transition name="fade">
          <div
            v-if="homeIntersecting"
            class="w-100 text-h2 font-weight-bold d-flex align-center"
            style="color: #585858"
          >
            {{ $t("message.home.WhatIs") }}&nbsp;
            <img
              src="@/assets/aicasa.png"
              style="height: 3.75rem; padding: 8px 0"
              alt="Aicasa"
            />
          </div>
        </transition>
        <transition name="fade">
          <div
            v-if="homeIntersecting"
            class="w-100 text-subtitle-1 mt-16 mb-5"
            style="color: #333; line-height: 1.6; font-size: 1.4rem !important"
          >
            <div class="mb-4" v-html="$t('message.home.slogan1')" />
            <div style="opacity: 0.7" v-html="$t('message.home.slogan2')"></div>
          </div>
        </transition>
        <template
          v-if="appStore.osType === 'Windows' || appStore.osType === 'MacOS'"
        >
          <transition name="fade">
            <v-btn
              v-if="homeIntersecting"
              class="text-none mt-10"
              rounded="lg"
              style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)"
              size="x-large"
              color="primary"
              @click="isShowMirrorBtn = true"
            >
              {{ $t("message.Download") }} {{ appStore.osType }}
              {{ $t("message.home.installer") }}
            </v-btn>
          </transition>
          <transition name="fade">
            <v-btn
              v-if="homeIntersecting"
              v-show="isShowMirrorBtn"
              class="text-none text-decoration-underline ml-1 px-0 mt-2"
              rounded="lg"
              variant="text"
            >
              {{ $t("message.home.mirror") }}
            </v-btn>
          </transition>
          <transition name="fade">
            <v-btn
              v-if="homeIntersecting"
              class="text-none text-decoration-underline ml-1 mt-2 px-0"
              rounded="lg"
              variant="text"
              @click="router.push('/download')"
            >
              {{ $t("message.home.otherPlatform") }}
            </v-btn>
          </transition>
        </template>
        <template v-else>
          <transition name="fade">
            <v-btn
              v-if="homeIntersecting"
              class="text-none mt-10"
              rounded="lg"
              style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)"
              size="x-large"
              color="primary"
              @click="router.push('/download')"
            >
              {{ $t("message.home.otherPlatform") }}
            </v-btn>
          </transition>
        </template>
      </v-col>
      <v-col cols="7" class="d-flex justify-center align-center">
        <div
          class="w-100 h-100 d-flex align-center justify-center"
          style="
            position: relative;
            max-width: 100%;
            overflow: hidden;
            border-radius: 12px;
          "
        >
          <iframe
            v-if="appStore.isInChina"
            ref="iframeRef"
            width="100%"
            src="//www.bilibili.com/blackboard/html5mobileplayer.html?isOutside=true&aid=114052672001076&bvid=BV1frAmecEWV&cid=28538372663&p=1&autoplay=1&mute=1&loop=1&fjw=0&danmaku=0"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            style="border-radius: 12px"
            :style="{
              height: `${iframeHeight}px`,
            }"
          ></iframe>
          <iframe
            v-else
            ref="iframeRef"
            width="100%"
            src="https://www.youtube-nocookie.com/embed/dYhuX00XZNw?autoplay=1&mute=1&loop=1&playlist=dYhuX00XZNw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            style="border-radius: 12px"
            :style="{
              height: `${iframeHeight}px`,
            }"
          ></iframe>
        </div>
      </v-col>
      <v-col cols="12">
        <transition name="fade" v-if="!appStore.isInChina">
          <div
            v-if="homeIntersecting"
            class="w-100 h-100 d-flex d-flex justify-center"
            style="gap: 0 10px"
          >
            <v-btn class="text-none" rounded="lg" variant="text" size="x-large">
              <img src="@/assets/feedback_logo/discord.svg" class="mr-2" />
              {{ $t("message.home.join") }}
              {{ $t("message.feedback.Discord") }}
            </v-btn>
            <v-menu open-on-hover>
              <template v-slot:activator="value">
                <v-btn
                  class="text-none"
                  rounded="lg"
                  variant="text"
                  v-bind="value.props"
                  size="x-large"
                >
                  <img src="@/assets/feedback_logo/wechat.svg" class="mr-2" />
                  {{ $t("message.home.join") }}
                  {{ $t("message.feedback.Wechat") }}
                </v-btn>
              </template>
              <div>
                <img src="@/assets/qrcode.png" width="200" />
              </div>
            </v-menu>
          </div>
        </transition>
        <transition name="fade" v-else>
          <div
            v-if="homeIntersecting"
            class="w-100 h-100 d-flex d-flex flex-column align-center justify-center"
            style="gap: 0 10px"
          >
            <img src="@/assets/qrcode.png" width="200" height="200" />
            <v-btn
              class="text-none"
              rounded="lg"
              variant="text"
              size="x-large"
              readonly
            >
              <img src="@/assets/feedback_logo/wechat.svg" class="mr-2" />
              {{ $t("message.home.join") }}
              {{ $t("message.feedback.Wechat") }}
            </v-btn>
          </div>
        </transition>
      </v-col>
    </v-row>
  </div>
  <nav
    v-if="activeSection !== 'faq'"
    class="d-flex justify-center"
    style="
      height: 60px;
      margin: 60px 0;
      position: sticky;
      top: 24px;
      z-index: 9999;
      font-weight: 500;
      font-size: 16px;
    "
  >
    <div
      class="h-100 py-1 d-flex align-center elevation-1"
      style="
        background: #f1f3f4;
        border-radius: 100px;
        gap: 0 50px;
        padding: 0 100px;
      "
    >
      <div
        class="d-flex align-center justify-center cursor-pointer"
        style="height: 48px; color: #000; transition: all 0.3s ease"
        :style="{
          opacity:
            activeSection === 'timeline' || activeSection === 'tab' ? 1 : 0.5,
        }"
        @click="scrollTo('timeline')"
      >
        {{ $t("message.home.section.timeline.title") }}
      </div>
      <div
        class="d-flex align-center justify-center cursor-pointer"
        style="height: 48px; color: #000; transition: all 0.3s ease"
        :style="{
          opacity:
            activeSection === 'folders' || activeSection === 'tab' ? 1 : 0.5,
        }"
        @click="scrollTo('folders')"
      >
        {{ $t("message.home.section.folders.title") }}
      </div>
      <div
        class="d-flex align-center justify-center cursor-pointer"
        style="height: 48px; color: #000; transition: all 0.3s ease"
        :style="{
          opacity:
            activeSection === 'watchMode' || activeSection === 'tab' ? 1 : 0.5,
        }"
        @click="scrollTo('watchMode')"
      >
        {{ $t("message.home.section.watchMode.title") }}
      </div>
      <div
        class="d-flex align-center justify-center cursor-pointer"
        style="height: 48px; color: #000; transition: all 0.3s ease"
        :style="{
          opacity:
            activeSection === 'privacy' || activeSection === 'tab' ? 1 : 0.5,
        }"
        @click="scrollTo('privacy')"
      >
        {{ $t("message.home.section.privacy.title") }}
      </div>
      <div
        class="d-flex align-center justify-center cursor-pointer"
        style="height: 48px; color: #000; transition: all 0.3s ease"
        :style="{
          opacity:
            activeSection === 'unlimited' || activeSection === 'tab' ? 1 : 0.5,
        }"
        @click="scrollTo('unlimited')"
      >
        {{ $t("message.home.section.unlimited.title") }}
      </div>
    </div>
  </nav>
  <section
    ref="timelineSection"
    class="d-flex justify-center mb-6 px-16"
    v-intersect="{
      handler: (isIntersecting: boolean, entries: any) => {
        timelineIntersecting = entries[0].intersectionRatio >= 0.5 || timelineIntersecting;
      },
      options: {
        threshold: [0, 0.5, 1.0],
      },
    }"
  >
    <v-row
      class="overflow-hidden ma-0 pa-0"
      style="
        max-width: 1296px;
        width: 100%;
        background: #ede7f6;
        border-radius: 30px;
      "
    >
      <v-col
        cols="6"
        style="padding: 24px 95px 24px 79px"
        class="d-flex flex-column justify-center align-center"
      >
        <transition name="fade">
          <div v-if="timelineIntersecting" class="w-100 text-h2 mb-16">
            {{ $t("message.home.section.timeline.title") }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="timelineIntersecting" class="w-100 text-h6 pl-4 mb-4">
            {{ $t("message.home.section.timeline.subtitle") }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="timelineIntersecting" class="w-100 text-body-1 pl-4">
            {{ $t("message.home.section.timeline.content") }}
          </div>
        </transition>
      </v-col>
      <v-col cols="6" class="overflow-hidden ma-0" style="padding: 80px">
        <img
          src="@/assets/img/feat-timeline2.png"
          style="width: 100%; height: 100%; border-radius: 30px"
        />
      </v-col>
    </v-row>
  </section>
  <section
    ref="foldersSection"
    class="d-flex justify-center mb-6 px-16"
    v-intersect="{
      handler: (isIntersecting: boolean, entries: any) => {
        foldersIntersecting = entries[0].intersectionRatio >= 0.5 || foldersIntersecting;
      },
      options: {
        threshold: [0, 0.5, 1.0],
      },
    }"
  >
    <v-row
      class="overflow-hidden ma-0 pa-0"
      style="
        max-width: 1296px;
        width: 100%;
        background: #fbe9e7;
        border-radius: 30px;
      "
    >
      <v-col cols="6" class="overflow-hidden ma-0" style="padding: 80px">
        <img
          src="@/assets/img/feat-folder.png"
          style="width: 100%; height: 100%; border-radius: 30px"
        />
      </v-col>
      <v-col
        cols="6"
        style="padding: 24px 95px 24px 79px"
        class="d-flex flex-column justify-center align-center"
      >
        <transition name="fade">
          <div v-if="foldersIntersecting" class="w-100 text-h2 mb-16">
            {{ $t("message.home.section.folders.title") }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="foldersIntersecting" class="w-100 text-h6 pl-4 mb-4">
            {{ $t("message.home.section.folders.subtitle") }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="foldersIntersecting" class="w-100 text-body-1 pl-4">
            {{ $t("message.home.section.folders.content") }}
          </div>
        </transition>
      </v-col>
    </v-row>
  </section>
  <section
    ref="watchModeSection"
    class="d-flex justify-center mb-6 px-16"
    v-intersect="{
      handler: (isIntersecting: boolean, entries: any) => {
        watchModeIntersecting = entries[0].intersectionRatio >= 0.5 || watchModeIntersecting;
      },
      options: {
        threshold: [0, 0.5, 1.0],
      },
    }"
  >
    <v-row
      class="overflow-hidden ma-0 pa-0"
      style="
        max-width: 1296px;
        width: 100%;
        background: #e0f7fa;
        border-radius: 30px;
      "
    >
      <v-col
        cols="6"
        style="padding: 24px 95px 24px 79px"
        class="d-flex flex-column justify-center align-center"
      >
        <transition name="fade">
          <div v-if="watchModeIntersecting" class="w-100 text-h2 mb-16">
            {{ $t("message.home.section.watchMode.title") }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="watchModeIntersecting" class="w-100 text-h6 pl-4 mb-4">
            {{ $t("message.home.section.watchMode.subtitle") }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="watchModeIntersecting" class="w-100 text-body-1 pl-4">
            {{ $t("message.home.section.watchMode.content") }}
          </div>
        </transition>
      </v-col>
      <v-col cols="6" class="overflow-hidden ma-0" style="padding: 80px">
        <img
          src="@/assets/img/feat-watch.png"
          style="width: 100%; height: 100%; border-radius: 30px"
        />
      </v-col>
    </v-row>
  </section>
  <section
    ref="privacySection"
    class="d-flex justify-center mb-6 px-16"
    v-intersect="{
      handler: (isIntersecting: boolean, entries: any) => {
        privacyIntersecting = entries[0].intersectionRatio >= 0.5 || privacyIntersecting;
      },
      options: {
        threshold: [0, 0.5, 1.0],
      },
    }"
  >
    <v-row
      class="overflow-hidden ma-0 pa-0"
      style="
        max-width: 1296px;
        width: 100%;
        background: #e8eaf6;
        border-radius: 30px;
      "
    >
      <v-col cols="6" class="overflow-hidden ma-0" style="padding: 80px">
        <img
          src="@/assets/img/feat-privacy.png"
          style="width: 100%; height: 100%; border-radius: 30px"
        />
      </v-col>
      <v-col
        cols="6"
        style="padding: 24px 95px 24px 79px"
        class="d-flex flex-column justify-center align-center"
      >
        <transition name="fade">
          <div v-if="privacyIntersecting" class="w-100 text-h2 mb-16">
            {{ $t("message.home.section.privacy.title") }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="privacyIntersecting" class="w-100 text-h5 mb-4">
            {{ $t("message.home.section.privacy.subtitle") }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="privacyIntersecting" class="w-100 text-body-1">
            {{ $t("message.home.section.privacy.content") }}
          </div>
        </transition>
      </v-col>
    </v-row>
  </section>
  <section
    ref="unlimitedSection"
    class="d-flex justify-center mb-6 px-16"
    v-intersect="{
      handler: (isIntersecting: boolean, entries: any) => {
        unlimitedIntersecting = entries[0].intersectionRatio >= 0.5 || unlimitedIntersecting;
      },
      options: {
        threshold: [0, 0.5, 1.0],
      },
    }"
  >
    <v-row
      class="overflow-hidden ma-0 pa-0"
      style="
        max-width: 1296px;
        width: 100%;
        background: #f1f8e9;
        border-radius: 30px;
      "
    >
      <v-col
        cols="6"
        style="padding: 24px 95px 24px 79px"
        class="d-flex flex-column justify-center align-center"
      >
        <transition name="fade">
          <div v-if="unlimitedIntersecting" class="w-100 text-h2 mb-16">
            {{ $t("message.home.section.unlimited.title") }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="unlimitedIntersecting" class="w-100 text-h6 pl-4 mb-4">
            {{ $t("message.home.section.unlimited.subtitle") }}
          </div>
        </transition>
        <transition name="fade">
          <div v-if="unlimitedIntersecting" class="w-100 text-body-1 pl-4">
            {{ $t("message.home.section.unlimited.content") }}
          </div>
        </transition>
      </v-col>
      <v-col cols="6" class="overflow-hidden ma-0" style="padding: 80px">
        <img
          src="@/assets/img/feat-unlimited.png"
          style="width: 100%; height: 100%; border-radius: 30px"
        />
      </v-col>
    </v-row>
  </section>
  <section
    ref="faqSection"
    class="d-flex justify-center pb-6 px-16"
    style="margin-top: 230px; margin-bottom: 100px"
  >
    <div style="max-width: 1296px; width: 100%">
      <div class="text-h3 text-center my-16">FAQ</div>
      <v-expansion-panels
        variant="accordion"
        elevation="0"
        style="
          border-right-width: 0;
          border-left-width: 0;
          border-top-width: thin;
          border-bottom-width: thin;
          border-color: rgba(var(--v-border-color), var(--v-border-opacity));
          border-style: solid;
        "
      >
        <v-expansion-panel v-for="item in faqLength" :key="item" height="73">
          <v-expansion-panel-title
            class="text-subtitle-1 font-weight-bold"
            style="font-size: 1.3rem !important"
          >
            {{ $t(`message.home.faq.${item}.q`) }}
          </v-expansion-panel-title>
          <v-expansion-panel-text
            class="tetx-body-1"
            style="font-size: 1.2rem !important"
          >
            <div v-html="$t(`message.home.faq.${item}.a`)"></div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store/appStore";
const router = useRouter();
const appStore = useAppStore();

const activeSection = ref("tab");

const iframeRef = ref<HTMLElement | null>(null);
const iframeHeight = ref(0);

const timelineSection = ref<HTMLElement | null>(null);
const foldersSection = ref<HTMLElement | null>(null);
const watchModeSection = ref<HTMLElement | null>(null);
const privacySection = ref<HTMLElement | null>(null);
const unlimitedSection = ref<HTMLElement | null>(null);
const faqSection = ref<HTMLElement | null>(null);

const homeIntersecting = ref(false);
const timelineIntersecting = ref(false);
const foldersIntersecting = ref(false);
const watchModeIntersecting = ref(false);
const privacyIntersecting = ref(false);
const unlimitedIntersecting = ref(false);

const isShowMirrorBtn = ref(false);

const faqLength = ref(9);

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", onResize);
  checkScroll(); // Initial check
  onResize();
});
onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
  window.removeEventListener("resize", onResize);
});

const checkScroll = () => {
  const timeline = timelineSection.value;
  const folders = foldersSection.value;
  const watchMode = watchModeSection.value;
  const privacy = privacySection.value;
  const unlimited = unlimitedSection.value;
  const faq = faqSection.value;
  if (!timeline || !folders || !watchMode || !faq || !privacy || !unlimited) {
    return;
  }

  const timelinePosition = timeline.getBoundingClientRect().top;
  const foldersPosition = folders.getBoundingClientRect().top;
  const watchModePosition = watchMode.getBoundingClientRect().top;
  const privacyPosition = privacy.getBoundingClientRect().top;
  const unlimitedPosition = unlimited.getBoundingClientRect().top;
  const faqPosition = faq.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (faqPosition < windowHeight / 2) {
    activeSection.value = "faq";
  } else if (unlimitedPosition < windowHeight / 2) {
    activeSection.value = "unlimited";
  } else if (privacyPosition < windowHeight / 2) {
    activeSection.value = "privacy";
  } else if (watchModePosition < windowHeight / 2) {
    activeSection.value = "watchMode";
  } else if (foldersPosition < windowHeight / 2) {
    activeSection.value = "folders";
  } else if (timelinePosition < windowHeight / 2) {
    activeSection.value = "timeline";
  } else {
    activeSection.value = "tab";
  }
};
const scrollTo = (target: string) => {
  const offset = 120;
  if (target === "timeline") {
    if (timelineSection.value) {
      const timeline = timelineSection.value;

      window.scrollTo({
        top: timeline.offsetTop - offset,
        behavior: "smooth",
      });
    }
  } else if (target === "folders") {
    if (foldersSection.value) {
      const folders = foldersSection.value;

      window.scrollTo({
        top: folders.offsetTop - offset,
        behavior: "smooth",
      });
    }
  } else if (target === "watchMode") {
    if (watchModeSection.value) {
      const watchMode = watchModeSection.value;

      window.scrollTo({
        top: watchMode.offsetTop - offset,
        behavior: "smooth",
      });
    }
  } else if (target === "privacy") {
    if (privacySection.value) {
      const privacy = privacySection.value;

      window.scrollTo({
        top: privacy.offsetTop - offset,
        behavior: "smooth",
      });
    }
  } else if (target === "unlimited") {
    if (unlimitedSection.value) {
      const unlimited = unlimitedSection.value;

      window.scrollTo({
        top: unlimited.offsetTop - offset,
        behavior: "smooth",
      });
    }
  } else if (target === "faq") {
    if (faqSection.value) {
      const faq = faqSection.value;

      window.scrollTo({
        top: faq.offsetTop - offset,
        behavior: "smooth",
      });
    }
  }
};

const onResize = () => {
  if (iframeRef.value) {
    const width = iframeRef.value.offsetWidth;
    iframeHeight.value = (width / 675) * 380;
  }
};
</script>

<style>
.active {
  color: #8a37a1; /* Highlight color */
  font-weight: bold;
}

.v-expansion-panel-title {
  transition: all 0.3s ease;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s cubic-bezier(0.6, 0, 0.05, 1);
}
.fade-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.fade-leave-from,
.fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
