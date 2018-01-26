<template>
  <router-link class="link" :to="to">{{title}}</router-link>
</template>

<script>
  export default {
    name: "pv-link",
    props: ['title', 'to']
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
