<template>
  <i
    class="el-icon-full-screen"
    @click="toggleFullScreen"
  />
</template>

<script lang="ts" setup>
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<style lang="scss" scoped></style>
