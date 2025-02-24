<template>
  <v-app>
    <v-main>
      <div
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
              class="cursor-pointer"
              width="100"
              height="24.65"
              src="@/assets/aicasa.png"
              @click="router.push('/')"
            />
          </div>
          <div class="d-flex align-center">
            <v-menu open-on-hover>
              <template v-slot:activator="value">
                <v-btn
                  class="text-none"
                  rounded="lg"
                  variant="text"
                  v-bind="value.props"
                >
                  WeChat
                </v-btn>
              </template>
              <div>
                <img src="@/assets/qrcode.png" width="200" />
              </div>
            </v-menu>
            <v-btn class="text-none" rounded="lg" variant="text">
              Github
              <template #append>
                <span
                  class="material-symbols-outlined cursor-pointer"
                  style="font-size: 20px"
                >
                  open_in_new
                </span>
              </template>
            </v-btn>
            <v-btn class="text-none" rounded="lg" variant="text">
              Discord
              <template #append>
                <span
                  class="material-symbols-outlined cursor-pointer"
                  style="font-size: 20px"
                >
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
              Download
            </v-btn>
            <v-btn class="text-none" variant="text" rounded="lg">Local</v-btn>
          </div>
        </div>
      </div>
      <router-view />
      <div
        class="d-flex justify-center"
        style="
          padding: 100px 0;
          border-top-width: 0;
          border-right-width: 0;
          border-left-width: 0;
          border-top-width: thin;
          border-color: rgba(var(--v-border-color), var(--v-border-opacity));
          border-style: solid;
        "
      >
        <div style="max-width: 1296px; width: 100%">
          <!-- <img
              width="200"
              height="49"
              src="@/assets/aicasa.png"
              class="mr-16"
            /> -->
          <div class="d-flex align-center mb-10">
            <!-- <div class="text-no-wrap text-subtitle-2 pr-2">
                  Follow Us On:
                </div> -->
            <div
              class="d-flex align-center justify-center flex-wrap"
              style="gap: 0 10px; flex: 1"
            >
              <v-btn
                variant="text"
                rounded="lg"
                class="text-none"
                size="x-large"
              >
                <template #prepend>
                  <img src="@/assets/github.svg" />
                </template>
                Github
              </v-btn>
              <v-btn
                variant="text"
                rounded="lg"
                class="text-none"
                size="x-large"
              >
                <template #prepend>
                  <img src="@/assets/discord.svg" />
                </template>
                Discord
              </v-btn>
              <v-btn
                variant="text"
                rounded="lg"
                class="text-none"
                size="x-large"
              >
                <template #prepend>
                  <img src="@/assets/reddit.svg" />
                </template>
                Reddit
              </v-btn>
              <v-btn
                variant="text"
                rounded="lg"
                class="text-none"
                size="x-large"
              >
                <template #prepend>
                  <img src="@/assets/x_twiter.svg" />
                </template>
                X
              </v-btn>
              <v-btn
                variant="text"
                rounded="lg"
                class="text-none"
                size="x-large"
              >
                <template #prepend>
                  <img src="@/assets/tiktok.svg" />
                </template>
                Tiktok
              </v-btn>
              <v-btn
                variant="text"
                rounded="lg"
                class="text-none"
                size="x-large"
              >
                <template #prepend>
                  <img src="@/assets/wechat.svg" />
                </template>
                Wechat
              </v-btn>
            </div>
          </div>
          <div class="d-flex align-center justify-center">
            <!-- <div class="text-no-wrap text-subtitle-2 pr-2">About:</div> -->
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
              <!-- <v-btn
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
              </v-btn> -->
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

function getOS() {
  const userAgent = navigator.userAgent;

  let os = "Unknown OS";

  if (userAgent.indexOf("Windows NT") !== -1) {
    os = "Windows";
  } else if (userAgent.indexOf("Mac OS X") !== -1) {
    os = "macOS";
  } else if (userAgent.indexOf("Linux") !== -1) {
    os = "Linux";
  } else if (userAgent.indexOf("Android") !== -1) {
    os = "Android";
  } else if (
    userAgent.indexOf("iPhone") !== -1 ||
    userAgent.indexOf("iPad") !== -1
  ) {
    os = "iOS";
  }

  console.log(os);
}

getOS();
</script>
