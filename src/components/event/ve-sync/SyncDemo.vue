<template>
  <div>
    <el-button v-on:click.native="onClick">{{msg}}</el-button>
  </div>
</template>

<script>
  export default {
    name: "sync-demo",
    props: ['msg'],
    methods: {
      onClick() {
        this.$emit('update:msg', 'msg已更新')
      }
    }
  }
</script>

<style scoped>

</style>
