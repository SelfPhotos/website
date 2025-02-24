<template>
  <div
    class="d-flex flex-column align-center position-relative"
    style="height: calc(100vh - 64px)"
  >
    <v-row
      style="max-width: 1296px; width: 100%; margin: 0; padding: 80px 0 0 0"
    >
      <v-col cols="5" class="d-flex flex-column justify-center align-start">
        <div class="w-100 text-h2 font-weight-bold">
          What is Ai<span style="color: #cf00a2">ca</span>sa
        </div>
        <div
          class="w-100 text-subtitle-1 mt-16 mb-5"
          style="color: #333; line-height: 1.6; font-size: 1.4rem !important"
        >
          <div class="mb-4">
            Privacy-Focused <b>Photo Organizer</b> for <b>Desktop</b>
          </div>
          <div style="opacity: 0.7">
            Like Google Photos, <br />but Keep Everything Local on your Computer
          </div>
          <!-- <div class="mt-6">
            <b>Your Memories, Organized with Ease</b>
          </div> -->
        </div>
        <div class="w-100 mt-10">
          <v-btn
            class="text-none"
            rounded="lg"
            style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)"
            size="x-large"
            color="primary"
          >
            Download Windows installer
          </v-btn>
        </div>
        <!-- <div class="mt-2">
          <v-btn
            class="text-none text-decoration-underline ml-1 px-0"
            rounded="lg"
            variant="text"
          >
            Can't download? Try this mirror link
          </v-btn>
        </div> -->

        <v-btn
          class="text-none text-decoration-underline ml-1 px-0"
          rounded="lg"
          variant="text"
          @click="router.push('/download')"
        >
          Download for Other Platforms
        </v-btn>
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
            ref="iframeRef"
            width="100%"
            src="https://www.youtube-nocookie.com/embed/dYhuX00XZNw?autoplay=1&mute=1&loop=1&playlist=dYhuX00XZNw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style="border-radius: 12px"
            :style="{
              height: `${iframeHeight}px`,
            }"
          ></iframe>
          <!-- <iframe
            width="627"
            height="315"
            src="//player.bilibili.com/player.html?bvid=BV1frAmecEWV&autoplay=1&mute=1&loop=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style="border-radius: 12px"
          ></iframe> -->
        </div>
      </v-col>
      <v-col cols="12">
        <div
          class="w-100 h-100 d-flex d-flex justify-center"
          style="gap: 0 10px"
        >
          <v-btn
            class="text-none px-0"
            rounded="lg"
            variant="text"
            size="x-large"
          >
            <img src="@/assets/discord.svg" class="mr-2" /> Join our Discord
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
                <img src="@/assets/wechat.svg" class="mr-2" /> Join our WeChat
              </v-btn>
            </template>
            <div>
              <img src="@/assets/qrcode.png" width="200" />
            </div>
          </v-menu>
        </div>
      </v-col>
    </v-row>
  </div>
  <div
    v-if="activeSection !== 'faq'"
    class="d-flex justify-center"
    style="
      height: 80px;
      margin: 60px 0;
      position: sticky;
      top: 24px;
      z-index: 9999;
      font-weight: 500;
      font-size: 25px;
      opacity: 0.8;
    "
  >
    <div
      class="h-100 py-1 d-flex align-center"
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
            activeSection === 'privacy' || activeSection === 'tab' ? 1 : 0.5,
        }"
        @click="scrollTo('privacy')"
      >
        Privacy
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
        Unlimited
      </div>
      <div
        class="d-flex align-center justify-center cursor-pointer"
        style="height: 48px; color: #000; transition: all 0.3s ease"
        :style="{
          opacity:
            activeSection === 'timeline' || activeSection === 'tab' ? 1 : 0.5,
        }"
        @click="scrollTo('timeline')"
      >
        Timeline
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
        Folders
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
        Watch Mode
      </div>
      <div
        class="d-flex align-center justify-center cursor-pointer"
        style="height: 48px; color: #000; transition: all 0.3s ease"
        :style="{
          opacity:
            activeSection === 'interaction' || activeSection === 'tab'
              ? 1
              : 0.5,
        }"
        @click="scrollTo('interaction')"
      >
        Interaction
      </div>
      <!-- <div
        class="d-flex align-center justify-center cursor-pointer"
        style="height: 48px; color: #5f6368; transition: all 0.3s ease"
        :style="{
          opacity:
            activeSection === 'mobileBackup' || activeSection === 'tab'
              ? 1
              : 0.5,
        }"
        @click="scrollTo('mobileBackup')"
      >
        Mobile backup
      </div> -->
      <!-- <div
        class="d-flex align-center justify-center cursor-pointer"
        style="height: 48px; color: #5f6368; transition: all 0.3s ease"
        :style="{
          opacity: activeSection === 'faq' || activeSection === 'tab' ? 1 : 0.5,
        }"
        @click="scrollTo('faq')"
      >
        FAQ
      </div> -->
    </div>
  </div>
  <div ref="privacySection" class="d-flex justify-center mb-6">
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
        <div class="w-100 text-h2 mb-16">Privacy</div>
        <div class="w-100 text-h5 mb-4">
          100% Local & Offline – Your Photos, Your Control
        </div>
        <div class="w-100 text-body-1">
          Aicasa operates entirely on your computer, ensuring your photos never
          leave your device. No cloud uploads, no internet required – just
          complete privacy and peace of mind.
        </div>
        <!-- <div class="w-100">
            <v-btn class="text-none" variant="text" rounded>Learn more</v-btn>
          </div> -->
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
  <div ref="unlimitedSection" class="d-flex justify-center mb-6">
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
        <div class="w-100 text-h2 mb-16">Unlimited</div>
        <div class="w-100 text-h6 pl-4 mb-4">
          Free & Unlimited Storage – Only Limited by Your Hard Drive
        </div>
        <div class="w-100 text-body-1 pl-4">
          Say goodbye to storage limits. Aicasa uses your local hard drive, so
          you can store as many photos as your disk space allows. No
          subscriptions, no hidden fees.
        </div>
        <!-- <div class="w-100">
            <v-btn class="text-none" variant="text" rounded>Learn more</v-btn>
          </div> -->
      </v-col>
    </v-row>
  </div>
  <div ref="timelineSection" class="d-flex justify-center mb-6">
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
        <div class="w-100 text-h2 mb-16">Timeline</div>
        <div class="w-100 text-h6 pl-4 mb-4">
          Timeline View – Quickly Locate Your Memories
        </div>
        <div class="w-100 text-body-1 pl-4">
          Relive your moments with a sleek timeline view. Scroll through your
          photos chronologically and jump to specific dates or events with ease.
        </div>
        <!-- <div class="w-100">
            <v-btn class="text-none" variant="text" rounded>Learn more</v-btn>
          </div> -->
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
  <div ref="foldersSection" class="d-flex justify-center mb-6">
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
        <div class="w-100 text-h2 mb-16">Folders</div>
        <div class="w-100 text-h6 pl-4 mb-4">Keep Media Organized as It is</div>
        <div class="w-100 text-body-1 pl-4">
          Your photos and videos are displayed in the same structure as on your
          computer. Stay organized and find files easily.
        </div>
        <!-- <div class="w-100">
            <v-btn class="text-none" variant="text" rounded>Learn more</v-btn>
          </div> -->
      </v-col>
    </v-row>
  </div>
  <div ref="watchModeSection" class="d-flex justify-center mb-6">
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
        <div class="w-100 text-h2 mb-16">Watch Mode</div>
        <div class="w-100 text-h6 pl-4 mb-4">
          Watch Mode – Seamless Updates for Your Media Library
        </div>
        <div class="w-100 text-body-1 pl-4">
          Keep an eye on your selected folder and instantly adds or removes
          photos and videos from your library as they appear or disappear.
          Effortless updates, no manual work needed!
        </div>
        <!-- <div class="w-100">
            <v-btn class="text-none" variant="text" rounded>Learn more</v-btn>
          </div> -->
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
  <div ref="interactionSection" class="d-flex justify-center mb-6">
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
        <div class="w-100 text-h2 mb-16">Interaction</div>
        <div class="w-100 text-h6 pl-4 mb-4">Enjoy a Tailored Experience</div>
        <div class="w-100 text-body-1 pl-4">
          Elevate your photo management with features like liking, archiving,
          and pinning photos side-by-side for easy comparison and selection.
          Shape your photo library to fit your style perfectly.
        </div>
        <!-- <div class="w-100">
            <v-btn class="text-none" variant="text" rounded>Learn more</v-btn>
          </div> -->
      </v-col>
    </v-row>
  </div>
  <!-- <div ref="mobileBackupSection" class="d-flex justify-center mb-6">
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
        <div class="w-100 text-h6 pl-4 mb-4" style="color: #8a37a1">
          Secure Your Memories (Coming Soon)
        </div>
        <div class="w-100 text-body-1 pl-4">
          Easily transfer and back up your mobile photos to your computer.
          Safeguard your memories and keep them organized in one place.
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
  </div> -->
  <div
    ref="faqSection"
    class="d-flex justify-center pb-6"
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
        <v-expansion-panel v-for="item in faqArr" :key="item.q" height="73">
          <v-expansion-panel-title
            class="text-subtitle-1 font-weight-bold"
            style="font-size: 1.3rem !important"
          >
            {{ item.q }}
          </v-expansion-panel-title>
          <v-expansion-panel-text
            class="tetx-body-1"
            style="font-size: 1.2rem !important"
          >
            <div v-html="item.a"></div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const activeSection = ref("tab");

