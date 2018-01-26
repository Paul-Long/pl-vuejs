<template>
  <div>
    <el-button v-on:click.native="changePropsValue">加</el-button>
    <el-button v-on:click="onClear">clear</el-button>
    <div class="content">msg : {{msg}}</div>
  </div>
</template>

<script>
  export default {
    name: "child-demo",
    props: ['msg'],
    methods: {
      changePropsValue() {
        this.$emit('changeMsg', this.msg + 1)
      },
      onClear() {
        this.$emit('changeMsg', 0);
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
