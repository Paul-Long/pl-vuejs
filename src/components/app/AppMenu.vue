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
        <pv-link index="1-1" title="Table 表格" to="table" />
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>Event</template>
        <pv-link index="2-1" title="事件监听传递" to="v-event" />
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-edit"></i>表单</template>
        <pv-link index="3-1" title="基础表单" to="pvb-form" />
        <pv-link index="3-2" title="行内表单" to="pvh-form" />
        <pv-link index="3-3" title="表单验证" to="pvv-form" />
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
