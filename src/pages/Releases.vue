<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import {
  InformationCircleIcon,
  StarIcon,
  PlusCircleIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/vue/24/outline";
import { CalendarIcon } from "@heroicons/vue/16/solid";
import { useAppStore } from "@/stores/appStore";

const appStore = useAppStore();

const formatDate = (dateStr: string) => {
  // 把 "2025-08-29" 转成 Date
  const date = new Date(dateStr);

  // 使用 Intl.DateTimeFormat 来格式化
  return new Intl.DateTimeFormat(appStore.language, {
    year: "numeric",
    month: "long", // 显示完整月份 (August / 八月)
    day: "numeric",
  }).format(date);
};
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        {{ $t("message.release.title") }}
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        {{ $t("message.release.subtitle") }}
      </p>
    </div>
    <TabGroup>
      <!-- <TabList class="flex justify-center mb-12">
        <div class="bg-gray-100 p-1 rounded-full">
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="[
                'px-6 py-3 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap',
                selected
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900',
              ]"
            >
              {{ $t("message.release.desktop.label") }}
            </button>
          </Tab>
          <Tab as="template" v-slot="{ selected }">
            <button
              :class="[
                'px-6 py-3 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap',
                selected
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900',
              ]"
            >
              {{ $t("message.release.android.label") }}
            </button>
          </Tab>
        </div>
      </TabList> -->

      <TabPanels class="mt-2">
        <TabPanel>
          <div
            class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg"
          >
            <div class="flex items-center">
              <information-circle-icon class="text-blue-600 w-6 h-6" />
              <div class="ml-3">
                <p class="text-sm text-blue-800">
                  {{ $t("message.release.desktop.tip") }}
                </p>
              </div>
            </div>
          </div>
          <div class="space-y-8">
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-8">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                >
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                      v0.4.2
                    </h3>
                    <div
                      class="flex items-center space-x-4 text-sm text-gray-600"
                    >
                      <span class="flex items-center">
                        <calendar-icon class="mr-1 w-4 h-4" />
                        {{ formatDate("2025-09-15") }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <sparkles-icon class="text-purple-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.optimization") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_2.optimizations.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_2.optimizations.2") }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <wrench-screwdriver-icon
                      class="text-blue-500 mr-2 w-5 h-5"
                    />
                    {{ $t("message.release.bugfix") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_2.bugfixs.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_2.bugfixs.2") }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-8">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                >
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                      v0.4.1
                    </h3>
                    <div
                      class="flex items-center space-x-4 text-sm text-gray-600"
                    >
                      <span class="flex items-center">
                        <calendar-icon class="mr-1 w-4 h-4" />
                        {{ formatDate("2025-09-08") }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <sparkles-icon class="text-purple-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.optimization") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.optimizations.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.optimizations.2") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.optimizations.3") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.optimizations.4") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.optimizations.5") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.optimizations.6") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.optimizations.7") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.optimizations.8") }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <wrench-screwdriver-icon
                      class="text-blue-500 mr-2 w-5 h-5"
                    />
                    {{ $t("message.release.bugfix") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.bugfixs.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.bugfixs.2") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_1.bugfixs.3") }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-8">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                >
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                      v0.4.0
                    </h3>
                    <div
                      class="flex items-center space-x-4 text-sm text-gray-600"
                    >
                      <span class="flex items-center">
                        <calendar-icon class="mr-1 w-4 h-4" />
                        {{ formatDate("2025-08-29") }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <star-icon class="text-yellow-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.feature") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.features.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.features.2") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.features.3") }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <sparkles-icon class="text-purple-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.optimization") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.optimizations.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.optimizations.2") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.optimizations.3") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.optimizations.4") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.optimizations.5") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.optimizations.6") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.optimizations.7") }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <wrench-screwdriver-icon
                      class="text-blue-500 mr-2 w-5 h-5"
                    />
                    {{ $t("message.release.bugfix") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.bugfixs.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_4_0.bugfixs.2") }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-8">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                >
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                      v0.3.2
                    </h3>
                    <div
                      class="flex items-center space-x-4 text-sm text-gray-600"
                    >
                      <span class="flex items-center">
                        <calendar-icon class="mr-1 w-4 h-4" />
                        {{ formatDate("2025-07-15") }}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <sparkles-icon class="text-purple-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.optimization") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_2.optimizations.1") }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-8">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                >
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                      v0.3.1
                    </h3>
                    <div
                      class="flex items-center space-x-4 text-sm text-gray-600"
                    >
                      <span class="flex items-center">
                        <calendar-icon class="mr-1 w-4 h-4" />
                        {{ formatDate("2025-07-12") }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <star-icon class="text-yellow-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.feature") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_1.features.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_1.features.2") }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <sparkles-icon class="text-purple-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.optimization") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_1.optimizations.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_1.optimizations.2") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_1.optimizations.3") }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <wrench-screwdriver-icon
                      class="text-blue-500 mr-2 w-5 h-5"
                    />
                    {{ $t("message.release.bugfix") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_1.bugfixs.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_1.bugfixs.2") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_1.bugfixs.3") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_1.bugfixs.4") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_1.bugfixs.5") }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-8">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                >
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                      v0.3.0
                    </h3>
                    <div
                      class="flex items-center space-x-4 text-sm text-gray-600"
                    >
                      <span class="flex items-center">
                        <calendar-icon class="mr-1 w-4 h-4" />
                        {{ formatDate("2025-05-09") }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <star-icon class="text-yellow-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.feature") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_0.features.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_0.features.2") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_0.features.3") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_0.features.4") }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <sparkles-icon class="text-purple-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.optimization") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_0.optimizations.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_0.optimizations.2") }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <wrench-screwdriver-icon
                      class="text-blue-500 mr-2 w-5 h-5"
                    />
                    {{ $t("message.release.bugfix") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_3_0.bugfixs.1") }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-8">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                >
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                      v0.2.1
                    </h3>
                    <div
                      class="flex items-center space-x-4 text-sm text-gray-600"
                    >
                      <span class="flex items-center">
                        <calendar-icon class="mr-1 w-4 h-4" />
                        {{ formatDate("2025-04-22") }}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <star-icon class="text-yellow-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.feature") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_2_1.features.1.title") }}
                      </span>
                    </li>
                    <ul class="list-disc pl-8">
                      <li>
                        <span class="text-gray-500">
                          {{ $t("message.releases.0_2_1.features.1.1") }}
                        </span>
                      </li>
                    </ul>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_2_1.features.2.title") }}
                      </span>
                    </li>
                    <ul class="list-disc pl-8">
                      <li>
                        <span class="text-gray-500">
                          {{ $t("message.releases.0_2_1.features.2.1") }}
                        </span>
                      </li>
                      <li>
                        <span class="text-gray-500">
                          {{ $t("message.releases.0_2_1.features.2.2") }}
                        </span>
                      </li>
                    </ul>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_2_1.features.3.title") }}
                      </span>
                    </li>
                    <ul class="list-disc pl-8">
                      <li>
                        <span class="text-gray-500">
                          {{ $t("message.releases.0_2_1.features.3.1") }}
                        </span>
                      </li>
                    </ul>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_2_1.features.4.title") }}
                      </span>
                    </li>
                    <ul class="list-disc pl-8">
                      <li>
                        <span class="text-gray-500">
                          {{ $t("message.releases.0_2_1.features.4.1") }}
                        </span>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-8">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                >
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                      v0.2.0
                    </h3>
                    <div
                      class="flex items-center space-x-4 text-sm text-gray-600"
                    >
                      <span class="flex items-center">
                        <calendar-icon class="mr-1 w-4 h-4" />
                        {{ formatDate("2025-04-11") }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <sparkles-icon class="text-purple-500 mr-2 w-5 h-5" />
                    {{ $t("message.release.optimization") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_2_0.optimizations.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_2_0.optimizations.2") }}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <wrench-screwdriver-icon
                      class="text-blue-500 mr-2 w-5 h-5"
                    />
                    {{ $t("message.release.bugfix") }}
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_2_0.bugfixs.1") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_2_0.bugfixs.2") }}
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        {{ $t("message.releases.0_2_0.bugfixs.3") }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <!-- <TabPanel>
          <div
            class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg"
          >
            <div class="flex items-center">
              <information-circle-icon class="text-blue-600 w-6 h-6" />
              <div class="ml-3">
                <p class="text-sm text-blue-800">
                  {{ $t("message.release.android.tip") }}
                </p>
              </div>
            </div>
          </div>
          <div class="space-y-8">
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="p-8">
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
                >
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">
                      v2.1.3
                    </h3>
                  </div>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <StarIcon class="text-yellow-500 mr-2 w-5 h-5" />新增功能
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        新增批量重命名功能，支持按日期、地点等规则自动命名
                      </span>
                    </li>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        优化相册导入速度，大幅提升处理效率
                      </span>
                    </li>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        修复在某些情况下缩略图显示异常的问题
                      </span>
                    </li>
                    <li class="flex items-start">
                      <plus-circle-icon
                        class="text-green-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        改进内存管理，降低大量照片处理时的内存占用
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="mb-6">
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <sparkles-icon class="text-purple-500 mr-2 w-5 h-5" />
                    优化
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        修复macOS Big Sur系统下的兼容性问题
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        解决Windows 11中文件拖拽偶发失效的bug
                      </span>
                    </li>
                    <li class="flex items-start">
                      <arrow-trending-up-icon
                        class="text-orange-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        优化启动速度，减少冷启动时间
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4
                    class="text-lg font-semibold text-gray-900 mb-3 flex items-center"
                  >
                    <wrench-screwdriver-icon
                      class="text-blue-500 mr-2 w-5 h-5"
                    />
                    问题修复
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        修复macOS Big Sur系统下的兼容性问题
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        解决Windows 11中文件拖拽偶发失效的bug
                      </span>
                    </li>
                    <li class="flex items-start">
                      <check-circle-icon
                        class="text-blue-500 mt-1 mr-3 flex-shrink-0 w-4 h-4"
                      />
                      <span class="text-gray-700">
                        优化启动速度，减少冷启动时间
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabPanel> -->
      </TabPanels>
    </TabGroup>
    <div class="mt-16 text-center">
      <div
        class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
      >
        <h3 class="text-2xl font-bold mb-4">
          {{ $t("message.release.downloadTip.title") }}
        </h3>
        <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
          {{ $t("message.release.downloadTip.subtitle") }}
        </p>
        <a
          href="/download"
          class="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
        >
          <arrow-down-tray-icon class="mr-2 w-5 h-5" />{{
            $t("message.download.downloadButton")
          }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
