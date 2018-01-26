<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>通过$on , $emit 来进行双向通信</span>
    </div>
    <child-demo :msg="msg" v-on:changeMsg="onChange" />
  </el-card>
</template>

<script>
  import ChildDemo from '@/components/event/v-emit/ChildDemo';

  export default {
    components: {ChildDemo},
    name: "demo-parent",
    data() {
      return {
        msg: 0
      }
    },
    methods: {
      onChange(msg) {
        this.msg = msg;
      }
    }
  }
</script>

<style scoped>

</style>
