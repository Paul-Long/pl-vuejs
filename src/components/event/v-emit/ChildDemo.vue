<template>
  <div>
    <div>{{msg}}</div>
    <el-button v-on:click.native="changePropsValue">demo</el-button>
  </div>
</template>

<script>
  export default {
    name: "child-demo",
    props: ['msg'],
    methods: {
      changePropsValue() {
        this.$emit('changeMsg', '通过$emit触发事件了')
      }
    }
  }
</script>

<style scoped>

</style>
