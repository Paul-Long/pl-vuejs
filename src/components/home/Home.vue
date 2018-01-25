<template>
  <div id="pv-home">
    <div style="display: flex; flex-direction: row;">
      <home-total style="width: 25%;" />
    </div>
    <home-line />
    <div style="display: flex; flex-direction: row;">
      <home-pie style="width: 50%" />
      <home-pie-o style="width: 50%" />
    </div>
    <home-bar />
    <div style="display: flex; flex-direction: row;">
      <home-bar-h style="width: 60%;" />
      <home-bar-v style="width: 40%;" />
    </div>
  </div>
</template>

<script>
  import HomeLine from './HomeLine';
  import HomeTotal from './HomeTotal';
  import HomePie from './HomePie';
  import HomePieO from './HomePieO';
  import HomeBar from './HomeBar';
  import HomeBarH from '@/components/home/HomeBarH';
  import HomeBarV from '@/components/home/HomeBarV';

  export default {
    components: {
      HomeBarV,
      HomeBarH,
      HomeBar,
      HomePieO,
      HomeTotal,
      HomePie,
      HomeLine
    },
    name: 'home'
  };
</script>

<style scoped>

</style>
