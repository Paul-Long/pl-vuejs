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
          <pv-link title="Table 表格" to="table" />
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>Event</template>
        <el-menu-item index="2-1">
          <pv-link title="事件监听传递" to="v-event" />
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-edit"></i>表单</template>
        <el-menu-item index="3-1">
          <pv-link title="基础表单" to="pvb-form" />
        </el-menu-item>
        <el-menu-item index="3-2">
          <pv-link title="行内表单" to="pvh-form" />
        </el-menu-item>
        <el-menu-item index="3-3">
          <pv-link title="表单验证" to="pvv-form" />
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import PvLink from '@/components/app/PvLink';

  export default {
    components: {PvLink},
    name: "app-menu"
  }
</script>

<style scoped>
  #app-menu {
    height: 100%;
    overflow: hidden;
  }
</style>