const iframeRef = ref<HTMLElement | null>(null);
const iframeHeight = ref(0);

const privacySection = ref<HTMLElement | null>(null);
const unlimitedSection = ref<HTMLElement | null>(null);
const timelineSection = ref<HTMLElement | null>(null);
const foldersSection = ref<HTMLElement | null>(null);
const watchModeSection = ref<HTMLElement | null>(null);
const interactionSection = ref<HTMLElement | null>(null);
const mobileBackupSection = ref<HTMLElement | null>(null);
const faqSection = ref<HTMLElement | null>(null);

const faqArr = [
  {
    q: "Is this software an online service or a local application? Do I need an internet connection to use it?",
    a: "This is a local application, not an online service. You can use it completely offline without an internet connection.",
  },
  {
    q: "Which operating systems does this software support? Is the installation process complicated?",
    a: "Currently, it supports Windows and macOS, with plans to support major Linux distributions in the future. The installation process is very straightforward, similar to installing any regular Windows/macOS software. Once installed, it’s ready to use. No servers or Docker are required—it’s a simple, standalone local application.",
  },
  {
    q: "Will the software modify or delete the original files on my computer?",
    a: 'No. The software only scans and reads your photos and videos. If you manually choose "Move to Recycle Bin" within the software, it will perform that action, but you can still recover the files from the Recycle Bin.',
  },
  {
    q: "Will my photos and videos be uploaded to the cloud?",
    a: "Absolutely not. All data is stored locally on your computer. The software can run entirely offline, ensuring your privacy and security.",
  },
  {
    q: "Which photo and video formats does the software support? Does it support RAW formats?",
    a: "The software supports common image formats (e.g., JPG, JPEG, HEIC, PNG, WEBP, GIF) and video formats (e.g., GIF, MP4, MOV, 3GP, MKV, AVI, WMV, MPG). RAW format support is not available yet, but it will be added in a future update.",
  },
  {
    q: "How can I add new photos and videos from my local computer to the software?",
    a: `You can freely select folders to scan, and there are three scanning modes available:
    <br /><br />
    Scan: Scans the folder once, and any future updates to the folder will not be indexed.
    <br /><br />
    Watch: Automatically monitors the folder (including subfolders) for any changes, such as new or deleted files, and updates the index accordingly.
    <br /><br />
    Excluded: Files in this folder will not be indexed.
    <br />
    You can mix and match these modes and adjust your scanning preferences at any time.`,
  },
  {
    q: "Will there be support for backing up mobile photos to the computer in the future?",
    a: "Yes, we are currently developing mobile features. In the future, you’ll be able to back up photos and videos from your phone to your computer and manage them in one place.",
  },
  {
    q: "Is the software free?",
    a: "All core features in the current version (e.g., photo scanning, album management, browsing) are completely free. Upcoming features, such as mobile auto-backup and mobile access to desktop photos, will also be free, and we promise to keep them free forever. In the future, we may charge reasonable fees for advanced features and online services to support the project’s sustainability.",
  },
  {
    q: "How can I contribute to the project?",
    a: `You can contribute in the following ways:
    <br /><br />
    1. Join our Discord or WeChat official account to report bugs or suggest improvements. We value your feedback and will actively consider it.
    <br /><br />
    2. Share your honest reviews and experiences on Reddit or YouTube.`,
  },
];

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
  const privacy = privacySection.value;
  const unlimited = unlimitedSection.value;
  const timeline = timelineSection.value;
  const folders = foldersSection.value;
  const watchMode = watchModeSection.value;
  const interaction = interactionSection.value;
  const faq = faqSection.value;
  if (
    !privacy ||
    !unlimited ||
    !timeline ||
    !folders ||
    !watchMode ||
    !interaction ||
    !faq
  ) {
    return;
  }

  const privacyPosition = privacy.getBoundingClientRect().top;
  const unlimitedPosition = unlimited.getBoundingClientRect().top;
  const timelinePosition = timeline.getBoundingClientRect().top;
  const foldersPosition = folders.getBoundingClientRect().top;
  const watchModePosition = watchMode.getBoundingClientRect().top;
  const interactionPosition = interaction.getBoundingClientRect().top;
  const faqPosition = faq.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (faqPosition < windowHeight / 2) {
    activeSection.value = "faq";
  } else if (interactionPosition < windowHeight / 2) {
    activeSection.value = "interaction";
  } else if (watchModePosition < windowHeight / 2) {
    activeSection.value = "watchMode";
  } else if (foldersPosition < windowHeight / 2) {
    activeSection.value = "folders";
  } else if (timelinePosition < windowHeight / 2) {
    activeSection.value = "timeline";
  } else if (unlimitedPosition < windowHeight / 2) {
    activeSection.value = "unlimited";
  } else if (privacyPosition < windowHeight / 2) {
    activeSection.value = "privacy";
  } else {
    activeSection.value = "tab";
  }
};
const scrollTo = (target: string) => {
  const offset = 120;
  if (target === "mobileBackup") {
    if (mobileBackupSection.value) {
      const mobileBackup = mobileBackupSection.value;

      window.scrollTo({
        top: mobileBackup.offsetTop - offset,
        behavior: "smooth",
      });
    }
  } else if (target === "interaction") {
    if (interactionSection.value) {
      const interaction = interactionSection.value;

      window.scrollTo({
        top: interaction.offsetTop - offset,
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
  } else if (target === "folders") {
    if (foldersSection.value) {
      const folders = foldersSection.value;

      window.scrollTo({
        top: folders.offsetTop - offset,
        behavior: "smooth",
      });
    }
  } else if (target === "timeline") {
    if (timelineSection.value) {
      const timeline = timelineSection.value;

      window.scrollTo({
        top: timeline.offsetTop - offset,
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
  } else if (target === "privacy") {
    if (privacySection.value) {
      const privacy = privacySection.value;

      window.scrollTo({
        top: privacy.offsetTop - offset,
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
</style>
