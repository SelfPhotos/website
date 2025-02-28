/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { useAppStore } from "@/store/appStore";
import { createRouter, createWebHistory } from "vue-router/auto";
import { routes } from "vue-router/auto-routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

router.beforeEach((to) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  const appStore = useAppStore();
  switch (to.path) {
    case "/":
      if (metaDescription) {
        if (appStore.languge === "zh-CN") {
          document.title = "Aicasa - 一站式个人相册管理专家";
          metaDescription.setAttribute(
            "content",
            "备份手机相册，扫描电脑硬盘和网盘照片……让你的回忆井井有条。"
          );
        } else {
          document.title =
            "Aicasa - Privacy-Focused Photo Organizer for Desktop";
          metaDescription.setAttribute(
            "content",
            "Like Picasa(predecessor to Google Photos), Keep Everything Local on your Computer."
          );
        }
      }
      break;
    case "/download":
      if (metaDescription) {
        if (appStore.languge === "zh-CN") {
          document.title = "Aicasa - 下载";
          metaDescription.setAttribute(
            "content",
            "免费下载使用Windows或者MacOS应用程序。"
          );
        } else {
          document.title = "Aicasa - Download";
          metaDescription.setAttribute(
            "content",
            "Download the Windows or MacOS application for free."
          );
        }
      }
      break;
    default:
      document.title = "Aicasa";
      if (metaDescription) {
        metaDescription.setAttribute("content", "");
      }
  }
});

export default router;
