<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ $store.state.user?.account }}
      <i class="el-icon-arrow-down el-icon--right" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogou">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { logout } from '@/api/common'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const store = useStore()

const handleLogou = () => {
  // 退出提示
  ElMessageBox.confirm('确认退出吗？', '退出提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    // 确认发出退出请求
    await logout()

    // 清除用户登录信息
    store.commit('setUser', null)

    ElMessage({
      type: 'success',
      message: '退出成功!'
    })

    // 跳转到登录页
    router.push({
      name: 'login'
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消退出'
    })
  })
}

</script>

<style lang="scss" scoped></style>
