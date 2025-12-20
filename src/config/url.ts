export const DISCORD_URL = "https://discord.gg/VCqXcAz6Js";
export const YOUTUBE_URL =
  "https://www.youtube.com/channel/UCDt825L91UsDUKzmcIY0gAw";
export const X_URL = "https://x.com/wikkefly";
export const GITHUB_URL = "https://github.com/SelfPhotos/SelfPhotos";
export const BILIBILI_URL = "https://space.bilibili.com/30280506";
// export const REDDIT_URL = "https://www.reddit.com/r/Aicasa";

export const DESKTOP_VERSION = "0.5.0";
export const DESKTOP_WINDOWS_APP_SIZE = "285 MB";
export const DESKTOP_MACOS_APP_SIZE = "61.1 MB";
export const ANDROID_VERSION = "1.2.3";
export const ANDROID_APP_SIZE = "15.7 MB";
export const IOS_VERSION = "1.2.0";
export const IOS_APP_SIZE = "5.6 MB";
export const IOS_APP_ID = "6753349000";
export const getGithubDownloadWindowsUrl = () => {
  return `https://github.com/SelfPhotos/SelfPhotos/releases/download/${DESKTOP_VERSION}/SelfPhotos_${DESKTOP_VERSION}_x64.msi`;
};
export const getGithubDownloadMacOSUrl = () => {
  return `https://github.com/SelfPhotos/SelfPhotos/releases/download/${DESKTOP_VERSION}/SelfPhotos_${DESKTOP_VERSION}_aarch64.dmg`;
};
export const getTencentDownloadWindowsUrl = () => {
  return `https://aikanxiangce.com/assets/selfphotos/releases/${DESKTOP_VERSION}/SelfPhotos_${DESKTOP_VERSION}_x64.msi`;
};
export const getTencentDownloadMacOSUrl = () => {
  return `https://aikanxiangce.com/assets/selfphotos/releases/${DESKTOP_VERSION}/SelfPhotos_${DESKTOP_VERSION}_aarch64.dmg`;
};
export const getDownloadAndroidUrl = () => {
  return `https://aikanxiangce.com/assets/android/releases/${ANDROID_VERSION}/SelfPhotos_${ANDROID_VERSION}.apk`;
};
export const getDownloadIOSUrl = () => {
  return `https://apps.apple.com/app/id${IOS_APP_ID}`;
};
