<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { useAppStore } from "@/stores/appStore";

const appStore = useAppStore();
</script>

<template>
  <div>
    <section class="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          {{ $t("message.router.faq") }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          {{ $t("message.faq.tip") }}
        </p>
      </div>
    </section>
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="space-y-4">
            <div
              v-for="item in appStore.totalFAQCount"
              :key="item"
              class="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="w-full px-8 py-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-800 pr-4">
                      {{ $t(`message.faqs.${item}.q`) }}
                    </h3>
                  </div>
                  <div class="flex-shrink-0">
                    <chevron-down-icon
                      :class="open ? 'rotate-180' : ''"
                      class="h-5 w-5 text-2xl text-blue-600 transition-transform duration-200"
                    />
                  </div>
                </DisclosureButton>
                <DisclosurePanel class="px-8 pb-6">
                  <div class="bg-white rounded-xl p-6 shadow-sm">
                    <p
                      class="text-gray-600 leading-relaxed"
                      style="white-space: pre-line"
                    >
                      {{ $t(`message.faqs.${item}.a`) }}
                    </p>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
