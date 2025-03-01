<template>
  <div
    class="d-flex justify-center px-16"
    style="height: calc(100vh - 64px); min-height: 500px"
  >
    <div
      class="d-flex flex-column align-center justify-center pb-16"
      style="max-width: 1296px; width: 100%; height: 100%; margin: 0"
    >
      <div style="margin-bottom: 100px">
        <div class="text-h2 font-weight-bold mb-10">
          {{ $t("message.Download") }} Aicasa
        </div>
      </div>
      <div class="w-100 d-flex justify-space-between flex-wrap ga-2">
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
          <span style="font-size: 12px">
            {{ $t("message.download.AppleSilicon") }}
          </span>
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
          <span style="font-size: 12px">{{
            $t("message.download.comingSoon")
          }}</span>
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
          <span style="font-size: 12px">{{
            $t("message.download.comingSoon")
          }}</span>
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
          <span style="font-size: 12px">{{
            $t("message.download.comingSoon")
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

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
