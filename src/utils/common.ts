import { LanguageKind } from "@/types/enums";

export function setTitle(path: string, language: string) {
  const metaDescription = document.querySelector('meta[name="description"]');
  switch (path) {
    case "/":
      if (language === LanguageKind.zh) {
        document.title = "爱看相册 - 一站式个人相册管理专家";
      } else {
        document.title = "Self Photos - Self-Hosted Photo Management Software";
      }
      if (metaDescription) {
        if (language === LanguageKind.zh) {
          metaDescription.setAttribute(
            "content",
            "备份手机相册，扫描电脑硬盘和网盘照片……让你的回忆井井有条。"
          );
        } else {
          metaDescription.setAttribute(
            "content",
            "Like Picasa(predecessor to Google Photos), Keep Everything Local on your Computer."
          );
        }
      }
      break;
    case "/download":
      if (language === LanguageKind.zh) {
        document.title = "爱看相册 - 下载";
      } else {
        document.title = "Self Photos - Download";
      }
      if (metaDescription) {
        if (language === LanguageKind.zh) {
          metaDescription.setAttribute(
            "content",
            "免费下载使用Windows或者MacOS应用程序。"
          );
        } else {
          metaDescription.setAttribute(
            "content",
            "Download the Windows or MacOS application for free."
          );
        }
      }
      break;
    case "/releases":
      if (language === LanguageKind.zh) {
        document.title = "爱看相册 - 版本发布";
      } else {
        document.title = "Self Photos - Release Notes";
      }
      if (metaDescription) {
        if (language === LanguageKind.zh) {
          metaDescription.setAttribute(
            "content",
            "了解爱看相册各个平台的最新功能更新和问题修复。"
          );
        } else {
          metaDescription.setAttribute(
            "content",
            "Stay informed about the latest feature updates and issue fixes of Self Photos on various platforms."
          );
        }
      }
      break;
    case "/faq":
      if (language === LanguageKind.zh) {
        document.title = "爱看相册 - 常见问题";
      } else {
        document.title = "Self Photos - FAQ";
      }
      if (metaDescription) {
        if (language === LanguageKind.zh) {
          metaDescription.setAttribute(
            "content",
            "这里汇总了用户最关心的问题和详细解答，帮助你更好地使用爱看相册"
          );
        } else {
          metaDescription.setAttribute(
            "content",
            "Here are summarized the most concerned questions of users and detailed answers to help you use Self Photos better."
          );
        }
      }
      break;
    default:
      if (language === "zh-CN") {
        document.title = "爱看相册";
      } else {
        document.title = "Self Photos";
      }
      if (metaDescription) {
        metaDescription.setAttribute("content", "");
      }
  }
}

export function onWindowOpen(targetUrl: string) {
  window.open(targetUrl, "_blank");
}
