<template>
  <el-container>
    <el-scrollbar>
      <el-aside width="200px">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">文章</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    </el-scrollbar>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>

</style>