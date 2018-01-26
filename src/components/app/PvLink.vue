<template>
  <router-link class="link" :to="to">
    <el-menu-item :index="index">
      {{title}}
    </el-menu-item>
  </router-link>
</template>

<script>
  export default {
    name: "pv-link",
    props: ['title', 'to', 'index']
  }
</script>

<style scoped>
  .link {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
