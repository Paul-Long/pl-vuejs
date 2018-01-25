<template>
  <div id="pv-home">
    <div style="display: flex; flex-direction: row;">
      <home-total style="width: 25%;"></home-total>
    </div>
    <home-line style="width: 50%;"></home-line>
  </div>
</template>

<script>
  import HomeLine from './HomeLine';
  import HomeTotal from '@/components/home/HomeTotal';

  export default {
    components: {
      HomeTotal,
      HomeLine
    },
    name: 'home'
  };
</script>

<style scoped>

</style>
