export const DISCORD_URL = "https://discord.gg/VCqXcAz6Js";
export const YOUTUBE_URL = "https://www.youtube.com/@aicasa-media";
export const X_URL = "https://x.com/wikkefly";
export const GITHUB_URL = "https://github.com/aicasa-ai/Aicasa";
export const BILIBILI_URL = "https://space.bilibili.com/30280506";
export const REDDIT_URL = "https://www.reddit.com/r/Aicasa";

export const VERSION = "0.2.1";
export const getGithubDownloadWindowsUrl = () => {
  return `https://github.com/aicasa-ai/Aicasa/releases/download/${VERSION}/Aicasa_${VERSION}_x64.msi`;
};
export const getGithubDownloadMacOSUrl = () => {
  return `https://github.com/aicasa-ai/Aicasa/releases/download/${VERSION}/Aicasa_${VERSION}_aarch64.dmg`;
};
export const getTencentDownloadWindowsUrl = () => {
  return `https://aicasa-1253926100.cos.ap-shanghai.myqcloud.com/aicasa/releases/${VERSION}/Aicasa_${VERSION}_x64.msi`;
};
export const getTencentDownloadMacOSUrl = () => {
  return `https://aicasa-1253926100.cos.ap-shanghai.myqcloud.com/aicasa/releases/${VERSION}/Aicasa_${VERSION}_aarch64.dmg`;
};
