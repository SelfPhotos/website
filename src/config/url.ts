export const DISCORD_URL = "https://discord.gg/VCqXcAz6Js";
export const YOUTUBE_URL =
  "https://www.youtube.com/channel/UCDt825L91UsDUKzmcIY0gAw";
export const X_URL = "https://x.com/wikkefly";
export const GITHUB_URL = "https://github.com/SelfPhotos/SelfPhotos";
export const BILIBILI_URL = "https://space.bilibili.com/30280506";
// export const REDDIT_URL = "https://www.reddit.com/r/Aicasa";

export const DESKTOP_VERSION = "0.4.1";
export const ANDROID_VERSION = "0.1.0";
export const getGithubDownloadWindowsUrl = () => {
  return `https://github.com/SelfPhotos/SelfPhotos/releases/download/${DESKTOP_VERSION}/SelfPhotos_${DESKTOP_VERSION}_x64.msi`;
};
export const getGithubDownloadMacOSUrl = () => {
  return `https://github.com/SelfPhotos/SelfPhotos/releases/download/${DESKTOP_VERSION}/SelfPhotos_${DESKTOP_VERSION}_aarch64.dmg`;
};
export const getTencentDownloadWindowsUrl = () => {
  return `https://selfphotos-1253926100.cos.ap-guangzhou.myqcloud.com/selfphotos/releases/${DESKTOP_VERSION}/SelfPhotos_${DESKTOP_VERSION}_x64.msi`;
};
export const getTencentDownloadMacOSUrl = () => {
  return `https://selfphotos-1253926100.cos.ap-guangzhou.myqcloud.com/selfphotos/releases/${DESKTOP_VERSION}/SelfPhotos_${DESKTOP_VERSION}_aarch64.dmg`;
};
export const getDownloadAndroidUrl = () => {
  return `https://aikanxiangce.com/assets/android/releases/${ANDROID_VERSION}/SelfPhotos_${ANDROID_VERSION}.apk`;
};
