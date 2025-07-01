export function setTitle(path: string, language: string) {
  const metaDescription = document.querySelector('meta[name="description"]');
  switch (path) {
    case "/":
      if (language === "zh-CN") {
        document.title = "爱看相册 - 一站式个人相册管理专家";
      } else {
        document.title = "Self Photos - Self-Hosted Photo Management Software";
      }
      if (metaDescription) {
        if (language === "zh-CN") {
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
      if (language === "zh-CN") {
        document.title = "爱看相册 - 下载";
      } else {
        document.title = "Self Photos - Download";
      }
      if (metaDescription) {
        if (language === "zh-CN") {
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
