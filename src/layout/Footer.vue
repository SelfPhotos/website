<template>
  <footer
    class="d-flex justify-center px-16"
    style="
      padding: 100px 0;
      border-bottom-width: 0;
      border-right-width: 0;
      border-left-width: 0;
      border-top-width: thin;
      border-color: rgba(var(--v-border-color), var(--v-border-opacity));
      border-style: solid;
    "
  >
    <div style="max-width: 1296px; width: 100%">
      <div
        class="d-flex align-center justify-center flex-wrap mb-10"
        style="gap: 0 10px"
      >
        <v-btn
          variant="text"
          rounded="lg"
          class="text-none"
          size="x-large"
          @click="onWindowOpen(DISCORD_URL)"
        >
          <template #prepend>
            <img src="@/assets/feedback_logo/discord.svg" />
          </template>
          {{ $t("message.feedback.Discord") }}
        </v-btn>
        <v-menu open-on-hover>
          <template v-slot:activator="value">
            <v-btn
              variant="text"
              rounded="lg"
              class="text-none"
              size="x-large"
              v-bind="value.props"
            >
              <template #prepend>
                <img src="@/assets/feedback_logo/wechat.svg" />
              </template>
              {{ $t("message.feedback.Wechat") }}
            </v-btn>
          </template>
          <div>
            <img src="@/assets/weChatQrcode.png" width="200" />
          </div>
        </v-menu>
        <v-menu open-on-hover>
          <template v-slot:activator="value">
            <v-btn
              variant="text"
              rounded="lg"
              class="text-none"
              size="x-large"
              v-bind="value.props"
            >
              <template #prepend>
                <img src="@/assets/feedback_logo/rednote.svg" />
              </template>
              {{ $t("message.feedback.Rednote") }}
            </v-btn>
          </template>
          <div>
            <img src="@/assets/rednoteQrcode.png" width="200" />
          </div>
        </v-menu>
        <v-btn
          variant="text"
          rounded="lg"
          class="text-none"
          size="x-large"
          @click="onWindowOpen(YOUTUBE_URL)"
        >
          <template #prepend>
            <img src="@/assets/feedback_logo/youtube.svg" />
          </template>
          {{ $t("message.feedback.Youtube") }}
        </v-btn>
        <v-btn
          variant="text"
          rounded="lg"
          class="text-none"
          size="x-large"
          @click="onWindowOpen(X_URL)"
        >
          <template #prepend>
            <img src="@/assets/feedback_logo/x_light.svg" />
          </template>
          {{ $t("message.feedback.X") }}
        </v-btn>
        <v-btn
          variant="text"
          rounded="lg"
          class="text-none"
          size="x-large"
          @click="onWindowOpen(GITHUB_URL)"
        >
          <template #prepend>
            <img src="@/assets/feedback_logo/github_light.svg" />
          </template>
          {{ $t("message.feedback.Github") }}
        </v-btn>
        <v-btn
          variant="text"
          rounded="lg"
          class="text-none"
          size="x-large"
          @click="onWindowOpen(BILIBILI_URL)"
        >
          <template #prepend>
            <img src="@/assets/feedback_logo/bilibili.svg" />
          </template>
          {{ $t("message.feedback.Bilibili") }}
        </v-btn>
        <!-- <v-btn
          variant="text"
          rounded="lg"
          class="text-none"
          size="x-large"
          @click="onWindowOpen(REDDIT_URL)"
        >
          <template #prepend>
            <img src="@/assets/feedback_logo/reddit.svg" />
          </template>
          {{ $t("message.feedback.Reddit") }}
        </v-btn> -->
      </div>
      <div class="d-flex align-center justify-center">
        <div
          class="d-flex align-center justify-center flex-wrap"
          style="gap: 0 10px; flex: 1"
        >
          <v-btn
            variant="text"
            rounded="lg"
            class="text-none"
            @click="router.push('/terms')"
          >
            {{ $t("message.about.terms.title") }}
          </v-btn>
          <v-btn
            variant="text"
            rounded="lg"
            class="text-none"
            @click="router.push('/privacy')"
          >
            {{ $t("message.about.privacy.title") }}
          </v-btn>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {
  BILIBILI_URL,
  DISCORD_URL,
  GITHUB_URL,
  X_URL,
  YOUTUBE_URL,
} from "@/config/url";
import { onWindowOpen } from "@/utils/common";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
