<template>
  <v-app>
    <v-main>
      <div
        class="d-flex px-4"
        style="
          height: 64px;
          border-top-width: 0;
          border-right-width: 0;
          border-left-width: 0;
          border-bottom-width: thin;
          border-color: rgba(var(--v-border-color), var(--v-border-opacity));
          border-style: solid;
          background: #f8f1f6;
        "
      >
        <div style="flex: 1" class="d-flex align-center">
          <img
            class="cursor-pointer"
            width="100"
            height="24.65"
            src="@/assets/aicasa.png"
            @click="router.push('/')"
          />
        </div>
        <div class="d-flex align-center">
          <v-btn class="text-none" variant="text" rounded>Get apps</v-btn>
          <v-btn class="text-none" variant="text" rounded>Local</v-btn>
        </div>
      </div>
      <router-view />
      <div style="height: 15px" class="d-flex">
        <img src="@/assets/wavyLine.svg" width="100%" height="15" />
      </div>
      <div
        class="d-flex justify-center"
        style="background: #f8f1f6; padding: 60px 0"
      >
        <div style="max-width: 1296px; width: 100%">
          <div class="d-flex">
            <img
              width="100"
              height="24.65"
              src="@/assets/aicasa.png"
              class="mr-16"
            />
            <div style="flex: 1">
              <div class="d-flex align-center">
                <div class="text-no-wrap text-subtitle-2 pr-2">
                  Follow Us On:
                </div>
                <div
                  class="d-flex align-center flex-wrap"
                  style="gap: 0 10px; flex: 1"
                >
                  <v-btn variant="text" rounded="lg" class="text-none">
                    <template #prepend>
                      <img src="@/assets/github.svg" />
                    </template>
                    github
                  </v-btn>
                  <v-btn variant="text" rounded="lg" class="text-none">
                    <template #prepend>
                      <img src="@/assets/discord.svg" />
                    </template>
                    discord
                  </v-btn>
                  <v-btn variant="text" rounded="lg" class="text-none">
                    <template #prepend>
                      <img src="@/assets/reddit.svg" />
                    </template>
                    reddit
                  </v-btn>
                  <v-btn variant="text" rounded="lg" class="text-none">
                    <template #prepend>
                      <img src="@/assets/x_twiter.svg" />
                    </template>
                    twiter
                  </v-btn>
                  <v-btn variant="text" rounded="lg" class="text-none">
                    <template #prepend>
                      <img src="@/assets/tiktok.svg" />
                    </template>
                    tiktok
                  </v-btn>
                  <v-btn variant="text" rounded="lg" class="text-none">
                    <template #prepend>
                      <img src="@/assets/wechat.svg" />
                    </template>
                    wechat
                  </v-btn>
                </div>
              </div>
              <div class="d-flex align-center">
                <div class="text-no-wrap text-subtitle-2 pr-2">About:</div>
                <div
                  class="d-flex align-center flex-wrap"
                  style="gap: 0 10px; flex: 1"
                >
                  <v-btn
                    variant="text"
                    rounded="lg"
                    class="text-none"
                    @click="router.push('/terms')"
                  >
                    Terms of service
                  </v-btn>
                  <v-btn
                    variant="text"
                    rounded="lg"
                    class="text-none"
                    @click="router.push('/privacy')"
                  >
                    Privacy Policy
                  </v-btn>
                  <v-btn
                    variant="text"
                    rounded="lg"
                    class="text-none"
                    @click="router.push('/refund')"
                  >
                    Refund policy
                  </v-btn>
                  <v-btn
                    variant="text"
                    rounded="lg"
                    class="text-none"
                    @click="router.push('/disclaimer')"
                  >
                    Disclaimer
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <!-- <v-row>
        <v-col cols="8">
          <img width="100" height="24.65" src="@/assets/aicasa.png" />
        </v-col>
        <v-col cols="2" class="d-flex flex-column align-center">
          <div class="text-subtitle-2">Follow Us On</div>
          <v-btn variant="text" class="text-none">
            <template #prepend>
              <img src="@/assets/github.svg" />
            </template>
            github
          </v-btn>
          <v-btn variant="text" class="text-none">
            <template #prepend>
              <img src="@/assets/github.svg" />
            </template>
            github
          </v-btn>
          <v-btn variant="text" class="text-none">
            <template #prepend>
              <img src="@/assets/github.svg" />
            </template>
            github
          </v-btn>
        </v-col>
        <v-col cols="2" class="d-flex flex-column align-center">
          <div class="text-subtitle-2">About</div>
          <v-btn variant="text" class="text-none"> Terms of service </v-btn>
          <v-btn variant="text" class="text-none"> Privacy Policy </v-btn>
          <v-btn variant="text" class="text-none"> Refund policy </v-btn>
          <v-btn variant="text" class="text-none"> Disclaimer </v-btn>
        </v-col>
      </v-row> -->
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
