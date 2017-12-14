<template>
  <div class="gpage-index">
    <header class="gpage-index__header">
      <div class="page-index-logo">
        <img src=""></img>
        <span>GPage</span>
      </div>
      <div class="page-index-btn-group">
        <el-button type="primary"><i class="el-icon-minus"></i></el-button>
        <el-button type="primary"><i class="icon icon-square"></i></el-button>
        <el-button type="primary"><i class="el-icon-close"></i></el-button>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<style scoped>

</style>