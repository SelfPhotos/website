export const DISCORD_URL = "https://discord.gg/VCqXcAz6Js";
export const YOUTUBE_URL =
  "https://www.youtube.com/channel/UCDt825L91UsDUKzmcIY0gAw";
export const X_URL = "https://x.com/wikkefly";
export const GITHUB_URL = "https://github.com/SelfPhotos/SelfPhotos";
export const BILIBILI_URL = "https://space.bilibili.com/30280506";
// export const REDDIT_URL = "https://www.reddit.com/r/Aicasa";

export const VERSION = "0.3.2";
export const getGithubDownloadWindowsUrl = () => {
  return `https://github.com/SelfPhotos/SelfPhotos/releases/download/${VERSION}/SelfPhotos_${VERSION}_x64.msi`;
};
export const getGithubDownloadMacOSUrl = () => {
  return `https://github.com/SelfPhotos/SelfPhotos/releases/download/${VERSION}/SelfPhotos_${VERSION}_aarch64.dmg`;
};
export const getTencentDownloadWindowsUrl = () => {
  return `https://selfphotos-1253926100.cos.ap-guangzhou.myqcloud.com/selfphotos/releases/${VERSION}/SelfPhotos_${VERSION}_x64.msi`;
};
export const getTencentDownloadMacOSUrl = () => {
  return `https://selfphotos-1253926100.cos.ap-guangzhou.myqcloud.com/selfphotos/releases/${VERSION}/SelfPhotos_${VERSION}_aarch64.dmg`;
};
