<template>
  <div>
    <el-button v-on:click.native="onAdd"><i class="el-icon-plus" /></el-button>
    <el-button v-on:click.native="onMinus"><i class="el-icon-minus" /></el-button>
    <div class="content">msg : {{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: "sync-demo",
    props: ['msg'],
    methods: {
      onAdd() {
        this.$emit('update:msg', this.msg + 1)
      },
      onMinus() {
        this.$emit('update:msg', this.msg - 1)
      }
    }
  }
</script>

<style scoped>
  .content {
    font-size: 28px;
    line-height: 1.5;
    padding-top: 30px;
  }
</style>
