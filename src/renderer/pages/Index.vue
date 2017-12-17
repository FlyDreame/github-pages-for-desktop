<template>
  <div class="gpage-index">
    <header class="gpage-index__header">
      <div class="page-index-logo">
        <img src=""></img>
        <span>GPage</span>
      </div>
      <div class="page-index-btn-group">
        <el-button type="text"><i class="el-icon-minus"></i></el-button>
        <el-button type="text"><i class="icon icon-square"></i></el-button>
        <el-button type="text"><i class="el-icon-close"></i></el-button>
      </div>
    </header>
    <div class="gpage-index__main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<style scoped>

</style>