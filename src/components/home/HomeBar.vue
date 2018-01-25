<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>降雨量</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <v-chart :force-fit="true" :height="height" :data="data">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-bar position="月份*月均降雨量" color="name" :adjust="adjust" />
    </v-chart>
  </el-card>

</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    {
      name: 'London',
      'Jan.': 18.9,
      'Feb.': 28.8,
      'Mar.': 39.3,
      'Apr.': 81.4,
      'May': 47,
      'Jun.': 20.3,
      'Jul.': 24,
      'Aug.': 35.6
    },
    {
      name: 'Berlin',
      'Jan.': 12.4,
      'Feb.': 23.2,
      'Mar.': 34.5,
      'Apr.': 99.7,
      'May': 52.6,
      'Jun.': 35.5,
      'Jul.': 37.4,
      'Aug.': 42.4
    },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
    key: '月份',
    value: '月均降雨量',
  });
  const data = dv.rows;

  export default {
    name: "home-bar",
    data() {
      return {
        data,
        height: 400,
        adjust: [{
          type: 'dodge',
          marginRatio: 1 / 32,
        }],
      };
    }
  }
</script>

<style scoped>

</style>
