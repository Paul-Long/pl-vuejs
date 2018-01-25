<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>年代</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-bar position="year*sales" />
    </v-chart>
  </el-card>
</template>

<script>
  const data = [
    {year: '1951 年', sales: 38},
    {year: '1952 年', sales: 52},
    {year: '1956 年', sales: 61},
    {year: '1957 年', sales: 145},
    {year: '1958 年', sales: 48},
    {year: '1959 年', sales: 38},
    {year: '1960 年', sales: 38},
    {year: '1962 年', sales: 38},
  ];

  const scale = [{
    dataKey: 'sales',
    tickInterval: 20,
  }];
  export default {
    name: "home-bar-v",
    data() {
      return {
        data,
        scale,
        height: 400,
      };
    }
  }
</script>

<style scoped>

</style>
