<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>事例二</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :show-title="false" :data-key="'item*percent'" />
      <v-axis />
      <v-legend :data-key="'item'" />
      <v-pie :position="'percent'" :color="'item'" :v-style="pieStyle" :label="labelConfig" />
      <v-coord :type="'theta'" :radius="0.75" :inner-radius="0.6" />
    </v-chart>
  </el-card>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    {item: '事例一', count: 40},
    {item: '事例二', count: 21},
    {item: '事例三', count: 17},
    {item: '事例四', count: 13},
    {item: '事例五', count: 9}
  ];

  const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
  }];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  });
  const data = dv.rows;

  export default {
    name: "home-pie-o",
    data() {
      return {
        data,
        scale,
        height: 400,
        pieStyle: {
          stroke: "#fff",
          lineWidth: 1,
        },
        labelConfig: ['percent', {
          formatter: (val, item) => {
            return item.point.item + ': ' + val;
          }
        }],
      };
    }
  }
</script>

<style scoped>

</style>
