<template>
  <div class="gpage-index">
    <header class="gpage-index__header">
      <div class="page-index-logo"></div>
      <div class="page-index-btn-group">
        <el-button>缩小</el-button>
        <el-button>方法</el-button>
        <el-button>关闭</el-button>
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