<script setup lang="ts">
import HeaderCom from "@/layout/HeaderCom.vue";
import FooterCom from "@/layout/FooterCom.vue";
import { useAppStore } from "@/stores/appStore";
import { onMounted } from "vue";

const appStore = useAppStore();

onMounted(() => {
  appStore.init();
});
</script>

<template>
  <div class="min-h-screen bg-white">
    <header-com />
    <router-view />
    <footer-com />
  </div>
</template>

<style scoped></style>
