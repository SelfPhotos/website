<template>
  <v-app>
    <v-main>
      <Toolbar />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Toolbar from "@/layout/Toolbar.vue";
import Footer from "@/layout/Footer.vue";
import { useAppStore } from "@/store/appStore";

const appStore = useAppStore();

appStore.init();
</script>
