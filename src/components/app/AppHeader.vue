<template>
  <div id="app-header">
    <el-dropdown>
      <span><i class="el-icon-setting" style="margin-right: 15px" />王小虎</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: "app-header"
  }
</script>

<style scoped>
  #app-header {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    font-size: 12px;
    line-height: 60px;
    border: 0;
  }
</style>
