<template>
  <div class="d-flex justify-center px-16" style="padding-top: 40px">
    <div style="max-width: 1296px; width: 100%">
      <div class="text-h4">{{ $t("message.about.terms.title") }}</div>
      <br />
      <div class="text-body-1">
        {{ $t("message.about.terms.subtitle") }}
      </div>
      <br />
      <div v-for="item in arrLength" :key="item">
        <div class="text-title-1 font-weight-bold">
          {{ item }}. {{ $t(`message.about.terms.arr.${item}.title`) }}
        </div>
        <p
          class="text-body-1"
          v-html="$t(`message.about.terms.arr.${item}.content`)"
        />
        <br />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const arrLength = ref(9);
</script>
