<template>
  <div class="d-flex justify-center px-16" style="padding-top: 40px">
    <div style="max-width: 1296px; width: 100%">
      <div class="text-h4">{{ $t("message.about.privacy.title") }}</div>
      <br />
      <div class="text-body-1">
        {{ $t("message.about.privacy.subtitle") }}
      </div>
      <br />
      <div v-for="item in arrLength" :key="item">
        <div class="text-title-1 font-weight-bold">
          {{ item }}. {{ $t(`message.about.privacy.arr.${item}.title`) }}
        </div>
        <p
          class="text-body-1"
          v-html="
            $t(`message.about.privacy.arr.${item}.content`, {
              discord: discordUrl,
            })
          "
        />
        <br />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DISCORD_URL } from "@/config/url";
import { ref } from "vue";

const arrLength = ref(7);
const discordUrl = ref(DISCORD_URL);
</script>
