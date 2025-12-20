<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";
import { GlobeAltIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAppStore } from "@/stores/appStore";
import { LanguageKind } from "@/types/enums";
import { useI18n } from "vue-i18n";
import { setTitle } from "@/utils/common";

const route = useRoute();
const router = useRouter();
const appStore = useAppStore();
const { locale } = useI18n();

const selectedLanguage = ref(
  appStore.languageOptions.filter((item) => item.kind === appStore.language)[0]
);

watch(
  () => selectedLanguage.value,
  (newValue) => {
    locale.value = newValue.kind;
    appStore.changeLanguage(newValue.kind);
    setTitle(route.path, appStore.language);
  },
  { deep: true }
);

onMounted(() => {
  setTimeout(() => {
    selectedLanguage.value = appStore.languageOptions.filter(
      (item) => item.kind === appStore.language
    )[0];
  }, 0);
});
</script>

<template>
  <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div
          class="flex items-center space-x-2 cursor-pointer"
          @click="router.push('/')"
        >
          <img src="@/assets/images/logo/logo.png" alt="logo" class="w-8 h-8" />
          <span class="text-xl font-['Pacifico'] text-gray-800">{{
            $t("message.app.name")
          }}</span>
        </div>
        <div class="flex items-center space-x-4">
          <nav class="hidden md:flex items-center space-x-8">
            <a
              class="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              href="/faq"
            >
              {{ $t("message.router.faq") }}
            </a>
            <a
              class="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              href="/releases"
            >
              {{ $t("message.router.releases") }}
            </a>
            <a
              class="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              href="/download"
            >
              {{ $t("message.router.download") }}
            </a>
          </nav>

          <Listbox v-model="selectedLanguage" class="flex w-30">
            <div class="relative">
              <ListboxButton
                class="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
                v-slot="{ open }"
              >
                <globe-alt-icon class="text-lg size-6" />
                <span class="hidden sm:inline">
                  {{ selectedLanguage.name }}
                </span>
                <chevron-down-icon
                  :class="[
                    open ? 'rotate-180' : '',
                    'h-5 w-5 text-gray-400 transition-transform duration-200',
                  ]"
                  aria-hidden="true"
                />
              </ListboxButton>

              <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute mt-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="language in appStore.languageOptions"
                    :key="language.kind"
                    :value="language"
                    as="template"
                  >
                    <li
                      :class="[
                        active
                          ? 'bg-amber-100 text-amber-900'
                          : 'text-gray-900',
                        selected ? 'bg-blue-50' : '',
                        'w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-50 transition-colors cursor-pointer text-gray-700',
                      ]"
                    >
                      <span class="text-lg">{{
                        language.kind === LanguageKind.zh ? "🇨🇳" : "🇺🇸"
                      }}</span>
                      <span>{{ language.name }}</span>
                      <check-icon
                        v-if="selected"
                        class="w-4 h-4 text-blue-600 ml-auto"
                        aria-hidden="true"
                      />
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>

          <Menu as="div" class="md:hidden relative inline-block text-left">
            <div>
              <MenuButton
                class="p-2 text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                <bars-3-icon class="text-lg size-6" />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
              >
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                      @click="router.push('/faq')"
                    >
                      {{ $t("message.router.faq") }}
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                      @click="router.push('/releases')"
                    >
                      {{ $t("message.router.releases") }}
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                      @click="router.push('/download')"
                    >
                      {{ $t("message.router.download") }}
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
