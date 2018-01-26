<template>
  <div id="app-menu">
    <router-link to="/" style="width: 200px; height: 60px; background-color: #545c64; display: block">
      <img src="../../assets/logo.png" height="60" alt="">
    </router-link>
    <el-menu :default-openeds="['1', '3']"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             style="height: calc(100% - 60px); display: inline-block; text-align: left">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Data</template>
        <el-menu-item index="1-1">
          <router-link style="color: inherit;text-decoration: none;" to="table">Table 表格</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>Event</template>
        <el-menu-item index="2-1">
          <router-link style="color: inherit;text-decoration: none;" to="v-event">事件监听传递</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-edit"></i>表单</template>
        <el-menu-item index="3-1">
          <router-link style="color: inherit;text-decoration: none;" to="pvb-form">基础表单</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "app-menu"
  }
</script>

<style scoped>
  #app-menu {
    height: 100%;
    overflow: hidden;
  }
</style>
