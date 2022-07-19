<template>
  <el-menu
    :unique-opened="false"
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    :collapse="$store.state.isCollapse"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-menu" />
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location" />
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        <i class="el-icon-menu" />
        <template #title>
          商品列表
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        <i class="el-icon-menu" />
        <template #title>
          商品分类
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        <i class="el-icon-menu" />
        <template #title>
          商品规格
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        <i class="el-icon-menu" />
        <template #title>
          商品评论
        </template>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-location" />
        <span>订单</span>
      </template>
      <el-menu-item index="2-1">
        <i class="el-icon-menu" />
        <template #title>
          订单管理
        </template>
      </el-menu-item>
      <el-menu-item index="2-2">
        <i class="el-icon-menu" />
        <template #title>
          收银订单
        </template>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template #title>
        <i class="el-icon-location" />
        <span>营销</span>
      </template>
    </el-submenu>
    <el-submenu index="4">
      <template #title>
        <i class="el-icon-location" />
        <span>设置</span>
      </template>
      <el-submenu index="/setting/permission">
        <template #title>
          <i class="el-icon-location" />
          <span>权限管理</span>
        </template>
        <el-menu-item index="/setting/permission/admin">
          <i class="el-icon-menu" />
          <template #title>
            管理员
          </template>
        </el-menu-item>
        <el-menu-item index="/setting/permission/role">
          <i class="el-icon-menu" />
          <template #title>
            角色
          </template>
        </el-menu-item>
        <el-menu-item index="/setting/permission/rule">
          <i class="el-icon-menu" />
          <template #title>
            规则
          </template>
        </el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="5">
      <template #title>
        <i class="el-icon-location" />
        <span>维护</span>
      </template>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
