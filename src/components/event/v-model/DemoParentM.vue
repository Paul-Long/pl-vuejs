<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>通过 v-model 来进行双父子通信</span>
    </div>
    <demo-child v-model="value" :value="value" />
    <div>{{value}}</div>
  </el-card>
</template>

<script>
  import DemoChild from './DemoChild';

  export default {
    components: {DemoChild},
    name: "demo-parent-m",
    data() {
      return {value: '首次数据传递'}
    }
  }
</script>

<style scoped>

</style>
