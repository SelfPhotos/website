import { useAppStore } from "@/stores/appStore";
import { setTitle } from "@/utils/common";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/download",
      name: "download",
      component: () => import("@/pages/Download.vue"),
    },
    {
      path: "/releases",
      name: "releases",
      component: () => import("@/pages/Releases.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/pages/Faq.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("@/pages/Terms.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("@/pages/Privacy.vue"),
    },
  ],
});

router.beforeEach(to => {
  const appStore = useAppStore();

  setTitle(to.path, appStore.language);
});

export default router;
