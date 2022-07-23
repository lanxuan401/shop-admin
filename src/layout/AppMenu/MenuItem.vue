<template>
  <div>
    <!-- 有子节点 -->
    <el-sub-menu
      v-if="menu.children && menu.children.length"
      :index="menu.path"
    >
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ menu.title }}</span>
      </template>
      <el-menu-item
        v-for="subMenu in menu.children"
        :key="subMenu.path"
        index="1-1"
      >
        {{ subMenu.title }}
      </el-menu-item>
    </el-sub-menu>
    <!-- 无子节点 -->
    <el-menu-item
      v-else
      :index="menu.path"
    >
      <el-icon><icon-menu /></el-icon>
      <span>{{ menu.title }}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { IMenu } from '@/api/types/common'

const props = defineProps({
  menu: {
    type: Object as PropType<IMenu>,
    required: true
  }
})

const menu = ref(props.menu)

</script>

<style lang="scss" scoped>
i.Ionicons {
  margin-right: 12px;
}

.el-submenu .el-menu-item, .el-submenu :deep(.el-submenu) .el-submenu__title {
  background-color: #1f2d3d !important;
}

.el-submenu .el-menu-item:hover, .el-submenu :deep(.el-submenu) .el-submenu__title:hover {
  background-color: #001528 !important;
}
</style>
