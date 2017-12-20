<template>
  <div class="gpage-index">
    <header class="gpage-index__header">
      <div class="page-index-logo">
        <img src="">
        <span>GPage</span>
      </div>
      <div class="page-index-btn-group">
        <el-button type="text"><i class="el-icon-minus"/></el-button>
        <el-button type="text"><i class="icon icon-square"/></el-button>
        <el-button type="text"><i class="el-icon-close"/></el-button>
      </div>
    </header>
    <div class="gpage-index__main">
      <router-view/>
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
