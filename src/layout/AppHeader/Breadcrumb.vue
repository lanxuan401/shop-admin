<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="item in routes"
      :key="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
  // return router.currentRoute.value.matched
})
console.log(router.currentRoute.value.matched, routes)

</script>

<style lang="scss" scoped></style>
