<template>
  <div
    class="d-flex justify-center"
    style="height: calc(100vh - 64px); background: #f8f1f6"
  >
    <v-row style="max-width: 1296px; width: 100%; height: 100%; margin: 0">
      <v-col cols="4" class="d-flex flex-column justify-center align-center">
        <div class="w-100 text-h2 text-left">Aicasa</div>
        <div class="w-100 text-subtitle-1 mt-2 mb-4">
          Aicasa
          是一款家庭相册管理应用，致力于帮助用户整理和保存珍贵的家庭回忆。通过Aicasa，您可以轻松地将照片按时间、事件或人物分类，快速查找并回顾那些美好的瞬间。不论是孩子的成长，还是家庭聚会的温馨时光，Aicasa都为您提供了一个私密、安全的空间来珍藏所有的回忆。通过智能标签、自动整理和分享功能，Aicasa让您的家庭相册管理变得简单又便捷，帮助您轻松重温那些幸福时刻。
        </div>
        <div class="w-100 text-left">
          <v-btn class="text-none" color="primary" rounded="lg">Get Apps</v-btn>
        </div>
      </v-col>
      <v-col cols="8" class="d-flex flex-column justify-center align-center;">
        <video muted autoplay loop style="max-height: calc(100vh - 100px)">
          <source
            src="https://storage.googleapis.com/gweb-mobius-cdn/photos/uploads/1a1546cb7c0ba4225b01e994d4ead6e8a919f3c1.compressed.mp4"
            type="video/mp4"
          />
        </video>
      </v-col>
    </v-row>
  </div>
  <div
    class="d-flex justify-center"
    style="
      height: 60px;
      margin: 60px 0;
      position: sticky;
      top: 24px;
      z-index: 9999;
    "
  >
    <div
      class="h-100 py-1 px-5 d-flex align-center"
      style="background: #f1f3f4; border-radius: 100px"
    >
      <div
        class="d-flex align-center justify-center cursor-pointer"
        style="
          width: 95px;
          height: 48px;
          color: #5f6368;
          transition: all 0.3s ease;
        "
        :style="{
          opacity:
            activeSection === 'overview' || activeSection === 'tab' ? 1 : 0.5,
        }"
        @click="scrollTo('overview')"
      >
        Overview
      </div>
      <div
        class="d-flex align-center justify-center cursor-pointer"
        style="
          width: 95px;
          height: 48px;
          color: #5f6368;
          transition: all 0.3s ease;
        "
        :style="{
          opacity: activeSection === 'faq' || activeSection === 'tab' ? 1 : 0.5,
        }"
        @click="scrollTo('faq')"
      >
        FAQ
      </div>
    </div>
  </div>
  <div ref="overviewSection">
    <div class="d-flex justify-center mb-6">
      <v-row
        class="overflow-hidden ma-0 pa-0"
        style="
          max-width: 1296px;
          width: 100%;
          background: #e8f0fe;
          border-radius: 30px;
        "
      >
        <v-col
          cols="6"
          style="padding: 24px 95px 24px 79px"
          class="d-flex flex-column justify-center align-center"
        >
          <div class="w-100 text-h2 pl-4" style="color: #8a37a1">
            Magic Editor.
          </div>
          <div class="w-100 text-h3 pl-4">
            Make complex edits in just a few taps.
          </div>
          <div class="w-100">
            <v-btn class="text-none" variant="text" rounded>Learn more</v-btn>
          </div>
        </v-col>
        <v-col
          cols="6"
          class="overflow-hidden ma-0 pa-0"
          style="border-radius: 30px"
        >
          <video muted autoplay style="width: 100%; height: 100%">
            <source
              src="https://storage.googleapis.com/gweb-mobius-cdn/photos/uploads/833d477c39105f1f4cac87c325f98a2c68b9202f.compressed.mp4"
              type="video/mp4"
            />
          </video>
        </v-col>
      </v-row>
    </div>
    <div class="d-flex justify-center mb-6">
      <v-row
        class="overflow-hidden ma-0 pa-0"
        style="
          max-width: 1296px;
          width: 100%;
          background: #e8f0fe;
          border-radius: 30px;
        "
      >
        <v-col
          cols="6"
          class="overflow-hidden ma-0 pa-0"
          style="border-radius: 30px"
        >
          <video muted autoplay style="width: 100%; height: 100%">
            <source
              src="https://storage.googleapis.com/gweb-mobius-cdn/photos/uploads/833d477c39105f1f4cac87c325f98a2c68b9202f.compressed.mp4"
              type="video/mp4"
            />
          </video>
        </v-col>
        <v-col
          cols="6"
          style="padding: 24px 95px 24px 79px"
          class="d-flex flex-column justify-center align-center"
        >
          <div class="w-100 text-h2 pl-4" style="color: #8a37a1">
            Magic Editor.
          </div>
          <div class="w-100 text-h3 pl-4">
            Make complex edits in just a few taps.
          </div>
          <div class="w-100">
            <v-btn class="text-none" variant="text" rounded>Learn more</v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="d-flex justify-center mb-6">
      <v-row
        class="overflow-hidden ma-0 pa-0"
        style="
          max-width: 1296px;
          width: 100%;
          background: #e8f0fe;
          border-radius: 30px;
        "
      >
        <v-col
          cols="6"
          style="padding: 24px 95px 24px 79px"
          class="d-flex flex-column justify-center align-center"
        >
          <div class="w-100 text-h2 pl-4" style="color: #8a37a1">
            Magic Editor.
          </div>
          <div class="w-100 text-h3 pl-4">
            Make complex edits in just a few taps.
          </div>
          <div class="w-100">
            <v-btn class="text-none" variant="text" rounded>Learn more</v-btn>
          </div>
        </v-col>
        <v-col
          cols="6"
          class="overflow-hidden ma-0 pa-0"
          style="border-radius: 30px"
        >
          <video muted autoplay style="width: 100%; height: 100%">
            <source
              src="https://storage.googleapis.com/gweb-mobius-cdn/photos/uploads/833d477c39105f1f4cac87c325f98a2c68b9202f.compressed.mp4"
              type="video/mp4"
            />
          </video>
        </v-col>
      </v-row>
    </div>
  </div>
  <div class="d-flex justify-center pb-6" ref="faqSection">
    <div style="max-width: 1296px; width: 100%">
      <div class="text-h3 text-center my-16">Frequently asked questions</div>
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
        <v-expansion-panel v-for="i in 6" :key="i" height="73">
          <v-expansion-panel-title class="text-subtitle-1">
            Item
          </v-expansion-panel-title>
          <v-expansion-panel-text class="tetx-body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const activeSection = ref("overview");
const overviewSection = ref<HTMLElement | null>(null);
const faqSection = ref<HTMLElement | null>(null);

const checkScroll = () => {
  const overview = overviewSection.value;
  const faq = faqSection.value;
  if (!overview || !faq) {
    return;
  }
  const overviewPosition = overview.getBoundingClientRect().top;
  const faqPosition = faq.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (faqPosition < windowHeight / 2) {
    activeSection.value = "faq";
  } else if (overviewPosition < windowHeight / 2) {
    activeSection.value = "overview";
  } else {
    activeSection.value = "tab";
  }
};
const scrollTo = (target: string) => {
  const offset = 120;
  if (target === "overview") {
    if (overviewSection.value) {
      const overview = overviewSection.value;

      window.scrollTo({
        top: overview.offsetTop - offset,
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

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Initial check
});
onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style>
.active {
  color: #8a37a1; /* Highlight color */
  font-weight: bold;
}

.v-expansion-panel-title {
  transition: all 0.3s ease;
}
</style>
