<script setup lang="ts">
import { useAppStore } from "@/stores/appStore";

const appStore = useAppStore();
</script>

<template>
  <div>
    <section class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          {{ $t("message.router.terms") }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto text-left">
          {{ $t("message.term.tip") }}
        </p>
      </div>
    </section>
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto prose prose-lg">
          <div class="bg-gray-50 rounded-2xl p-8 space-y-12">
            <div v-for="item in appStore.totalTermsCount" :key="item">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">
                {{ item }}. {{ $t(`message.terms.${item}.title`) }}
              </h2>
              <div class="space-y-4 text-gray-600">
                <p style="white-space: pre-line">
                  {{ $t(`message.terms.${item}.content`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
