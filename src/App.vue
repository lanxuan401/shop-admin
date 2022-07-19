<template>
  <!-- 路由的渲染出口 -->
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import locale from 'element-plus/lib/locale/lang/zh-cn'
</script>
<style>
</style>
