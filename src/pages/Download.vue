<template>
  <div class="d-flex justify-center" style="height: calc(100vh - 64px)">
    <div
      class="d-flex flex-column align-center justify-center pb-16"
      style="max-width: 1296px; width: 100%; height: 100%; margin: 0"
    >
      <div style="margin-bottom: 100px">
        <div class="text-h2 font-weight-bold mb-10">下载Aicasa</div>
        <!-- <div class="text-subtitle-1">
          同时支持iOS、Android、iPadOS、macOS、Windows、Linux版本
        </div> -->
      </div>
      <!-- <div class="text-body-1">
        同时支持iOS、Android、iPadOS、macOS、Windows、Linux版本
      </div> -->
      <div class="w-100 d-flex justify-space-between">
        <div
          class="d-flex flex-column align-center justify-center"
          style="
            width: 178px;
            height: 178px;
            background: #fff;
            box-shadow: 0px 3px 6px -6px rgba(20, 86, 240, 0.14),
              0px 4px 8px rgba(20, 86, 240, 0.06),
              0px 6px 18px 6px rgba(20, 86, 240, 0.04);
            border-radius: 12px;
            overflow: hidden;
          "
        >
          <div
            class="mb-4 cursor-pointer d-flex align-center justify-center os-box"
            style="width: 60px; height: 60px"
          >
            <img
              class="os-logo"
              src="@/assets/logo/windows.png"
              width="60"
              height="60"
            />
            <span
              class="material-symbols-outlined os-download"
              style="font-size: 40px"
            >
              download
            </span>
          </div>
          <span style="font-size: 14px; font-weight: 500"> Windows </span>
          <span style="font-size: 12px">Windows 10 , 11</span>
        </div>
        <div
          class="d-flex flex-column align-center justify-center"
          style="
            width: 178px;
            height: 178px;
            background: #fff;
            box-shadow: 0px 3px 6px -6px rgba(20, 86, 240, 0.14),
              0px 4px 8px rgba(20, 86, 240, 0.06),
              0px 6px 18px 6px rgba(20, 86, 240, 0.04);
            border-radius: 12px;
            overflow: hidden;
          "
        >
          <div
            class="mb-4 cursor-pointer d-flex align-center justify-center os-box"
            style="width: 60px; height: 60px"
          >
            <img
              class="os-logo"
              src="@/assets/logo/mac.png"
              width="60"
              height="60"
            />
            <span
              class="material-symbols-outlined os-download"
              style="font-size: 40px"
            >
              download
            </span>
          </div>
          <span style="font-size: 14px; font-weight: 500"> MacOS </span>
          <span style="font-size: 12px">Apple silicon</span>
        </div>
        <div
          class="d-flex flex-column align-center justify-center"
          style="
            width: 178px;
            height: 178px;
            background: #fff;
            box-shadow: 0px 3px 6px -6px rgba(20, 86, 240, 0.14),
              0px 4px 8px rgba(20, 86, 240, 0.06),
              0px 6px 18px 6px rgba(20, 86, 240, 0.04);
            border-radius: 12px;
            overflow: hidden;
          "
        >
          <div
            class="mb-4 d-flex align-center justify-center"
            style="width: 60px; height: 60px"
          >
            <img src="@/assets/logo/ios.png" width="60" height="60" />
          </div>
          <span style="font-size: 14px; font-weight: 500"> iOS & iPad </span>
          <span style="font-size: 12px">Coming soon</span>
        </div>
        <div
          class="d-flex flex-column align-center justify-center"
          style="
            width: 178px;
            height: 178px;
            background: #fff;
            box-shadow: 0px 3px 6px -6px rgba(20, 86, 240, 0.14),
              0px 4px 8px rgba(20, 86, 240, 0.06),
              0px 6px 18px 6px rgba(20, 86, 240, 0.04);
            border-radius: 12px;
            overflow: hidden;
          "
        >
          <div
            class="mb-4 d-flex align-center justify-center"
            style="width: 60px; height: 60px"
          >
            <img src="@/assets/logo/android.png" width="60" height="60" />
          </div>
          <span style="font-size: 14px; font-weight: 500">Android </span>
          <span style="font-size: 12px">Coming soon</span>
        </div>
        <div
          class="d-flex flex-column align-center justify-center"
          style="
            width: 178px;
            height: 178px;
            background: #fff;
            box-shadow: 0px 3px 6px -6px rgba(20, 86, 240, 0.14),
              0px 4px 8px rgba(20, 86, 240, 0.06),
              0px 6px 18px 6px rgba(20, 86, 240, 0.04);
            border-radius: 12px;
            overflow: hidden;
          "
        >
          <div
            class="mb-4 d-flex align-center justify-center"
            style="width: 60px; height: 60px"
          >
            <img src="@/assets/logo/linux.png" width="60" height="60" />
          </div>
          <span style="font-size: 14px; font-weight: 500">Linux </span>
          <span style="font-size: 12px">Coming soon</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.os-box {
  .os-logo {
    opacity: 1;
    display: block;
  }
  .os-download {
    opacity: 0;
    display: none;
  }
  &:hover {
    .os-logo {
      opacity: 0;
      display: none;
    }
    .os-download {
      opacity: 1;
      display: block;
    }
  }
}
</style>
