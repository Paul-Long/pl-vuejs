<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>通过 v-model 来进行双父子通信</span>
    </div>
    <sync-demo :msg.sync="msg" />
  </el-card>
</template>

<script>
  import SyncDemo from '@/components/event/ve-sync/SyncDemo';

  export default {
    components: {SyncDemo},
    name: "ve-sync",
    data() {
      return {
        msg: '首次数据传递'
      }
    }
  }
</script>

<style scoped>

</style>
