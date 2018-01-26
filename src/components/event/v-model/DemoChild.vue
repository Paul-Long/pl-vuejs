<template>
  <div>
    <div> child-value : {{value}}</div>
    <el-input v-bind:value="value" v-on:input="onInput" style="width: 200px;" />
  </div>
</template>

<script>
  export default {
    name: "demo-child",
    props: ['value'],
    methods: {
      onInput(value) {
        this.$emit('input', value);
      }
    }
  }
</script>

<style scoped>

</style>
